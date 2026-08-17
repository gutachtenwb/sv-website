const punkte = [
  {
    titel: "Kfz-Technikermeister",
    text: "Meisterqualifikation im Kraftfahrzeugtechniker-Handwerk.",
  },
  {
    titel: "ADAC Vertrags-Sachverständiger",
    text: "Begutachtung im Rahmen einer Vertragsbindung mit dem ADAC.",
  },
  {
    titel: "VKS-Mitglied",
    text: "Mitglied im Verband der Kfz-Sachverständigen.",
  },
  {
    titel: "Eigenes Prüfzentrum",
    text: "Achs- und Rahmenvermessung, Hebebühnen, Diagnose vor Ort.",
  },
];

export default function TrustBadges() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-messing/30">
      {punkte.map((p) => (
        <div key={p.titel} className="bg-nebel p-6 md:p-7 border-t-2 border-safran">
          <p className="font-display font-semibold text-sm leading-snug">{p.titel}</p>
          <p className="mt-2 text-xs text-graphit/60 leading-relaxed">{p.text}</p>
        </div>
      ))}
    </div>
  );
}
