import type { Metadata } from "next";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Impressum",
  alternates: { canonical: "/impressum" },
  robots: { index: true, follow: true },
};

export default function Impressum() {
  return (
    <div className="max-w-content mx-auto px-6 py-20 max-w-2xl">
      <h1 className="text-3xl font-semibold">Impressum</h1>

      <div className="mt-10 space-y-8 text-graphit/80 leading-relaxed text-sm">
        <section>
          <h2 className="font-display font-semibold text-graphit mb-2">
            Angaben gemäß § 5 TMG
          </h2>
          <p>
            {siteConfig.companyName}
            <br />
            {siteConfig.contactPerson}
            <br />
            {siteConfig.address.street}
            <br />
            {siteConfig.address.zip} {siteConfig.address.city}
          </p>
        </section>

        <section>
          <h2 className="font-display font-semibold text-graphit mb-2">Kontakt</h2>
          <p>
            Telefon: {siteConfig.phone.display}
            <br />
            E-Mail: {siteConfig.email.display}
          </p>
        </section>

        <section>
          <h2 className="font-display font-semibold text-graphit mb-2">
            Tätigkeitsbezeichnung
          </h2>
          <p>
            Kfz-Sachverständiger · {siteConfig.adacStatus}
          </p>
        </section>

        <section>
          <h2 className="font-display font-semibold text-graphit mb-2">
            Umsatzsteuer-ID
          </h2>
          <p>
            Umsatzsteuer-Identifikationsnummer gemäß § 27a UStG: wird
            ergänzt.
          </p>
        </section>

        <section>
          <h2 className="font-display font-semibold text-graphit mb-2">
            Verantwortlich für den Inhalt nach § 18 Abs. 2 MStV
          </h2>
          <p>{siteConfig.contactPerson}, Anschrift wie oben</p>
        </section>

        <section>
          <h2 className="font-display font-semibold text-graphit mb-2">
            EU-Streitschlichtung
          </h2>
          <p>
            Die Europäische Kommission stellt eine Plattform zur
            Online-Streitbeilegung (OS) bereit:{" "}
            <a
              href="https://ec.europa.eu/consumers/odr/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-stahlblau hover:underline"
            >
              ec.europa.eu/consumers/odr
            </a>
            . Wir sind zur Teilnahme an einem Streitbeilegungsverfahren vor
            einer Verbraucherschlichtungsstelle nicht verpflichtet und nicht
            bereit.
          </p>
        </section>
      </div>

      <p className="mt-16 text-xs text-graphit/40 font-mono">
        Hinweis: Die Umsatzsteuer-Identifikationsnummer wird nach Vorliegen
        ergänzt. Diese Seite ersetzt keine anwaltliche Prüfung.
      </p>
    </div>
  );
}
