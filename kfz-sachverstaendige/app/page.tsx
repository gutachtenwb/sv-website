import Link from "next/link";
import Image from "next/image";
import TrustBadges from "@/components/TrustBadges";
import ServiceCard from "@/components/ServiceCard";
import UspCard from "@/components/UspCard";
import ProcessSteps from "@/components/ProcessSteps";
import CTASection from "@/components/CTASection";
import { siteConfig } from "@/lib/site-config";
import { fotos } from "@/lib/images";

const usp = [
  {
    tag: "Beissbarth Q.Lign",
    titel: "Achsvermessung",
    text: "Technische Prüfung der Fahrwerksgeometrie — insbesondere nach Radanstoß oder Bordsteinkontakt.",
    image: fotos.pruefstand,
  },
  {
    tag: "Spanesi Touch",
    titel: "3D-Rahmenvermessung",
    text: "Vergleich von Soll- und Ist-Maßen zur Prüfung der Karosserie- und Fahrzeugstruktur.",
    image: fotos.fahrzeugAufMessanlageWeit,
  },
  {
    tag: "Schadenfeststellung",
    titel: "Zerlegungsarbeiten",
    text: "Freilegung beschädigter Bereiche zur technischen Beurteilung verdeckter Schäden.",
    image: fotos.technischeUntersuchung,
  },
  {
    tag: "Dokumentation",
    titel: "Technische Beweissicherung",
    text: "Nachvollziehbare Messung, Diagnose und Fotodokumentation über die Sichtprüfung hinaus.",
    image: fotos.halleUebersicht,
  },
];

const leistungen = [
  {
    href: "/leistungen/karosserievermessung",
    titel: "3D-Karosserievermessung",
    text: "Rahmen- und Strukturvermessung mit Spanesi Touch bei Verdacht auf Strukturschäden.",
    tag: "Prüfzentrum",
  },
  {
    href: "/leistungen/achsvermessung",
    titel: "Achsvermessung",
    text: "Prüfung der Fahrwerksgeometrie mit Beissbarth Q.Lign, insbesondere nach Radanstoß.",
    tag: "Prüfzentrum",
  },
  {
    href: "/leistungen/technische-beweissicherung",
    titel: "Technische Beweissicherung",
    text: "Über die reine Sichtprüfung hinaus: Messung, Diagnose und nachvollziehbare Dokumentation von Schäden.",
    tag: "Prüfzentrum",
  },
  {
    href: "/leistungen/unfallgutachten",
    titel: "Unfallgutachten",
    text: "Vollständige Schadenaufnahme, Reparaturkosten, Wiederbeschaffungswert und Wertminderung nach einem Verkehrsunfall.",
  },
  {
    href: "/leistungen/fahrzeugbewertung",
    titel: "Fahrzeugbewertung",
    text: "Marktwertermittlung für Kauf, Verkauf, Leasing oder Versicherungsfälle — nachvollziehbar dokumentiert.",
  },
  {
    href: "/leistungen/oldtimer-youngtimer",
    titel: "Oldtimer & Youngtimer",
    text: "Zustands- und Wertermittlung für historische Fahrzeuge und Youngtimer.",
  },
];

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="relative bg-graphit text-nebel overflow-hidden">
        <div className="flex flex-col lg:grid lg:grid-cols-[minmax(0,1fr)_minmax(0,1.15fr)] lg:items-stretch">
          <div className="order-2 lg:order-1 px-6 py-14 md:py-20 lg:py-0 lg:pl-[max(1.5rem,calc((100vw-1180px)/2))] lg:pr-14 flex flex-col justify-center">
            <p className="eyebrow eyebrow-light">
              {siteConfig.adacStatus} · {siteConfig.address.city}
            </p>
            <h1 className="mt-5 text-4xl sm:text-5xl md:text-6xl font-semibold leading-[1.08] max-w-xl break-words">
              Kfz-Sachverständige mit eigenem Prüfzentrum.
            </h1>
            <p className="mt-6 text-lg text-nebel/75 max-w-lg leading-relaxed">
              Unabhängige Kfz-Gutachten und technische Fahrzeuguntersuchungen
              in {siteConfig.address.city} — mit Achsvermessung, 3D-Rahmenvermessung
              und Hebebühnen im eigenen Haus.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <Link href="/kontakt" className="btn-primary">
                Termin vereinbaren
              </Link>
              <a href={siteConfig.phone.href} className="btn-secondary-inverse">
                Jetzt anrufen: {siteConfig.phone.display}
              </a>
            </div>
          </div>

          <div className="order-1 lg:order-2 relative h-[52vh] min-h-[360px] lg:h-auto lg:min-h-[640px]">
            <Image
              src={fotos.fahrzeugAufMessanlage.src}
              alt={fotos.fahrzeugAufMessanlage.alt}
              fill
              priority
              sizes="(min-width: 1024px) 55vw, 100vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-graphit/40 via-transparent to-transparent lg:bg-gradient-to-r lg:from-graphit/25 lg:via-transparent lg:to-transparent" />
          </div>
        </div>
      </section>

      {/* Trust */}
      <section className="max-w-content mx-auto px-6 py-10 md:py-12">
        <TrustBadges />
      </section>

      {/* USP */}
      <section className="max-w-content mx-auto px-6 py-16 md:py-24">
        <p className="eyebrow mb-3">Mehr als ein Gutachten</p>
        <h2 className="text-3xl md:text-4xl font-semibold max-w-xl">
          Wenn Sichtprüfung allein nicht ausreicht
        </h2>
        <p className="mt-4 text-graphit/70 max-w-2xl leading-relaxed">
          Bei komplexen Fahrzeugschäden reicht eine reine Sichtprüfung nicht
          immer aus. In unserem eigenen Prüfzentrum stehen professionelle
          Mess- und Prüfmöglichkeiten zur Verfügung.
        </p>
        <div className="mt-12 grid sm:grid-cols-2 gap-x-8 gap-y-12">
          {usp.map((u) => (
            <UspCard
              key={u.titel}
              image={u.image.src}
              imageAlt={u.image.alt}
              tag={u.tag}
              titel={u.titel}
              text={u.text}
            />
          ))}
        </div>
      </section>

      {/* Prüfzentrum */}
      <section className="bg-graphit text-nebel">
        <div className="max-w-content mx-auto px-6 py-16 md:py-24 grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="order-2 lg:order-1">
            <p className="eyebrow eyebrow-light mb-3">Unser Prüfzentrum</p>
            <h2 className="text-3xl md:text-4xl font-semibold max-w-lg">
              Technik, die Schäden sichtbar macht
            </h2>
            <p className="mt-4 text-nebel/70 max-w-lg leading-relaxed">
              Reicht eine äußere Besichtigung nicht aus, untersuchen wir Ihr
              Fahrzeug im eigenen Prüfzentrum weiter — mit Messtechnik, die
              über den bloßen Blick hinausgeht.
            </p>
            <ul className="mt-8 grid sm:grid-cols-2 gap-x-8 gap-y-3">
              {[
                "Achsgeometrie",
                "Karosserie- / Rahmenvermessung",
                "Freilegung beschädigter Bereiche",
                "Hebebühnenprüfung",
                "Diagnose & technische Dokumentation",
              ].map((punkt) => (
                <li key={punkt} className="flex items-start gap-2 text-sm text-nebel/80">
                  <span className="text-safran mt-1">—</span>
                  <span>{punkt}</span>
                </li>
              ))}
            </ul>
            <div className="mt-10">
              <Link href="/technische-ausstattung" className="btn-secondary-inverse">
                Gesamte Ausstattung ansehen
              </Link>
            </div>
          </div>

          <div className="order-1 lg:order-2 relative aspect-[4/3] lg:aspect-auto lg:h-[520px]">
            <Image
              src={fotos.halleUebersicht.src}
              alt={fotos.halleUebersicht.alt}
              fill
              sizes="(min-width: 1024px) 45vw, 100vw"
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* Leistungen */}
      <section className="max-w-content mx-auto px-6 py-16 md:py-24">
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
            <ServiceCard key={l.href} href={l.href} titel={l.titel} text={l.text} tag={l.tag} />
          ))}
        </div>
        <div className="mt-8">
          <Link href="/leistungen" className="btn-secondary">
            Alle Leistungen ansehen
          </Link>
        </div>
      </section>

      {/* Ablauf */}
      <section className="max-w-content mx-auto px-6 py-16 md:py-24">
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
