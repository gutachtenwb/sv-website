const ablauf = [
  {
    schritt: "01",
    titel: "Kontakt aufnehmen",
    text: "Sie schildern uns Ihr Anliegen telefonisch, per E-Mail oder über das Kontaktformular.",
  },
  {
    schritt: "02",
    titel: "Besichtigung",
    text: "Das Fahrzeug wird untersucht und der Schaden bzw. Zustand dokumentiert.",
  },
  {
    schritt: "03",
    titel: "Technische Prüfung",
    text: "Falls erforderlich erfolgen ergänzende Messungen — etwa Achsvermessung, Karosserievermessung, Lackschichtdickenmessung oder Fahrzeugdiagnose.",
  },
  {
    schritt: "04",
    titel: "Gutachtenerstellung",
    text: "Schadenumfang bzw. die relevanten Werte werden sachverständig ermittelt und nachvollziehbar dokumentiert.",
  },
  {
    schritt: "05",
    titel: "Weitere Abwicklung",
    text: "Die Unterlagen werden entsprechend dem Auftrag an die beteiligten Stellen weitergegeben.",
  },
];

export default function ProcessSteps({ variant = "dark" }: { variant?: "dark" | "light" }) {
  const textClass = variant === "dark" ? "text-nebel/70" : "text-graphit/70";
  return (
    <div className="mt-12 grid md:grid-cols-5 gap-10">
      {ablauf.map((a) => (
        <div key={a.schritt}>
          <p className="font-mono text-safran text-sm">{a.schritt}</p>
          <h3 className="mt-3 font-display font-semibold">{a.titel}</h3>
          <p className={`mt-2 text-sm leading-relaxed ${textClass}`}>{a.text}</p>
        </div>
      ))}
    </div>
  );
}
