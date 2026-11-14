// [[next]] marks what is only in the test release (a badge while there is
// one), [[preview]] a preview, and text in {{ }} is there only while there
// is a test release; {nextVersion}, {next}, {nextIsoAmd64}, {nextIsoArm64},
// {nextDebAmd64} and {nextDebArm64} are the test release's version, page,
// ISOs and packages (build.mjs), {repo} the repository, {features} the page
// of features in detail.
export default {
  lang: 'en',
  locale: 'en_US',
  title: 'zendiloOS: a NAS you run from your browser',
  description:
    'zendiloOS turns Debian 13 into a NAS with ZFS storage, folders shared over SMB and NFS, an App Center for Docker apps, two-factor sign-in, a firewall and signed updates, all from a desktop in your browser. Free and open source.',
  tourLabel: 'A tour of zendiloOS',

  badges: { next: 'Test release', preview: 'Preview' },

  nav: {
    label: 'Main',
    skip: 'Skip to content',
    features: 'Features',
    security: 'Security',
    apps: 'Apps',
    install: 'Install',
    faq: 'FAQ',
    language: 'Language',
    menu: 'Menu',
  },

  hero: {
    pill: 'Free and open source',
    release: 'zendiloOS {version} is out',
    title: 'The open-source NAS, no <em>strings attached</em>.',
    lead: 'No account, no subscription, no telemetry. zendiloOS turns a plain Debian 13 into a NAS you run from the browser: ZFS for your data, shared folders for every device in the house, apps as Docker projects of your own and updates with a click.',
    download: 'Download the ISO',
    github: 'View on GitHub',
    meta: 'For x86-64 computers · Debian 13 underneath · Apache-2.0',
    downloadMeta: 'Version {version} · {size} · x86-64 · Apache-2.0',
    arm64: 'ISO for arm64',
    next: {
      link: 'Try the test release {nextVersion}',
      text: 'Virtual machines, backups, bridges and bonds, arm64. For trying out, not yet for data you would miss.',
      isoAmd64: 'ISO for x86-64',
      isoArm64: 'ISO for arm64',
    },
    alt: 'The zendiloOS desktop in a browser: the file explorer shows the documents folder, widgets beside it show the system status, resources, network and storage.',
  },

  zeros: {
    label: 'What zendiloOS does not ask of you',
    items: [
      ['0', 'accounts'],
      ['0', 'subscriptions'],
      ['0', 'bytes of telemetry'],
      ['100\u00a0%', 'open source'],
    ],
  },

  builtOn: { title: 'Built on open source you already trust' },

  features: {
    eyebrow: 'Features',
    title: 'Everything a NAS needs, in one desktop.',
    lead: 'Storage, shared folders, apps and the system around them, with windows, a dock and widgets you already know how to use.',
    legend: '[[next]] only in {nextVersion}, not yet in the stable release',
    more: 'Every feature in detail',
    items: [
      {
        id: 'storage',
        title: 'Storage on ZFS',
        text: 'Pools from a single disk up to RAIDZ3, with guard rails that explain what each layout survives, and each disk shown in its bay.',
      },
      {
        id: 'shares',
        title: 'Shared folders',
        text: 'Folders on a volume, shared over SMB for Windows and macOS and NFS for Linux, with access for each person and group.',
      },
      {
        id: 'snapshots',
        title: 'Snapshots',
        text: 'Snapshots that Windows shows as previous versions, and one recycle bin for all folders.',
      },
      {
        id: 'files',
        title: 'File explorer',
        text: 'A tree of your folders, drag and drop, a search through every subfolder, and USB drives to copy from and to.',
      },
      {
        id: 'apps',
        title: 'App Center',
        text: 'Apps from a community catalog, installed as Docker projects of your own that you can change.',
      },
      {
        id: 'docker',
        title: 'Docker',
        text: 'Containers, images, networks and Compose projects, with live logs, a terminal, image updates and backups of volumes.',
      },
      {
        id: 'vms',
        marks: ['preview', 'next'],
        title: 'Virtual machines',
        text: 'VMs with several disks and network cards, a console in the browser, snapshots and backups, and a TPM and Secure Boot for Windows 11.',
      },
      {
        id: 'backup',
        marks: ['next'],
        title: 'Backups',
        text: 'Shares copied to another pool, a USB drive, an rsync server, Google Drive or OneDrive, optionally encrypted, and the configuration backed up for a fresh start.',
      },
      {
        id: 'network',
        marks: ['next'],
        title: 'Network',
        text: 'Addresses, bridges, bonds and VLANs, each change kept only once you confirm it, and changes made outside zendiloOS noticed.',
      },
      {
        id: 'updates',
        title: 'Signed updates',
        text: 'Debian and zendiloOS in one place, from the channel you choose, every release signed.',
      },
      {
        id: 'security',
        title: 'Security',
        text: 'Two-factor sign-in, a firewall, certificates from Let’s Encrypt, limits on failed sign-ins and SSH that switches itself off.',
      },
      {
        id: 'monitor',
        title: 'Monitoring',
        text: 'Processor, memory, network and disks over time, and notifications by e-mail or webhook before trouble grows.',
      },
    ],
  },

  // The screenshots' alt texts (assets/img), by image.
  shots: {
    disks: 'The disks page of the control panel: a note that the pool apps has no redundancy, and the NAS drawn with each disk in its bay, with its model, size, temperature and pool.',
    'pool-wizard': 'The new pool wizard: two disks chosen, and a mirror of them with about 8 GiB usable, twice the read speed and one disk that may fail.',
    shares: 'The properties of the documents folder: the family group may read and write, guests may read.',
    files: 'The file explorer in the browser, showing the documents folder as a grid of folders and files.',
    apps: 'The App Center with apps such as AdGuard Home, Immich, Jellyfin and Home Assistant.',
    docker: 'The containers in the Docker app: Homarr and Uptime Kuma running and healthy, an update available for Homarr.',
    vms: 'The Virtual machines app: four VMs, one of them running with its processor and memory load, and above them how many run and what they take of the NAS.',
    'vm-console': 'The console of a running VM in the browser, showing top in Alpine Linux.',
    backup: 'The tasks of the Backup app: the documents mirrored into another share every hour, versions of the media and, encrypted, of the documents on a USB drive, each with its last run.',
    'backup-restore': 'Restoring from a backup: a version of the media picked, and only the Movies folder chosen.',
    updates: 'Updates in the control panel: zendiloOS 0.5.0 installed from the stable channel, the steps of the last update done, and everything current.',
    'config-backup': 'The configuration backup in the control panel: weekly on Sunday at 03:00 into the share backups, the newest 7 kept, and the last backup’s file.',
  },

  tour: [
    {
      id: 'storage',
      eyebrow: 'Storage',
      title: 'Your data on ZFS, with guard rails.',
      text: 'Build pools from mirrors up to RAIDZ3 in a few clicks. zendiloOS tells you what each layout survives, warns when a pool has no redundancy left and keeps an eye on every disk.',
      checks: [
        'SMART values and self-tests on a schedule',
        'Scrubs that find silent errors before they spread',
        'Your NAS drawn with each disk in its bay, and a disk that blinks to be found',
        'A wizard that estimates the space and protection of each layout [[next]]',
      ],
    },
    {
      id: 'shares',
      eyebrow: 'Files and folders',
      title: 'A shared folder for every device in the house.',
      text: 'Every folder on a volume can be shared, and you decide who may read or write. Windows and macOS find it over SMB, Linux mounts it over NFS, and everyone gets to their files in the browser too, in one explorer.',
      checks: [
        'Access for each person and group, held alike by SMB, NFS and the explorer',
        'Previous versions from snapshots, one recycle bin for all folders',
        'USB drives in the explorer, to copy from and eject',
        'Files as a list or a grid, with a toolbar of what you can do [[next]]',
      ],
    },
    {
      id: 'apps',
      eyebrow: 'App Center',
      title: 'Apps in a click, and yours to change.',
      text: 'Pick an app from the community catalog or add a catalog of your own. You choose its folder, ports and settings and see the finished compose.yaml before it starts; from then on it is an ordinary Docker project of yours. Whatever reaches beyond its container, such as a device or the Docker socket, needs your consent.',
      checks: [
        'Choose the folders and ports an app uses',
        'Passwords and keys generated for you',
        'Edit, redeploy and update it like any project',
      ],
    },
    {
      id: 'docker',
      eyebrow: 'Docker',
      title: 'Docker, when you want the details.',
      text: 'Docker is a plugin of the App Center: install it with a click when you need it, then follow your containers, images, networks and logs, or run Compose projects of your own.',
      checks: [
        'A page for every container, with its live log and a terminal',
        'Containers with a newer image marked and updated from the list',
        'Volumes backed up into a shared folder on a schedule, and restored',
        'Docker from Debian’s own packages',
      ],
    },
    {
      id: 'vms',
      marks: ['preview', 'next'],
      eyebrow: 'Virtual machines',
      title: 'Virtual machines beside your data.',
      text: 'Install the Virtual machines plugin from the App Center and run Linux or Windows next to your shares, their disks on your pools. Each VM opens its console in the browser, takes snapshots of all its disks at once and is backed up into a share or onto a USB drive. A preview, on x86-64.',
      checks: [
        'Several disks and network cards, ISOs from an image library',
        'A TPM and Secure Boot for Windows 11',
        'USB and PCI devices of the host handed to a VM',
      ],
    },
    {
      id: 'backup',
      marks: ['next'],
      eyebrow: 'Backup',
      title: 'A second copy, somewhere else.',
      text: 'The Backup app copies your shares to another pool, a USB drive, an rsync server or a cloud, on a schedule or as soon as the drive is plugged in. Restore a whole version or only the folders you pick, back where they came from or somewhere else.',
      checks: [
        'Mirrors, or dated versions kept by number and age',
        'Names and contents encrypted if you like',
        'Every run logged, a failed one notified',
      ],
    },
    {
      id: 'updates',
      eyebrow: 'Updates',
      title: 'Updates without surprises.',
      text: 'Once a day zendiloOS looks for updates: Debian’s packages and new releases of zendiloOS itself. You decide when to install them, and the NAS only restarts when you say so.',
      checks: [
        'Stable, test or development: the channel is yours to choose',
        'Every release signed and verified before it is installed',
        'ZFS checked against a new kernel before you restart',
        'A kernel without its ZFS module never started: GRUB keeps one that has it [[next]]',
      ],
    },
  ],

  security: {
    eyebrow: 'Security',
    title: 'Secure by design, not as an afterthought.',
    lead: 'The web interface runs without privileges. Everything that changes the system goes through one small, sandboxed agent, which checks each request against strict rules before anything happens.',
    nodes: [
      { title: 'Your browser', text: 'HTTPS, TLS 1.2 or newer' },
      { title: 'zendiloosd', text: 'Interface and API, without privileges' },
      { title: 'zendiloos-agent', text: 'Small, sandboxed, checks every request' },
      { title: 'Debian', text: 'ZFS, Samba, NFS, Docker' },
    ],
    cards: [
      { title: 'Sign-in limits', text: 'Too many failed attempts block the address for a while.' },
      { title: 'Two-factor sign-in', text: 'A code from an authenticator app, and recovery codes for a lost phone.' },
      { title: 'Sessions in view', text: 'See where you are signed in and end any session.' },
      { title: 'Firewall', text: 'Decide who reaches which service, Docker’s published ports included.' },
      { title: 'SSH on demand', text: 'Turn SSH on for a quick job; it switches itself off again.' },
      { title: 'Signed releases', text: 'An update is only installed with a valid signature.' },
    ],
  },

  apps: {
    eyebrow: 'Apps',
    title: 'Bring the apps you love.',
    lead: 'Media servers, photo libraries, home automation, ad blockers and more come from the community catalog. Add a catalog of your own and its apps sit right beside them.',
    link: 'Browse the community catalog',
  },

  install: {
    eyebrow: 'Install',
    title: 'Up and running in four steps.',
    lead: 'The installer is Debian’s own, with the answers filled in. It asks six questions and sets up the rest.',
    steps: [
      { title: 'Download', text: 'Get the installation ISO of the newest release, for <a href="{iso}">x86-64</a> or <a href="{isoArm64}">arm64</a>.' },
      { title: 'Write', text: 'Put it on a USB stick with a tool such as balenaEtcher, Rufus or dd.' },
      {
        title: 'Install',
        text: 'Start the computer from the stick and choose <b>Install zendiloOS</b>. Answer language, location, keyboard, name, root’s password and the disk for the system.',
      },
      {
        title: 'Set up',
        text: 'After the restart the screen shows the address. Open it in a browser on your network and create the first administrator right away: whoever comes first sets the NAS up.',
      },
    ],
    needTitle: 'What you need',
    need: [
      'An x86-64 computer: a NAS, a mini PC or one of your own',
      'Or an arm64 board that starts a USB stick through UEFI{{, installed from the test release’s ISO}} [[next]]',
      'A disk for the system, one or more for your data',
      'A network connection: the packages come from Debian’s mirror',
    ],
    needMore: 'Hardware in detail',
    note: 'zendiloOS is young: it is tested in virtual machines, and on real hardware it has run only on one small x86-64 board, for a few days. Try it on hardware whose disks hold nothing you would miss.',
    debianTitle: 'Already running Debian 13?',
    debianText:
      'Install the package from the <a href="{releases}">newest release</a>. ZFS comes from Debian’s <code>contrib</code> and is built for your kernel.',
    terminal: 'Terminal',
    copy: 'Copy',
    copied: 'Copied',
  },

  values: {
    eyebrow: 'Open source',
    title: 'Your NAS, and nobody else’s.',
    items: [
      {
        title: 'No account, no cloud',
        text: 'zendiloOS needs no account and collects no telemetry. It talks to Debian’s mirror, to GitHub for its releases, and to the catalogs and registries your apps come from.',
      },
      {
        title: 'Debian underneath',
        text: 'zendiloOS is a package on an ordinary Debian 13. Remove it, and your pools, shares and data stay where they are.',
      },
      {
        title: 'Open for good',
        text: 'Licensed under Apache-2.0 and developed in the open. Read the code, report a problem, send a pull request.',
      },
    ],
  },

  faq: {
    eyebrow: 'FAQ',
    title: 'Questions and answers',
    more: 'Something missing? <a href="{issues}">Ask on GitHub</a>.',
    items: [
      {
        q: 'What does zendiloOS cost?',
        a: 'Nothing. zendiloOS is free and open source under the Apache-2.0 license.',
      },
      {
        q: 'Which hardware does it run on?',
        a: 'Any x86-64 computer with a disk for the system, one or more disks for data and a network connection. Also arm64 boards that start a USB stick through UEFI and run Debian’s own kernel{{, installed from the test release’s ISO}} [[next]]; no real arm64 board has run it yet. <a href="{features}#hardware">Hardware in detail</a>.',
      },
      {
        q: 'What is the test release?',
        next: true,
        a: 'Before a stable release, zendiloOS publishes release candidates. {nextVersion} brings virtual machines as a preview, the Backup app, bridges, bonds and VLANs, a configuration backup that a fresh installation restores, and arm64. It is for trying out: install it fresh from its ISO, for <a href="{nextIsoAmd64}">x86-64</a> or <a href="{nextIsoArm64}">arm64</a>, or put its package on Debian 13 or on an existing installation: <code>sudo apt install ./{nextDebAmd64}</code>, on arm64 <code>./{nextDebArm64}</code>. Both are on <a href="{next}">the release’s page</a>.',
      },
      {
        q: 'Can I install it on a Debian I already have?',
        a: 'Yes, on Debian 13: enable Debian’s <code>contrib</code> component, install the kernel headers and then the zendiloOS package from a release. The commands are in the install section above and in the <a href="{repo}#install-on-an-existing-debian-13">README</a>.',
      },
      {
        q: 'What happens to my data if I remove zendiloOS?',
        a: 'Pools, shared folders and their data stay where they are, and so do Docker and its apps. zendiloOS keeps its own settings in <code>/var/lib/zendiloos</code> until you remove that too.',
      },
      {
        q: 'How do updates work?',
        a: 'Once a day zendiloOS looks for Debian’s package updates and for new releases of zendiloOS on your channel: stable, test or development. Installing is a click, and a release is only installed after its signature and checksum have been verified.',
      },
      {
        q: 'Does it phone home?',
        a: 'No. There is no account and no telemetry. The NAS only goes online for packages, releases and the app catalogs and images you use.',
      },
      {
        q: 'Is it ready for the only copy of my photos?',
        a: 'zendiloOS is young. ZFS protects your data from a failing disk, but no NAS replaces a backup: keep a copy of what you cannot lose somewhere else.',
      },
    ],
  },

  cta: {
    title: 'Give your data a home.',
    lead: 'Download the ISO, install it on a spare computer and have your own NAS running this afternoon.',
  },

  footer: {
    tagline: 'A NAS operating system on Debian, run from a desktop in the browser.',
    product: 'Product',
    project: 'Project',
    details: 'Features in detail',
    iso: 'Download the ISO',
    releases: 'Releases',
    architecture: 'Architecture',
    testing: 'Testing',
    licenses: 'Licenses',
    catalog: 'Community catalog',
    license: '© {year} The zendiloOS authors. Licensed under Apache-2.0.',
    trademark: 'Debian is a registered trademark of Software in the Public Interest, Inc. zendiloOS is not affiliated with the Debian project.',
    imprint: 'Imprint',
  },

  // The page of features in detail.
  details: {
    title: 'zendiloOS in detail: storage, shares, apps, VMs, backups and more',
    description:
      'What zendiloOS does, area by area: ZFS storage, SMB and NFS shares, apps and Docker, virtual machines, backups, network, security, updates, monitoring and hardware, with what is a preview{{ and what is in the test release}}.',
    eyebrow: 'Features in detail',
    heading: 'What zendiloOS does, <em>area by area</em>.',
    lead: 'Each area in a few sentences, with its specifics, what is still a preview, and where the documentation tells more.',
    legend:
      '[[next]] only in {nextVersion}, not yet in the stable release · [[preview]] may still change · Everything is tested in virtual machines; on real hardware it has run only on one small x86-64 board so far.',
    legendStable:
      '[[preview]] may still change · Everything is tested in virtual machines; on real hardware it has run only on one small x86-64 board so far.',
    tocLabel: 'Areas',
    docs: 'In the documentation:',
    areas: [
      {
        id: 'storage',
        label: 'Storage and disks',
        title: 'Your data on ZFS, with guard rails.',
        text: [
          'zendiloOS keeps your data on OpenZFS, which checks every block it reads and repairs it from a second copy where the layout has one. A pool is one or more disks in one layout, and zendiloOS tells you what each layout survives before you choose.',
          'Disks are known by their serial numbers, never by names such as sdb that can change. Before a pool is created or deleted, a plan lists every disk that will be erased, and the pool’s name has to be typed again; the agent checks once more before it touches a disk.',
        ],
        specs: [
          ['Layouts', 'A single disk, a mirror (2 disks or more), RAIDZ1 (3 or more), RAIDZ2 (4 or more), RAIDZ3 (5 or more)'],
          ['Defaults', 'lz4 compression, access times off, 4K sectors; each pool mounted as a volume'],
          ['Checks', 'SMART every six hours, short and long self-tests on a schedule, a scrub every month and whenever you start one'],
          ['Where each disk sits', 'Bays from a catalog of NAS models or a layout of your own, a disk that blinks to be found, purchase date and warranty for every disk'],
          ['New pool [[next]]', 'A wizard in three steps: disks and layout side by side with the usable space, speed and protection estimated, a name, then the plan to confirm'],
          ['Pools of an earlier installation [[next]]', 'Found and imported when you ask, never by themselves: a pool another machine still uses would be damaged'],
          ['Tested', 'In virtual machines: a mirror built, a disk pulled out and replaced, resilver, scrub, deletion refused while shares, Docker or VMs live on the pool. The bay order of the built-in NAS models is not yet confirmed on the real machines.'],
        ],
        docs: [
          ['Storage concept', 'docs/architecture.md#5-storage-concept'],
          ['Guard rails', 'docs/architecture.md#47-storage-guard-rails'],
        ],
      },
      {
        id: 'files',
        label: 'Shares and files',
        title: 'A shared folder for every device in the house.',
        text: [
          'A share is a folder on a volume with a ZFS dataset of its own. You decide for each person and group who may read or write, and Samba, NFS and the file explorer hold everyone to the same rule. Windows finds the NAS through WS-Discovery, macOS through Bonjour.',
          'Snapshots keep earlier states of a share, taken by hand or on schedules, and Windows offers them as previous versions. The explorer in the browser reaches personal folders, shares and USB drives in one window.',
        ],
        specs: [
          ['Protocols', 'SMB from version 2.0 on, never SMB1; NFS. Each switched on or off as a whole'],
          ['Access', 'Read and write or read only, for each person and group; NFS for each computer or network'],
          ['Per share', 'A quota, compression (lz4, zstd or off) and the record size'],
          ['Snapshots', 'Hourly, daily, weekly and monthly, each keeping 1 to 100; files copied back out of them; a share rolled back with its name typed again'],
          ['Recycle bin', 'One for all folders in the explorer; deleting over SMB or NFS is final, and the snapshots keep what was there'],
          ['Explorer', 'A tree of folders, drag and drop, uploads, folders downloaded as archives, a search through every subfolder'],
          ['USB drives', 'FAT, exFAT, NTFS and ext4: mounted, copied from and to, ejected'],
          ['List and grid [[next]]', 'Large icons in a grid, a toolbar with the actions, the sidebar in sections'],
          ['Tested', 'With real SMB and NFS clients inside a virtual machine. No Windows or macOS computer has used a share yet.'],
        ],
        docs: [['Share and file permissions', 'docs/architecture.md#44-share-and-file-permissions']],
      },
      {
        id: 'apps',
        label: 'Apps and Docker',
        title: 'Apps in a click, and yours to change.',
        text: [
          'The App Center installs apps from the community catalog or from catalogs you add. You choose an app’s folder, ports and settings and see its compose.yaml before it starts; from then on it is an ordinary Docker Compose project of yours, changed, updated and removed in the Docker app.',
          'Whatever reaches beyond a container, such as a device, the host’s network or the Docker socket, is named and needs your consent. Docker itself is a plugin of the App Center, from Debian’s own packages, installed when you need it.',
        ],
        specs: [
          ['Catalogs', 'The community catalog built in; others added from a GitHub repository or an address'],
          ['Consent', 'Devices, the host’s network, the Docker socket and folders of the host named before a project starts'],
          ['Docker app', 'Containers, images, networks and Compose projects; a page for every container with its live log and a terminal'],
          ['Image updates', 'Containers with a newer image marked, updated from the list or on a schedule'],
          ['Volumes', 'Listed with the containers that use them, backed up into a share daily, weekly or monthly, restored under their name or into another volume'],
          ['Plugins', 'Docker, certificates from Let’s Encrypt; virtual machines and Backup [[next]]'],
          ['Architectures [[next]]', 'Each app says which architectures its images are made for; one that has none for your machine cannot be installed'],
          ['Tested', 'In virtual machines: Docker installed as a plugin, projects with consent, the terminal, image updates, volumes backed up and restored, an app from the catalog becoming your own project.'],
        ],
        docs: [['Apps and Docker', 'docs/architecture.md#49-apps-docker']],
      },
      {
        id: 'vms',
        label: 'Virtual machines',
        marks: ['preview', 'next'],
        title: 'Virtual machines beside your data.',
        text: [
          'The Virtual machines plugin of the App Center brings libvirt and QEMU from Debian and an app in which administrators create, change, start and stop VMs. A VM can have several disks and network cards, its ISOs come from an image library, and its console opens in the browser.',
          'Snapshots take all of a VM’s disks at once, by hand or on schedules. Backups go into a share or onto a USB drive and are restored as a new VM or over the old one. For Windows 11 a VM gets a TPM and Secure Boot.',
          'Virtual machines are a preview, on x86-64 only. The plugin first checks that the processor can run them (Intel VT-x or AMD-V).',
        ],
        specs: [
          ['Hardware', 'Up to 8 disks (virtio or SATA), up to 4 network cards (virtio or e1000e), up to 3 drives for ISOs; UEFI or BIOS'],
          ['Presets', 'Linux, Windows (with TPM and Secure Boot) and other'],
          ['Networks', 'Through the NAS, on a bridge, directly on a network card (macvtap), or on an internal network that the NAS itself stays off'],
          ['Storage', 'Disks as ZFS volumes on one or more pools; each pool shows its health, its space and the VMs on it'],
          ['Images', 'ISOs copied from a share or uploaded from the browser'],
          ['Console and load', 'The console in the browser (noVNC); processor and memory of every VM live'],
          ['Snapshots', 'All disks at once, the guest’s file systems frozen if its QEMU guest agent answers; hourly, daily, weekly or monthly; rolled back while the VM is off'],
          ['Backups', 'Every disk compressed with zstd and checked by its checksum when restored'],
          ['Host devices', 'USB devices, also while the VM runs; PCI devices with an IOMMU and the VM off. Devices the host needs, such as the controller of its disks, are refused'],
          ['Tested', 'In nested virtual machines: VMs with several disks and cards, the image library, the console, snapshots compared by checksum, backups restored, a TPM and Secure Boot. Not yet: devices handed through on real hardware, and a Windows 11 installation.'],
        ],
        docs: [['Virtual machines', 'docs/architecture.md#413-virtual-machines']],
      },
      {
        id: 'backup',
        label: 'Backups',
        marks: ['next'],
        title: 'A second copy, somewhere else.',
        text: [
          'ZFS protects your data from a failing disk, not from a deleted folder, a fire or a theft. The Backup plugin brings rsync and rclone from Debian and an app in which administrators set up backup tasks: from a share to another pool, a USB drive, a server or a cloud, on a schedule or whenever the drive is plugged in.',
          'Every run is a job with its log and its list of files, and a failed or partial run is notified. A restore takes all or some of a version, back to where it came from or into another folder.',
        ],
        specs: [
          ['Targets', 'Another share or pool, a USB drive, an rsync server through its daemon or over SSH with the server’s host key pinned, Google Drive, OneDrive'],
          ['From a server', 'A folder of a server backed up into the NAS'],
          ['Mirror or versions', 'A mirror, optionally keeping what a run deletes or replaces for some days; or dated versions, unchanged files hard-linked to the version before, kept by number and age'],
          ['Encryption', 'Names and contents encrypted with rclone’s crypt, to a share, a drive, a cloud or an SSH server'],
          ['Schedules', 'Hourly, daily or weekly in the NAS’s time zone, or when the drive is plugged in'],
          ['Isolation', 'Every run in a unit of its own that sees only its folders and writes only to its target; passwords and keys never on a command line; Google Drive asked only for the files the NAS writes'],
          ['Also backed up', 'Docker volumes into a share; virtual machines into a share or onto a USB drive; the configuration, under Updates and recovery'],
          ['Tested', 'In virtual machines: mirrors and versions between pools, a USB drive, an rsync daemon and SSH, restores, an encrypted backup. Google Drive and OneDrive only against stand-ins: no backup has gone to a real account yet.'],
        ],
        docs: [['Backup', 'docs/architecture.md#414-backup']],
      },
      {
        id: 'network',
        label: 'Network',
        title: 'Network changes that wait for your confirmation.',
        text: [
          'Each network card gets its addresses by DHCP or fixed, IPv6 from router advertisements, and up to three name servers. zendiloOS manages the network through systemd-networkd, now also on installations from the ISO, and takes over a Debian set up with ifupdown when you ask.',
          'A change is kept only once you confirm it within two minutes, from the new address if it changed; otherwise everything goes back by itself. Changes made outside zendiloOS, at the console for instance, are noticed, and you choose whether zendiloOS restores its settings or keeps the files.',
        ],
        specs: [
          ['Per card', 'IPv4 by DHCP, fixed or off; IPv6 from router advertisements or off; up to three name servers'],
          ['Confirmation', 'Two minutes to confirm from the browser, or the change goes back; switching a card off asks first [[next]]'],
          ['Bridges [[next]]', 'Wired cards, bonds and VLANs as members, or none for VMs only; STP off unless asked'],
          ['Bonds [[next]]', 'Active-backup, 802.3ad (LACP) or balance-alb'],
          ['VLANs [[next]]', 'IDs 1 to 4094, on a card, a bond or a bridge'],
          ['ISO and ifupdown [[next]]', 'Installations from the ISO managed from the first start; a Debian with ifupdown taken over on request, what cannot be taken over named with its file, line and reason, and left as it is'],
          ['Outside changes [[next]]', 'A notification and a note on the Network page, then restore or keep the files'],
          ['The machine’s name [[next]]', 'Changed from the interface, up to 15 characters; SMB, mDNS (name.local) and WS-Discovery follow, and the machine’s own certificate is made anew'],
          ['Tested', 'In virtual machines: addresses changed, a change that cuts the machine off going back, the takeover from ifupdown confirmed and not, bridges, bonds and VLANs.'],
        ],
        docs: [['Network', 'docs/architecture.md#6-further-decisions']],
      },
      {
        id: 'security',
        label: 'Security',
        title: 'Nothing changes without a check.',
        text: [
          'The web interface and its API run without privileges. Whatever changes the system goes through zendiloos-agent, a small, sandboxed service that checks every request against strict rules and runs the tools with fixed arguments.',
          'Signing in can ask for a code from an authenticator app, failed attempts block the address for a while, and every session can be ended. The firewall decides who reaches which service, Docker’s published ports included, and a change to it goes back unless you confirm it.',
        ],
        specs: [
          ['Sign-in', 'Two-factor with an authenticator app, recovery codes, a password policy, limits on failed sign-ins and blocked addresses'],
          ['Roles', 'Administrator, user and read only; the server checks every request, whatever the interface shows'],
          ['Firewall', 'nftables, rules by service, address or network, Docker’s published ports included; a change goes back after 90 seconds unless confirmed'],
          ['HTTPS', 'TLS 1.2 or newer; the machine’s own certificate, or one from Let’s Encrypt through HTTP-01 or DNS-01'],
          ['DNS providers [[next]]', '81 for DNS-01, from dynamic DNS services such as IPv64 to hosters and large clouds, each checked against Debian’s acme.sh'],
          ['SSH', 'Switched on for a job, with its port and who may log in; it switches itself off again after up to a day'],
          ['Audit log', 'Every change by an administrator recorded; searched and exported as CSV [[next]]'],
          ['Releases', 'Signed with minisign and verified before they are installed'],
          ['Software bill of materials [[next]]', 'CycloneDX for every package of a release, and the licenses of everything it contains'],
          ['Tested', 'In virtual machines: TLS, failed sign-ins and blocked addresses, sessions, two-factor sign-in, the firewall with Docker’s ports, SSH switching itself off, certificates through ACME.'],
        ],
        docs: [
          ['Security model', 'docs/architecture.md#4-security-and-permission-model'],
          ['Licenses', 'docs/licences.md'],
        ],
      },
      {
        id: 'updates',
        label: 'Updates and recovery',
        title: 'Updates without surprises, and a way back.',
        text: [
          'Once a day zendiloOS looks for Debian’s package updates and for new releases of zendiloOS on your channel. You decide when to install them, a release is installed only with a valid signature, and the NAS restarts only when you say so.',
          'ZFS is built for each kernel. A kernel whose ZFS module could not be built is never started: GRUB keeps starting the newest kernel that has it, and the Updates page says which one starts next and why. [[next]]',
          'A configuration backup keeps accounts, shares, settings and certificates in one file encrypted with a passphrase. Restored on a fresh installation instead of its first setup, it brings the machine back: the old installation’s pools are imported when you ask, and its network and firewall settings are applied one by one, each confirmed. [[next]]',
        ],
        specs: [
          ['Channels', 'Stable for releases, test for release candidates too, development for every change; a NAS takes only a version newer than its own'],
          ['Signature', 'minisign over the checksums; the signature names the version, and a NAS takes a test or development build only on that channel'],
          ['Downloads [[next]]', 'Tried up to four times when GitHub does not answer'],
          ['Configuration backup [[next]]', 'Encrypted with age and a passphrase of at least 12 characters; downloaded, or daily or weekly into a share or onto a USB drive, the newest kept'],
          ['Restore [[next]]', 'In the first setup or later; the whole file checked before anything changes; pools imported on request; network and firewall applied only once confirmed'],
          ['Rescue [[next]]', '“Rescue a zendiloOS system” in the ISO’s boot menu: a shell in the installed system, to copy a backup off a machine that does not start or to repair it'],
          ['Still to come', 'A recovery entry in the installed system’s boot menu, and a live image with ZFS for a machine whose system disk is gone'],
          ['Tested', 'In virtual machines: updates of Debian and zendiloOS, refusals, a kernel without ZFS never started, an older installation upgraded with its data, a configuration backup restored on a fresh machine and its pool imported.'],
        ],
        docs: [
          ['Releases and channels', 'docs/releases.md'],
          ['Configuration backup and recovery', 'docs/architecture.md#415-configuration-backup-and-recovery'],
        ],
      },
      {
        id: 'monitor',
        label: 'Monitoring and notifications',
        title: 'Trouble told before it grows.',
        text: [
          'Widgets on the desktop and the resource monitor show processor, memory, network and disks over time. zendiloOS looks at the pools every minute and at the disks’ SMART values every six hours, and tells you when something changes.',
          'Notifications reach you in the browser, by e-mail through a mail server you name, and by webhook, chosen for each kind. One that cannot go out because the network is not up yet is tried again later. [[next]]',
        ],
        specs: [
          ['Channels', 'In the browser, by e-mail through one mail server, by webhook; chosen for each kind'],
          ['Storage', 'A pool degraded or recovered, a resilver or scrub finished, a volume 80 or 90 % full, a disk’s SMART values getting worse'],
          ['eMMC [[next]]', 'The wear of an eMMC system disk, which has no SMART, as on single-board computers such as the ZimaBoard'],
          ['Delivery [[next]]', 'A queue that survives restarts: tried again from a minute up to an hour apart, for about twelve hours'],
          ['Fewer writes [[next]]', 'Requests that only read logged at debug level only, the journal kept to 512 MiB, systemd reloaded only when something changed'],
          ['Tested', 'In virtual machines: e-mail and webhook, a delivery tried again once the receiver is back, also across a restart.'],
        ],
        docs: [['Monitoring', 'docs/architecture.md#5-storage-concept']],
      },
      {
        id: 'hardware',
        label: 'Hardware and architectures',
        title: 'From a mini PC to a NAS board.',
        text: [
          'zendiloOS runs on Debian 13. On x86-64 that is a NAS appliance, a mini PC or a machine of your own, with UEFI or a BIOS. It needs a disk for the system, one or more disks for data (SATA or NVMe) and a network connection: the installer fetches Debian’s packages from its mirror.',
          'zendiloOS is now built for arm64 too: packages, and an installation ISO that starts through UEFI, for NAS boards and single-board computers whose firmware starts a USB stick through UEFI and whose hardware Debian’s own kernel supports. Boards that need their vendor’s kernel do not work.{{ Until a stable release has it, arm64 is installed from the test release’s ISO.}} [[next]]',
          'zendiloOS is tested end to end in virtual machines. On real hardware it has run only on one small x86-64 board so far, and no real arm64 board has run it yet.',
        ],
        specs: [
          ['x86-64', 'UEFI or BIOS; the ISO has both boot menus and the graphical installer'],
          ['arm64 [[next]]', 'UEFI only (EDK2 or U-Boot’s), the text installer, which a serial console shows too{{; the ISO is the test release’s}}; built and its tests run on arm64 in CI; not yet tried on a real board'],
          ['Virtual machines', 'On x86-64 only, with Intel VT-x or AMD-V; PCI devices need an IOMMU'],
          ['Installer', 'Debian’s own, with six questions: language, location, keyboard, name, root’s password and the system’s disk, which is never chosen for you'],
          ['A release holds', 'The packages, signed checksums and the installation ISOs; packages and an ISO for arm64, and a software bill of materials for each package [[next]]'],
          ['NAS models', 'Bay layouts of known models, the UGREEN DXP4800 Plus first, not yet confirmed on the real machine'],
          ['Tested', 'The installation from the ISO, unattended in a fresh virtual machine. On arm64 the backend’s tests run natively; the emulated installation has not been run to its end yet.'],
        ],
        docs: [
          ['Hardware', '#hardware'],
          ['Testing on arm64', 'docs/testing.md#arm64'],
          ['What is not tested yet', 'docs/testing.md#not-tested-yet'],
        ],
      },
    ],
  },
}
