"use client";

import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import Link from "next/link";
import { navItems, siteConfig } from "@/lib/site-config";

export default function MobileNav() {
  const [open, setOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <div className="lg:hidden">
      <button
        type="button"
        onClick={() => setOpen(true)}
        aria-expanded={open}
        aria-controls="mobile-nav-panel"
        aria-label="Menü öffnen"
        className="flex items-center justify-center w-11 h-11 border border-graphit/20 text-graphit"
      >
        <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
          <path d="M3 6h18M3 12h18M3 18h18" strokeLinecap="round" />
        </svg>
      </button>

      {mounted && open && createPortal(
        <div
          id="mobile-nav-panel"
          className="fixed inset-0 z-[60] bg-graphit text-nebel flex flex-col"
        >
          <div className="flex items-center justify-between px-6 h-20 border-b border-nebel/10">
            <span className="font-display font-semibold">{siteConfig.shortName}</span>
            <button
              type="button"
              onClick={() => setOpen(false)}
              aria-label="Menü schließen"
              className="flex items-center justify-center w-11 h-11 border border-nebel/20"
            >
              <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                <path d="M6 6l12 12M18 6L6 18" strokeLinecap="round" />
              </svg>
            </button>
          </div>

          <nav className="flex-1 overflow-y-auto px-6 py-8">
            <ul className="space-y-1 font-display text-2xl">
              {navItems.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className="block py-3 border-b border-nebel/10"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="px-6 py-6 border-t border-nebel/10 space-y-3">
            <a href={siteConfig.phone.href} className="btn-primary w-full justify-center">
              {siteConfig.phone.display}
            </a>
            <a
              href={siteConfig.email.href}
              className="btn-secondary w-full justify-center border-nebel/30 text-nebel hover:border-nebel"
            >
              {siteConfig.email.display}
            </a>
          </div>
        </div>,
        document.body
      )}
    </div>
  );
}
