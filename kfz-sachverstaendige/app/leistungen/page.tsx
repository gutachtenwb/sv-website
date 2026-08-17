import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import ServiceCard from "@/components/ServiceCard";
import CTASection from "@/components/CTASection";

export const metadata: Metadata = {
  title: "Leistungen",
  description:
    "Unfallgutachten, technische Beweissicherung, Fahrzeugbewertung und Kaufbegleitung — das Leistungsspektrum des KFZ-Sachverständigenbüros Württemberg in Villingen-Schwenningen.",
  alternates: { canonical: "/leistungen" },
};

const kategorien = [
  {
    titel: "Unfall & Schaden",
    beschreibung:
      "Gutachten und Dokumentation rund um Verkehrsunfälle und Fahrzeugschäden.",
    leistungen: [
      {
        href: "/leistungen/unfallgutachten",
        titel: "Unfallgutachten",
        text: "Schadenaufnahme, Reparaturkosten, Wiederbeschaffungswert, Restwert und Wertminderung nach einem Unfall.",
      },
    ],
  },
  {
    titel: "Technische Untersuchungen",
    beschreibung:
      "Über die reine Sichtprüfung hinaus: Messung, Diagnose und technische Beweissicherung.",
    leistungen: [
      {
        href: "/leistungen/technische-beweissicherung",
        titel: "Technische Beweissicherung",
        text: "Fotodokumentation, Schadenanalyse, Plausibilitäts- und Kompatibilitätsprüfung, Spaltmaßprüfung.",
      },
      {
        href: "/leistungen/karosserievermessung",
        titel: "3D-Karosserievermessung",
        text: "Karosserie- und Rahmenvermessung mit Spanesi Touch bei Verdacht auf Strukturschäden.",
      },
      {
        href: "/leistungen/achsvermessung",
        titel: "Achsvermessung",
        text: "Prüfung der Fahrwerksgeometrie mit Beissbarth Q.Lign, insbesondere nach Radanstoß.",
      },
      {
        href: "/leistungen/lackschichtdickenmessung",
        titel: "Lackschichtdickenmessung",
        text: "Erkennung möglicher Nachlackierungen auf verschiedenen Werkstoffen, einschließlich geeigneter Kunststoffbauteile.",
      },
      {
        href: "/leistungen/fahrzeugdiagnose",
        titel: "Fahrzeugdiagnose",
        text: "Elektronische Fehlerspeicherauslese als Ergänzung zur mechanischen Schadenaufnahme.",
      },
    ],
  },
  {
    titel: "Bewertung",
    beschreibung:
      "Fundierte Wertermittlung für Kauf, Verkauf, Versicherung und besondere Fahrzeuge.",
    leistungen: [
      {
        href: "/leistungen/fahrzeugbewertung",
        titel: "Fahrzeugbewertung",
        text: "Marktwertermittlung für Kauf, Verkauf, Leasing, Fuhrpark und Versicherungsfälle.",
      },
      {
        href: "/leistungen/oldtimer-youngtimer",
        titel: "Oldtimer & Youngtimer",
        text: "Zustands- und Wertermittlung für historische Fahrzeuge und Youngtimer.",
      },
      {
        href: "/leistungen/kaufbegleitung",
        titel: "Kaufbegleitung",
        text: "Technischer Check vor dem Fahrzeugkauf — Karosserie, Lack, Diagnose und Plausibilität.",
      },
    ],
  },
];

export default function LeistungenPage() {
  return (
    <>
      <PageHero
        eyebrow="Leistungen"
        title="Gutachten, auf die Sie sich verlassen können"
        lead="Vom klassischen Unfallgutachten bis zur präzisen technischen Vermessung — hier finden Sie das vollständige Leistungsspektrum des Sachverständigenbüros."
        breadcrumbs={[{ name: "Leistungen", path: "/leistungen" }]}
      />

      <div className="max-w-content mx-auto px-6 pb-20 space-y-20">
        {kategorien.map((kat) => (
          <section key={kat.titel}>
            <p className="eyebrow mb-2">{kat.titel}</p>
            <p className="text-graphit/70 max-w-2xl mb-8">{kat.beschreibung}</p>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-messing/30">
              {kat.leistungen.map((l) => (
                <ServiceCard key={l.href} href={l.href} titel={l.titel} text={l.text} />
              ))}
            </div>
          </section>
        ))}

        <section>
          <p className="eyebrow mb-2">Weitere Fahrzeugarten</p>
          <p className="text-graphit/70 max-w-2xl leading-relaxed">
            Unsere Leistungen richten sich grundsätzlich an PKW, Elektro- und
            Hybridfahrzeuge, Transporter, Motorräder sowie Wohnmobile und
            Camper. Der konkrete Prüfungsumfang richtet sich nach Fahrzeug,
            Auftrag und Zugänglichkeit — sprechen Sie uns bei Fragen zu
            Ihrem konkreten Fahrzeug gerne an.
          </p>
        </section>
      </div>

      <CTASection
        title="Nicht sicher, welche Leistung passt?"
        text="Schildern Sie uns kurz Ihr Anliegen — wir sagen Ihnen, welches Vorgehen sinnvoll ist."
      />
    </>
  );
}
