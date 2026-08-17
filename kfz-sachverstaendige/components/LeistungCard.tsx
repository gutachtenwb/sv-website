import Link from "next/link";
import Image from "next/image";
import type { StaticImageData } from "next/image";
import ImagePlaceholder from "@/components/ImagePlaceholder";

type LeistungCardProps = {
  nummer: string;
  titel: string;
  text: string;
  href: string;
  image?: { src: StaticImageData; alt: string };
};

export default function LeistungCard({ nummer, titel, text, href, image }: LeistungCardProps) {
  return (
    <Link href={href} className="group flex flex-col">
      <div className="relative aspect-[4/3] overflow-hidden bg-graphit">
        {image ? (
          <Image
            src={image.src}
            alt={image.alt}
            fill
            sizes="(min-width: 1024px) 32vw, (min-width: 640px) 48vw, 100vw"
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />
        ) : (
          <ImagePlaceholder label={titel} className="absolute inset-0" />
        )}
        <span className="absolute left-4 top-4 font-mono text-sm text-safran">
          {nummer}
        </span>
      </div>
      <h3 className="mt-5 text-lg font-semibold font-display group-hover:text-safran-dunkel transition-colors">
        {titel}
      </h3>
      <p className="mt-2 text-sm text-graphit/70 leading-relaxed">{text}</p>
      <span className="mt-3 inline-flex items-center gap-1.5 text-sm font-medium text-safran-dunkel">
        Mehr erfahren
        <span aria-hidden="true" className="transition-transform group-hover:translate-x-1">
          →
        </span>
      </span>
    </Link>
  );
}
