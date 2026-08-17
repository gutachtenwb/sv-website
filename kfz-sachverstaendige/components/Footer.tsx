import Link from "next/link";
import Image from "next/image";
import { navItems, siteConfig } from "@/lib/site-config";
import { logos } from "@/lib/images";

export default function Footer() {
  return (
    <footer className="bg-graphit text-nebel mt-24 md:mt-32 pb-20 md:pb-0">
      <div className="max-w-content mx-auto px-6 py-16 grid gap-12 md:grid-cols-3">
        <div>
          <Image
            src={logos.markWeiss.src}
            alt={logos.markWeiss.alt}
            className="h-14 w-auto"
          />
          <p className="mt-4 text-sm text-nebel/70 max-w-sm leading-relaxed">
            Unfallgutachten, technische Untersuchungen und Fahrzeugbewertung
            aus dem eigenen Prüfzentrum in {siteConfig.address.city} und
            Umgebung.
          </p>
          <p className="mt-4 inline-flex items-center gap-2 text-xs font-mono uppercase tracking-wide text-safran border border-safran/30 px-3 py-1.5">
            {siteConfig.adacStatus}
          </p>
        </div>

        <div className="text-sm">
          <p className="eyebrow eyebrow-light mb-3">Kontakt</p>
          <address className="not-italic text-nebel/80 leading-relaxed">
            {siteConfig.address.street}
            <br />
            {siteConfig.address.zip} {siteConfig.address.city}
          </address>
          <p className="mt-3">
            <a href={siteConfig.phone.href} className="link-accent-inverse">
              {siteConfig.phone.display}
            </a>
          </p>
          <p>
            <a href={siteConfig.email.href} className="link-accent-inverse break-all">
              {siteConfig.email.display}
            </a>
          </p>
        </div>

        <div className="text-sm">
          <p className="eyebrow eyebrow-light mb-3">Navigation</p>
          <ul className="space-y-2 text-nebel/80">
            {navItems.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="link-accent-inverse">
                  {item.label}
                </Link>
              </li>
            ))}
            <li>
              <Link href="/impressum" className="link-accent-inverse">
                Impressum
              </Link>
            </li>
            <li>
              <Link href="/datenschutz" className="link-accent-inverse">
                Datenschutz
              </Link>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-nebel/10">
        <div className="max-w-content mx-auto px-6 py-5 flex flex-col md:flex-row justify-between gap-2 text-xs text-nebel/50 font-mono">
          <span>© {new Date().getFullYear()} {siteConfig.companyName}</span>
          <span>{siteConfig.adacStatus} · {siteConfig.address.city}</span>
        </div>
      </div>
    </footer>
  );
}
