// Takes the screenshots of assets/img from a zendiloOS test machine, through
// a headless Chromium's DevTools protocol. Start the browser first:
//
//   chrome-headless-shell --headless --no-sandbox --remote-debugging-port=9333 \
//     --ignore-certificate-errors --hide-scrollbars --window-size=1440,900 \
//     --force-device-scale-factor=2 about:blank
//
// The window size and scale belong to the browser rather than to a step:
// the desktop fits its windows into the viewport, and one that changes (as
// an override does when a run ends) moves and shrinks them.
//
// then run steps from a JSON file (Node 22 or newer, for its WebSocket):
//
//   node tools/shoot.mjs 9333 steps.json
//
// Steps, in order:
//   {"size": [w, h, scale]}     the viewport in CSS pixels; scale 2 for the page
//   {"scheme": "light"|"dark"}  prefers-color-scheme
//   {"go": url}                 open an address and wait for it
//   {"eval": js}                run JavaScript in the page (await allowed); its
//                               value is printed
//   {"wait": ms}
//   {"click": [x, y]}           a mouse click at CSS pixels
//   {"type": text}              typed key by key ("\n" is Enter)
//   {"shot": path}              the viewport, PNG or WebP by the name's ending
//   {"shot": path, "of": selector, "quality": 90, "css": "…"}
//                               only that element, over what lies behind it
//                               (the wallpaper; "css" may set it for the
//                               shot), its corners cut out transparent along
//                               its own radius; a .webp at that quality (90
//                               if not given), with its alpha channel
// Keep the steps (they hold the test machine's password) out of the repository.
import { readFileSync, writeFileSync } from 'node:fs'

const [port, file] = process.argv.slice(2)
const steps = JSON.parse(readFileSync(file, 'utf8'))
const targets = await (await fetch(`http://127.0.0.1:${port}/json/list`)).json()
const page = targets.find((t) => t.type === 'page')
const socket = new WebSocket(page.webSocketDebuggerUrl)
await new Promise((resolve) => socket.addEventListener('open', resolve))
let id = 0
const pending = new Map()
socket.addEventListener('message', (event) => {
  const message = JSON.parse(event.data)
  if (message.id && pending.has(message.id)) {
    pending.get(message.id)(message)
    pending.delete(message.id)
  }
})
const send = (method, params = {}) =>
  new Promise((resolve, reject) => {
    const n = ++id
    pending.set(n, (m) => (m.error ? reject(new Error(`${method}: ${m.error.message}`)) : resolve(m.result)))
    socket.send(JSON.stringify({ id: n, method, params }))
  })
const sleep = (ms) => new Promise((r) => setTimeout(r, ms))
const evaluate = async (expression) => {
  const answer = await send('Runtime.evaluate', {
    expression: `(async () => { ${expression} })()`,
    awaitPromise: true,
    returnByValue: true,
  })
  if (answer.exceptionDetails) throw new Error(answer.exceptionDetails.exception?.description ?? 'eval failed')
  return answer.result?.value
}

// A screenshot's PNG made into the file: in a blank tab of the same browser,
// whose canvas cuts the corners out along the radius (transparent, as the
// window's own corners are) and encodes WebP with its alpha channel, which
// the screenshot's own WebP would drop.
const encode = async (png, { format, quality, radius }) => {
  const tab = await (await fetch(`http://127.0.0.1:${port}/json/new?about:blank`, { method: 'PUT' })).json()
  const ws = new WebSocket(tab.webSocketDebuggerUrl)
  await new Promise((resolve) => ws.addEventListener('open', resolve))
  const answer = await new Promise((resolve) => {
    ws.addEventListener('message', (event) => resolve(JSON.parse(event.data)))
    ws.send(JSON.stringify({
      id: 1,
      method: 'Runtime.evaluate',
      params: {
        awaitPromise: true,
        returnByValue: true,
        expression: `(async () => {
          const img = new Image()
          img.src = 'data:image/png;base64,${png.toString('base64')}'
          await img.decode()
          const canvas = document.createElement('canvas')
          canvas.width = img.naturalWidth
          canvas.height = img.naturalHeight
          const g = canvas.getContext('2d')
          g.beginPath()
          g.roundRect(0, 0, canvas.width, canvas.height, ${radius})
          g.clip()
          g.drawImage(img, 0, 0)
          const type = ${JSON.stringify(format === 'png' ? 'image/png' : 'image/webp')}
          const blob = await new Promise((r) => canvas.toBlob(r, type, ${quality / 100}))
          const bytes = new Uint8Array(await blob.arrayBuffer())
          let text = ''
          for (let i = 0; i < bytes.length; i += 0x8000) text += String.fromCharCode(...bytes.subarray(i, i + 0x8000))
          return btoa(text)
        })()`,
      },
    }))
  })
  ws.close()
  await fetch(`http://127.0.0.1:${port}/json/close/${tab.id}`)
  if (!answer.result?.result?.value) throw new Error('encode: ' + JSON.stringify(answer).slice(0, 300))
  return Buffer.from(answer.result.result.value, 'base64')
}

// Punctuation needs its key's code, and shifted ones the modifier.
const PUNCT = {
  '-': ['Minus', 189, 0], '.': ['Period', 190, 0], '/': ['Slash', 191, 0], ' ': ['Space', 32, 0],
  ':': ['Semicolon', 186, 8], ';': ['Semicolon', 186, 0], '@': ['Digit2', 50, 8], '_': ['Minus', 189, 8],
  '?': ['Slash', 191, 8], '=': ['Equal', 187, 0], ',': ['Comma', 188, 0],
}
let metrics = { width: 1440, height: 900, deviceScaleFactor: 1, mobile: false }

await send('Page.enable')
await send('Runtime.enable')
metrics.deviceScaleFactor = (await evaluate('return window.devicePixelRatio')) ?? 1
for (const step of steps) {
  if (step.size) {
    const [width, height, deviceScaleFactor = 1] = step.size
    metrics = { width, height, deviceScaleFactor, mobile: false }
    await send('Emulation.setDeviceMetricsOverride', metrics)
  } else if (step.scheme) {
    await send('Emulation.setEmulatedMedia', { features: [{ name: 'prefers-color-scheme', value: step.scheme }] })
  } else if (step.go) {
    await send('Page.navigate', { url: step.go })
    await sleep(2500)
  } else if (step.eval) {
    const value = await evaluate(step.eval)
    if (value !== undefined) console.log('eval:', typeof value === 'string' ? value : JSON.stringify(value))
  } else if (step.click) {
    const [x, y] = step.click
    for (const type of ['mousePressed', 'mouseReleased']) {
      await send('Input.dispatchMouseEvent', { type, x, y, button: 'left', clickCount: 1 })
    }
  } else if (step.type !== undefined) {
    for (const ch of step.type) {
      const enter = ch === '\n'
      const [code, keyCode, modifiers] = enter
        ? ['Enter', 13, 0]
        : (PUNCT[ch] ??
          (/[a-z]/i.test(ch)
            ? [`Key${ch.toUpperCase()}`, ch.toUpperCase().charCodeAt(0), ch === ch.toUpperCase() ? 8 : 0]
            : /[0-9]/.test(ch)
              ? [`Digit${ch}`, ch.charCodeAt(0), 0]
              : ['', 0, 0]))
      const base = { key: enter ? 'Enter' : ch, code, windowsVirtualKeyCode: keyCode, nativeVirtualKeyCode: keyCode, modifiers }
      await send('Input.dispatchKeyEvent', { type: 'keyDown', ...base, text: enter ? '\r' : ch })
      await send('Input.dispatchKeyEvent', { type: 'keyUp', ...base })
      await sleep(30)
    }
  } else if (step.wait) {
    await sleep(step.wait)
  } else if (step.shot) {
    const format = step.shot.endsWith('.png') ? 'png' : 'webp'
    const params = { format, ...(format === 'webp' ? { quality: step.quality ?? 90 } : {}) }
    if (step.of) {
      // The element alone: everything beside it and its ancestors hidden,
      // what lies behind it (the wallpaper) kept, as the desktop shows a
      // window; its corners cut out afterwards along its own radius. Marked
      // by attributes and a style sheet of its own (plus the step's "css"),
      // so the page's inline styles (a window's place and size) stay as
      // they are.
      const shape = await evaluate(`
        const el = document.querySelector(${JSON.stringify(step.of)})
        if (!el) return null
        for (let e = el.parentElement; e; e = e.parentElement) e.setAttribute('data-shot-keep', '')
        for (const e of document.querySelectorAll('body *')) {
          if (e === el || el.contains(e) || e.hasAttribute('data-shot-keep')) continue
          if (e.parentElement && !e.parentElement.hasAttribute('data-shot-keep')) continue
          e.setAttribute('data-shot-hide', '')
        }
        const css = document.createElement('style')
        css.id = 'shot-style'
        css.textContent = '[data-shot-hide]{visibility:hidden!important}' + ${JSON.stringify(step.css ?? '')}
        document.head.append(css)
        const r = el.getBoundingClientRect()
        return { x: r.x, y: r.y, width: r.width, height: r.height, radius: parseFloat(getComputedStyle(el).borderTopLeftRadius) || 0 }`)
      if (!shape) throw new Error(`${step.of}: not on the page`)
      await sleep(step.settle ?? 600)
      const { radius, ...rect } = shape
      const answer = await send('Page.captureScreenshot', { format: 'png', clip: { ...rect, scale: 1 } })
      await evaluate(`
        document.getElementById('shot-style')?.remove()
        for (const a of ['data-shot-keep', 'data-shot-hide'])
          for (const e of document.querySelectorAll('[' + a + ']')) e.removeAttribute(a)`)
      const image = await encode(Buffer.from(answer.data, 'base64'), {
        format,
        quality: step.quality ?? 90,
        radius: radius * metrics.deviceScaleFactor,
      })
      writeFileSync(step.shot, image)
      console.log('shot:', step.shot, `${Math.round(rect.width * metrics.deviceScaleFactor)}x${Math.round(rect.height * metrics.deviceScaleFactor)}`)
    } else {
      const answer = await send('Page.captureScreenshot', params)
      writeFileSync(step.shot, Buffer.from(answer.data, 'base64'))
      console.log('shot:', step.shot)
    }
  }
}
socket.close()
