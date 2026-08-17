import Link from "next/link";

export default function Breadcrumbs({
  items,
}: {
  items: { name: string; path: string }[];
}) {
  return (
    <nav aria-label="Breadcrumb" className="mb-6">
      <ol className="flex flex-wrap items-center gap-1.5 text-xs text-graphit/50 font-mono">
        <li>
          <Link href="/" className="hover:text-safran-dunkel">
            Start
          </Link>
        </li>
        {items.map((item, index) => (
          <li key={item.path} className="flex items-center gap-1.5">
            <span aria-hidden="true">/</span>
            {index === items.length - 1 ? (
              <span className="text-graphit/70" aria-current="page">
                {item.name}
              </span>
            ) : (
              <Link href={item.path} className="hover:text-safran-dunkel">
                {item.name}
              </Link>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}
