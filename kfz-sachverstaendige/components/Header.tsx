import Link from "next/link";
import Image from "next/image";
import { navItems, siteConfig } from "@/lib/site-config";
import MobileNav from "@/components/MobileNav";
import { logos } from "@/lib/images";

export default function Header() {
  return (
    <header className="border-b border-messing/30 bg-nebel/95 backdrop-blur sticky top-0 z-50">
      <div className="max-w-content mx-auto px-6 h-24 flex items-center justify-between gap-6">
        <Link href="/" className="shrink-0">
          <Image
            src={logos.schriftDunkel.src}
            alt={logos.schriftDunkel.alt}
            className="h-11 md:h-12 w-auto"
            priority
          />
        </Link>

        <nav className="hidden lg:flex items-center gap-10 font-body text-[15px]">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="hover:text-safran-dunkel transition-colors"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden lg:flex items-center gap-5 shrink-0">
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
