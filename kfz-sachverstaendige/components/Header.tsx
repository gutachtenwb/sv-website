import Link from "next/link";

const navItems = [
  { href: "/leistungen", label: "Leistungen" },
  { href: "/ueber-uns", label: "Über uns" },
  { href: "/kontakt", label: "Kontakt" },
];

export default function Header() {
  return (
    <header className="border-b border-messing/30 bg-nebel/95 backdrop-blur sticky top-0 z-50">
      <div className="max-w-content mx-auto px-6 h-20 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3 group">
          <span className="w-9 h-9 rounded-full border-2 border-stahlblau flex items-center justify-center font-mono text-[10px] text-stahlblau">
            KSB
          </span>
          <span className="font-display font-semibold text-lg leading-tight">
            Kfz-Sachverständigenbüro
            <br />
            <span className="text-sm font-body font-normal text-graphit/70">
              Mustermann
            </span>
          </span>
        </Link>

        <nav className="hidden md:flex items-center gap-8 font-body text-sm">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="hover:text-stahlblau transition-colors"
            >
              {item.label}
            </Link>
          ))}
          <Link href="/kontakt" className="btn-primary text-sm px-5 py-2.5">
            Gutachten anfragen
          </Link>
        </nav>

        <Link
          href="/kontakt"
          className="md:hidden btn-primary text-sm px-4 py-2"
        >
          Kontakt
        </Link>
      </div>
    </header>
  );
}
