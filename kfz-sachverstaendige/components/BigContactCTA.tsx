import Image from "next/image";
import Link from "next/link";
import type { StaticImageData } from "next/image";
import { siteConfig } from "@/lib/site-config";

type BigContactCTAProps = {
  image: StaticImageData;
  imageAlt: string;
};

export default function BigContactCTA({ image, imageAlt }: BigContactCTAProps) {
  const whatsappNumber = siteConfig.phone.href.replace("tel:", "").replace("+", "");

  return (
    <section className="relative">
      <div className="relative min-h-[420px] md:min-h-[520px] flex items-center">
        <Image
          src={image}
          alt={imageAlt}
          fill
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-graphit/80" />
        <div className="relative max-w-content mx-auto px-6 py-20 text-nebel w-full">
          <h2 className="text-3xl md:text-5xl font-semibold max-w-2xl leading-[1.15]">
            Sie benötigen ein Gutachten oder eine technische
            Fahrzeuguntersuchung?
          </h2>
          <p className="mt-4 text-xl md:text-2xl font-display text-safran">
            Sprechen Sie mit uns.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <a href={siteConfig.phone.href} className="btn-primary">
              {siteConfig.phone.display}
            </a>
            <a
              href={`https://wa.me/${whatsappNumber}`}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary-inverse"
            >
              WhatsApp
            </a>
            <Link href="/kontakt" className="btn-secondary-inverse">
              Termin vereinbaren
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
