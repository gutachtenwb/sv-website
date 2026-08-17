import Link from "next/link";
import { siteConfig } from "@/lib/site-config";

type CTASectionProps = {
  title: string;
  text?: string;
  primaryLabel?: string;
  primaryHref?: string;
  showCall?: boolean;
};

export default function CTASection({
  title,
  text,
  primaryLabel = "Kontakt aufnehmen",
  primaryHref = "/kontakt",
  showCall = true,
}: CTASectionProps) {
  return (
    <section className="max-w-content mx-auto px-6 py-20 md:py-24 text-center">
      <h2 className="text-3xl md:text-4xl font-semibold max-w-2xl mx-auto leading-tight">
        {title}
      </h2>
      {text && (
        <p className="mt-4 text-graphit/70 max-w-xl mx-auto leading-relaxed">
          {text}
        </p>
      )}
      <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
        <Link href={primaryHref} className="btn-primary">
          {primaryLabel}
        </Link>
        {showCall && (
          <a href={siteConfig.phone.href} className="btn-secondary">
            {siteConfig.phone.display}
          </a>
        )}
      </div>
    </section>
  );
}
