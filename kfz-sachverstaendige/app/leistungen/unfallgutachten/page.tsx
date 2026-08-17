import type { Metadata } from "next";
import Image from "next/image";
import PageHero from "@/components/PageHero";
import CTASection from "@/components/CTASection";
import { fotos } from "@/lib/images";

export const metadata: Metadata = {
  title: "Unfallgutachten & Schadengutachten",
  description:
    "Unfallgutachten und Schadengutachten in Villingen-Schwenningen: Schadenaufnahme, Reparaturkosten, Wiederbeschaffungswert, Restwert und Wertminderung — unabhängig und nachvollziehbar dokumentiert.",
  alternates: { canonical: "/leistungen/unfallgutachten" },
};

const bestandteile = [
  "Haftpflichtschäden",
  "Kaskoschäden",
  "vollständige Schadenaufnahme",
  "Reparaturkostenkalkulation",
  "Wiederbeschaffungswert",
  "Restwert",
  "merkantile Wertminderung",
  "Reparaturdauer",
  "Wiederbeschaffungsdauer",
  "Nutzungsausfall",
  "technische Schadenbewertung",
  "Fotodokumentation und Beweissicherung",
  "Dokumentation von Vorschäden und Altschäden",
];

export default function UnfallgutachtenPage() {
  return (
    <>
      <PageHero
        eyebrow="Unfall & Schaden"
        title="Unfallgutachten & Schadengutachten"
        lead="Nach einem Verkehrsunfall dokumentieren wir den Schadenumfang vollständig und ermitteln die für die Schadenregulierung relevanten Werte — als nachvollziehbare Grundlage für die weitere Abwicklung."
        breadcrumbs={[
          { name: "Leistungen", path: "/leistungen" },
          { name: "Unfallgutachten", path: "/leistungen/unfallgutachten" },
        ]}
      />

      <section className="max-w-content mx-auto px-6 pb-16 grid md:grid-cols-2 gap-12 items-start">
        <div>
          <h2 className="text-2xl font-semibold font-display">Bestandteile eines Schadengutachtens</h2>
          <ul className="mt-6 grid sm:grid-cols-2 gap-x-6 gap-y-2.5 text-sm">
            {bestandteile.map((b) => (
              <li key={b} className="flex items-start gap-2">
                <span className="text-safran mt-1">—</span>
                <span className="text-graphit/80">{b}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="relative h-full min-h-[20rem]">
          <Image
            src={fotos.fahrzeugAufMessanlage.src}
            alt={fotos.fahrzeugAufMessanlage.alt}
            fill
            sizes="(min-width: 768px) 45vw, 100vw"
            className="object-cover"
          />
        </div>
      </section>

      <section className="bg-graphit text-nebel">
        <div className="max-w-content mx-auto px-6 py-16 max-w-3xl">
          <h2 className="text-2xl font-semibold font-display">
            Wer beauftragt den Sachverständigen?
          </h2>
          <p className="mt-4 text-nebel/70 leading-relaxed">
            Bei einem unverschuldeten Haftpflichtschaden kann der Geschädigte
            grundsätzlich einen unabhängigen Sachverständigen seiner Wahl
            beauftragen, sofern die dafür maßgeblichen Voraussetzungen im
            Einzelfall vorliegen. Ob dies bei einem konkreten Schaden der Fall
            ist, hängt von den jeweiligen Umständen ab — sprechen Sie uns bei
            Fragen dazu gerne an. Eine verbindliche Rechtsberatung können wir
            als Sachverständigenbüro nicht ersetzen.
          </p>
        </div>
      </section>

      <section className="max-w-content mx-auto px-6 py-16 grid md:grid-cols-2 gap-12">
        <div>
          <h2 className="text-2xl font-semibold font-display">Reparaturbestätigung</h2>
          <p className="mt-4 text-graphit/70 leading-relaxed">
            Nach einer erfolgten Reparatur kann der bei der Besichtigung
            erkennbare Reparaturzustand dokumentiert werden. Eine
            Reparaturbestätigung bezieht sich auf die zugänglichen und
            sichtbaren Bereiche des Fahrzeugs und stellt keine uneingeschränkte
            Garantie für verdeckte oder nicht zugängliche Reparaturbereiche
            dar.
          </p>
        </div>
        <div>
          <h2 className="text-2xl font-semibold font-display">Nachbesichtigung</h2>
          <p className="mt-4 text-graphit/70 leading-relaxed">
            Bei Bedarf kann eine ergänzende Nachbesichtigung erfolgen, etwa zur
            Dokumentation des Reparaturfortschritts oder zur weiteren
            technischen Beweissicherung im Verlauf der Schadenabwicklung.
          </p>
        </div>
      </section>

      <CTASection
        title="Fahrzeug nach einem Unfall untersuchen lassen"
        text="Kontaktieren Sie uns — wir vereinbaren zeitnah einen Besichtigungstermin."
        primaryLabel="Schaden begutachten lassen"
      />
    </>
  );
}
