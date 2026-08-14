import type { Metadata } from "next";
import PruefSiegel from "@/components/PruefSiegel";

export const metadata: Metadata = {
  title: "Über uns | Kfz-Sachverständigenbüro Mustermann",
};

export default function UeberUns() {
  return (
    <div className="max-w-content mx-auto px-6 py-20">
      <div className="grid md:grid-cols-[1fr_auto] gap-12 items-start">
        <div>
          <p className="eyebrow mb-3">Über uns</p>
          <h1 className="text-4xl md:text-5xl font-semibold max-w-2xl">
            Öffentlich bestellt, unabhängig, seit über 15 Jahren im Einsatz.
          </h1>
          <div className="mt-8 space-y-5 max-w-2xl text-graphit/70 leading-relaxed">
            <p>
              Das Kfz-Sachverständigenbüro Mustermann wurde gegründet, um
              Fahrzeughaltern nach einem Unfall oder bei Wertfragen eine
              neutrale, fundierte Einschätzung an die Hand zu geben — losgelöst
              von den Interessen einer Werkstatt oder Versicherung.
            </p>
            <p>
              Als öffentlich bestellter und vereidigter Sachverständiger
              erstellen wir Gutachten, die vor Gericht Bestand haben und von
              Versicherungen anerkannt werden. Jeder Fall wird persönlich
              bearbeitet, jede Kalkulation ist nachvollziehbar dokumentiert.
            </p>
          </div>
        </div>
        <PruefSiegel className="hidden md:block w-32 h-32 text-stahlblau shrink-0" />
      </div>

      <div className="rule mt-16 pt-16 grid md:grid-cols-3 gap-10">
        <div>
          <p className="eyebrow mb-2">Qualifikation</p>
          <p className="text-graphit/70 text-sm leading-relaxed">
            Dipl.-Ing. Max Mustermann · Öffentlich bestellter und vereidigter
            Sachverständiger für das Kfz-Wesen, Muster-IHK
          </p>
        </div>
        <div>
          <p className="eyebrow mb-2">Mitgliedschaften</p>
          <p className="text-graphit/70 text-sm leading-relaxed">
            Verband unabhängiger Kfz-Sachverständiger e. V. (Platzhalter)
          </p>
        </div>
        <div>
          <p className="eyebrow mb-2">Einsatzgebiet</p>
          <p className="text-graphit/70 text-sm leading-relaxed">
            Musterstadt und Umgebung — Termine bundesweit nach Absprache
          </p>
        </div>
      </div>
    </div>
  );
}
