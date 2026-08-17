import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import CTASection from "@/components/CTASection";

export const metadata: Metadata = {
  title: "Oldtimer- & Youngtimerbewertung",
  description:
    "Zustands- und Wertermittlung für Oldtimer und Youngtimer in Villingen-Schwenningen — für Kauf, Verkauf und Versicherungszwecke.",
  alternates: { canonical: "/leistungen/oldtimer-youngtimer" },
};

const leistungen = [
  "Oldtimerbewertung",
  "Youngtimerbewertung",
  "Zustandsbewertung",
  "Marktwertermittlung",
  "Fahrzeug- und Fotodokumentation",
  "Bewertung für Kauf und Verkauf",
  "Bewertung für Versicherungszwecke",
];

export default function OldtimerYoungtimerPage() {
  return (
    <>
      <PageHero
        eyebrow="Bewertung"
        title="Oldtimer & Youngtimer"
        lead="Für historische Fahrzeuge und Youngtimer erstellen wir Zustands- und Wertgutachten — mit Blick für die Besonderheiten klassischer und junger Klassiker."
        breadcrumbs={[
          { name: "Leistungen", path: "/leistungen" },
          { name: "Oldtimer & Youngtimer", path: "/leistungen/oldtimer-youngtimer" },
        ]}
      />

      <section className="max-w-content mx-auto px-6 pb-16 md:pb-24">
        <div className="max-w-2xl border-t border-messing/30 pt-10">
          <h2 className="text-2xl font-semibold font-display">Leistungen</h2>
          <ul className="mt-6 grid sm:grid-cols-2 gap-x-8 gap-y-2.5 text-sm">
            {leistungen.map((l) => (
              <li key={l} className="flex items-start gap-2">
                <span className="text-safran mt-1">—</span>
                <span className="text-graphit/80">{l}</span>
              </li>
            ))}
          </ul>
          <p className="mt-8 text-graphit/70 leading-relaxed">
            Klassiker und junge Youngtimer bringen technische und
            wertbildende Besonderheiten mit, die eine pauschale Bewertung
            nicht abbildet. Wir berücksichtigen Zustand, Originalität,
            Historie und Marktlage und dokumentieren das Ergebnis
            nachvollziehbar — bei Bedarf ergänzt durch die Messmöglichkeiten
            unseres Prüfzentrums.
          </p>
        </div>
      </section>

      <CTASection
        title="Ihren Klassiker bewerten lassen"
        text="Ob Kauf, Verkauf oder Versicherung — wir dokumentieren Zustand und Wert Ihres Fahrzeugs."
      />
    </>
  );
}
