type ImagePlaceholderProps = {
  label: string;
  className?: string;
};

// Hochwertiger Asset-Slot für Motive, zu denen aktuell kein passendes
// Originalfoto vorliegt. Bewusst kein Stock- oder KI-Bild an dieser Stelle,
// bis ein tatsächlich passendes Motiv ergänzt wird (siehe Kommentar am
// jeweiligen Einsatzort im Code).
export default function ImagePlaceholder({ label, className = "" }: ImagePlaceholderProps) {
  return (
    <div
      className={`relative flex items-end justify-start overflow-hidden bg-graphit text-nebel p-6 ${className}`}
      role="img"
      aria-label={`Bildmotiv folgt: ${label}`}
    >
      <div
        className="absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage:
            "repeating-linear-gradient(135deg, currentColor 0, currentColor 1px, transparent 1px, transparent 14px)",
        }}
        aria-hidden="true"
      />
      <div className="relative">
        <svg viewBox="0 0 24 24" className="w-6 h-6 text-safran" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
          <rect x="3" y="5" width="18" height="14" rx="1" />
          <circle cx="9" cy="10" r="1.5" />
          <path d="M21 16l-5.5-5.5L9 17" />
        </svg>
        <p className="mt-2 text-xs font-mono uppercase tracking-wide text-nebel/60 max-w-[16rem]">
          Bildmotiv folgt: {label}
        </p>
      </div>
    </div>
  );
}
