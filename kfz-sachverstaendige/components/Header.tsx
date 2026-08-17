import Link from "next/link";
import { navItems, siteConfig } from "@/lib/site-config";
import MobileNav from "@/components/MobileNav";

export default function Header() {
  return (
    <header className="border-b border-messing/30 bg-nebel/95 backdrop-blur sticky top-0 z-50">
      <div className="max-w-content mx-auto px-6 h-20 flex items-center justify-between gap-4">
        <Link href="/" className="flex items-center gap-3 min-w-0">
          <span className="w-9 h-9 rounded-full border-2 border-stahlblau flex items-center justify-center font-mono text-[10px] text-stahlblau shrink-0">
            SV
          </span>
          <span className="min-w-0 leading-tight">
            <span className="block truncate font-display font-semibold text-sm sm:text-base md:text-lg">
              {siteConfig.companyName}
            </span>
            <span className="block truncate text-xs md:text-sm font-body font-normal text-graphit/70">
              {siteConfig.address.city}
            </span>
          </span>
        </Link>

        <nav className="hidden lg:flex items-center gap-7 font-body text-sm">
          {navItems.map((item) =>
            "children" in item && item.children ? (
              <div key={item.href} className="relative group">
                <Link
                  href={item.href}
                  className="flex items-center gap-1 hover:text-stahlblau transition-colors py-8"
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
                          className="block px-5 py-2.5 text-sm hover:bg-graphit/5 hover:text-stahlblau"
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
                className="hover:text-stahlblau transition-colors"
              >
                {item.label}
              </Link>
            )
          )}
        </nav>

        <div className="hidden lg:flex items-center gap-4 shrink-0">
          <a href={siteConfig.phone.href} className="font-mono text-sm text-graphit hover:text-stahlblau">
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
