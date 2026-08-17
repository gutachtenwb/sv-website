# KFZ-Sachverständigenbüro Württemberg — Website

Website für das KFZ-Sachverständigenbüro Württemberg (Villingen-Schwenningen),
gebaut mit Next.js 14 (App Router), TypeScript und Tailwind CSS.

## Struktur

Alle Unternehmens- und Kontaktdaten (Name, Adresse, Telefon, E-Mail, ADAC-Status)
sind zentral in `lib/site-config.ts` gepflegt und werden von Header, Footer,
Kontaktseite, Impressum, Datenschutz und den strukturierten Daten
(`lib/schema.tsx`) importiert. Änderungen an Kontaktdaten müssen nur an
dieser einen Stelle vorgenommen werden.

## Enthaltene Seiten

- `/` – Startseite
- `/leistungen` – Leistungsübersicht (Unfall & Schaden, Technische
  Untersuchungen, Bewertung)
- `/leistungen/unfallgutachten` – Unfall- & Schadengutachten, Reparaturbestätigung, Nachbesichtigung
- `/leistungen/technische-beweissicherung` – Technische Beweissicherung
- `/leistungen/karosserievermessung` – 3D-Karosserievermessung (Spanesi Touch)
- `/leistungen/achsvermessung` – Achsvermessung (Beissbarth Q.Lign)
- `/leistungen/lackschichtdickenmessung` – Lackschichtdickenmessung
- `/leistungen/fahrzeugdiagnose` – Fahrzeugdiagnose / Fehlerspeicherauslese
- `/leistungen/fahrzeugbewertung` – Fahrzeugbewertung
- `/leistungen/oldtimer-youngtimer` – Oldtimer- & Youngtimerbewertung
- `/leistungen/kaufbegleitung` – Kaufbegleitung / Fahrzeug-Check
- `/technische-ausstattung` – Übersicht der technischen Ausstattung
- `/ueber-uns` – Über das Büro
- `/faq` – Häufige Fragen (mit FAQPage-Schema)
- `/kontakt` – Kontaktformular
- `/impressum` – Impressum
- `/datenschutz` – Datenschutzerklärung

Zusätzlich vorhanden: `app/sitemap.ts`, `app/robots.ts`, `app/icon.svg` und
`app/opengraph-image.tsx` (dynamisch generiertes Social-Preview-Bild über
`next/og`, keine externe Bibliothek nötig).

## Offene Punkte / noch zu ergänzen

- **Reale Fotos**: Es sind noch keine echten Fotos vom Betrieb, der
  Prüfhalle oder der Messtechnik vorhanden. Entsprechende Stellen sind im
  Code mit der Komponente `ImagePlaceholder` deutlich markiert (Text
  „Foto folgt: …") und sollten durch reale Aufnahmen ersetzt werden.
- **Impressum**: Die Umsatzsteuer-Identifikationsnummer ist noch nicht
  hinterlegt (`app/impressum/page.tsx`) und muss ergänzt werden.
- **Produktions-Domain**: `lib/site-config.ts` ermittelt die Basis-URL für
  Sitemap, robots.txt und OpenGraph automatisch über Vercel-Umgebungsvariablen.
  Für eine eigene Domain sollte zusätzlich `NEXT_PUBLIC_SITE_URL` in den
  Vercel-Projekteinstellungen gesetzt werden (z. B.
  `https://www.kfz-sv-wuerttemberg.de`).
- **Kontaktformular**: Ist aktuell nur clientseitig aufgebaut und versendet
  noch keine E-Mails. Für echten Versand z. B. eine Next.js API-Route oder
  einen Dienst wie Formspree/Resend anbinden.

## Lokale Entwicklung

```bash
npm install
npm run dev
```

Die Seite ist danach unter `http://localhost:3000` erreichbar.

## Deployment

Das Projekt ist mit Vercel verbunden. Ein Push auf den Hauptbranch löst
automatisch ein Deployment aus.
