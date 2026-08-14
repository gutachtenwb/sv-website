import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Impressum | Kfz-Sachverständigenbüro Mustermann",
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
            Kfz-Sachverständigenbüro Mustermann
            <br />
            Dipl.-Ing. Max Mustermann
            <br />
            Musterstraße 12
            <br />
            12345 Musterstadt
          </p>
        </section>

        <section>
          <h2 className="font-display font-semibold text-graphit mb-2">Kontakt</h2>
          <p>
            Telefon: 01234 / 567 890
            <br />
            E-Mail: info@kfz-gutachten-mustermann.de
          </p>
        </section>

        <section>
          <h2 className="font-display font-semibold text-graphit mb-2">
            Berufsbezeichnung
          </h2>
          <p>
            Öffentlich bestellter und vereidigter Sachverständiger für das
            Kfz-Wesen, verliehen durch die Muster-IHK (Platzhalter — bitte
            durch die tatsächliche Bestellungskörperschaft ersetzen).
          </p>
        </section>

        <section>
          <h2 className="font-display font-semibold text-graphit mb-2">
            Umsatzsteuer-ID
          </h2>
          <p>
            Umsatzsteuer-Identifikationsnummer gemäß § 27a UStG: DE
            000000000 (Platzhalter)
          </p>
        </section>

        <section>
          <h2 className="font-display font-semibold text-graphit mb-2">
            Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV
          </h2>
          <p>Dipl.-Ing. Max Mustermann, Anschrift wie oben</p>
        </section>

        <section>
          <h2 className="font-display font-semibold text-graphit mb-2">
            EU-Streitschlichtung
          </h2>
          <p>
            Die Europäische Kommission stellt eine Plattform zur
            Online-Streitbeilegung (OS) bereit. Wir sind zur Teilnahme an
            einem Streitbeilegungsverfahren vor einer
            Verbraucherschlichtungsstelle nicht verpflichtet und nicht
            bereit.
          </p>
        </section>
      </div>

      <p className="mt-16 text-xs text-graphit/40 font-mono">
        Hinweis: Diese Seite enthält Platzhaltertexte. Bitte durch die
        tatsächlichen, rechtlich korrekten Angaben ersetzen — im Zweifel
        anwaltlich prüfen lassen.
      </p>
    </div>
  );
}
