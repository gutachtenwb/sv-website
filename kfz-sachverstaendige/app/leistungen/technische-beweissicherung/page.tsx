import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import PageHero from "@/components/PageHero";
import CTASection from "@/components/CTASection";
import { fotos } from "@/lib/images";

export const metadata: Metadata = {
  title: "Technische Beweissicherung",
  description:
    "Technische Beweissicherung in Villingen-Schwenningen: Fotodokumentation, Schadenanalyse, Plausibilitäts- und Kompatibilitätsprüfung, Spaltmaßprüfung sowie Untersuchung von Kontakt-, Vor- und Altschäden.",
  alternates: { canonical: "/leistungen/technische-beweissicherung" },
};

const leistungen = [
  "umfangreiche Fotodokumentation",
  "Schadenanalyse",
  "Plausibilitätsprüfung",
  "Kompatibilitätsprüfung",
  "Untersuchung von Kontaktspuren",
  "Untersuchung von Vorschäden und Altschäden",
  "Spaltmaßprüfung",
  "Dokumentation technischer Auffälligkeiten",
  "Untersuchung verdeckter Bereiche nach Freilegung",
];

const messverfahren = [
  {
    href: "/leistungen/karosserievermessung",
    titel: "3D-Karosserievermessung",
    text: "Karosserie- und Rahmenvermessung mit Spanesi Touch — Vergleich von Soll- und Ist-Maßen.",
  },
  {
    href: "/leistungen/achsvermessung",
    titel: "Achsvermessung",
    text: "Prüfung der Fahrwerksgeometrie mit Beissbarth Q.Lign.",
  },
  {
    href: "/leistungen/lackschichtdickenmessung",
    titel: "Lackschichtdickenmessung",
    text: "Erkennung möglicher Nachlackierungen auf unterschiedlichen Werkstoffen.",
  },
  {
    href: "/leistungen/fahrzeugdiagnose",
    titel: "Fahrzeugdiagnose",
    text: "Elektronische Fehlerspeicherauslese zur Ergänzung der Schadenaufnahme.",
  },
];

export default function TechnischeBeweissicherungPage() {
  return (
    <>
      <PageHero
        eyebrow="Technische Untersuchungen"
        title="Technische Beweissicherung"
        lead="Ein Schaden lässt sich nicht immer allein durch Betrachtung vollständig einordnen. Bei Bedarf gehen wir über die visuelle Begutachtung hinaus und sichern Befunde mit technischen Messungen, Fotodokumentation und Analyse."
        breadcrumbs={[
          { name: "Leistungen", path: "/leistungen" },
          { name: "Technische Beweissicherung", path: "/leistungen/technische-beweissicherung" },
        ]}
      />

      <section className="max-w-content mx-auto px-6 pb-16 grid md:grid-cols-2 gap-12 items-start">
        <div>
          <h2 className="text-2xl font-semibold font-display">Leistungen im Überblick</h2>
          <ul className="mt-6 space-y-2.5 text-sm">
            {leistungen.map((l) => (
              <li key={l} className="flex items-start gap-2">
                <span className="text-safran mt-1">—</span>
                <span className="text-graphit/80">{l}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="relative h-full min-h-[20rem]">
          <Image
            src={fotos.technischeUntersuchung.src}
            alt={fotos.technischeUntersuchung.alt}
            fill
            sizes="(min-width: 768px) 45vw, 100vw"
            className="object-cover object-[center_20%]"
          />
        </div>
      </section>

      <section className="bg-graphit text-nebel">
        <div className="max-w-content mx-auto px-6 py-16">
          <p className="eyebrow eyebrow-light mb-3">Messverfahren</p>
          <h2 className="text-2xl font-semibold font-display max-w-xl">
            Unsere Mess- und Diagnosetechnik
          </h2>
          <div className="mt-10 grid md:grid-cols-2 gap-px bg-nebel/10">
            {messverfahren.map((m) => (
              <div key={m.href} className="bg-graphit p-8">
                <h3 className="text-lg font-semibold font-display">{m.titel}</h3>
                <p className="mt-2 text-sm text-nebel/70 leading-relaxed">{m.text}</p>
                <ServiceLink href={m.href} />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="max-w-content mx-auto px-6 py-16 max-w-3xl">
        <h2 className="text-2xl font-semibold font-display">
          Plausibilitäts- und Kompatibilitätsprüfung
        </h2>
        <p className="mt-4 text-graphit/70 leading-relaxed">
          Bei der technischen Beweissicherung werden Schadenbilder,
          Kontaktspuren, Schadenhöhe und -lage sowie die Beschädigungsstruktur
          miteinander verglichen und auf technische Plausibilität geprüft.
          Auffälligkeiten werden dokumentiert. Dies ersetzt keine forensische
          Unfallanalyse, sondern dient der nachvollziehbaren Einordnung des
          Schadenbildes im Rahmen der Begutachtung.
        </p>
      </section>

      <CTASection
        title="Technische Untersuchung anfragen"
        text="Wir prüfen, welche Messungen im konkreten Fall sinnvoll sind."
      />
    </>
  );
}

function ServiceLink({ href }: { href: string }) {
  return (
    <Link href={href} className="mt-4 inline-flex items-center gap-1.5 text-sm font-medium text-safran">
      Mehr erfahren →
    </Link>
  );
}
