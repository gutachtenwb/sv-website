import type { Metadata } from "next";
import Image from "next/image";
import PageHero from "@/components/PageHero";
import CTASection from "@/components/CTASection";
import { fotos } from "@/lib/images";

export const metadata: Metadata = {
  title: "Fahrzeugbewertung",
  description:
    "Fahrzeugbewertung in Villingen-Schwenningen für Kauf, Verkauf, Versicherung, Leasing und Fuhrpark — nachvollziehbar ermittelter Marktwert statt einfachem Online-Preisvergleich.",
  alternates: { canonical: "/leistungen/fahrzeugbewertung" },
};

const anlaesse = [
  "Marktwertermittlung",
  "Wiederbeschaffungswert",
  "Verkaufsbewertung",
  "Kaufbewertung",
  "Versicherungsbewertung",
  "Leasing",
  "Fuhrpark",
  "besondere Fahrzeuge",
  "Zustandsbewertung",
];

export default function FahrzeugbewertungPage() {
  return (
    <>
      <PageHero
        eyebrow="Bewertung"
        title="Fahrzeugbewertung"
        lead="Eine fundierte Fahrzeugbewertung ist mehr als ein einfacher Online-Preisvergleich. Zustand, Ausstattung, Historie und Marktlage fließen nachvollziehbar in die Wertermittlung ein."
        breadcrumbs={[
          { name: "Leistungen", path: "/leistungen" },
          { name: "Fahrzeugbewertung", path: "/leistungen/fahrzeugbewertung" },
        ]}
      />

      <section className="max-w-content mx-auto px-6 pb-16 grid md:grid-cols-2 gap-12 items-start">
        <div>
          <h2 className="text-2xl font-semibold font-display">Anlässe für eine Bewertung</h2>
          <ul className="mt-6 grid sm:grid-cols-2 gap-x-6 gap-y-2.5 text-sm">
            {anlaesse.map((a) => (
              <li key={a} className="flex items-start gap-2">
                <span className="text-safran mt-1">—</span>
                <span className="text-graphit/80">{a}</span>
              </li>
            ))}
          </ul>
          <p className="mt-6 text-graphit/70 leading-relaxed text-sm">
            Ob privater Verkauf, Ankauf, Versicherungsfall, Leasingrückgabe
            oder Fuhrparkbewertung für Unternehmen — die Bewertung wird auf
            den jeweiligen Anlass und das konkrete Fahrzeug abgestimmt.
          </p>
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

      <CTASection
        title="Fahrzeugwert professionell ermitteln lassen"
        text="Wir erstellen eine nachvollziehbare Bewertung Ihres Fahrzeugs."
        primaryLabel="Bewertung anfragen"
      />
    </>
  );
}
