import Link from "next/link";
import { navItems, siteConfig } from "@/lib/site-config";

const leistungenLinks = navItems.find((item) => item.href === "/leistungen");

export default function Footer() {
  return (
    <footer className="bg-graphit text-nebel mt-24 md:mt-32 pb-20 md:pb-0">
      <div className="max-w-content mx-auto px-6 py-16 grid gap-12 md:grid-cols-4">
        <div className="md:col-span-1">
          <p className="font-display font-semibold text-lg">
            {siteConfig.companyName}
          </p>
          <p className="mt-3 text-sm text-nebel/70 max-w-sm leading-relaxed">
            Unfallgutachten, Fahrzeugbewertung und technische Beweissicherung
            in {siteConfig.address.city} und Umgebung.
          </p>
          <p className="mt-4 inline-flex items-center gap-2 text-xs font-mono uppercase tracking-wide text-nebel/60 border border-nebel/20 px-3 py-1.5">
            {siteConfig.adacStatus}
          </p>
        </div>

        <div className="text-sm">
          <p className="eyebrow text-nebel/50 mb-3">Kontakt</p>
          <address className="not-italic text-nebel/80 leading-relaxed">
            {siteConfig.address.street}
            <br />
            {siteConfig.address.zip} {siteConfig.address.city}
          </address>
          <p className="mt-3">
            <a href={siteConfig.phone.href} className="text-nebel/80 hover:text-signalorange">
              {siteConfig.phone.display}
            </a>
          </p>
          <p>
            <a href={siteConfig.email.href} className="text-nebel/80 hover:text-signalorange">
              {siteConfig.email.display}
            </a>
          </p>
        </div>

        <div className="text-sm">
          <p className="eyebrow text-nebel/50 mb-3">Leistungen</p>
          <ul className="space-y-2 text-nebel/80">
            {leistungenLinks && "children" in leistungenLinks && leistungenLinks.children
              ?.slice(0, 6)
              .map((child) => (
                <li key={child.href}>
                  <Link href={child.href} className="hover:text-signalorange">
                    {child.label}
                  </Link>
                </li>
              ))}
          </ul>
        </div>

        <div className="text-sm">
          <p className="eyebrow text-nebel/50 mb-3">Unternehmen</p>
          <ul className="space-y-2 text-nebel/80">
            <li>
              <Link href="/ueber-uns" className="hover:text-signalorange">
                Über uns
              </Link>
            </li>
            <li>
              <Link href="/technische-ausstattung" className="hover:text-signalorange">
                Technische Ausstattung
              </Link>
            </li>
            <li>
              <Link href="/faq" className="hover:text-signalorange">
                FAQ
              </Link>
            </li>
            <li>
              <Link href="/impressum" className="hover:text-signalorange">
                Impressum
              </Link>
            </li>
            <li>
              <Link href="/datenschutz" className="hover:text-signalorange">
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
