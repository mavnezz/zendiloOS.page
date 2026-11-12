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

## Taken from 0.5.0~rc.1 (test VM 2, 2026-11-12)

| Image | View | Demo data, removed again afterwards |
| --- | --- | --- |
| `vms` | Virtual machines → Machines | VMs `web` (running the Alpine ISO), `windows11` (TPM, Secure Boot, two disks), `homeassistant`, beside the machine's own `alpine` |
| `vm-console` | the console of `web` | `top` after signing in as root |
| `backup` | Backup → Tasks | share `backups` on `apps`, a USB drive `BACKUP` (an ext4 image plugged in through `vm.sh removable-attach`), three tasks run once |
| `backup-restore` | Backup → Restore | the media task's version, only `Movies` chosen |
| `config-backup` | Control panel → Configuration backup | weekly on Sunday at 03:00 into `backups/nas-config`, keep 7, run once |
| `pool-wizard` | Control panel → Pools → New pool, step 1 | the two free disks chosen; cancelled, nothing made |
| `disks` | Control panel → Disks | as the machine is |
| `files` | Files, the share `documents` in the grid view | as the machine is |
| `updates` | Control panel → Updates | as the machine is: 0.5.0~rc.1, a newer kernel without ZFS kept from starting |

In 0.5.0~rc.1 the Backup app's name is missing from the interface's
translations (`apps.backup` on the desktop and in its title bar); the shots
show the title as it will read once that is fixed ("Backup").

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

### Older shots, from 0.2.0

`hero`, `shares` (a folder's properties), `apps` and `docker` still show
0.2.0. They are not wrong, but the desktop and the windows have changed a
little since; take them anew with the next round.
