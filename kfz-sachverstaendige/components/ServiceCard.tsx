import Link from "next/link";

type ServiceCardProps = {
  href: string;
  titel: string;
  text: string;
  tag?: string;
};

export default function ServiceCard({ href, titel, text, tag }: ServiceCardProps) {
  return (
    <Link
      href={href}
      className="group bg-nebel p-8 border border-messing/20 hover:border-safran-dunkel/60 transition-colors flex flex-col"
    >
      {tag && <p className="eyebrow mb-3">{tag}</p>}
      <h3 className="text-xl font-semibold font-display group-hover:text-safran-dunkel transition-colors">
        {titel}
      </h3>
      <p className="mt-3 text-graphit/70 leading-relaxed text-sm flex-1">{text}</p>
      <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-medium text-safran-dunkel">
        Mehr erfahren
        <span aria-hidden="true" className="transition-transform group-hover:translate-x-1">
          →
        </span>
      </span>
    </Link>
  );
}
