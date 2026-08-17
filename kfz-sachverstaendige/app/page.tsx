import Link from "next/link";
import Image from "next/image";
import TrustBadges from "@/components/TrustBadges";
import LeistungCard from "@/components/LeistungCard";
import QualificationsBar from "@/components/QualificationsBar";
import RegionSection from "@/components/RegionSection";
import ReviewsSection from "@/components/ReviewsSection";
import BigContactCTA from "@/components/BigContactCTA";
import { siteConfig } from "@/lib/site-config";
import { fotos } from "@/lib/images";

const leistungen = [
  {
    nummer: "01",
    titel: "Schadengutachten",
    text: "Schadenaufnahme, Reparaturkosten und Wertminderung nach einem Unfall — nachvollziehbar dokumentiert.",
    href: "/leistungen/unfallgutachten",
    image: fotos.technischeUntersuchung,
  },
  {
    nummer: "02",
    titel: "Fahrzeugbewertung",
    text: "Marktwertermittlung für Kauf, Verkauf, Leasing und Versicherungsfälle.",
    href: "/leistungen/fahrzeugbewertung",
    // Kein passendes Originalfoto vorhanden — bewusst Platzhalter statt
    // eines nicht zutreffenden Bildes. Motiv ergänzen, sobald verfügbar.
    image: undefined,
  },
  {
    nummer: "03",
    titel: "Zustandsbewertung",
    text: "Technischer Check von Karosserie, Lack und Fahrwerk vor dem Fahrzeugkauf.",
    href: "/leistungen/kaufbegleitung",
    image: undefined,
  },
  {
    nummer: "04",
    titel: "Achsvermessung",
    text: "Prüfung der Fahrwerksgeometrie mit Beissbarth Q.Lign, insbesondere nach Radanstoß.",
    href: "/leistungen/achsvermessung",
    image: fotos.pruefstand,
  },
  {
    nummer: "05",
    titel: "3D-Karosserie- / Rahmenvermessung",
    text: "Vergleich von Soll- und Ist-Maßen mit Spanesi Touch bei Verdacht auf Strukturschäden.",
    href: "/leistungen/karosserievermessung",
    image: fotos.fahrzeugAufMessanlageWeit,
  },
  {
    nummer: "06",
    titel: "Technische Beweissicherung",
    text: "Messung, Diagnose und Fotodokumentation über die Sichtprüfung hinaus.",
    href: "/leistungen/technische-beweissicherung",
    image: fotos.halleUebersicht,
  },
];

const pruefzentrumPunkte = [
  "Achsvermessung",
  "3D-Karosserie- und Strukturvermessung (Spanesi Touch)",
  "Fahrzeugdiagnose / Fehlerspeicherauslese",
  "Untersuchung auf der Hebebühne",
  "Freilegungs- und Demontagearbeiten",
  "Lackschichtdickenmessung",
  "Spaltmaß- und Karosserieprüfung",
];

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="relative bg-graphit text-nebel overflow-hidden">
        <div className="flex flex-col lg:grid lg:grid-cols-[minmax(0,1fr)_minmax(0,1.15fr)] lg:items-stretch">
          <div className="order-2 lg:order-1 px-6 py-14 md:py-20 lg:py-0 lg:pl-[max(1.5rem,calc((100vw-1180px)/2))] lg:pr-14 flex flex-col justify-center">
            <h1 className="text-4xl sm:text-5xl font-semibold leading-[1.15] max-w-xl [overflow-wrap:normal]">
              Kfz-Sachverständigen&shy;büro
              <br className="hidden sm:block" /> &amp; Prüfzentrum in
              Villingen-Schwenningen.
            </h1>
            <p className="mt-6 text-lg text-nebel/75 max-w-lg leading-relaxed">
              Unabhängige Schaden- und Fahrzeugbewertungen — ergänzt durch
              technische Untersuchungsmöglichkeiten direkt an unserem
              Standort.
            </p>
            <p className="mt-5 font-mono text-xs uppercase tracking-[0.15em] text-safran">
              Achsvermessung · 3D-Karosserievermessung · Fahrzeugdiagnose ·
              technische Demontage
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <Link href="/kontakt" className="btn-primary">
                Termin vereinbaren
              </Link>
              <a href={siteConfig.phone.href} className="btn-secondary-inverse">
                Kontakt aufnehmen
              </a>
            </div>
          </div>

          <div className="order-1 lg:order-2 relative h-[52vh] min-h-[360px] lg:h-auto lg:min-h-[640px]">
            <Image
              src={fotos.gebaeude.src}
              alt={fotos.gebaeude.alt}
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
      <section className="max-w-content mx-auto px-6 py-14 md:py-16">
        <TrustBadges />
      </section>

      {/* Leistungen */}
      <section className="max-w-content mx-auto px-6 py-16 md:py-24">
        <p className="eyebrow mb-3">Leistungen</p>
        <h2 className="text-3xl md:text-4xl font-semibold max-w-xl">
          Wie können wir Sie unterstützen?
        </h2>
        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-14">
          {leistungen.map((l) => (
            <LeistungCard key={l.href} {...l} />
          ))}
        </div>
      </section>

      {/* Prüfzentrum */}
      <section className="bg-graphit text-nebel">
        <div className="max-w-content mx-auto px-6 py-16 md:py-24 grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="order-2 lg:order-1">
            <p className="eyebrow eyebrow-light mb-3">Unser Prüfzentrum</p>
            <h2 className="text-3xl md:text-4xl font-semibold max-w-lg">
              Technische Untersuchungen direkt an unserem Standort
            </h2>
            <p className="mt-4 text-nebel/70 max-w-lg leading-relaxed">
              Unser Prüfzentrum ermöglicht weiterführende technische
              Untersuchungen, die über eine rein visuelle Fahrzeugbesichtigung
              hinausgehen.
            </p>
            <div className="mt-8 flex flex-wrap gap-2.5">
              {pruefzentrumPunkte.map((punkt) => (
                <span
                  key={punkt}
                  className="text-sm border border-nebel/25 px-4 py-2"
                >
                  {punkt}
                </span>
              ))}
            </div>
            <div className="mt-10">
              <Link href="/pruefzentrum" className="btn-secondary-inverse">
                Prüfzentrum im Detail
              </Link>
            </div>
          </div>

          <div className="order-1 lg:order-2 relative aspect-[4/3] lg:aspect-auto lg:h-[560px]">
            <Image
              src={fotos.fahrzeugAufMessanlage.src}
              alt={fotos.fahrzeugAufMessanlage.alt}
              fill
              sizes="(min-width: 1024px) 45vw, 100vw"
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* Region */}
      <section className="max-w-content mx-auto px-6 py-16 md:py-24">
        <p className="eyebrow mb-3">Standort</p>
        <h2 className="text-3xl font-semibold max-w-xl">
          Für Sie in der Region.
        </h2>
        <div className="mt-12">
          <RegionSection />
        </div>
      </section>

      {/* Bewertungen */}
      <section className="max-w-content mx-auto px-6 py-16 md:py-24">
        <p className="eyebrow mb-3">Bewertungen</p>
        <h2 className="text-3xl font-semibold max-w-xl mb-12">
          Das sagen unsere Kunden.
        </h2>
        <ReviewsSection />
      </section>

      {/* Über uns Teaser */}
      <section className="max-w-content mx-auto px-6 py-16 md:py-24 grid md:grid-cols-2 gap-12 items-center">
        <div className="relative aspect-[4/3] order-2 md:order-1">
          <Image
            src={fotos.technischeUntersuchung.src}
            alt={fotos.technischeUntersuchung.alt}
            fill
            sizes="(min-width: 768px) 45vw, 100vw"
            className="object-cover object-[center_20%]"
          />
        </div>
        <div className="order-1 md:order-2">
          <p className="eyebrow mb-3">Über uns</p>
          <h2 className="text-2xl md:text-3xl font-semibold font-display">
            Sachverstand trifft technische Ausstattung.
          </h2>
          <p className="mt-4 text-graphit/70 leading-relaxed">
            Wir verbinden sachverständige Fahrzeugbewertung mit den
            technischen Untersuchungsmöglichkeiten eines modern
            ausgestatteten Prüfzentrums. Unser Anspruch: eine
            nachvollziehbare, unabhängige und technisch fundierte
            Schadenfeststellung.
          </p>
          <div className="mt-8">
            <Link href="/ueber-uns" className="btn-secondary">
              Mehr über uns
            </Link>
          </div>
        </div>
      </section>

      {/* Großer Kontakt-CTA */}
      <BigContactCTA image={fotos.gebaeude.src} imageAlt={fotos.gebaeude.alt} />

      {/* Qualifikationen */}
      <section className="max-w-content mx-auto px-6 py-16 md:py-20">
        <p className="eyebrow mb-6">Qualifikationen &amp; Partnerschaften</p>
        <QualificationsBar />
      </section>
    </>
  );
}
