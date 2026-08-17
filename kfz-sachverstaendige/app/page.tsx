import Link from "next/link";
import PruefSiegel from "@/components/PruefSiegel";
import TrustBadges from "@/components/TrustBadges";
import ServiceCard from "@/components/ServiceCard";
import EquipmentCard from "@/components/EquipmentCard";
import ProcessSteps from "@/components/ProcessSteps";
import CTASection from "@/components/CTASection";
import { siteConfig } from "@/lib/site-config";

const leistungen = [
  {
    href: "/leistungen/unfallgutachten",
    titel: "Unfallgutachten",
    text: "Vollständige Schadenaufnahme, Reparaturkosten, Wiederbeschaffungswert und Wertminderung nach einem Verkehrsunfall.",
  },
  {
    href: "/leistungen/technische-beweissicherung",
    titel: "Technische Beweissicherung",
    text: "Über die reine Sichtprüfung hinaus: Messung, Diagnose und nachvollziehbare Dokumentation von Schäden.",
  },
  {
    href: "/leistungen/fahrzeugbewertung",
    titel: "Fahrzeugbewertung",
    text: "Marktwertermittlung für Kauf, Verkauf, Leasing oder Versicherungsfälle — nachvollziehbar dokumentiert.",
  },
  {
    href: "/leistungen/kaufbegleitung",
    titel: "Kaufbegleitung",
    text: "Technischer Check vor dem Fahrzeugkauf — von der Karosserie bis zur elektronischen Diagnose.",
  },
  {
    href: "/leistungen/oldtimer-youngtimer",
    titel: "Oldtimer & Youngtimer",
    text: "Zustands- und Wertermittlung für historische Fahrzeuge und Youngtimer.",
  },
  {
    href: "/leistungen/achsvermessung",
    titel: "Achsvermessung",
    text: "Prüfung der Fahrwerksgeometrie mit Beissbarth Q.Lign, insbesondere nach Radanstoß.",
  },
];

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="max-w-content mx-auto px-6 pt-14 pb-20 md:pt-20 md:pb-24">
        <div className="grid md:grid-cols-[1fr_auto] gap-12 items-start">
          <div>
            <p className="eyebrow mb-4">
              {siteConfig.adacStatus} · {siteConfig.address.city}
            </p>
            <h1 className="text-3xl sm:text-4xl md:text-6xl font-semibold leading-[1.1] md:leading-[1.05] max-w-2xl break-words">
              KFZ-Sachverständiger in Villingen-Schwenningen
            </h1>
            <p className="mt-6 text-lg text-graphit/70 max-w-xl leading-relaxed">
              Unfallgutachten, Fahrzeugbewertung und technische
              Beweissicherung aus einer Hand — mit professioneller Prüf- und
              Messtechnik für Karosserie, Achsen, Lack und Elektronik.
            </p>
            <p className="mt-4 font-display text-stahlblau font-medium">
              Nicht nur ansehen – messen, prüfen und technisch belegen.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <Link href="/kontakt" className="btn-primary">
                Termin vereinbaren
              </Link>
              <a href={siteConfig.phone.href} className="btn-secondary">
                Jetzt anrufen: {siteConfig.phone.display}
              </a>
            </div>
          </div>

          <PruefSiegel className="hidden md:block w-40 h-40 text-stahlblau shrink-0 mt-2" />
        </div>

        <div className="rule mt-16" />
      </section>

      {/* Trust */}
      <section className="max-w-content mx-auto px-6 pb-24">
        <TrustBadges />
      </section>

      {/* Leistungen */}
      <section className="max-w-content mx-auto px-6 pb-24">
        <p className="eyebrow mb-3">Leistungen</p>
        <h2 className="text-3xl font-semibold max-w-xl">
          Gutachten und technische Untersuchungen für jeden Anlass
        </h2>
        <p className="mt-4 text-graphit/70 max-w-2xl leading-relaxed">
          Vom klassischen Unfallgutachten bis zur präzisen 3D-Vermessung —
          hier finden Sie unser vollständiges Leistungsspektrum.
        </p>
        <div className="mt-10 grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-messing/30">
          {leistungen.map((l) => (
            <ServiceCard key={l.href} href={l.href} titel={l.titel} text={l.text} />
          ))}
        </div>
        <div className="mt-8">
          <Link href="/leistungen" className="btn-secondary">
            Alle Leistungen ansehen
          </Link>
        </div>
      </section>

      {/* Technische Ausstattung */}
      <section className="bg-graphit text-nebel">
        <div className="max-w-content mx-auto px-6 py-24">
          <p className="eyebrow text-nebel/50 mb-3">Technische Ausstattung</p>
          <h2 className="text-3xl font-semibold max-w-xl">
            Warum eine Sichtprüfung allein oft nicht ausreicht
          </h2>
          <p className="mt-4 text-nebel/70 max-w-2xl leading-relaxed">
            Ein Fahrzeug kann äußerlich unauffällig wirken und trotzdem
            strukturelle Veränderungen aufweisen. Mit professioneller
            Mess- und Diagnosetechnik lassen sich Schäden nicht nur
            betrachten, sondern nachvollziehbar belegen.
          </p>

          <div className="mt-12 grid md:grid-cols-2 gap-6">
            <EquipmentCard
              geraet="Spanesi Touch"
              titel="3D-Karosserie- und Rahmenvermessung"
              text="Vergleich von Soll- und Ist-Maßen zur Prüfung der Fahrzeugstruktur — etwa bei Strukturtreffern oder Verdacht auf Karosserieverformung."
              einsatz={["Beweissicherung bei Unfällen mit höherer Krafteinwirkung", "Prüfung der Fahrzeugstruktur", "Dokumentation möglicher Verformungen"]}
              href="/leistungen/karosserievermessung"
            />
            <EquipmentCard
              geraet="Beissbarth Q.Lign"
              titel="Professionelle Achsvermessung"
              text="Technische Prüfung der Fahrwerksgeometrie — insbesondere sinnvoll nach einem Radanstoß, bei dem eine rein optische Prüfung oft nicht ausreicht."
              einsatz={["Radanstoß und Bordsteinkontakt", "Verdacht auf veränderte Spur- oder Sturzwerte", "Beweissicherung bei Fahrwerksschäden"]}
              href="/leistungen/achsvermessung"
            />
          </div>

          <div className="mt-8">
            <Link href="/technische-ausstattung" className="btn-secondary border-nebel/30 text-nebel hover:border-nebel">
              Gesamte Ausstattung ansehen
            </Link>
          </div>
        </div>
      </section>

      {/* Ablauf */}
      <section className="max-w-content mx-auto px-6 py-24">
        <p className="eyebrow mb-3">Ablauf</p>
        <h2 className="text-3xl font-semibold max-w-xl">
          Vom Kontakt zum fertigen Gutachten
        </h2>
        <ProcessSteps variant="light" />
      </section>

      <CTASection
        title="Schildern Sie uns Ihren Fall."
        text="Wir untersuchen Ihr Fahrzeug, dokumentieren den Zustand oder Schaden und erstellen ein nachvollziehbares Gutachten."
      />
    </>
  );
}
