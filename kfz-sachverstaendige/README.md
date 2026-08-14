# Kfz-Sachverständigenbüro — Website

Website für ein Kfz-Sachverständigenbüro, gebaut mit Next.js 14 (App Router),
TypeScript und Tailwind CSS.

## Enthaltene Seiten

- `/` – Startseite
- `/leistungen` – Leistungsübersicht
- `/ueber-uns` – Über das Büro
- `/kontakt` – Kontaktformular
- `/impressum` – Impressum (Pflichtangaben, mit Platzhaltern)
- `/datenschutz` – Datenschutzerklärung (Grundgerüst, mit Platzhaltern)

## Wichtig: Platzhalter ersetzen

Die folgenden Angaben sind Platzhalter und müssen vor dem Livegang ersetzt
werden:

- Firmenname, Ansprechpartner, Adresse, Telefon, E-Mail
  (in `components/Header.tsx`, `components/Footer.tsx`, `app/page.tsx`,
  `app/kontakt/page.tsx`, `app/ueber-uns/page.tsx`)
- Alle Angaben in `app/impressum/page.tsx` (rechtlich verpflichtend, im
  Zweifel anwaltlich prüfen lassen)
- Angaben in `app/datenschutz/page.tsx`, sobald weitere Dienste (z. B.
  Formular-Versand, Analyse-Tools) hinzukommen

Das Kontaktformular ist aktuell nur clientseitig aufgebaut und versendet
noch keine E-Mails. Dafür kann später z. B. eine Next.js API-Route oder ein
Dienst wie Formspree/Resend angebunden werden.

## Lokale Entwicklung

```bash
npm install
npm run dev
```

Die Seite ist danach unter `http://localhost:3000` erreichbar.

## Deployment

Das Projekt ist für ein Deployment über Vercel vorbereitet:

1. Repository auf GitHub veröffentlichen (bzw. bereits erledigt)
2. Auf [vercel.com](https://vercel.com) mit dem GitHub-Konto anmelden
3. „Add New… → Project" wählen und dieses Repository importieren
4. Vercel erkennt Next.js automatisch — Standardeinstellungen übernehmen
   und auf „Deploy" klicken
