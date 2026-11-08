export default {
  lang: 'en',
  locale: 'en_US',
  title: 'zendiloOS: a NAS you run from your browser',
  description:
    'zendiloOS turns Debian 13 into a NAS with ZFS storage, folders shared over SMB and NFS, an App Center for Docker apps, two-factor sign-in, a firewall and signed updates, all from a desktop in your browser. Free and open source.',
  tourLabel: 'A tour of zendiloOS',

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
    title: 'A NAS that feels like a <em>desktop</em>.',
    lead: 'zendiloOS turns a plain Debian 13 into a NAS you run from the browser: ZFS for your data, shared folders for every device in the house, apps as Docker projects of your own and updates with a click.',
    download: 'Download the ISO',
    github: 'View on GitHub',
    meta: 'For x86-64 computers · Debian 13 underneath · Apache-2.0',
    downloadMeta: 'Version {version} · {size} · x86-64 · Apache-2.0',
    alt: 'The zendiloOS desktop in a browser: the file explorer shows the documents folder, widgets beside it show the system status, resources, network and storage.',
    chipPool: ['Pool tank', 'Mirror · healthy'],
    chipUpdate: ['Update installed', 'Signature verified'],
  },

  builtOn: { title: 'Built on open source you already trust' },

  features: {
    eyebrow: 'Features',
    title: 'Everything a NAS needs, in one desktop.',
    lead: 'Storage, shared folders, apps and the system around them, with windows, a dock and widgets you already know how to use.',
    items: [
      {
        id: 'storage',
        title: 'Storage on ZFS',
        text: 'Pools from a single disk up to RAIDZ3, with guard rails that explain what each layout survives.',
      },
      {
        id: 'shares',
        title: 'Shared folders',
        text: 'Folders on a volume, shared over SMB for Windows and macOS and NFS for Linux, with permissions for each person and group.',
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
        text: 'Containers, images, networks and Compose projects, with live logs, a terminal and image updates.',
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

  tour: [
    {
      id: 'storage',
      eyebrow: 'Storage',
      title: 'Your data on ZFS, with guard rails.',
      text: 'Build pools from mirrors up to RAIDZ3 in a few clicks. zendiloOS tells you what each layout survives, warns when a pool has no redundancy left and keeps an eye on every disk.',
      checks: [
        'SMART values and self-tests on a schedule',
        'Scrubs that find silent errors before they spread',
        'A notification when a disk or a pool needs you',
      ],
      alt: 'The disks page of the control panel, listing every disk with its model, size, pool, temperature and SMART health.',
    },
    {
      id: 'shares',
      eyebrow: 'Files and folders',
      title: 'A shared folder for every device in the house.',
      text: 'Every folder on a volume can be shared, and you decide who may read or write. Windows and macOS find it over SMB, Linux mounts it over NFS, and everyone gets to their files in the browser too, in one explorer.',
      checks: [
        'Permissions for each person and group',
        'Previous versions from snapshots, one recycle bin for all folders',
        'USB drives in the explorer, to copy from and eject',
      ],
      alt: 'The properties of the documents folder: the family group may read and write, guests may read.',
      alt2: 'The file explorer in the browser, showing the documents folder.',
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
      alt: 'The App Center with apps such as AdGuard Home, Immich, Jellyfin and Home Assistant.',
    },
    {
      id: 'docker',
      eyebrow: 'Docker',
      title: 'Docker, when you want the details.',
      text: 'Docker is a plugin of the App Center: install it with a click when you need it, then follow your containers, images, networks and logs, or run Compose projects of your own.',
      checks: [
        'A page for every container, with its live log and a terminal',
        'Containers with a newer image marked and updated from the list',
        'Docker from Debian’s own packages',
      ],
      alt: 'The containers in the Docker app: Homarr and Uptime Kuma running and healthy, an update available for Homarr.',
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
      ],
      alt: 'Update & restore in the control panel: zendiloOS 0.2.0 on the stable channel and a Debian security update ready to install.',
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
      { title: 'Download', text: 'Get the installation ISO of the newest stable release.' },
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
      'An x86-64 computer; arm64 is planned',
      'A disk for the system, one or more for your data',
      'A network connection: the packages come from Debian’s mirror',
    ],
    note: 'zendiloOS is young. Try it on hardware whose disks hold nothing you would miss.',
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
        a: 'Any x86-64 computer with a disk for the system, one or more disks for data and a network connection. Support for arm64 is planned.',
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
    iso: 'Download the ISO',
    releases: 'Releases',
    architecture: 'Architecture',
    roadmap: 'Roadmap',
    catalog: 'Community catalog',
    license: '© {year} The zendiloOS authors. Licensed under Apache-2.0.',
    trademark: 'Debian is a registered trademark of Software in the Public Interest, Inc. zendiloOS is not affiliated with the Debian project.',
    imprint: 'Imprint',
  },
}
