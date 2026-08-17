import type { Metadata } from "next";
import PruefSiegel from "@/components/PruefSiegel";
import PageHero from "@/components/PageHero";
import CTASection from "@/components/CTASection";
import ImagePlaceholder from "@/components/ImagePlaceholder";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Über uns",
  description:
    `${siteConfig.companyName} in ${siteConfig.address.city}: ${siteConfig.adacStatus}, unabhängige Begutachtung mit moderner Prüf- und Messtechnik.`,
  alternates: { canonical: "/ueber-uns" },
};

export default function UeberUnsPage() {
  return (
    <>
      <PageHero
        eyebrow="Über uns"
        title={`${siteConfig.adacStatus} in ${siteConfig.address.city}`}
        breadcrumbs={[{ name: "Über uns", path: "/ueber-uns" }]}
      >
        <div className="mt-8 space-y-5 max-w-2xl text-graphit/70 leading-relaxed">
          <p>
            Das {siteConfig.companyName} unterstützt Fahrzeughalter,
            Unfallgeschädigte, Werkstätten, Autohäuser und Rechtsanwälte in{" "}
            {siteConfig.address.city} und der Region mit unabhängiger
            Sachverständigenarbeit — losgelöst von den Interessen einer
            Werkstatt oder Versicherung.
          </p>
          <p>
            Ansprechpartner ist {siteConfig.contactPerson}. Die Begutachtung
            verbindet persönliche Sachverständigenarbeit mit moderner Prüf-
            und Messtechnik: Schäden werden nicht nur betrachtet, sondern bei
            Bedarf vermessen, diagnostiziert und nachvollziehbar
            dokumentiert.
          </p>
        </div>
      </PageHero>

      <section className="max-w-content mx-auto px-6 pb-16 grid md:grid-cols-[1fr_auto] gap-12 items-center">
        <ImagePlaceholder label="Sachverständiger bei der Arbeit" className="min-h-[16rem]" />
        <PruefSiegel className="hidden md:block w-32 h-32 text-stahlblau shrink-0" />
      </section>

      <section className="bg-graphit text-nebel">
        <div className="max-w-content mx-auto px-6 py-16 grid md:grid-cols-3 gap-10">
          <div>
            <p className="eyebrow text-nebel/50 mb-2">Status</p>
            <p className="text-nebel/80 text-sm leading-relaxed">
              {siteConfig.adacStatus}
            </p>
          </div>
          <div>
            <p className="eyebrow text-nebel/50 mb-2">Ansprechpartner</p>
            <p className="text-nebel/80 text-sm leading-relaxed">
              {siteConfig.contactPerson}
            </p>
          </div>
          <div>
            <p className="eyebrow text-nebel/50 mb-2">Einsatzgebiet</p>
            <p className="text-nebel/80 text-sm leading-relaxed">
              {siteConfig.address.city} und Umgebung, {siteConfig.region.areas.slice(1).join(", ")}
            </p>
          </div>
        </div>
      </section>

      <section className="max-w-content mx-auto px-6 py-16 max-w-2xl">
        <h2 className="text-2xl font-semibold font-display">Arbeitsweise</h2>
        <p className="mt-4 text-graphit/70 leading-relaxed">
          Jede Begutachtung wird individuell auf Fahrzeug und Anlass
          abgestimmt. Wo eine reine Sichtprüfung nicht ausreicht, kommen
          Mess- und Diagnosetechnik zum Einsatz — von der 3D-Karosserie- und
          Achsvermessung bis zur Lackschichtdickenmessung und elektronischen
          Fahrzeugdiagnose. Ziel ist eine nachvollziehbare, unabhängige
          Dokumentation, auf die sich Kundinnen und Kunden verlassen können.
        </p>
      </section>

      <CTASection
        title="Lernen Sie uns kennen"
        text="Kontaktieren Sie uns für ein unverbindliches Gespräch zu Ihrem Anliegen."
      />
    </>
  );
}
