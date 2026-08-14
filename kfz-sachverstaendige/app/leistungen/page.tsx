import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Leistungen | Kfz-Sachverständigenbüro Mustermann",
};

const leistungen = [
  {
    titel: "Unfallschadengutachten",
    text: "Nach einem Verkehrsunfall dokumentieren wir Schadenumfang, Reparaturkosten und Wertminderung Ihres Fahrzeugs. Das Gutachten dient als Grundlage für die Regulierung mit der gegnerischen Versicherung.",
    punkte: ["Schadenkalkulation", "Wertminderung", "Nutzungsausfall & Mietwagen", "Fotodokumentation"],
  },
  {
    titel: "Fahrzeugbewertung",
    text: "Für Kauf, Verkauf, Erbschaft, Scheidung oder Versicherungsfälle ermitteln wir den aktuellen Marktwert Ihres Fahrzeugs auf Basis anerkannter Bewertungsverfahren.",
    punkte: ["Marktwertermittlung", "Kurzgutachten", "Wertgutachten für Versicherungen"],
  },
  {
    titel: "Zustandsbericht",
    text: "Vor dem Ankauf eines Gebrauchtwagens, bei der Leasingrückgabe oder Fahrzeugübergabe schaffen wir Klarheit über den tatsächlichen Zustand — neutral und belastbar.",
    punkte: ["Ankaufsuntersuchung", "Leasingrückgabe", "Übergabeprotokoll"],
  },
  {
    titel: "Oldtimerbewertung",
    text: "Wertgutachten nach § 23 StVZO für die Zulassung sowie klassische Bewertungsgutachten für historische und Sammlerfahrzeuge.",
    punkte: ["§ 23 StVZO Gutachten", "Zustandsnote", "Wertgutachten für Sammler"],
  },
];

export default function Leistungen() {
  return (
    <div className="max-w-content mx-auto px-6 py-20">
      <p className="eyebrow mb-3">Leistungen</p>
      <h1 className="text-4xl md:text-5xl font-semibold max-w-2xl">
        Gutachten, auf die Sie sich verlassen können
      </h1>

      <div className="mt-16 space-y-16">
        {leistungen.map((l, i) => (
          <div key={l.titel} className="grid md:grid-cols-[80px_1fr] gap-8 rule pt-10">
            <p className="font-mono text-sm text-stahlblau">
              {String(i + 1).padStart(2, "0")}
            </p>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h2 className="text-2xl font-semibold font-display">{l.titel}</h2>
                <p className="mt-3 text-graphit/70 leading-relaxed">{l.text}</p>
              </div>
              <ul className="space-y-2 text-sm">
                {l.punkte.map((p) => (
                  <li key={p} className="flex items-start gap-2">
                    <span className="text-signalorange mt-1">—</span>
                    <span>{p}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-20 text-center">
        <Link href="/kontakt" className="btn-primary">
          Unverbindlich anfragen
        </Link>
      </div>
    </div>
  );
}
