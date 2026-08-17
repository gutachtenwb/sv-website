import type { Metadata } from "next";
import Image from "next/image";
import PageHero from "@/components/PageHero";
import CTASection from "@/components/CTASection";
import TrustBadges from "@/components/TrustBadges";
import { siteConfig } from "@/lib/site-config";
import { fotos, logos } from "@/lib/images";

export const metadata: Metadata = {
  title: "Über uns",
  description:
    `${siteConfig.companyName} in ${siteConfig.address.city}: ${siteConfig.adacStatus}, unabhängige Begutachtung mit eigenem Prüfzentrum und moderner Mess- und Prüftechnik.`,
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
            Ansprechpartner ist {siteConfig.contactPerson}, Kfz-Technikermeister
            und {siteConfig.adacStatus}. Die Begutachtung verbindet
            persönliche Sachverständigenarbeit mit dem eigenen Prüfzentrum:
            Schäden werden nicht nur betrachtet, sondern bei Bedarf vermessen,
            diagnostiziert und nachvollziehbar dokumentiert.
          </p>
        </div>
      </PageHero>

      <section className="max-w-content mx-auto px-6 pb-16 md:pb-20">
        <div className="relative aspect-[16/9] md:aspect-[21/9]">
          <Image
            src={fotos.technischeUntersuchung.src}
            alt={fotos.technischeUntersuchung.alt}
            fill
            sizes="100vw"
            className="object-cover object-[center_25%]"
          />
        </div>
      </section>

      <section className="max-w-content mx-auto px-6 pb-16 md:pb-20">
        <p className="eyebrow mb-3">Qualifikationen</p>
        <TrustBadges />
      </section>

      <section className="bg-graphit text-nebel">
        <div className="max-w-content mx-auto px-6 py-16 grid md:grid-cols-3 gap-10">
          <div>
            <p className="eyebrow eyebrow-light mb-2">Status</p>
            <p className="text-nebel/80 text-sm leading-relaxed">
              {siteConfig.adacStatus}
            </p>
          </div>
          <div>
            <p className="eyebrow eyebrow-light mb-2">Ansprechpartner</p>
            <p className="text-nebel/80 text-sm leading-relaxed">
              {siteConfig.contactPerson}
            </p>
          </div>
          <div>
            <p className="eyebrow eyebrow-light mb-2">Einsatzgebiet</p>
            <p className="text-nebel/80 text-sm leading-relaxed">
              {siteConfig.address.city} und Umgebung, {siteConfig.region.areas.slice(1).join(", ")}
            </p>
          </div>
        </div>
      </section>

      <section className="max-w-content mx-auto px-6 py-16 md:py-20">
        <div className="max-w-2xl">
          <h2 className="text-2xl font-semibold font-display">Arbeitsweise</h2>
          <p className="mt-4 text-graphit/70 leading-relaxed">
            Jede Begutachtung wird individuell auf Fahrzeug und Anlass
            abgestimmt. Wo eine reine Sichtprüfung nicht ausreicht, kommen
            die Mess- und Prüfmöglichkeiten des eigenen Prüfzentrums zum
            Einsatz — von der 3D-Karosserie- und Achsvermessung bis zur
            Freilegung beschädigter Bereiche und elektronischen
            Fahrzeugdiagnose. Ziel ist eine nachvollziehbare, unabhängige
            Dokumentation, auf die sich Kundinnen und Kunden verlassen können.
          </p>
        </div>

        {/* Nachweise — dezent, keine Logo-Wand */}
        <div className="mt-16 pt-10 border-t border-messing/30">
          <p className="eyebrow mb-6">Nachweise</p>
          <div className="flex flex-wrap items-end gap-x-12 gap-y-8">
            <div>
              <Image
                src={logos.adacBadge.src}
                alt={logos.adacBadge.alt}
                className="h-16 w-auto"
              />
            </div>
            <div className="bg-white px-3 py-2 border border-messing/20">
              <Image
                src={logos.vks.src}
                alt={logos.vks.alt}
                className="h-11 w-auto"
              />
            </div>
            <div className="bg-white px-3 py-2 border border-messing/20">
              <Image
                src={logos.handwerkskammer.src}
                alt={logos.handwerkskammer.alt}
                className="h-7 w-auto"
              />
            </div>
            <a
              href={logos.meisterbrief.src.src}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-3 border border-messing/30 pl-2 pr-4 py-2 hover:border-safran-dunkel/60 transition-colors"
            >
              <span className="relative w-12 h-16 shrink-0 overflow-hidden bg-nebel">
                <Image
                  src={logos.meisterbrief.src}
                  alt=""
                  aria-hidden="true"
                  fill
                  sizes="48px"
                  className="object-cover object-top"
                />
              </span>
              <span className="text-xs text-graphit/60 leading-snug max-w-[10rem]">
                Meisterbrief Kfz-Technikerhandwerk
                <span className="block mt-1 font-medium text-safran-dunkel group-hover:underline">
                  Nachweis ansehen
                </span>
              </span>
            </a>
          </div>
        </div>
      </section>

      <CTASection
        title="Lernen Sie uns kennen"
        text="Kontaktieren Sie uns für ein unverbindliches Gespräch zu Ihrem Anliegen."
      />
    </>
  );
}
