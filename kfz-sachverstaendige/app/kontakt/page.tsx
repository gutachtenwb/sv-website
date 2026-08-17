import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Kontakt",
  description:
    `Kontaktieren Sie das ${siteConfig.companyName} in ${siteConfig.address.city}: telefonisch, per E-Mail oder über das Kontaktformular.`,
  alternates: { canonical: "/kontakt" },
};

export default function KontaktPage() {
  return (
    <>
      <PageHero
        eyebrow="Kontakt"
        title="Schildern Sie uns Ihren Fall"
        lead="Rufen Sie uns an, schreiben Sie uns eine E-Mail oder nutzen Sie das Formular — wir melden uns so schnell wie möglich bei Ihnen."
        breadcrumbs={[{ name: "Kontakt", path: "/kontakt" }]}
      />

      <div className="max-w-content mx-auto px-6 pb-24 grid md:grid-cols-2 gap-16">
        <div>
          <div className="space-y-6 font-mono text-sm">
            <div>
              <p className="text-graphit/50 text-xs uppercase tracking-wide">Telefon</p>
              <a href={siteConfig.phone.href} className="mt-1 block text-lg hover:text-stahlblau">
                {siteConfig.phone.display}
              </a>
            </div>
            <div>
              <p className="text-graphit/50 text-xs uppercase tracking-wide">E-Mail</p>
              <a href={siteConfig.email.href} className="mt-1 block text-lg hover:text-stahlblau break-all">
                {siteConfig.email.display}
              </a>
            </div>
            <div>
              <p className="text-graphit/50 text-xs uppercase tracking-wide">Büro</p>
              <address className="mt-1 not-italic text-lg leading-snug">
                {siteConfig.address.street}
                <br />
                {siteConfig.address.zip} {siteConfig.address.city}
              </address>
            </div>
            <div>
              <p className="text-graphit/50 text-xs uppercase tracking-wide">Status</p>
              <p className="mt-1 text-lg">{siteConfig.adacStatus}</p>
            </div>
          </div>

          <p className="mt-10 text-sm text-graphit/60 leading-relaxed max-w-sm">
            Termine vereinbaren wir individuell nach Absprache — kontaktieren
            Sie uns telefonisch oder per E-Mail, um einen passenden
            Besichtigungstermin zu finden.
          </p>
        </div>

        {/* Hinweis: Formular ist aktuell clientseitig vorbereitet.
            Für echten Versand an eine Next.js API-Route oder einen
            Dienst wie Formspree/Resend anbinden. */}
        <form className="space-y-5">
          <div>
            <label htmlFor="name" className="block text-sm font-medium mb-1.5">
              Name
            </label>
            <input
              id="name"
              name="name"
              type="text"
              required
              autoComplete="name"
              className="w-full border border-messing/50 bg-transparent px-4 py-3 focus:border-stahlblau outline-none"
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium mb-1.5">
              E-Mail
            </label>
            <input
              id="email"
              name="email"
              type="email"
              required
              autoComplete="email"
              className="w-full border border-messing/50 bg-transparent px-4 py-3 focus:border-stahlblau outline-none"
            />
          </div>
          <div>
            <label htmlFor="telefon" className="block text-sm font-medium mb-1.5">
              Telefon (optional)
            </label>
            <input
              id="telefon"
              name="telefon"
              type="tel"
              autoComplete="tel"
              className="w-full border border-messing/50 bg-transparent px-4 py-3 focus:border-stahlblau outline-none"
            />
          </div>
          <div>
            <label htmlFor="anliegen" className="block text-sm font-medium mb-1.5">
              Art des Anliegens
            </label>
            <select
              id="anliegen"
              name="anliegen"
              className="w-full border border-messing/50 bg-transparent px-4 py-3 focus:border-stahlblau outline-none"
            >
              <option>Unfallgutachten / Schadengutachten</option>
              <option>Technische Beweissicherung</option>
              <option>Fahrzeugbewertung</option>
              <option>Kaufbegleitung</option>
              <option>Oldtimer / Youngtimer</option>
              <option>Sonstiges</option>
            </select>
          </div>
          <div>
            <label htmlFor="nachricht" className="block text-sm font-medium mb-1.5">
              Nachricht
            </label>
            <textarea
              id="nachricht"
              name="nachricht"
              rows={5}
              required
              className="w-full border border-messing/50 bg-transparent px-4 py-3 focus:border-stahlblau outline-none"
            />
          </div>
          <button type="submit" className="btn-primary">
            Anfrage senden
          </button>
        </form>
      </div>
    </>
  );
}
