// Zentrale, einheitliche Unternehmens- und Kontaktdaten.
// Alle Seiten und Komponenten sollen ausschließlich von hier importieren,
// damit Name, Adresse, Telefon und E-Mail überall konsistent sind.

export const siteConfig = {
  companyName: "KFZ-Sachverständigenbüro Württemberg",
  shortName: "KFZ-SV Württemberg",
  contactPerson: "Mehmet Altuntas",
  role: "Kfz-Sachverständiger",
  adacStatus: "ADAC Vertrags-Sachverständiger",

  address: {
    street: "Neuer Markt 2",
    zip: "78052",
    city: "Villingen-Schwenningen",
    region: "Baden-Württemberg",
    country: "DE",
  },

  phone: {
    display: "0162 8550 222",
    href: "tel:+491628550222",
  },

  email: {
    display: "gutachten.wb@gmail.com",
    href: "mailto:gutachten.wb@gmail.com",
  },

  region: {
    primary: "Villingen-Schwenningen",
    areas: [
      "Villingen-Schwenningen",
      "Schwarzwald-Baar-Kreis",
      "Donaueschingen",
      "Bad Dürrheim",
      "Rottweil",
      "Tuttlingen",
      "Niedereschach",
      "St. Georgen",
    ],
  },

  // Basis-URL für Sitemap, robots.txt, OpenGraph & canonical Links.
  // Sollte über die Umgebungsvariable NEXT_PUBLIC_SITE_URL auf die
  // tatsächliche Produktions-Domain gesetzt werden (z. B. in den
  // Vercel-Projekteinstellungen).
  siteUrl:
    process.env.NEXT_PUBLIC_SITE_URL ??
    (process.env.VERCEL_PROJECT_PRODUCTION_URL
      ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
      : process.env.VERCEL_URL
        ? `https://${process.env.VERCEL_URL}`
        : "http://localhost:3000"),
} as const;

// Bewusst schlanke Hauptnavigation. Die einzelnen Leistungsseiten
// (/leistungen/...) bestehen technisch weiterhin für SEO und Detailinfos,
// tauchen aber nicht mehr als Dropdown in der Hauptnavigation auf.
export const navItems = [
  { href: "/leistungen", label: "Leistungen" },
  { href: "/pruefzentrum", label: "Prüfzentrum" },
  { href: "/ueber-uns", label: "Über uns" },
  { href: "/kontakt", label: "Kontakt" },
] as const;

// Vollständige Leistungsliste für Footer, Sitemap-Verlinkung und die
// Leistungsübersichtsseite.
export const leistungenLinks = [
  { href: "/leistungen/unfallgutachten", label: "Unfallgutachten" },
  {
    href: "/leistungen/technische-beweissicherung",
    label: "Technische Beweissicherung",
  },
  {
    href: "/leistungen/karosserievermessung",
    label: "3D-Karosserievermessung",
  },
  { href: "/leistungen/achsvermessung", label: "Achsvermessung" },
  {
    href: "/leistungen/lackschichtdickenmessung",
    label: "Lackschichtdickenmessung",
  },
  { href: "/leistungen/fahrzeugdiagnose", label: "Fahrzeugdiagnose" },
  { href: "/leistungen/fahrzeugbewertung", label: "Fahrzeugbewertung" },
  {
    href: "/leistungen/oldtimer-youngtimer",
    label: "Oldtimer & Youngtimer",
  },
  { href: "/leistungen/kaufbegleitung", label: "Kaufbegleitung" },
] as const;
