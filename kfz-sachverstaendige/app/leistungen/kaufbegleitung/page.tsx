import type { Metadata } from "next";
import Image from "next/image";
import PageHero from "@/components/PageHero";
import CTASection from "@/components/CTASection";
import { fotos } from "@/lib/images";

export const metadata: Metadata = {
  title: "Kaufbegleitung / Fahrzeug-Check",
  description:
    "Kaufbegleitung und technischer Fahrzeug-Check in Villingen-Schwenningen: Karosserie, Lack, Spaltmaße, Fahrwerk und Diagnose vor dem Fahrzeugkauf.",
  alternates: { canonical: "/leistungen/kaufbegleitung" },
};

const pruefpunkte = [
  "allgemeiner Fahrzeugzustand",
  "Karosserie",
  "Lack",
  "erkennbare Vorschäden",
  "Lackschichtdicken, auch an geeigneten Kunststoffbauteilen",
  "Spaltmaße",
  "Reifen",
  "Fahrwerk",
  "Unterboden, soweit zugänglich",
  "elektronische Diagnose",
  "Plausibilität von Fahrzeugzustand und Angebot",
  "technische Auffälligkeiten",
];

export default function KaufbegleitungPage() {
  return (
    <>
      <PageHero
        eyebrow="Bewertung"
        title="Kaufbegleitung / Fahrzeug-Check"
        lead="Vor dem Kauf eines gebrauchten Fahrzeugs prüfen wir Zustand, Karosserie, Lack und Technik — mit denselben Messverfahren, die wir auch bei der Schadenbegutachtung einsetzen."
        breadcrumbs={[
          { name: "Leistungen", path: "/leistungen" },
          { name: "Kaufbegleitung", path: "/leistungen/kaufbegleitung" },
        ]}
      />

      <section className="max-w-content mx-auto px-6 pb-16 grid md:grid-cols-2 gap-12 items-start">
        <div>
          <h2 className="text-2xl font-semibold font-display">Mögliche Prüfpunkte</h2>
          <ul className="mt-6 grid sm:grid-cols-2 gap-x-6 gap-y-2.5 text-sm">
            {pruefpunkte.map((p) => (
              <li key={p} className="flex items-start gap-2">
                <span className="text-safran mt-1">—</span>
                <span className="text-graphit/80">{p}</span>
              </li>
            ))}
          </ul>
          <p className="mt-6 text-graphit/70 leading-relaxed text-sm">
            Der konkrete Prüfungsumfang richtet sich nach Auftrag, Fahrzeug
            und Zugänglichkeit und wird im Vorfeld mit Ihnen abgestimmt.
          </p>
        </div>
        <div className="relative h-full min-h-[18rem]">
          <Image
            src={fotos.gebaeude.src}
            alt={fotos.gebaeude.alt}
            fill
            sizes="(min-width: 768px) 45vw, 100vw"
            className="object-cover"
          />
        </div>
      </section>

      <CTASection
        title="Fahrzeug vor dem Kauf prüfen lassen"
        text="Vermeiden Sie böse Überraschungen — wir prüfen das Fahrzeug Ihrer Wahl."
        primaryLabel="Fahrzeug prüfen lassen"
      />
    </>
  );
}
