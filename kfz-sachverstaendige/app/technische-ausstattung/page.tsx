import type { Metadata } from "next";
import Image from "next/image";
import PageHero from "@/components/PageHero";
import CTASection from "@/components/CTASection";
import EquipmentCard from "@/components/EquipmentCard";
import { fotos } from "@/lib/images";

export const metadata: Metadata = {
  title: "Unsere technische Ausstattung",
  description:
    "Spanesi Touch für 3D-Karosserievermessung, Beissbarth Q.Lign für Achsvermessung, Lackschichtdickenmessung, Fahrzeugdiagnose und professionelle Fotodokumentation — die technische Ausstattung des KFZ-Sachverständigenbüros Württemberg.",
  alternates: { canonical: "/technische-ausstattung" },
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
    titel: "Professionelle Achsvermessung",
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
    titel: "Spaltmaßprüfung",
    text: "Feststellung sichtbarer Abweichungen an Karosserieanschlüssen als Hinweis auf frühere Reparaturen oder Vorschäden.",
    einsatz: ["Vorschadenprüfung", "Kaufbegleitung", "Unfallanalyse"],
  },
  {
    titel: "Technische Beweissicherung & Fotodokumentation",
    text: "Umfangreiche und nachvollziehbare Dokumentation aller relevanten Befunde am Fahrzeug.",
    einsatz: ["Beweissicherung für die Schadenabwicklung", "Dokumentation technischer Auffälligkeiten"],
    href: "/leistungen/technische-beweissicherung",
  },
];

export default function AusstattungPage() {
  return (
    <>
      <PageHero
        eyebrow="Unsere Ausstattung"
        title="Unsere technische Ausstattung"
        lead="Ein Schaden lässt sich nicht immer allein durch Betrachtung vollständig einordnen. Mit professioneller Mess- und Diagnosetechnik können wir Fahrzeuge untersuchen, vermessen, diagnostizieren und die Ergebnisse nachvollziehbar dokumentieren."
        breadcrumbs={[{ name: "Technische Ausstattung", path: "/technische-ausstattung" }]}
      />

      <section className="relative h-[42vh] min-h-[280px] md:h-[52vh] md:min-h-[380px]">
        <Image
          src={fotos.pruefstand.src}
          alt={fotos.pruefstand.alt}
          fill
          sizes="100vw"
          className="object-cover"
        />
      </section>

      <section className="bg-graphit text-nebel">
        <div className="max-w-content mx-auto px-6 py-16">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
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
            Die Begutachtung erfolgt mit geeigneter technischer Ausstattung
            für Karosserie-, Achs- und Lackprüfung sowie elektronische
            Fahrzeugdiagnose. So lassen sich Befunde nicht nur beschreiben,
            sondern messtechnisch belegen — direkt an unserem Standort in
            Villingen-Schwenningen.
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
