import Link from "next/link";
import Image from "next/image";
import { navItems, siteConfig } from "@/lib/site-config";
import { logos } from "@/lib/images";

const leistungenLinks = navItems.find((item) => item.href === "/leistungen");

export default function Footer() {
  return (
    <footer className="bg-graphit text-nebel mt-24 md:mt-32 pb-20 md:pb-0">
      <div className="max-w-content mx-auto px-6 py-16 grid gap-12 md:grid-cols-4">
        <div className="md:col-span-1">
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
          <p className="eyebrow eyebrow-light mb-3">Leistungen</p>
          <ul className="space-y-2 text-nebel/80">
            {leistungenLinks && "children" in leistungenLinks && leistungenLinks.children
              ?.slice(0, 6)
              .map((child) => (
                <li key={child.href}>
                  <Link href={child.href} className="link-accent-inverse">
                    {child.label}
                  </Link>
                </li>
              ))}
          </ul>
        </div>

        <div className="text-sm">
          <p className="eyebrow eyebrow-light mb-3">Unternehmen</p>
          <ul className="space-y-2 text-nebel/80">
            <li>
              <Link href="/ueber-uns" className="link-accent-inverse">
                Über uns
              </Link>
            </li>
            <li>
              <Link href="/technische-ausstattung" className="link-accent-inverse">
                Technische Ausstattung
              </Link>
            </li>
            <li>
              <Link href="/faq" className="link-accent-inverse">
                FAQ
              </Link>
            </li>
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

      {/* Qualifikationen — bewusst kompakt, kein Logo-Wall */}
      <div className="border-t border-nebel/10">
        <div className="max-w-content mx-auto px-6 py-8 flex flex-wrap items-center gap-x-10 gap-y-4">
          <span className="text-xs font-mono uppercase tracking-wide text-nebel/40">
            Qualifikationen
          </span>
          <Image
            src={logos.adacBadge.src}
            alt={logos.adacBadge.alt}
            className="h-14 w-auto"
          />
          <div className="bg-nebel px-3 py-2">
            <Image
              src={logos.vks.src}
              alt={logos.vks.alt}
              className="h-9 w-auto"
            />
          </div>
          <div className="bg-nebel px-3 py-2">
            <Image
              src={logos.handwerkskammer.src}
              alt={logos.handwerkskammer.alt}
              className="h-6 w-auto"
            />
          </div>
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
