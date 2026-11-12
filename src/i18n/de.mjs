// [[next]] markiert, was es nur im Testrelease gibt (ein Abzeichen, solange
// es eines gibt), [[preview]] eine Vorschau, und Text in {{ }} steht nur da,
// solange es ein Testrelease gibt; {nextVersion}, {next}, {nextIsoAmd64} und
// {nextIsoArm64} sind Version, Seite und ISOs des Testreleases (build.mjs),
// {repo} das Repository, {features} die Seite mit den Funktionen im Detail.
export default {
  lang: 'de',
  locale: 'de_DE',
  title: 'zendiloOS: ein NAS, das Sie im Browser bedienen',
  description:
    'zendiloOS macht aus Debian 13 ein NAS mit ZFS-Speicher, über SMB und NFS freigegebenen Ordnern, einem App Center für Docker-Apps, Zwei-Faktor-Anmeldung, Firewall und signierten Updates, bedient über einen Desktop im Browser. Kostenlos und Open Source.',
  tourLabel: 'Ein Rundgang durch zendiloOS',

  badges: { next: 'Testrelease', preview: 'Vorschau' },

  nav: {
    label: 'Hauptmenü',
    skip: 'Zum Inhalt springen',
    features: 'Funktionen',
    security: 'Sicherheit',
    apps: 'Apps',
    install: 'Installation',
    faq: 'FAQ',
    language: 'Sprache',
    menu: 'Menü',
  },

  hero: {
    pill: 'Kostenlos und Open Source',
    release: 'zendiloOS {version} ist da',
    title: 'Das Open-Source-NAS ohne <em>Haken</em>.',
    lead: 'Kein Konto, kein Abo, keine Telemetrie. zendiloOS macht aus einem gewöhnlichen Debian 13 ein NAS, das Sie im Browser bedienen: ZFS für Ihre Daten, freigegebene Ordner für jedes Gerät im Haus, Apps als Ihre eigenen Docker-Projekte und Updates per Klick.',
    download: 'ISO herunterladen',
    github: 'Auf GitHub ansehen',
    meta: 'Für x86-64-Rechner · Debian 13 als Basis · Apache-2.0',
    downloadMeta: 'Version {version} · {size} · x86-64 · Apache-2.0',
    next: {
      link: 'Testrelease {nextVersion} ausprobieren',
      text: 'Virtuelle Maschinen, Backups, Bridges und Bonds, arm64. Zum Ausprobieren, noch nicht für Daten, die Ihnen fehlen würden.',
      isoAmd64: 'ISO für x86-64',
      isoArm64: 'ISO für arm64',
    },
    alt: 'Der zendiloOS-Desktop im Browser: Der Datei-Explorer zeigt den Ordner documents, daneben zeigen Widgets Systemzustand, Auslastung, Netzwerk und Speicher.',
    chipPool: ['Pool tank', 'Spiegel · intakt'],
    chipUpdate: ['Update installiert', 'Signatur geprüft'],
  },

  builtOn: { title: 'Gebaut auf Open Source, der Sie schon vertrauen' },

  features: {
    eyebrow: 'Funktionen',
    title: 'Alles, was ein NAS braucht, auf einem Desktop.',
    lead: 'Speicher, freigegebene Ordner, Apps und das System drumherum, mit Fenstern, Dock und Widgets, wie Sie sie längst kennen.',
    legend: '[[next]] nur in {nextVersion}, noch nicht im stabilen Release',
    more: 'Alle Funktionen im Detail',
    items: [
      {
        id: 'storage',
        title: 'Speicher mit ZFS',
        text: 'Pools von der einzelnen Platte bis RAIDZ3, mit Leitplanken, die erklären, was jede Anordnung übersteht, und jede Platte in ihrem Schacht.',
      },
      {
        id: 'shares',
        title: 'Freigegebene Ordner',
        text: 'Ordner auf einem Volume, freigegeben über SMB für Windows und macOS und NFS für Linux, mit Zugriff für jede Person und Gruppe.',
      },
      {
        id: 'snapshots',
        title: 'Snapshots',
        text: 'Snapshots, die Windows als vorherige Versionen anzeigt, und ein Papierkorb für alle Ordner.',
      },
      {
        id: 'files',
        title: 'Datei-Explorer',
        text: 'Ein Baum Ihrer Ordner, Ziehen und Ablegen, eine Suche durch alle Unterordner und USB-Laufwerke zum Kopieren.',
      },
      {
        id: 'apps',
        title: 'App Center',
        text: 'Apps aus einem Community-Katalog, installiert als Ihre eigenen Docker-Projekte, die Sie ändern können.',
      },
      {
        id: 'docker',
        title: 'Docker',
        text: 'Container, Images, Netzwerke und Compose-Projekte, mit Live-Logs, Terminal, Image-Updates und Backups der Volumes.',
      },
      {
        id: 'vms',
        marks: ['preview', 'next'],
        title: 'Virtuelle Maschinen',
        text: 'VMs mit mehreren Platten und Netzwerkkarten, Konsole im Browser, Snapshots und Backups, dazu TPM und Secure Boot für Windows 11.',
      },
      {
        id: 'backup',
        marks: ['next'],
        title: 'Backups',
        text: 'Freigaben auf einen anderen Pool, ein USB-Laufwerk, einen rsync-Server, Google Drive oder OneDrive, auf Wunsch verschlüsselt, und die Konfiguration gesichert für einen Neuanfang.',
      },
      {
        id: 'network',
        marks: ['next'],
        title: 'Netzwerk',
        text: 'Adressen, Bridges, Bonds und VLANs; jede Änderung bleibt erst, wenn Sie sie bestätigen, und Änderungen an zendiloOS vorbei fallen auf.',
      },
      {
        id: 'updates',
        title: 'Signierte Updates',
        text: 'Debian und zendiloOS an einer Stelle, aus dem Kanal Ihrer Wahl, jedes Release signiert.',
      },
      {
        id: 'security',
        title: 'Sicherheit',
        text: 'Zwei-Faktor-Anmeldung, eine Firewall, Zertifikate von Let’s Encrypt, Grenzen für Fehlanmeldungen und SSH, das sich selbst abschaltet.',
      },
      {
        id: 'monitor',
        title: 'Überwachung',
        text: 'Prozessor, Speicher, Netzwerk und Platten im Verlauf, und Benachrichtigungen per E-Mail oder Webhook, bevor es ernst wird.',
      },
    ],
  },

  tour: [
    {
      id: 'storage',
      eyebrow: 'Speicher',
      title: 'Ihre Daten auf ZFS, mit Leitplanken.',
      text: 'Pools vom Spiegel bis RAIDZ3 entstehen mit wenigen Klicks. zendiloOS sagt Ihnen, was jede Anordnung übersteht, warnt, wenn ein Pool keine Redundanz mehr hat, und behält jede Platte im Blick.',
      checks: [
        'SMART-Werte und Selbsttests nach Zeitplan',
        'Scrubs, die stille Fehler finden, bevor sie sich ausbreiten',
        'Ihr NAS gezeichnet, jede Platte in ihrem Schacht, und eine Platte, die zum Finden blinkt',
        'Ein Assistent, der Platz und Schutz jeder Anordnung abschätzt [[next]]',
      ],
      alt: 'Die Laufwerke in der Systemsteuerung: jede Platte mit Modell, Größe, Pool, Temperatur und SMART-Zustand.',
    },
    {
      id: 'shares',
      eyebrow: 'Dateien und Ordner',
      title: 'Ein freigegebener Ordner für jedes Gerät im Haus.',
      text: 'Jeder Ordner auf einem Volume lässt sich freigeben, und Sie bestimmen, wer lesen oder schreiben darf. Windows und macOS finden ihn über SMB, Linux bindet ihn über NFS ein, und an die Dateien kommt jeder auch im Browser, in einem Explorer.',
      checks: [
        'Zugriff für jede Person und Gruppe, gleich für SMB, NFS und den Explorer',
        'Vorherige Versionen aus Snapshots, ein Papierkorb für alle Ordner',
        'USB-Laufwerke im Explorer, zum Kopieren und Auswerfen',
        'Dateien als Liste oder Raster, mit einer Leiste der möglichen Aktionen [[next]]',
      ],
      alt: 'Die Eigenschaften des Ordners documents: Die Gruppe family darf lesen und schreiben, guests darf lesen.',
      alt2: 'Der Datei-Explorer im Browser mit dem Ordner documents.',
    },
    {
      id: 'apps',
      eyebrow: 'App Center',
      title: 'Apps per Klick, und Sie können sie ändern.',
      text: 'Wählen Sie eine App aus dem Community-Katalog oder fügen Sie einen eigenen Katalog hinzu. Sie wählen Ordner, Ports und Einstellungen und sehen die fertige compose.yaml, bevor sie startet; danach ist sie ein gewöhnliches Docker-Projekt von Ihnen. Was über ihren Container hinausgeht, etwa ein Gerät oder der Docker-Socket, braucht Ihre Zustimmung.',
      checks: [
        'Ordner und Ports wählen, die eine App nutzt',
        'Passwörter und Schlüssel werden für Sie erzeugt',
        'Bearbeiten, neu ausrollen und aktualisieren wie jedes Projekt',
      ],
      alt: 'Das App Center mit Apps wie AdGuard Home, Immich, Jellyfin und Home Assistant.',
    },
    {
      id: 'docker',
      eyebrow: 'Docker',
      title: 'Docker, wenn Sie es genau wissen wollen.',
      text: 'Docker ist ein Plugin des App Centers: Installieren Sie es per Klick, wenn Sie es brauchen, und behalten Sie Container, Images, Netzwerke und Logs im Blick, oder betreiben Sie eigene Compose-Projekte.',
      checks: [
        'Eine Seite für jeden Container, mit Live-Log und Terminal',
        'Container mit neuerem Image markiert und aus der Liste aktualisiert',
        'Volumes nach Zeitplan in einen freigegebenen Ordner gesichert und wiederhergestellt',
        'Docker aus Debians eigenen Paketen',
      ],
      alt: 'Die Container in der Docker-App: Homarr und Uptime Kuma laufen und sind gesund, für Homarr gibt es ein Update.',
    },
    {
      id: 'updates',
      eyebrow: 'Updates',
      title: 'Updates ohne Überraschungen.',
      text: 'Einmal am Tag sucht zendiloOS nach Updates: Debians Paketen und neuen Releases von zendiloOS selbst. Sie entscheiden, wann installiert wird, und das NAS startet nur neu, wenn Sie es sagen.',
      checks: [
        'Stabil, Test oder Entwicklung: Sie wählen den Kanal',
        'Jedes Release signiert und vor der Installation geprüft',
        'ZFS wird vor dem Neustart gegen einen neuen Kernel geprüft',
        'Ein Kernel ohne sein ZFS-Modul startet nie: GRUB bleibt bei einem, der es hat [[next]]',
      ],
      alt: 'Aktualisieren & Wiederherstellen in der Systemsteuerung: zendiloOS 0.2.0 im stabilen Kanal und ein Sicherheitsupdate von Debian, bereit zur Installation.',
    },
  ],

  security: {
    eyebrow: 'Sicherheit',
    title: 'Sicher von Grund auf, nicht nachträglich.',
    lead: 'Die Weboberfläche läuft ohne Rechte. Alles, was das System verändert, geht durch einen kleinen, abgeschotteten Agenten, der jede Anfrage gegen strenge Regeln prüft, bevor etwas passiert.',
    nodes: [
      { title: 'Ihr Browser', text: 'HTTPS, TLS 1.2 oder neuer' },
      { title: 'zendiloosd', text: 'Oberfläche und API, ohne Rechte' },
      { title: 'zendiloos-agent', text: 'Klein, abgeschottet, prüft jede Anfrage' },
      { title: 'Debian', text: 'ZFS, Samba, NFS, Docker' },
    ],
    cards: [
      { title: 'Grenzen bei der Anmeldung', text: 'Zu viele Fehlversuche sperren die Adresse für eine Weile.' },
      { title: 'Zwei-Faktor-Anmeldung', text: 'Ein Code aus einer Authenticator-App, und Wiederherstellungscodes für ein verlorenes Telefon.' },
      { title: 'Sitzungen im Blick', text: 'Sehen Sie, wo Sie angemeldet sind, und beenden Sie jede Sitzung.' },
      { title: 'Firewall', text: 'Bestimmen Sie, wer welchen Dienst erreicht, die von Docker veröffentlichten Ports eingeschlossen.' },
      { title: 'SSH bei Bedarf', text: 'SSH für eine schnelle Aufgabe einschalten; danach schaltet es sich selbst ab.' },
      { title: 'Signierte Releases', text: 'Ein Update wird nur mit gültiger Signatur installiert.' },
    ],
  },

  apps: {
    eyebrow: 'Apps',
    title: 'Ihre Lieblings-Apps sind dabei.',
    lead: 'Medienserver, Fotoverwaltung, Hausautomation, Werbeblocker und mehr kommen aus dem Community-Katalog. Fügen Sie einen eigenen Katalog hinzu, und seine Apps stehen gleich daneben.',
    link: 'Zum Community-Katalog',
  },

  install: {
    eyebrow: 'Installation',
    title: 'In vier Schritten startklar.',
    lead: 'Der Installer ist Debians eigener, mit vorausgefüllten Antworten. Er stellt sechs Fragen und richtet den Rest ein.',
    steps: [
      { title: 'Herunterladen', text: 'Laden Sie das Installations-ISO des neuesten stabilen Releases herunter{{, für arm64 das des <a href="{next}">Testreleases</a>}}.' },
      { title: 'Schreiben', text: 'Schreiben Sie es mit einem Werkzeug wie balenaEtcher, Rufus oder dd auf einen USB-Stick.' },
      {
        title: 'Installieren',
        text: 'Starten Sie den Rechner vom Stick und wählen Sie <b>Install zendiloOS</b>. Beantworten Sie Sprache, Standort, Tastatur, Name, das Passwort für root und die Platte für das System.',
      },
      {
        title: 'Einrichten',
        text: 'Nach dem Neustart zeigt der Bildschirm die Adresse. Öffnen Sie sie in einem Browser in Ihrem Netz und legen Sie gleich den ersten Administrator an: Wer zuerst kommt, richtet das NAS ein.',
      },
    ],
    needTitle: 'Was Sie brauchen',
    need: [
      'Einen x86-64-Rechner: ein NAS, einen Mini-PC oder einen eigenen',
      'Oder ein arm64-Board, das einen USB-Stick über UEFI startet{{, installiert vom ISO des Testreleases}} [[next]]',
      'Eine Platte für das System, eine oder mehrere für Ihre Daten',
      'Eine Netzwerkverbindung: Die Pakete kommen von Debians Spiegelserver',
    ],
    needMore: 'Hardware im Detail',
    note: 'zendiloOS ist noch jung: Getestet wird es in virtuellen Maschinen, der Probebetrieb auf echter NAS-Hardware steht noch aus. Probieren Sie es auf Hardware aus, deren Platten nichts enthalten, das Ihnen fehlen würde.',
    debianTitle: 'Debian 13 läuft schon?',
    debianText:
      'Installieren Sie das Paket aus dem <a href="{releases}">neuesten Release</a>. ZFS kommt aus Debians <code>contrib</code> und wird für Ihren Kernel gebaut.',
    terminal: 'Terminal',
    copy: 'Kopieren',
    copied: 'Kopiert',
  },

  values: {
    eyebrow: 'Open Source',
    title: 'Ihr NAS gehört Ihnen, sonst niemandem.',
    items: [
      {
        title: 'Kein Konto, keine Cloud',
        text: 'zendiloOS braucht kein Konto und sammelt keine Telemetrie. Es spricht mit Debians Spiegelserver, mit GitHub für seine Releases und mit den Katalogen und Registries, aus denen Ihre Apps kommen.',
      },
      {
        title: 'Debian als Basis',
        text: 'zendiloOS ist ein Paket auf einem gewöhnlichen Debian 13. Entfernen Sie es, und Pools, Freigaben und Daten bleiben, wo sie sind.',
      },
      {
        title: 'Offen, dauerhaft',
        text: 'Unter Apache-2.0 lizenziert und offen entwickelt. Lesen Sie den Code, melden Sie ein Problem, schicken Sie einen Pull Request.',
      },
    ],
  },

  faq: {
    eyebrow: 'FAQ',
    title: 'Fragen und Antworten',
    more: 'Etwas fehlt? <a href="{issues}">Fragen Sie auf GitHub</a>.',
    items: [
      {
        q: 'Was kostet zendiloOS?',
        a: 'Nichts. zendiloOS ist kostenlos und Open Source unter der Apache-2.0-Lizenz.',
      },
      {
        q: 'Auf welcher Hardware läuft es?',
        a: 'Auf jedem x86-64-Rechner mit einer Platte für das System, einer oder mehreren Platten für Daten und einer Netzwerkverbindung. Dazu arm64-Boards, die einen USB-Stick über UEFI starten und mit Debians eigenem Kernel laufen{{, installiert vom ISO des Testreleases}} [[next]]; auf einem echten arm64-Board lief es noch nicht. <a href="{features}#hardware">Hardware im Detail</a>.',
      },
      {
        q: 'Was ist das Testrelease?',
        next: true,
        a: 'Vor einem stabilen Release veröffentlicht zendiloOS Release-Kandidaten im Testkanal. {nextVersion} bringt virtuelle Maschinen als Vorschau, die Backup-App, Bridges, Bonds und VLANs, eine Konfigurationssicherung, die eine frische Installation wiederherstellt, und arm64. Es ist zum Ausprobieren gedacht: Installieren Sie es frisch von seinem ISO, für <a href="{nextIsoAmd64}">x86-64</a> oder <a href="{nextIsoArm64}">arm64</a>, oder holen Sie es über den Testkanal, den Sie auf einem installierten zendiloOS unter Updates wählen; auf Debian 13 installiert sich sein Paket wie das jedes Releases. <a href="{next}">Das Release auf GitHub</a>.',
      },
      {
        q: 'Kann ich es auf einem vorhandenen Debian installieren?',
        a: 'Ja, auf Debian 13: Schalten Sie Debians Komponente <code>contrib</code> ein, installieren Sie die Kernel-Header und dann das zendiloOS-Paket aus einem Release. Die Befehle stehen oben bei der Installation und in der <a href="{repo}#install-on-an-existing-debian-13">README</a>.',
      },
      {
        q: 'Was passiert mit meinen Daten, wenn ich zendiloOS entferne?',
        a: 'Pools, freigegebene Ordner und ihre Daten bleiben, wo sie sind, ebenso Docker und seine Apps. Seine eigenen Einstellungen behält zendiloOS in <code>/var/lib/zendiloos</code>, bis Sie auch die entfernen.',
      },
      {
        q: 'Wie funktionieren Updates?',
        a: 'Einmal am Tag sucht zendiloOS nach Paket-Updates von Debian und nach neuen Releases von zendiloOS in Ihrem Kanal: stabil, Test oder Entwicklung. Installieren ist ein Klick, und ein Release wird erst installiert, wenn Signatur und Prüfsumme stimmen.',
      },
      {
        q: 'Telefoniert es nach Hause?',
        a: 'Nein. Es gibt kein Konto und keine Telemetrie. Das NAS geht nur für Pakete, Releases und die App-Kataloge und Images online, die Sie nutzen.',
      },
      {
        q: 'Kann ich ihm die einzige Kopie meiner Fotos anvertrauen?',
        a: 'zendiloOS ist noch jung. ZFS schützt Ihre Daten vor einer ausfallenden Platte, aber kein NAS ersetzt ein Backup: Bewahren Sie eine Kopie von allem, was Sie nicht verlieren dürfen, an einem anderen Ort auf.',
      },
    ],
  },

  cta: {
    title: 'Geben Sie Ihren Daten ein Zuhause.',
    lead: 'ISO herunterladen, auf einem freien Rechner installieren, und Ihr eigenes NAS läuft noch heute Nachmittag.',
  },

  footer: {
    tagline: 'Ein NAS-Betriebssystem auf Debian, bedient über einen Desktop im Browser.',
    product: 'Produkt',
    project: 'Projekt',
    details: 'Funktionen im Detail',
    iso: 'ISO herunterladen',
    releases: 'Releases',
    architecture: 'Architektur',
    testing: 'Tests',
    licenses: 'Lizenzen',
    catalog: 'Community-Katalog',
    license: '© {year} Die Autoren von zendiloOS. Lizenziert unter Apache-2.0.',
    trademark: 'Debian ist eine eingetragene Marke von Software in the Public Interest, Inc. zendiloOS steht in keiner Verbindung zum Debian-Projekt.',
    imprint: 'Impressum',
  },

  // Die Seite mit den Funktionen im Detail.
  details: {
    title: 'zendiloOS im Detail: Speicher, Freigaben, Apps, VMs, Backups und mehr',
    description:
      'Was zendiloOS kann, Bereich für Bereich: ZFS-Speicher, Freigaben über SMB und NFS, Apps und Docker, virtuelle Maschinen, Backups, Netzwerk, Sicherheit, Updates, Überwachung und Hardware, mit dem, was noch Vorschau ist{{ und was im Testrelease steckt}}.',
    eyebrow: 'Funktionen im Detail',
    heading: 'Was zendiloOS kann, <em>Bereich für Bereich</em>.',
    lead: 'Jeder Bereich in wenigen Sätzen, mit den Einzelheiten, dem, was noch Vorschau ist, und dem Weg zur ausführlichen Dokumentation.',
    legend:
      '[[next]] nur in {nextVersion}, noch nicht im stabilen Release · [[preview]] kann sich noch ändern · Getestet wird alles in virtuellen Maschinen; der Probebetrieb auf echter NAS-Hardware steht noch aus.',
    legendStable:
      '[[preview]] kann sich noch ändern · Getestet wird alles in virtuellen Maschinen; der Probebetrieb auf echter NAS-Hardware steht noch aus.',
    tocLabel: 'Bereiche',
    docs: 'In der Dokumentation (englisch):',
    areas: [
      {
        id: 'storage',
        label: 'Speicher und Platten',
        title: 'Ihre Daten auf ZFS, mit Leitplanken.',
        text: [
          'zendiloOS legt Ihre Daten auf OpenZFS ab. ZFS prüft jeden Block, den es liest, und repariert ihn aus einer zweiten Kopie, wo die Anordnung eine hat. Ein Pool besteht aus einer oder mehreren Platten in einer Anordnung, und zendiloOS sagt Ihnen vor der Wahl, was jede davon übersteht.',
          'Platten kennt zendiloOS an ihrer Seriennummer, nie an Namen wie sdb, die sich ändern können. Bevor ein Pool entsteht oder gelöscht wird, zeigt ein Plan jede Platte, die gelöscht wird, und Sie tippen den Namen des Pools noch einmal ein; der Agent prüft erneut, bevor er eine Platte anrührt.',
        ],
        specs: [
          ['Anordnungen', 'Einzelne Platte, Spiegel (ab 2 Platten), RAIDZ1 (ab 3), RAIDZ2 (ab 4), RAIDZ3 (ab 5)'],
          ['Voreinstellungen', 'Kompression mit lz4, keine Zugriffszeiten, 4K-Sektoren; jeder Pool als Volume eingehängt'],
          ['Prüfungen', 'SMART alle sechs Stunden, kurze und lange Selbsttests nach Zeitplan, ein Scrub jeden Monat und wann immer Sie einen starten'],
          ['Wo jede Platte sitzt', 'Schächte aus einem Katalog von NAS-Modellen oder nach eigenem Aufbau, eine Platte, die zum Finden blinkt, Kaufdatum und Garantie jeder Platte'],
          ['Neuer Pool [[next]]', 'Ein Assistent in drei Schritten: Platten und Anordnung nebeneinander, mit geschätztem nutzbarem Platz, Tempo und Schutz, dann ein Name und der Plan zur Bestätigung'],
          ['Pools einer früheren Installation [[next]]', 'Gefunden und importiert, wenn Sie es wollen, nie von selbst: Ein Pool, den ein anderer Rechner noch nutzt, nähme Schaden'],
          ['Getestet', 'In virtuellen Maschinen: ein Spiegel angelegt, eine Platte gezogen und ersetzt, Resilver, Scrub, Löschen verweigert, solange Freigaben, Docker oder VMs auf dem Pool liegen. Die Schachtreihenfolge der eingebauten NAS-Modelle ist auf den echten Geräten noch nicht bestätigt.'],
        ],
        docs: [
          ['Speicherkonzept', 'docs/architecture.md#5-storage-concept'],
          ['Leitplanken', 'docs/architecture.md#47-storage-guard-rails'],
        ],
      },
      {
        id: 'files',
        label: 'Freigaben und Dateien',
        title: 'Ein freigegebener Ordner für jedes Gerät im Haus.',
        text: [
          'Eine Freigabe ist ein Ordner auf einem Volume mit einem eigenen ZFS-Dataset. Sie legen für jede Person und Gruppe fest, wer lesen oder schreiben darf, und Samba, NFS und der Datei-Explorer halten sich alle an dieselbe Regel. Windows findet das NAS über WS-Discovery, macOS über Bonjour.',
          'Snapshots halten frühere Stände einer Freigabe fest, von Hand oder nach Zeitplan, und Windows bietet sie als vorherige Versionen an. Der Explorer im Browser erreicht persönliche Ordner, Freigaben und USB-Laufwerke in einem Fenster.',
        ],
        specs: [
          ['Protokolle', 'SMB ab Version 2.0, nie SMB1; NFS. Jedes als Ganzes ein- oder ausgeschaltet'],
          ['Zugriff', 'Lesen und Schreiben oder nur Lesen, für jede Person und Gruppe; NFS für jeden Rechner oder jedes Netz'],
          ['Je Freigabe', 'Ein Kontingent, die Kompression (lz4, zstd oder aus) und die Blockgröße'],
          ['Snapshots', 'Stündlich, täglich, wöchentlich und monatlich, jeweils 1 bis 100 behalten; Dateien daraus zurückkopiert; eine Freigabe zurückgesetzt, nachdem Sie ihren Namen eingetippt haben'],
          ['Papierkorb', 'Einer für alle Ordner im Explorer; Löschen über SMB oder NFS ist endgültig, die Snapshots behalten, was da war'],
          ['Explorer', 'Ein Baum der Ordner, Ziehen und Ablegen, Hochladen, Ordner als Archiv herunterladen, eine Suche durch alle Unterordner'],
          ['USB-Laufwerke', 'FAT, exFAT, NTFS und ext4: eingehängt, zum Kopieren in beide Richtungen, ausgeworfen'],
          ['Liste und Raster [[next]]', 'Große Symbole im Raster, eine Leiste mit den Aktionen, die Seitenleiste in Abschnitten'],
          ['Getestet', 'Mit echten SMB- und NFS-Clients in einer virtuellen Maschine. Ein Windows- oder macOS-Rechner hat noch keine Freigabe benutzt.'],
        ],
        docs: [['Rechte an Freigaben und Dateien', 'docs/architecture.md#44-share-and-file-permissions']],
      },
      {
        id: 'apps',
        label: 'Apps und Docker',
        title: 'Apps per Klick, und Sie können sie ändern.',
        text: [
          'Das App Center installiert Apps aus dem Community-Katalog oder aus Katalogen, die Sie hinzufügen. Sie wählen Ordner, Ports und Einstellungen einer App und sehen ihre compose.yaml, bevor sie startet; danach ist sie ein gewöhnliches Docker-Compose-Projekt von Ihnen, das Sie in der Docker-App ändern, aktualisieren und entfernen.',
          'Was über einen Container hinausgeht, etwa ein Gerät, das Netz des Rechners oder der Docker-Socket, wird genannt und braucht Ihre Zustimmung. Docker selbst ist ein Plugin des App Centers aus Debians eigenen Paketen, installiert, wenn Sie es brauchen.',
        ],
        specs: [
          ['Kataloge', 'Der Community-Katalog fest eingebaut; weitere aus einem GitHub-Repository oder über eine Adresse'],
          ['Zustimmung', 'Geräte, das Netz des Rechners, der Docker-Socket und Ordner des Rechners werden genannt, bevor ein Projekt startet'],
          ['Docker-App', 'Container, Images, Netzwerke und Compose-Projekte; eine Seite für jeden Container mit Live-Log und Terminal'],
          ['Image-Updates', 'Container mit neuerem Image markiert, aus der Liste oder nach Zeitplan aktualisiert'],
          ['Volumes', 'Mit den Containern aufgelistet, die sie nutzen, täglich, wöchentlich oder monatlich in eine Freigabe gesichert, unter ihrem Namen oder in ein anderes Volume wiederhergestellt'],
          ['Plugins', 'Docker, Zertifikate von Let’s Encrypt; virtuelle Maschinen und Backup [[next]]'],
          ['Architekturen [[next]]', 'Jede App sagt, für welche Architekturen ihre Images gebaut sind; eine ohne passendes Image für Ihren Rechner lässt sich nicht installieren'],
          ['Getestet', 'In virtuellen Maschinen: Docker als Plugin installiert, Projekte mit Zustimmung, das Terminal, Image-Updates, Volumes gesichert und wiederhergestellt, eine App aus dem Katalog als eigenes Projekt.'],
        ],
        docs: [['Apps und Docker', 'docs/architecture.md#49-apps-docker']],
      },
      {
        id: 'vms',
        label: 'Virtuelle Maschinen',
        marks: ['preview', 'next'],
        title: 'Virtuelle Maschinen neben Ihren Daten.',
        text: [
          'Das Plugin Virtuelle Maschinen im App Center bringt libvirt und QEMU aus Debian mit und dazu eine App, in der Administratoren VMs anlegen, ändern, starten und stoppen. Eine VM kann mehrere Platten und Netzwerkkarten haben, ihre ISOs kommen aus einer Image-Bibliothek, und ihre Konsole öffnet sich im Browser.',
          'Snapshots erfassen alle Platten einer VM auf einmal, von Hand oder nach Zeitplan. Backups gehen in eine Freigabe oder auf ein USB-Laufwerk und werden als neue VM oder über die alte wiederhergestellt. Für Windows 11 bekommt eine VM ein TPM und Secure Boot.',
          'Virtuelle Maschinen sind eine Vorschau und gibt es nur auf x86-64. Das Plugin prüft zuerst, ob der Prozessor sie ausführen kann (Intel VT-x oder AMD-V).',
        ],
        specs: [
          ['Hardware', 'Bis zu 8 Platten (virtio oder SATA), bis zu 4 Netzwerkkarten (virtio oder e1000e), bis zu 3 Laufwerke für ISOs; UEFI oder BIOS'],
          ['Vorlagen', 'Linux, Windows (mit TPM und Secure Boot) und Sonstige'],
          ['Netzwerke', 'Über das NAS, an einer Bridge, direkt an einer Netzwerkkarte (macvtap) oder in einem internen Netz, von dem sich das NAS selbst fernhält'],
          ['Speicher', 'Platten als ZFS-Volumes auf einem oder mehreren Pools; jeder Pool zeigt seinen Zustand, seinen Platz und die VMs darauf'],
          ['Images', 'ISOs aus einer Freigabe kopiert oder aus dem Browser hochgeladen'],
          ['Konsole und Last', 'Die Konsole im Browser (noVNC); Prozessor und Speicher jeder VM live'],
          ['Snapshots', 'Alle Platten auf einmal, die Dateisysteme des Gasts eingefroren, wenn sein QEMU Guest Agent antwortet; stündlich, täglich, wöchentlich oder monatlich; zurückgesetzt, während die VM aus ist'],
          ['Backups', 'Jede Platte mit zstd komprimiert und beim Wiederherstellen an ihrer Prüfsumme geprüft'],
          ['Geräte des Rechners', 'USB-Geräte, auch während die VM läuft; PCI-Geräte mit IOMMU und ausgeschalteter VM. Geräte, die der Rechner selbst braucht, etwa der Controller seiner Platten, werden verweigert'],
          ['Getestet', 'In verschachtelten virtuellen Maschinen: VMs mit mehreren Platten und Karten, die Image-Bibliothek, die Konsole, Snapshots per Prüfsumme verglichen, Backups wiederhergestellt, TPM und Secure Boot. Noch nicht: durchgereichte Geräte auf echter Hardware und eine Installation von Windows 11.'],
        ],
        docs: [['Virtuelle Maschinen', 'docs/architecture.md#413-virtual-machines']],
      },
      {
        id: 'backup',
        label: 'Backups',
        marks: ['next'],
        title: 'Eine zweite Kopie, an einem anderen Ort.',
        text: [
          'ZFS schützt Ihre Daten vor einer ausfallenden Platte, nicht vor einem gelöschten Ordner, einem Brand oder einem Diebstahl. Das Backup-Plugin bringt rsync und rclone aus Debian mit und dazu eine App, in der Administratoren Sicherungsaufgaben einrichten: von einer Freigabe auf einen anderen Pool, ein USB-Laufwerk, einen Server oder in eine Cloud, nach Zeitplan oder immer dann, wenn das Laufwerk eingesteckt wird.',
          'Jeder Lauf ist ein Auftrag mit Protokoll und Dateiliste, und ein fehlgeschlagener oder unvollständiger Lauf wird gemeldet. Eine Wiederherstellung holt eine Version ganz oder teilweise zurück, an ihren alten Ort oder in einen anderen Ordner.',
        ],
        specs: [
          ['Ziele', 'Eine andere Freigabe oder ein anderer Pool, ein USB-Laufwerk, ein rsync-Server über seinen Daemon oder über SSH mit festgehaltenem Host-Schlüssel, Google Drive, OneDrive'],
          ['Von einem Server', 'Ein Ordner eines Servers ins NAS gesichert'],
          ['Spiegel oder Versionen', 'Ein Spiegel, der auf Wunsch einige Tage behält, was ein Lauf löscht oder ersetzt; oder datierte Versionen, unveränderte Dateien als Hardlink auf die vorige, behalten nach Anzahl und Alter'],
          ['Verschlüsselung', 'Namen und Inhalte mit rclones crypt verschlüsselt, in eine Freigabe, auf ein Laufwerk, in eine Cloud oder auf einen SSH-Server'],
          ['Zeitpläne', 'Stündlich, täglich oder wöchentlich in der Zeitzone des NAS, oder wenn das Laufwerk eingesteckt wird'],
          ['Abschottung', 'Jeder Lauf in einer eigenen Unit, die nur ihre Ordner sieht und nur ins Ziel schreibt; Passwörter und Schlüssel nie auf einer Befehlszeile; Google Drive gibt nur die Dateien frei, die das NAS schreibt'],
          ['Ebenfalls gesichert', 'Docker-Volumes in eine Freigabe; virtuelle Maschinen in eine Freigabe oder auf ein USB-Laufwerk; die Konfiguration, siehe Updates und Wiederherstellung'],
          ['Getestet', 'In virtuellen Maschinen: Spiegel und Versionen zwischen Pools, ein USB-Laufwerk, ein rsync-Daemon und SSH, Wiederherstellungen, ein verschlüsseltes Backup. Google Drive und OneDrive nur gegen Attrappen: Ein Backup in ein echtes Konto gab es noch nicht.'],
        ],
        docs: [['Backup', 'docs/architecture.md#414-backup']],
      },
      {
        id: 'network',
        label: 'Netzwerk',
        title: 'Netzwerkänderungen, die auf Ihre Bestätigung warten.',
        text: [
          'Jede Netzwerkkarte bekommt ihre Adressen per DHCP oder fest, IPv6 aus Router-Ankündigungen und bis zu drei Nameserver. zendiloOS verwaltet das Netzwerk über systemd-networkd, jetzt auch auf Installationen vom ISO, und übernimmt ein Debian, das mit ifupdown eingerichtet ist, wenn Sie es wünschen.',
          'Eine Änderung bleibt erst, wenn Sie sie innerhalb von zwei Minuten bestätigen, von der neuen Adresse aus, falls sie sich geändert hat; sonst geht alles von selbst zurück. Änderungen an zendiloOS vorbei, etwa an der Konsole, fallen auf, und Sie entscheiden, ob zendiloOS seine Einstellungen wiederherstellt oder die Dateien übernimmt.',
        ],
        specs: [
          ['Je Karte', 'IPv4 per DHCP, fest oder aus; IPv6 aus Router-Ankündigungen oder aus; bis zu drei Nameserver'],
          ['Bestätigung', 'Zwei Minuten zum Bestätigen im Browser, sonst geht die Änderung zurück; vor dem Abschalten einer Karte kommt eine Rückfrage [[next]]'],
          ['Bridges [[next]]', 'Kabelgebundene Karten, Bonds und VLANs als Mitglieder, oder keine, nur für VMs; STP aus, wenn nicht gewünscht'],
          ['Bonds [[next]]', 'Active-Backup, 802.3ad (LACP) oder balance-alb'],
          ['VLANs [[next]]', 'IDs 1 bis 4094, auf einer Karte, einem Bond oder einer Bridge'],
          ['ISO und ifupdown [[next]]', 'Installationen vom ISO ab dem ersten Start verwaltet; ein Debian mit ifupdown auf Wunsch übernommen, und was sich nicht übernehmen lässt, mit Datei, Zeile und Grund genannt und so belassen'],
          ['Änderungen von außen [[next]]', 'Eine Benachrichtigung und ein Hinweis auf der Netzwerkseite, dann wiederherstellen oder die Dateien übernehmen'],
          ['Name des Rechners [[next]]', 'In der Oberfläche geändert, bis zu 15 Zeichen; SMB, mDNS (name.local) und WS-Discovery ziehen mit, und das eigene Zertifikat wird neu erstellt'],
          ['Getestet', 'In virtuellen Maschinen: Adressen geändert, eine Änderung, die den Rechner abschneidet, geht zurück, die Übernahme von ifupdown mit und ohne Bestätigung, Bridges, Bonds und VLANs.'],
        ],
        docs: [['Netzwerk', 'docs/architecture.md#6-further-decisions']],
      },
      {
        id: 'security',
        label: 'Sicherheit',
        title: 'Nichts ändert sich ohne Prüfung.',
        text: [
          'Die Weboberfläche und ihre API laufen ohne Rechte. Was das System verändert, geht durch zendiloos-agent, einen kleinen, abgeschotteten Dienst, der jede Anfrage gegen strenge Regeln prüft und die Werkzeuge mit festen Argumenten aufruft.',
          'Die Anmeldung kann einen Code aus einer Authenticator-App verlangen, Fehlversuche sperren die Adresse für eine Weile, und jede Sitzung lässt sich beenden. Die Firewall bestimmt, wer welchen Dienst erreicht, die von Docker veröffentlichten Ports eingeschlossen, und eine Änderung an ihr geht zurück, wenn Sie sie nicht bestätigen.',
        ],
        specs: [
          ['Anmeldung', 'Zwei Faktoren mit einer Authenticator-App, Wiederherstellungscodes, eine Passwortrichtlinie, Grenzen für Fehlanmeldungen und gesperrte Adressen'],
          ['Rollen', 'Administrator, Benutzer und Nur-Lesen; der Server prüft jede Anfrage, egal was die Oberfläche zeigt'],
          ['Firewall', 'nftables, Regeln nach Dienst, Adresse oder Netz, die von Docker veröffentlichten Ports eingeschlossen; eine Änderung geht nach 90 Sekunden ohne Bestätigung zurück'],
          ['HTTPS', 'TLS 1.2 oder neuer; das eigene Zertifikat des Rechners oder eines von Let’s Encrypt über HTTP-01 oder DNS-01'],
          ['DNS-Anbieter [[next]]', '81 für DNS-01, von DynDNS-Diensten wie IPv64 bis zu Hostern und großen Clouds, jeder gegen Debians acme.sh geprüft'],
          ['SSH', 'Für eine Aufgabe eingeschaltet, mit Port und der Wahl, wer sich anmelden darf; nach spätestens einem Tag schaltet es sich selbst wieder ab'],
          ['Protokoll', 'Jede Änderung eines Administrators festgehalten; durchsuchbar und als CSV exportiert [[next]]'],
          ['Releases', 'Mit minisign signiert und vor der Installation geprüft'],
          ['Stückliste der Software [[next]]', 'CycloneDX für jedes Paket eines Releases, und die Lizenzen von allem, was es enthält'],
          ['Getestet', 'In virtuellen Maschinen: TLS, Fehlanmeldungen und gesperrte Adressen, Sitzungen, Zwei-Faktor-Anmeldung, die Firewall mit den Ports von Docker, SSH, das sich selbst abschaltet, Zertifikate über ACME.'],
        ],
        docs: [
          ['Sicherheitsmodell', 'docs/architecture.md#4-security-and-permission-model'],
          ['Lizenzen', 'docs/licences.md'],
        ],
      },
      {
        id: 'updates',
        label: 'Updates und Wiederherstellung',
        title: 'Updates ohne Überraschungen, und ein Weg zurück.',
        text: [
          'Einmal am Tag sucht zendiloOS nach Paket-Updates von Debian und nach neuen Releases von zendiloOS in Ihrem Kanal. Sie entscheiden, wann installiert wird, ein Release wird nur mit gültiger Signatur installiert, und das NAS startet nur neu, wenn Sie es sagen.',
          'ZFS wird für jeden Kernel gebaut. Ein Kernel, für den das ZFS-Modul nicht gebaut werden konnte, startet nie: GRUB startet weiter den neuesten Kernel, der es hat, und die Seite Updates sagt, welcher als Nächstes startet und warum. [[next]]',
          'Eine Konfigurationssicherung hält Konten, Freigaben, Einstellungen und Zertifikate in einer Datei fest, mit einer Passphrase verschlüsselt. Auf einer frischen Installation statt der Ersteinrichtung wiederhergestellt, bringt sie den Rechner zurück: Die Pools der alten Installation werden importiert, wenn Sie es wollen, und ihre Netzwerk- und Firewall-Einstellungen nacheinander übernommen, jede bestätigt. [[next]]',
        ],
        specs: [
          ['Kanäle', 'Stabil für Releases, Test auch für Release-Kandidaten, Entwicklung für jede Änderung; ein NAS nimmt nur eine neuere Version als seine eigene'],
          ['Signatur', 'minisign über die Prüfsummen; die Signatur nennt die Version, und ein NAS nimmt einen Test- oder Entwicklungsstand nur in diesem Kanal'],
          ['Downloads [[next]]', 'Bis zu viermal versucht, wenn GitHub nicht antwortet'],
          ['Konfigurationssicherung [[next]]', 'Mit age und einer Passphrase von mindestens 12 Zeichen verschlüsselt; heruntergeladen, oder täglich oder wöchentlich in eine Freigabe oder auf ein USB-Laufwerk, die neuesten behalten'],
          ['Wiederherstellung [[next]]', 'Bei der Ersteinrichtung oder später; die ganze Datei geprüft, bevor sich etwas ändert; Pools auf Wunsch importiert; Netzwerk und Firewall erst nach Bestätigung übernommen'],
          ['Rettung [[next]]', '„Rescue a zendiloOS system“ im Startmenü des ISO: eine Shell im installierten System, um von einem Rechner, der nicht mehr startet, eine Sicherung zu holen oder ihn zu reparieren'],
          ['Noch nicht', 'Ein Wiederherstellungseintrag im Startmenü des installierten Systems und ein Live-Image mit ZFS für einen Rechner, dessen Systemplatte fehlt'],
          ['Getestet', 'In virtuellen Maschinen: Updates von Debian und zendiloOS, Verweigerungen, ein Kernel ohne ZFS, der nie startet, eine ältere Installation mit ihren Daten aktualisiert, eine Konfigurationssicherung auf einem frischen Rechner wiederhergestellt und ihr Pool importiert.'],
        ],
        docs: [
          ['Releases und Kanäle', 'docs/releases.md'],
          ['Konfigurationssicherung und Wiederherstellung', 'docs/architecture.md#415-configuration-backup-and-recovery'],
        ],
      },
      {
        id: 'monitor',
        label: 'Überwachung und Benachrichtigungen',
        title: 'Probleme gemeldet, bevor sie wachsen.',
        text: [
          'Widgets auf dem Desktop und die Ressourcenanzeige zeigen Prozessor, Speicher, Netzwerk und Platten im Verlauf. zendiloOS sieht jede Minute nach den Pools und alle sechs Stunden nach den SMART-Werten der Platten und sagt Bescheid, wenn sich etwas ändert.',
          'Benachrichtigungen erreichen Sie im Browser, per E-Mail über einen Mailserver Ihrer Wahl und per Webhook, für jede Art einzeln gewählt. Eine, die nicht hinausgeht, weil das Netz noch nicht steht, wird später erneut versucht. [[next]]',
        ],
        specs: [
          ['Kanäle', 'Im Browser, per E-Mail über einen Mailserver, per Webhook; für jede Art einzeln gewählt'],
          ['Speicher', 'Ein Pool beeinträchtigt oder wieder intakt, ein Resilver oder Scrub fertig, ein Volume zu 80 oder 90 % voll, die SMART-Werte einer Platte schlechter'],
          ['eMMC [[next]]', 'Der Verschleiß einer eMMC-Systemplatte, die kein SMART kennt, wie auf Einplatinenrechnern, etwa dem ZimaBoard'],
          ['Zustellung [[next]]', 'Eine Warteschlange, die Neustarts übersteht: erneut versucht, anfangs nach einer Minute, später stündlich, etwa zwölf Stunden lang'],
          ['Weniger Schreibzugriffe [[next]]', 'Anfragen, die nur lesen, nur noch im Debug-Protokoll, das Journal auf 512 MiB begrenzt, systemd nur neu geladen, wenn sich etwas geändert hat'],
          ['Getestet', 'In virtuellen Maschinen: E-Mail und Webhook, eine Zustellung erneut versucht, sobald der Empfänger zurück ist, auch über einen Neustart hinweg.'],
        ],
        docs: [['Überwachung', 'docs/architecture.md#5-storage-concept']],
      },
      {
        id: 'hardware',
        label: 'Hardware und Architekturen',
        title: 'Vom Mini-PC bis zum NAS-Board.',
        text: [
          'zendiloOS läuft auf Debian 13. Auf x86-64 ist das ein NAS-Gerät, ein Mini-PC oder ein eigener Rechner, mit UEFI oder BIOS. Es braucht eine Platte für das System, eine oder mehrere für Daten (SATA oder NVMe) und eine Netzwerkverbindung: Der Installer holt Debians Pakete von dessen Spiegelserver.',
          'zendiloOS wird jetzt auch für arm64 gebaut: Pakete und ein Installations-ISO, das über UEFI startet, für NAS-Boards und Einplatinenrechner, deren Firmware einen USB-Stick über UEFI startet und deren Hardware Debians eigener Kernel unterstützt. Boards, die den Kernel ihres Herstellers brauchen, funktionieren nicht.{{ Bis ein stabiles Release es enthält, wird arm64 vom ISO des Testreleases installiert.}} [[next]]',
          'Getestet wird zendiloOS von Anfang bis Ende in virtuellen Maschinen. Der Probebetrieb auf echter NAS-Hardware steht noch aus, und auf einem echten arm64-Board lief es noch nicht.',
        ],
        specs: [
          ['x86-64', 'UEFI oder BIOS; das ISO hat beide Startmenüs und den grafischen Installer'],
          ['arm64 [[next]]', 'Nur UEFI (EDK2 oder das von U-Boot), der Text-Installer, den auch eine serielle Konsole zeigt{{; das ISO ist das des Testreleases}}; in der CI gebaut und seine Tests auf arm64 ausgeführt; auf einem echten Board noch nicht ausprobiert'],
          ['Virtuelle Maschinen', 'Nur auf x86-64, mit Intel VT-x oder AMD-V; PCI-Geräte brauchen eine IOMMU'],
          ['Installer', 'Debians eigener, mit sechs Fragen: Sprache, Standort, Tastatur, Name, Passwort für root und die Platte für das System, die nie für Sie gewählt wird'],
          ['Ein Release enthält', 'Die Pakete, signierte Prüfsummen und die Installations-ISOs; Pakete und ein ISO für arm64 und eine Stückliste der Software je Paket [[next]]'],
          ['NAS-Modelle', 'Schachtaufbau bekannter Modelle, zuerst das UGREEN DXP4800 Plus, auf dem echten Gerät noch nicht bestätigt'],
          ['Getestet', 'Die Installation vom ISO, unbeaufsichtigt in einer frischen virtuellen Maschine. Auf arm64 laufen die Tests des Backends nativ; die emulierte Installation lief noch nicht bis zum Ende.'],
        ],
        docs: [
          ['Hardware', '#hardware'],
          ['Tests auf arm64', 'docs/testing.md#arm64'],
          ['Was noch nicht getestet ist', 'docs/testing.md#not-tested-yet'],
        ],
      },
    ],
  },
}
