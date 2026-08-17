import Link from "next/link";

type EquipmentCardProps = {
  geraet?: string;
  titel: string;
  text: string;
  einsatz: string[];
  href?: string;
};

export default function EquipmentCard({ geraet, titel, text, einsatz, href }: EquipmentCardProps) {
  const content = (
    <>
      {geraet && (
        <p className="font-mono text-xs uppercase tracking-wide text-safran mb-2">
          {geraet}
        </p>
      )}
      <h3 className="text-xl font-semibold font-display">{titel}</h3>
      <p className="mt-3 text-nebel/70 leading-relaxed text-sm">{text}</p>
      <ul className="mt-4 space-y-1.5 text-sm text-nebel/80">
        {einsatz.map((e) => (
          <li key={e} className="flex items-start gap-2">
            <span className="text-safran mt-0.5">—</span>
            <span>{e}</span>
          </li>
        ))}
      </ul>
      {href && (
        <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-medium text-safran">
          Mehr erfahren →
        </span>
      )}
    </>
  );

  const className = "bg-graphit/40 border border-nebel/10 p-8 flex flex-col h-full";

  if (href) {
    return (
      <Link href={href} className={`${className} hover:border-safran/60 transition-colors`}>
        {content}
      </Link>
    );
  }

  return <div className={className}>{content}</div>;
}
