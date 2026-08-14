import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Datenschutz | Kfz-Sachverständigenbüro Mustermann",
};

export default function Datenschutz() {
  return (
    <div className="max-w-content mx-auto px-6 py-20 max-w-2xl">
      <h1 className="text-3xl font-semibold">Datenschutzerklärung</h1>

      <div className="mt-10 space-y-8 text-graphit/80 leading-relaxed text-sm">
        <section>
          <h2 className="font-display font-semibold text-graphit mb-2">
            1. Verantwortlicher
          </h2>
          <p>
            Kfz-Sachverständigenbüro Mustermann, Dipl.-Ing. Max Mustermann,
            Musterstraße 12, 12345 Musterstadt,
            info@kfz-gutachten-mustermann.de
          </p>
        </section>

        <section>
          <h2 className="font-display font-semibold text-graphit mb-2">
            2. Erhebung und Verarbeitung von Daten
          </h2>
          <p>
            Beim Besuch dieser Website werden durch den Hosting-Anbieter
            automatisch technische Informationen erfasst (z. B. IP-Adresse,
            Datum und Uhrzeit des Zugriffs, aufgerufene Seite). Diese Daten
            dienen der technischen Bereitstellung der Website und werden
            nicht mit anderen Datenquellen zusammengeführt.
          </p>
        </section>

        <section>
          <h2 className="font-display font-semibold text-graphit mb-2">
            3. Kontaktformular
          </h2>
          <p>
            Wenn Sie uns über das Kontaktformular Anfragen zukommen lassen,
            werden Ihre Angaben aus dem Formular inklusive der von Ihnen
            dort angegebenen Kontaktdaten zwecks Bearbeitung der Anfrage bei
            uns gespeichert. Diese Daten geben wir nicht ohne Ihre
            Einwilligung weiter.
          </p>
        </section>

        <section>
          <h2 className="font-display font-semibold text-graphit mb-2">
            4. Ihre Rechte
          </h2>
          <p>
            Sie haben jederzeit das Recht auf Auskunft, Berichtigung,
            Löschung und Einschränkung der Verarbeitung Ihrer bei uns
            gespeicherten personenbezogenen Daten sowie ein Recht auf
            Datenübertragbarkeit und Widerspruch. Wenden Sie sich hierzu an
            die oben genannte Kontaktadresse.
          </p>
        </section>
      </div>

      <p className="mt-16 text-xs text-graphit/40 font-mono">
        Hinweis: Dies ist ein Grundgerüst. Je nach eingesetzten Diensten
        (z. B. Hosting-Anbieter, Formular-Versand, Analyse-Tools) muss die
        Erklärung ergänzt werden — im Zweifel anwaltlich prüfen lassen.
      </p>
    </div>
  );
}
