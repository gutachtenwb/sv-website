import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import CTASection from "@/components/CTASection";
import ImagePlaceholder from "@/components/ImagePlaceholder";

export const metadata: Metadata = {
  title: "3D-Karosserie- und Rahmenvermessung mit Spanesi Touch",
  description:
    "Professionelle 3D-Karosserie- und Rahmenvermessung mit Spanesi Touch in Villingen-Schwenningen — Vergleich von Soll- und Ist-Maßen zur Prüfung der Fahrzeugstruktur.",
  alternates: { canonical: "/leistungen/karosserievermessung" },
};

const einsatz = [
  "Strukturtreffer",
  "Verdacht auf Karosserieverformung",
  "Unfall mit höherer Krafteinwirkung",
  "Beweissicherung",
  "Prüfung von Fahrzeugstrukturen",
  "Vergleich von Soll- und Ist-Maßen",
  "Dokumentation möglicher Verformungen",
];

export default function KarosserievermessungPage() {
  return (
    <>
      <PageHero
        eyebrow="Spanesi Touch"
        title="3D-Karosserie- und Rahmenvermessung"
        lead="Für die professionelle Karosserie- und Rahmenvermessung setzen wir das System Spanesi Touch ein. Damit lassen sich die Maße der Fahrzeugstruktur erfassen und mit den Sollwerten vergleichen."
        breadcrumbs={[
          { name: "Leistungen", path: "/leistungen" },
          { name: "3D-Karosserievermessung", path: "/leistungen/karosserievermessung" },
        ]}
      />

      <section className="max-w-content mx-auto px-6 pb-16 grid md:grid-cols-2 gap-12 items-start">
        <ImagePlaceholder label="Spanesi Touch bei der Karosserievermessung" className="h-full min-h-[20rem] order-2 md:order-1" />
        <div className="order-1 md:order-2">
          <h2 className="text-2xl font-semibold font-display">
            Warum äußerlich unauffällig nicht gleich unbeschädigt bedeutet
          </h2>
          <p className="mt-4 text-graphit/70 leading-relaxed">
            Nach einem Unfall mit stärkerer Krafteinwirkung kann ein Fahrzeug
            von außen relativ unauffällig wirken, obwohl die tragende
            Struktur verändert wurde. Solche Strukturveränderungen sind mit
            bloßem Auge oft nicht zuverlässig erkennbar. Die 3D-Vermessung
            macht Abweichungen von den Sollmaßen sichtbar und dokumentierbar.
          </p>
        </div>
      </section>

      <section className="bg-graphit text-nebel">
        <div className="max-w-content mx-auto px-6 py-16">
          <h2 className="text-2xl font-semibold font-display">Einsatzbereiche</h2>
          <ul className="mt-8 grid sm:grid-cols-2 gap-x-8 gap-y-3">
            {einsatz.map((e) => (
              <li key={e} className="flex items-start gap-2 text-sm text-nebel/80">
                <span className="text-signalorange mt-1">—</span>
                <span>{e}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <CTASection
        title="Verdacht auf Strukturschäden?"
        text="Wir vermessen Ihr Fahrzeug mit Spanesi Touch und dokumentieren das Ergebnis nachvollziehbar."
      />
    </>
  );
}
