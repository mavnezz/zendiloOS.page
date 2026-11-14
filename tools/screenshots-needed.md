# Screenshots: taken, and still needed

## How they are taken

From a zendiloOS test machine through `tools/shoot.mjs` (its header says
how to start the browser and which steps there are):

- the window alone at twice the resolution (a window of 1032 × 760 CSS
  pixels gives 2064 × 1520), over the default wallpaper (Aurora, set by the
  step's `css` for the shot only, not in the account), its corners cut out
  transparent along the window's own radius;
- each view twice, `<name>-light.webp` and `<name>-dark.webp`, through
  `{"scheme": "light"}` and `{"scheme": "dark"}`, with the same data and no
  notifications or toasts open;
- the browser started at 1440 × 900 with `--force-device-scale-factor=2`,
  never resized by a step: the desktop fits its windows into the viewport;
- nothing private: no real addresses beyond the test machine's, no real
  e-mail addresses, cloud accounts or host keys.

Where `src/page.mjs` names a pair of images (`AREAS`, `TOUR_IMAGES`), the
second stands in front of the first, smaller, bottom right. Each image's
alt text is in `shots` of both `src/i18n` files.

## Taken from 0.5.0 (test VM 2, 2026-11-14)

With the look of 0.5.0: solid windows, the display face in titles, the
monospaced one in names, quiet states.

| Image | View | Demo data |
| --- | --- | --- |
| `hero` | the desktop, Files on `documents` in the list view, 900 × 738 at 112, 36 so the widgets stay beside it | as the machine is; notifications marked read |
| `files` | Files, the share `documents` in the grid view | as the machine is |
| `disks` | Control panel → Disks | as the machine is |
| `pool-wizard` | Control panel → Pools → New pool, step 1 | the two free disks chosen, Mirror; cancelled, nothing made |
| `apps` | Apps → All apps | as the machine is |
| `docker` | Docker → Containers | as the machine is: Homarr, Uptime Kuma, notes |
| `updates` | Control panel → Updates | as the machine is: 0.5.0 from the stable channel, right after its update and a restart |

A window is given its place and size through `zendiloos.desktop.<account>`
in the browser's storage before the page is loaded, which also opens it on
the page wanted, so no shot depends on where a window was left.

## Still with the look of 0.5.0~rc.1 (test VM 2, 2026-11-12)

These need their demo data made anew, and removed again afterwards.

| Image | View | Demo data |
| --- | --- | --- |
| `vms` | Virtual machines → Machines | VMs `web` (running the Alpine ISO), `windows11` (TPM, Secure Boot, two disks), `homeassistant`, beside the machine's own `alpine` |
| `vm-console` | the console of `web` | `top` after signing in as root |
| `backup` | Backup → Tasks | share `backups` on `apps`, a USB drive `BACKUP` (an ext4 image plugged in through `vm.sh removable-attach`), three tasks run once |
| `backup-restore` | Backup → Restore | the media task's version, only `Movies` chosen |
| `config-backup` | Control panel → Configuration backup | weekly on Sunday at 03:00 into `backups/nas-config`, keep 7, run once |
| `shares` | Files → `documents` → Properties → Permissions (from 0.2.0) | groups `family` and `guests`, accounts Anna and Ben Berger |

## Still needed

### Network with a bridge: `network`

For the features page's "Network" section.

- **View:** Control panel → *Network*, the list of interfaces and devices.
- **Data:** a bridge `br0` with the first card as its member, DHCP keeping
  the NAS's address; a bond `bond0` of two spare cards in active-backup; a
  VLAN 20 on the bridge without an address. The test VM needs spare cards
  for this (`ZENDILOOS_VM_EXTRA_NICS`), as `vm-network-bridge-test` sets it
  up; a throwaway VM, since a bridge over the card the browser comes
  through cuts the connection for a moment.
- **Worth taking as well:** the same page right after a change, with the
  banner that asks to keep the settings and counts down the two minutes.
- Then `AREAS.network.shots` in `src/page.mjs` and its alt text in `shots`.
