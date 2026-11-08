export default {
  lang: 'de',
  locale: 'de_DE',
  title: 'zendiloOS: ein NAS, das Sie im Browser bedienen',
  description:
    'zendiloOS macht aus Debian 13 ein NAS mit ZFS-Speicher, über SMB und NFS freigegebenen Ordnern, einem App Center für Docker-Apps, Zwei-Faktor-Anmeldung, Firewall und signierten Updates, bedient über einen Desktop im Browser. Kostenlos und Open Source.',
  tourLabel: 'Ein Rundgang durch zendiloOS',

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
    alt: 'Der zendiloOS-Desktop im Browser: Der Datei-Explorer zeigt den Ordner documents, daneben zeigen Widgets Systemzustand, Auslastung, Netzwerk und Speicher.',
    chipPool: ['Pool tank', 'Spiegel · intakt'],
    chipUpdate: ['Update installiert', 'Signatur geprüft'],
  },

  builtOn: { title: 'Gebaut auf Open Source, der Sie schon vertrauen' },

  features: {
    eyebrow: 'Funktionen',
    title: 'Alles, was ein NAS braucht, auf einem Desktop.',
    lead: 'Speicher, freigegebene Ordner, Apps und das System drumherum, mit Fenstern, Dock und Widgets, wie Sie sie längst kennen.',
    items: [
      {
        id: 'storage',
        title: 'Speicher mit ZFS',
        text: 'Pools von der einzelnen Platte bis RAIDZ3, mit Leitplanken, die erklären, was jede Anordnung übersteht.',
      },
      {
        id: 'shares',
        title: 'Freigegebene Ordner',
        text: 'Ordner auf einem Volume, freigegeben über SMB für Windows und macOS und NFS für Linux, mit Rechten für jede Person und Gruppe.',
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
        text: 'Container, Images, Netzwerke und Compose-Projekte, mit Live-Logs, Terminal und Image-Updates.',
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
        'Eine Benachrichtigung, wenn eine Platte oder ein Pool Sie braucht',
      ],
      alt: 'Die Laufwerke in der Systemsteuerung: jede Platte mit Modell, Größe, Pool, Temperatur und SMART-Zustand.',
    },
    {
      id: 'shares',
      eyebrow: 'Dateien und Ordner',
      title: 'Ein freigegebener Ordner für jedes Gerät im Haus.',
      text: 'Jeder Ordner auf einem Volume lässt sich freigeben, und Sie bestimmen, wer lesen oder schreiben darf. Windows und macOS finden ihn über SMB, Linux bindet ihn über NFS ein, und an die Dateien kommt jeder auch im Browser, in einem Explorer.',
      checks: [
        'Rechte für jede Person und Gruppe',
        'Vorherige Versionen aus Snapshots, ein Papierkorb für alle Ordner',
        'USB-Laufwerke im Explorer, zum Kopieren und Auswerfen',
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
      { title: 'Herunterladen', text: 'Laden Sie das Installations-ISO des neuesten stabilen Releases herunter.' },
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
      'Einen x86-64-Rechner; arm64 ist geplant',
      'Eine Platte für das System, eine oder mehrere für Ihre Daten',
      'Eine Netzwerkverbindung: Die Pakete kommen von Debians Spiegelserver',
    ],
    note: 'zendiloOS ist noch jung. Probieren Sie es auf Hardware aus, deren Platten nichts enthalten, das Ihnen fehlen würde.',
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
        a: 'Auf jedem x86-64-Rechner mit einer Platte für das System, einer oder mehreren Platten für Daten und einer Netzwerkverbindung. Unterstützung für arm64 ist geplant.',
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
    iso: 'ISO herunterladen',
    releases: 'Releases',
    architecture: 'Architektur',
    roadmap: 'Roadmap',
    catalog: 'Community-Katalog',
    license: '© {year} Die Autoren von zendiloOS. Lizenziert unter Apache-2.0.',
    trademark: 'Debian ist eine eingetragene Marke von Software in the Public Interest, Inc. zendiloOS steht in keiner Verbindung zum Debian-Projekt.',
    imprint: 'Impressum',
  },
}
