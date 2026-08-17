import { siteConfig } from "@/lib/site-config";

export default function StickyMobileContact() {
  return (
    <div className="md:hidden fixed bottom-0 inset-x-0 z-40 border-t border-messing/30 bg-nebel/95 backdrop-blur">
      <div className="grid grid-cols-2 divide-x divide-messing/30">
        <a
          href={siteConfig.phone.href}
          className="flex items-center justify-center gap-2 py-4 font-medium text-graphit"
        >
          <svg viewBox="0 0 24 24" className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
            <path d="M6.6 10.8a15.5 15.5 0 006.6 6.6l2.2-2.2a1 1 0 011-.25c1.1.37 2.3.57 3.5.57a1 1 0 011 1V20a1 1 0 01-1 1C10.85 21 3 13.15 3 3.5a1 1 0 011-1h3.5a1 1 0 011 1c0 1.2.2 2.4.57 3.5a1 1 0 01-.25 1l-2.22 2.3z" />
          </svg>
          Anrufen
        </a>
        <a
          href={siteConfig.email.href}
          className="flex items-center justify-center gap-2 py-4 font-semibold text-graphit bg-safran"
        >
          <svg viewBox="0 0 24 24" className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
            <rect x="3" y="5" width="18" height="14" rx="1" />
            <path d="M3 6l9 7 9-7" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          E-Mail
        </a>
      </div>
    </div>
  );
}
