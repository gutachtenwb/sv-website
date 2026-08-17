import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import CTASection from "@/components/CTASection";
import ImagePlaceholder from "@/components/ImagePlaceholder";

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

      <section className="max-w-content mx-auto px-6 pb-16 grid md:grid-cols-2 gap-12 items-start">
        <div>
          <h2 className="text-2xl font-semibold font-display">Leistungen</h2>
          <ul className="mt-6 space-y-2.5 text-sm">
            {leistungen.map((l) => (
              <li key={l} className="flex items-start gap-2">
                <span className="text-signalorange mt-1">—</span>
                <span className="text-graphit/80">{l}</span>
              </li>
            ))}
          </ul>
        </div>
        <ImagePlaceholder label="Oldtimer / Youngtimer bei der Begutachtung" className="h-full min-h-[18rem]" />
      </section>

      <CTASection
        title="Ihren Klassiker bewerten lassen"
        text="Ob Kauf, Verkauf oder Versicherung — wir dokumentieren Zustand und Wert Ihres Fahrzeugs."
      />
    </>
  );
}
