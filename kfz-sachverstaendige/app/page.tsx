import Link from "next/link";
import PruefSiegel from "@/components/PruefSiegel";

const leistungen = [
  {
    titel: "Unfallschadengutachten",
    text: "Vollständige Schadenermittlung nach einem Verkehrsunfall — als Grundlage für Ihre Ansprüche gegenüber der Versicherung.",
  },
  {
    titel: "Fahrzeugbewertung",
    text: "Marktwertermittlung für Kauf, Verkauf, Erbschaft oder Versicherungsfälle — nachvollziehbar und belastbar.",
  },
  {
    titel: "Zustandsbericht",
    text: "Neutrale Dokumentation des Fahrzeugzustands vor Ankauf, Leasingrückgabe oder Übergabe.",
  },
  {
    titel: "Oldtimerbewertung",
    text: "Wertgutachten nach § 23 StVZO sowie klassische Bewertungen für historische Fahrzeuge.",
  },
];

const ablauf = [
  { schritt: "01", titel: "Kontakt aufnehmen", text: "Sie schildern uns kurz den Fall — per Telefon, E-Mail oder Formular." },
  { schritt: "02", titel: "Termin vereinbaren", text: "Wir vereinbaren einen Besichtigungstermin, bei Ihnen vor Ort oder in unserer Werkstatt." },
  { schritt: "03", titel: "Begutachtung", text: "Fachgerechte Untersuchung, Fotodokumentation und Kalkulation des Schadens oder Werts." },
  { schritt: "04", titel: "Gutachten erhalten", text: "Sie erhalten Ihr Gutachten binnen weniger Werktage — digital und in Papierform." },
];

export default function Home() {
  return (
    <>
      {/* Hero — im Layout eines Gutachten-Deckblatts */}
      <section className="max-w-content mx-auto px-6 pt-16 pb-24">
        <div className="grid md:grid-cols-[1fr_auto] gap-12 items-start">
          <div>
            <p className="eyebrow mb-4">Az. KSB / 2026 / öffentlich bestellt</p>
            <h1 className="text-4xl md:text-6xl font-semibold leading-[1.05] max-w-2xl">
              Unabhängige Kfz-Gutachten, die vor Gericht und Versicherung
              Bestand haben.
            </h1>
            <p className="mt-6 text-lg text-graphit/70 max-w-xl">
              Unfallschaden, Fahrzeugwert oder Zustand — wir dokumentieren
              präzise, neutral und schnell. Als öffentlich bestellter und
              vereidigter Sachverständiger vertreten wir ausschließlich Ihre
              Interessen.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <Link href="/kontakt" className="btn-primary">
                Gutachten anfragen
              </Link>
              <Link href="/leistungen" className="btn-secondary">
                Leistungen ansehen
              </Link>
            </div>
          </div>

          <PruefSiegel className="hidden md:block w-40 h-40 text-stahlblau shrink-0 mt-2" />
        </div>

        <div className="rule mt-16" />
      </section>

      {/* Kennzahlen / Vertrauen */}
      <section className="max-w-content mx-auto px-6 pb-24 grid grid-cols-2 md:grid-cols-4 gap-8 font-mono">
        {[
          ["15+", "Jahre Erfahrung"],
          ["3.000+", "erstellte Gutachten"],
          ["48 Std.", "durchschnittliche Bearbeitung"],
          ["100%", "unabhängig & neutral"],
        ].map(([zahl, label]) => (
          <div key={label}>
            <p className="text-3xl font-semibold text-stahlblau">{zahl}</p>
            <p className="text-xs uppercase tracking-wide text-graphit/60 mt-1">
              {label}
            </p>
          </div>
        ))}
      </section>

      {/* Leistungen */}
      <section className="max-w-content mx-auto px-6 pb-24">
        <p className="eyebrow mb-3">Leistungen</p>
        <h2 className="text-3xl font-semibold max-w-xl">
          Gutachten für jeden Anlass
        </h2>
        <div className="mt-10 grid md:grid-cols-2 gap-px bg-messing/30">
          {leistungen.map((l) => (
            <div key={l.titel} className="bg-nebel p-8">
              <h3 className="text-xl font-semibold font-display">{l.titel}</h3>
              <p className="mt-3 text-graphit/70 leading-relaxed">{l.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Ablauf — echte Reihenfolge, daher nummeriert */}
      <section className="bg-graphit text-nebel">
        <div className="max-w-content mx-auto px-6 py-24">
          <p className="eyebrow text-nebel/50 mb-3">Ablauf</p>
          <h2 className="text-3xl font-semibold max-w-xl">
            Vom Anruf zum fertigen Gutachten
          </h2>
          <div className="mt-12 grid md:grid-cols-4 gap-10">
            {ablauf.map((a) => (
              <div key={a.schritt}>
                <p className="font-mono text-signalorange text-sm">{a.schritt}</p>
                <h3 className="mt-3 font-display font-semibold">{a.titel}</h3>
                <p className="mt-2 text-sm text-nebel/70 leading-relaxed">
                  {a.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-content mx-auto px-6 py-24 text-center">
        <h2 className="text-3xl md:text-4xl font-semibold max-w-xl mx-auto">
          Schildern Sie uns Ihren Fall — unverbindlich und kostenfrei.
        </h2>
        <div className="mt-8">
          <Link href="/kontakt" className="btn-primary">
            Jetzt Kontakt aufnehmen
          </Link>
        </div>
      </section>
    </>
  );
}
