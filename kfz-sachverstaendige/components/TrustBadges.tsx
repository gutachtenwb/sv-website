const punkte = [
  { titel: "Kfz-Technikermeister" },
  { titel: "ADAC-\nVertragssachverständiger" },
  { titel: "VKS-\nVerbandsmitglied" },
  { titel: "Technisches\nPrüfzentrum" },
];

export default function TrustBadges() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-y md:divide-y-0 divide-messing/25 border border-messing/25">
      {punkte.map((p) => (
        <div key={p.titel} className="px-5 py-8 md:py-10 text-center">
          <span className="block w-6 h-px bg-safran mx-auto mb-4" aria-hidden="true" />
          <p className="font-display font-semibold text-[15px] md:text-base leading-snug whitespace-pre-line">
            {p.titel}
          </p>
        </div>
      ))}
    </div>
  );
}
