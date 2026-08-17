import type { Metadata } from "next";
import Image from "next/image";
import PageHero from "@/components/PageHero";
import CTASection from "@/components/CTASection";
import { fotos } from "@/lib/images";

export const metadata: Metadata = {
  title: "Achsvermessung mit Beissbarth Q.Lign",
  description:
    "Professionelle Achsvermessung mit Beissbarth Q.Lign in Villingen-Schwenningen — insbesondere nach Radanstoß, Bordsteinkontakt oder Fahrwerksschaden.",
  alternates: { canonical: "/leistungen/achsvermessung" },
};

const einsatz = [
  "Radanstoß",
  "Unfall im Radbereich",
  "Bordsteinkontakt",
  "Fahrwerksschaden",
  "Achsschaden",
  "Verdacht auf veränderte Spurwerte",
  "Verdacht auf veränderte Sturzwerte",
  "Beweissicherung",
  "technische Prüfung der Fahrwerksgeometrie",
];

export default function AchsvermessungPage() {
  return (
    <>
      <PageHero
        eyebrow="Beissbarth Q.Lign"
        title="Professionelle Achsvermessung mit Beissbarth Q.Lign"
        lead="Für die technische Prüfung der Fahrwerksgeometrie setzen wir das Achsmesssystem Beissbarth Q.Lign ein."
        breadcrumbs={[
          { name: "Leistungen", path: "/leistungen" },
          { name: "Achsvermessung", path: "/leistungen/achsvermessung" },
        ]}
      />

      <section className="max-w-content mx-auto px-6 pb-16 grid md:grid-cols-2 gap-12 items-start">
        <div>
          <h2 className="text-2xl font-semibold font-display">
            Warum nach einem Radanstoß mehr als ein Blick nötig ist
          </h2>
          <p className="mt-4 text-graphit/70 leading-relaxed">
            Bei einem Radanstoß, etwa gegen einen Bordstein, oder nach einem
            Unfall im Radbereich reicht eine rein optische Prüfung häufig
            nicht aus, um eine veränderte Fahrwerksgeometrie zuverlässig
            festzustellen. Spur- und Sturzwerte können sich verändern, ohne
            dass dies äußerlich erkennbar ist. Die Achsvermessung schafft hier
            eine belastbare technische Grundlage.
          </p>
        </div>
        <div className="relative h-full min-h-[18rem]">
          <Image
            src={fotos.pruefstand.src}
            alt={fotos.pruefstand.alt}
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
        title="Fahrwerk nach einem Radanstoß prüfen lassen"
        text="Wir vermessen Ihr Fahrzeug mit Beissbarth Q.Lign und dokumentieren das Ergebnis."
      />
    </>
  );
}
