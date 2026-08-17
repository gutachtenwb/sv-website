const punkte = [
  {
    titel: "ADAC Vertrags-Sachverständiger",
    text: "Begutachtung im Rahmen einer Vertragsbindung mit dem ADAC.",
  },
  {
    titel: "Villingen-Schwenningen",
    text: "Vor Ort im Schwarzwald-Baar-Kreis und der Region erreichbar.",
  },
  {
    titel: "Professionelle Prüf- und Messtechnik",
    text: "Karosserie-, Achs- und Lackschichtdickenmessung sowie Fahrzeugdiagnose.",
  },
  {
    titel: "Unabhängige Begutachtung",
    text: "Neutrale Einschätzung, losgelöst von Werkstatt- oder Versicherungsinteressen.",
  },
];

export default function TrustBadges() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-messing/30">
      {punkte.map((p) => (
        <div key={p.titel} className="bg-nebel p-6 md:p-7">
          <p className="font-display font-semibold text-sm leading-snug">{p.titel}</p>
          <p className="mt-2 text-xs text-graphit/60 leading-relaxed">{p.text}</p>
        </div>
      ))}
    </div>
  );
}
