import type { Metadata } from "next";
import Image from "next/image";
import PageHero from "@/components/PageHero";
import CTASection from "@/components/CTASection";
import { fotos } from "@/lib/images";

export const metadata: Metadata = {
  title: "Fahrzeugdiagnose & Fehlerspeicherauslese",
  description:
    "Elektronische Fahrzeugdiagnose und Fehlerspeicherauslese in Villingen-Schwenningen als Ergänzung zur mechanischen Schadenaufnahme und technischen Beweissicherung.",
  alternates: { canonical: "/leistungen/fahrzeugdiagnose" },
};

const einsatz = [
  "Auslesen gespeicherter Fehler",
  "Dokumentation von Fehlereinträgen",
  "technische Beweissicherung",
  "Ergänzung zur mechanischen Schadenaufnahme",
  "Erkennung relevanter elektronischer Auffälligkeiten",
  "Dokumentation unfallbedingter Hinweise, soweit technisch nachvollziehbar",
];

export default function FahrzeugdiagnosePage() {
  return (
    <>
      <PageHero
        eyebrow="Technische Untersuchungen"
        title="Fahrzeugdiagnose & Fehlerspeicherauslese"
        lead="Neben der mechanischen und optischen Untersuchung nutzen wir elektronische Diagnosetechnik, um den Fehlerspeicher auszulesen und relevante Einträge zu dokumentieren."
        breadcrumbs={[
          { name: "Leistungen", path: "/leistungen" },
          { name: "Fahrzeugdiagnose", path: "/leistungen/fahrzeugdiagnose" },
        ]}
      />

      <section className="max-w-content mx-auto px-6 pb-16 grid md:grid-cols-2 gap-12 items-start">
        <div className="relative h-full min-h-[18rem] order-2 md:order-1">
          <Image
            src={fotos.pruefstand.src}
            alt={fotos.pruefstand.alt}
            fill
            sizes="(min-width: 768px) 45vw, 100vw"
            className="object-cover"
          />
        </div>
        <div className="order-1 md:order-2">
          <h2 className="text-2xl font-semibold font-display">Eine sinnvolle Ergänzung</h2>
          <p className="mt-4 text-graphit/70 leading-relaxed">
            Die elektronische Fahrzeugdiagnose ergänzt die klassische
            Schadenaufnahme um Informationen, die rein optisch nicht erkennbar
            sind. Wir weisen darauf hin, dass wir keine universelle
            Diagnoseabdeckung für alle Fahrzeughersteller und -modelle
            zusichern können und keine Herstellerfreigaben für die eingesetzte
            Diagnosetechnik behaupten.
          </p>
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
        title="Diagnose als Teil Ihrer Begutachtung"
        text="Wir prüfen, ob eine elektronische Diagnose in Ihrem Fall sinnvoll ist."
      />
    </>
  );
}
