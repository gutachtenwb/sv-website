type ImagePlaceholderProps = {
  label: string;
  className?: string;
};

// Solange keine eigenen Fotos vorliegen, markiert dieser Platzhalter
// deutlich, welches reale Motiv später an dieser Stelle eingesetzt
// werden sollte. Bewusst kein fremdes Stock-Foto.
export default function ImagePlaceholder({ label, className = "" }: ImagePlaceholderProps) {
  return (
    <div
      className={`relative flex items-center justify-center border border-dashed border-messing/50 bg-graphit/[0.03] text-center p-6 ${className}`}
      role="img"
      aria-label={`Bildplatzhalter: ${label}`}
    >
      <div>
        <svg
          viewBox="0 0 24 24"
          className="w-8 h-8 mx-auto text-graphit/30"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          aria-hidden="true"
        >
          <rect x="3" y="5" width="18" height="14" rx="1" />
          <circle cx="9" cy="10" r="1.5" />
          <path d="M21 16l-5.5-5.5L9 17" />
        </svg>
        <p className="mt-3 text-xs font-mono uppercase tracking-wide text-graphit/40 max-w-[16rem]">
          Foto folgt: {label}
        </p>
      </div>
    </div>
  );
}
