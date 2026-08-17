import Link from "next/link";
import Image from "next/image";
import { navItems, siteConfig } from "@/lib/site-config";
import MobileNav from "@/components/MobileNav";
import { logos } from "@/lib/images";

export default function Header() {
  return (
    <header className="border-b border-messing/30 bg-nebel/95 backdrop-blur sticky top-0 z-50">
      <div className="max-w-content mx-auto px-6 h-20 flex items-center justify-between gap-4">
        <Link href="/" className="flex items-center gap-3 min-w-0 shrink-0">
          <Image
            src={logos.schriftDunkel.src}
            alt={logos.schriftDunkel.alt}
            className="h-9 md:h-10 w-auto"
            priority
          />
          <span className="hidden sm:block h-8 w-px bg-messing/40" aria-hidden="true" />
          <span className="hidden sm:block text-xs font-mono uppercase tracking-wide text-graphit/50 leading-tight">
            Prüfzentrum
            <br />
            {siteConfig.address.city}
          </span>
        </Link>

        <nav className="hidden lg:flex items-center gap-7 font-body text-sm">
          {navItems.map((item) =>
            "children" in item && item.children ? (
              <div key={item.href} className="relative group">
                <Link
                  href={item.href}
                  className="flex items-center gap-1 hover:text-safran-dunkel transition-colors py-8"
                >
                  {item.label}
                  <svg viewBox="0 0 24 24" className="w-3 h-3" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                    <path d="M6 9l6 6 6-6" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </Link>
                <div className="absolute left-1/2 -translate-x-1/2 top-full hidden group-hover:block group-focus-within:block pt-0">
                  <ul className="w-72 bg-nebel border border-messing/30 shadow-lg py-2">
                    {item.children.map((child) => (
                      <li key={child.href}>
                        <Link
                          href={child.href}
                          className="block px-5 py-2.5 text-sm hover:bg-graphit/5 hover:text-safran-dunkel"
                        >
                          {child.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ) : (
              <Link
                key={item.href}
                href={item.href}
                className="hover:text-safran-dunkel transition-colors"
              >
                {item.label}
              </Link>
            )
          )}
        </nav>

        <div className="hidden lg:flex items-center gap-4 shrink-0">
          <a href={siteConfig.phone.href} className="font-mono text-sm text-graphit hover:text-safran-dunkel">
            {siteConfig.phone.display}
          </a>
          <Link href="/kontakt" className="btn-primary text-sm px-5 py-2.5">
            Termin vereinbaren
          </Link>
        </div>

        <MobileNav />
      </div>
    </header>
  );
}
