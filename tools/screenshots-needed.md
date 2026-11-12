# Screenshots still needed

The page has no pictures yet of what came with 0.5.0~rc.1. These are the
ones to take, from a zendiloOS test machine with the test release, as the
existing ones were made (README, "Screenshots"):

- the window alone at twice the resolution (a window of 1032 × 760 CSS
  pixels gives 2064 × 1520, as `disks`, `docker` and `updates`), with
  transparent rounded corners;
- each view twice, `<name>-light.webp` and `<name>-dark.webp`, with the
  same data, the desktop's default accent and no notifications or toasts
  open;
- the same demo data as the existing shots (the pool `tank` as a mirror,
  the groups `family` and `guests`, the shares `documents` and `photos`),
  plus a second pool where a view below asks for one (called `apps` here,
  a single disk is enough);
- nothing private: no real addresses beyond 192.168.1.x, no real e-mail
  addresses, cloud accounts or host keys.

Where a section of `src/page.mjs` names a pair of images (`AREAS`, the
tour's `TOUR_IMAGES`), the second goes in front of the first, smaller,
bottom right; such a pair needs a second, smaller window (about 1100 ×
680 CSS pixels, as `files`).

## 1. Virtual machines: `vms` (and `vm-console`)

For the features page's "Virtual machines" section, and a tour row on the
home page once the test release is the stable one.

- **View:** the Virtual machines app, page *Machines*, every VM's card
  visible; the header with how many run, their CPU and their memory
  against the NAS's.
- **Data:**
  - `debian-web`: Linux preset, 2 vCPUs, 2 GiB, one disk of 32 GiB on
    `tank`, one card on the bridge `br0`; running, with some load (an
    `apt upgrade` or `stress-ng --cpu 1` inside, so the bars move off zero).
  - `windows11`: Windows preset, 4 vCPUs, 8 GiB, UEFI with TPM and Secure
    Boot, two disks (64 GiB system, 100 GiB data on `apps`); running,
    idle at the desktop.
  - `homeassistant`: Linux preset, 2 vCPUs, 4 GiB, one disk; stopped,
    autostart on, with a daily snapshot schedule.
  - The image library holding `debian-13.2.0-amd64-netinst.iso`, a
    Windows 11 ISO and `virtio-win.iso`.
- **Second, smaller (optional):** `vm-console`, the console window of
  `debian-web` at its login prompt or `htop`, to stand in front.
- The machine needs KVM; nested KVM in the test VM is enough, as
  `vm-vms-test` uses it.

## 2. Backup: `backup` (and `backup-restore`)

For the features page's "Backups" section.

- **View:** the Backup app, page *Tasks*, all tasks with their last run
  and next run visible.
- **Data** (each run at least once, all successful except where said):
  - `Photos to USB drive`: from the share `photos` to a USB drive
    `backup-usb` (ext4), versions, kept 10 and 90 days, started when the
    drive is plugged in.
  - `Documents to the office`: from `documents` to an rsync server over
    SSH (`backup.example.org`, host key pinned), versions, daily at 02:00,
    encrypted.
  - `Documents mirror`: from `documents` on `tank` to a folder of a share
    on `apps`, a mirror keeping deleted files 14 days, hourly.
  - `Photos to OneDrive`: from `photos` to OneDrive, encrypted, weekly.
    It needs a signed-in account: if there is no test account, leave this
    task out rather than faking one.
  - One run of `Documents to the office` partial (a file vanished
    during the run), so the list shows that state too.
- **Second, smaller (optional):** `backup-restore`, page *Restore* with
  the versions of `Photos to USB drive` and a few folders picked.

## 3. Network with a bridge: `network`

For the features page's "Network" section.

- **View:** Control panel → *Network*, the list of interfaces and devices.
- **Data:** a bridge `br0` with the first card `enp1s0` as its member,
  DHCP keeping the NAS's address 192.168.1.20; a bond `bond0` of two
  spare cards in active-backup; a VLAN 20 (`br0.20` or `vlan20`) on the
  bridge without an address. The test VM needs spare cards for this
  (`ZENDILOOS_VM_EXTRA_NICS`), as `vm-network-bridge-test` sets it up.
- **Variant worth taking as well:** the same page right after a change,
  with the banner that asks to keep the settings and counts down the two
  minutes; it shows the confirmation better than words do.
- Take it on a throwaway VM (VM 3): a bridge over the card the browser
  comes through cuts the connection for a moment.

## 4. Configuration backup: `config-backup` (and `config-restore`)

For the features page's "Updates and recovery" section.

- **View:** Control panel → *Configuration backup*: the plan and its last
  run, the button to download one now.
- **Data:** the plan weekly, Sunday at 03:00, into the share `backups`,
  folder `nas-config`, keeping 7; at least one run done successfully, so
  the page shows its time and file name.
- **Second, smaller (optional):** `config-restore`, the first setup of a
  fresh installation with *Restore a configuration backup* chosen, a file
  picked and the passphrase field filled (dots); or, after a restore, the
  Storage page offering the old installation's pool `tank` to import.
  `vm-pool-import-test`'s steps lead there (VM 3, `vm.sh reinstall`).

## Optional, to bring existing shots up to date

- `disks` → the *New pool* wizard, step 1, with four free disks, two
  chosen and the mirror card picked (space, speed and protection shown).
- `files` → the file explorer in the grid view with the toolbar, in the
  `photos` share with a few image files.
- `updates` → *Updates* on 0.5.0~rc.1 on the test channel, with the line
  saying which kernel starts next. The current shot shows 0.2.0; its alt
  text says so, and has to change with it.

When they are in `assets/img/`, `node build.mjs` picks up their sizes;
`AREAS` in `src/page.mjs` names which section shows which image, and each
image needs an alt text in both `src/i18n` files.
