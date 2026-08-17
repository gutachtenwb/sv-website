export type GoogleReview = {
  name: string;
  rating: 1 | 2 | 3 | 4 | 5;
  text: string;
  // Datum wie von Google geliefert, z. B. "vor 2 Wochen".
  relativeDate: string;
};

function Stars({ rating }: { rating: number }) {
  return (
    <div className="flex gap-0.5 text-safran" aria-hidden="true">
      {Array.from({ length: 5 }).map((_, i) => (
        <svg key={i} viewBox="0 0 20 20" className="w-4 h-4" fill={i < rating ? "currentColor" : "none"} stroke="currentColor" strokeWidth="1">
          <path d="M10 1.5l2.6 5.6 6 .7-4.5 4.1 1.2 6-5.3-3-5.3 3 1.2-6L1.4 7.8l6-.7L10 1.5z" strokeLinejoin="round" />
        </svg>
      ))}
    </div>
  );
}

// Fertige, einsatzbereite Komponente für echte Google-Bewertungen.
// WICHTIG: `reviews` wird bewusst NICHT mit Beispieldaten befüllt — es
// werden hier ausschließlich echte, über die Google-Anbindung abgerufene
// Bewertungen angezeigt. Solange keine Anbindung besteht, zeigt die
// Komponente einen ehrlichen Platzhalter-Zustand statt erfundener Texte.
export default function ReviewsSection({ reviews = [] }: { reviews?: GoogleReview[] }) {
  if (reviews.length === 0) {
    return (
      <div className="border border-messing/30 px-8 py-14 text-center max-w-xl mx-auto">
        <Stars rating={0} />
        <p className="mt-4 text-graphit/70 leading-relaxed">
          Unsere Google-Bewertungen werden an dieser Stelle in Kürze
          eingebunden.
        </p>
      </div>
    );
  }

  return (
    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {reviews.map((r) => (
        <div key={r.name + r.relativeDate} className="border border-messing/30 p-7 flex flex-col">
          <Stars rating={r.rating} />
          <p className="mt-4 text-sm text-graphit/80 leading-relaxed flex-1">
            „{r.text}&rdquo;
          </p>
          <div className="mt-5 flex items-center justify-between text-xs text-graphit/50 font-mono">
            <span>{r.name}</span>
            <span>{r.relativeDate}</span>
          </div>
        </div>
      ))}
    </div>
  );
}
