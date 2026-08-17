import type { Metadata } from "next";
import Image from "next/image";
import PageHero from "@/components/PageHero";
import CTASection from "@/components/CTASection";
import { fotos } from "@/lib/images";

export const metadata: Metadata = {
  title: "Lackschichtdickenmessung",
  description:
    "Lackschichtdickenmessung in Villingen-Schwenningen auf Stahl, Aluminium und geeigneten Kunststoffbauteilen — zur Erkennung möglicher Nachlackierungen und Vorschäden.",
  alternates: { canonical: "/leistungen/lackschichtdickenmessung" },
};

const werkstoffe = ["Stahl", "Aluminium", "Kunststoff", "weitere geeignete Fahrzeugoberflächen und Werkstoffe"];

const einsatz = [
  "Erkennung möglicher Nachlackierungen",
  "Hinweise auf frühere Reparaturen",
  "Vorschaden- und Altschadenerkennung",
  "Kaufbegleitung",
  "Fahrzeugbewertung",
  "Beweissicherung",
  "Untersuchung von Stoßfängern und Kunststoffanbauteilen",
  "Vergleich von Beschichtungszuständen",
];

export default function LackschichtdickenmessungPage() {
  return (
    <>
      <PageHero
        eyebrow="Technische Untersuchungen"
        title="Lackschichtdickenmessung"
        lead="Mit professioneller Messtechnik prüfen wir die Beschichtungsdicke an Fahrzeugoberflächen — als Hinweis auf mögliche Nachlackierungen oder frühere Reparaturen."
        breadcrumbs={[
          { name: "Leistungen", path: "/leistungen" },
          { name: "Lackschichtdickenmessung", path: "/leistungen/lackschichtdickenmessung" },
        ]}
      />

      <section className="max-w-content mx-auto px-6 pb-16 grid md:grid-cols-2 gap-12 items-start">
        <div>
          <h2 className="text-2xl font-semibold font-display">
            Nicht nur Stahlkarosserien
          </h2>
          <p className="mt-4 text-graphit/70 leading-relaxed">
            Unsere Messmöglichkeiten beschränken sich nicht nur auf klassische
            Stahlkarosserien. Abhängig vom Bauteil und Messverfahren können
            unterschiedliche Werkstoffe untersucht werden — dazu zählen auch
            lackierte Kunststoffbauteile wie Stoßfänger, die bei
            Fahrzeugen häufig eine relevante Rolle bei der Vorschadenprüfung
            spielen.
          </p>
          <div className="mt-6 flex flex-wrap gap-2">
            {werkstoffe.map((w) => (
              <span
                key={w}
                className="text-xs font-mono uppercase tracking-wide border border-messing/40 px-3 py-1.5"
              >
                {w}
              </span>
            ))}
          </div>
        </div>
        <div className="relative h-full min-h-[18rem]">
          <Image
            src={fotos.halleUebersicht.src}
            alt={fotos.halleUebersicht.alt}
            fill
            sizes="(min-width: 768px) 45vw, 100vw"
            className="object-cover"
          />
        </div>
      </section>

      <section className="bg-graphit text-nebel">
        <div className="max-w-content mx-auto px-6 py-16">
          <h2 className="text-2xl font-semibold font-display">Einsatzbereiche</h2>
          <ul className="mt-8 grid sm:grid-cols-2 gap-x-8 gap-y-3">
            {einsatz.map((e) => (
              <li key={e} className="flex items-start gap-2 text-sm text-nebel/80">
                <span className="text-safran mt-1">—</span>
                <span>{e}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <CTASection
        title="Vorschäden zuverlässig prüfen lassen"
        text="Ob vor dem Kauf oder zur Wertermittlung — wir messen die Beschichtung Ihres Fahrzeugs."
      />
    </>
  );
}
