import { siteConfig } from "./site-config";

// Strukturierte Daten (Schema.org) auf Basis der bestätigten Unternehmensdaten.
// Es werden bewusst keine Öffnungszeiten, Bewertungen oder weitere
// Standorte angegeben, da diese nicht bestätigt sind.
export function localBusinessSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: siteConfig.companyName,
    image: `${siteConfig.siteUrl}/opengraph-image`,
    url: siteConfig.siteUrl,
    telephone: siteConfig.phone.href.replace("tel:", ""),
    email: siteConfig.email.display,
    address: {
      "@type": "PostalAddress",
      streetAddress: siteConfig.address.street,
      postalCode: siteConfig.address.zip,
      addressLocality: siteConfig.address.city,
      addressRegion: siteConfig.address.region,
      addressCountry: siteConfig.address.country,
    },
    areaServed: siteConfig.region.areas.map((name) => ({
      "@type": "City",
      name,
    })),
    founder: {
      "@type": "Person",
      name: siteConfig.contactPerson,
    },
    additionalType: "https://www.wikidata.org/wiki/Q1354260",
    description:
      "KFZ-Sachverständigenbüro mit eigenem Prüfzentrum in Villingen-Schwenningen: Unfallgutachten, Achsvermessung, 3D-Rahmenvermessung, Schadengutachten und Fahrzeugbewertung. ADAC Vertrags-Sachverständiger.",
  };
}

export function faqSchema(items: { question: string; answer: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };
}

export function breadcrumbSchema(items: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: `${siteConfig.siteUrl}${item.path}`,
    })),
  };
}

export function JsonLd({ data }: { data: Record<string, unknown> }) {
  return (
    <script
      type="application/ld+json"
      // eslint-disable-next-line react/no-danger
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
