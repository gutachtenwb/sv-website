export default function PruefSiegel({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 200 200"
      className={className}
      aria-hidden="true"
      fill="none"
    >
      <circle cx="100" cy="100" r="96" stroke="currentColor" strokeWidth="2" />
      <circle cx="100" cy="100" r="84" stroke="currentColor" strokeWidth="1" strokeDasharray="2 4" />
      <path
        id="siegel-kreis"
        d="M 100,100 m -68,0 a 68,68 0 1,1 136,0 a 68,68 0 1,1 -136,0"
        fill="none"
      />
      <text fontSize="12" fill="currentColor" letterSpacing="3">
        <textPath href="#siegel-kreis" startOffset="2%">
          GEPRÜFT · DOKUMENTIERT · GERICHTSFEST ·
        </textPath>
      </text>
      <path
        d="M75 102 L92 118 L128 82"
        stroke="currentColor"
        strokeWidth="6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
