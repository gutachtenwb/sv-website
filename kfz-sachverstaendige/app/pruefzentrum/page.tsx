import type { Metadata } from "next";
import Image from "next/image";
import PageHero from "@/components/PageHero";
import CTASection from "@/components/CTASection";
import EquipmentCard from "@/components/EquipmentCard";
import { fotos } from "@/lib/images";

export const metadata: Metadata = {
  title: "Prüfzentrum",
  description:
    "Unser Prüfzentrum in Villingen-Schwenningen: Achsvermessung, 3D-Karosserievermessung mit Spanesi Touch, Lackschichtdickenmessung, Fahrzeugdiagnose und Hebebühnen unter einem Dach.",
  alternates: { canonical: "/pruefzentrum" },
};

const ausstattung = [
  {
    geraet: "Spanesi Touch",
    titel: "3D-Karosserie- und Rahmenvermessung",
    text: "Vermessung der Fahrzeugstruktur und Vergleich von Soll- und Ist-Maßen bei Strukturtreffern oder Verdacht auf Karosserieverformung.",
    einsatz: ["Strukturtreffer und stärkere Unfälle", "Beweissicherung", "Dokumentation möglicher Verformungen"],
    href: "/leistungen/karosserievermessung",
  },
  {
    geraet: "Beissbarth Q.Lign",
    titel: "Achsvermessung",
    text: "Technische Prüfung der Fahrwerksgeometrie — insbesondere nach Radanstoß oder Bordsteinkontakt.",
    einsatz: ["Radanstoß und Fahrwerksschäden", "Verdacht auf veränderte Spur- oder Sturzwerte", "Beweissicherung"],
    href: "/leistungen/achsvermessung",
  },
  {
    titel: "Lackschichtdickenmessung",
    text: "Messung der Beschichtungsdicke auf Stahl, Aluminium und geeigneten Kunststoffbauteilen zur Erkennung möglicher Nachlackierungen.",
    einsatz: ["Vorschaden- und Altschadenerkennung", "Kaufbegleitung", "Untersuchung von Kunststoffanbauteilen"],
    href: "/leistungen/lackschichtdickenmessung",
  },
  {
    titel: "Fahrzeugdiagnose",
    text: "Elektronische Fehlerspeicherauslese als Ergänzung zur mechanischen Schadenaufnahme.",
    einsatz: ["Auslesen und Dokumentation von Fehlereinträgen", "Ergänzung zur Schadenaufnahme"],
    href: "/leistungen/fahrzeugdiagnose",
  },
  {
    titel: "Hebebühnenuntersuchung",
    text: "Prüfung von Unterboden, Fahrwerk und Anbauteilen, die im Stand nicht einsehbar sind.",
    einsatz: ["Fahrwerks- und Unterbodenprüfung", "Vorschadenprüfung", "Kaufbegleitung"],
  },
  {
    titel: "Freilegungs- und Demontagearbeiten",
    text: "Gezielte Demontage beschädigter Bereiche zur Feststellung verdeckter Schäden.",
    einsatz: ["Schadenfeststellung an verdeckten Bauteilen", "Beweissicherung", "Ergänzung der Sichtprüfung"],
    href: "/leistungen/technische-beweissicherung",
  },
];

export default function PruefzentrumPage() {
  return (
    <>
      <PageHero
        eyebrow="Unser Prüfzentrum"
        title="Technische Untersuchungen direkt an unserem Standort"
        lead="Eine Sichtprüfung stößt bei komplexeren Schäden an ihre Grenzen. In unserem Prüfzentrum stehen Achsvermessung, 3D-Karosserievermessung, Fahrzeugdiagnose und Hebebühnen zur Verfügung — für eine technisch fundierte, nachvollziehbare Feststellung."
        breadcrumbs={[{ name: "Prüfzentrum", path: "/pruefzentrum" }]}
      />

      <section className="relative h-[42vh] min-h-[280px] md:h-[56vh] md:min-h-[420px]">
        <Image
          src={fotos.fahrzeugAufMessanlage.src}
          alt={fotos.fahrzeugAufMessanlage.alt}
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
      </section>

      <section className="bg-graphit text-nebel">
        <div className="max-w-content mx-auto px-6 py-16 md:py-24">
          <p className="eyebrow eyebrow-light mb-3">Ausstattung</p>
          <h2 className="text-2xl md:text-3xl font-semibold font-display max-w-xl">
            Was wir vor Ort untersuchen können
          </h2>
          <div className="mt-10 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {ausstattung.map((a) => (
              <EquipmentCard key={a.titel} {...a} />
            ))}
          </div>
        </div>
      </section>

      <section className="max-w-content mx-auto px-6 py-16 md:py-24 grid md:grid-cols-2 gap-12 items-center">
        <div>
          <p className="eyebrow mb-3">Standort</p>
          <h2 className="text-2xl font-semibold font-display">
            Eigenes Prüf- und Sachverständigenzentrum
          </h2>
          <p className="mt-4 text-graphit/70 leading-relaxed">
            Karosserie-, Achs- und Lackprüfung sowie elektronische
            Fahrzeugdiagnose finden bei uns unter einem Dach statt. So lassen
            sich Befunde nicht nur beschreiben, sondern messtechnisch
            belegen — direkt an unserem Standort in Villingen-Schwenningen.
          </p>
        </div>
        <div className="relative aspect-[4/3]">
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
        title="Technische Untersuchung Ihres Fahrzeugs"
        text="Wir setzen die passende Mess- und Diagnosetechnik für Ihren Fall ein."
      />
    </>
  );
}
