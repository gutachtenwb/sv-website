import Image from "next/image";
import type { StaticImageData } from "next/image";

type UspCardProps = {
  image: StaticImageData;
  imageAlt: string;
  tag: string;
  titel: string;
  text: string;
};

export default function UspCard({ image, imageAlt, tag, titel, text }: UspCardProps) {
  return (
    <div className="group flex flex-col">
      <div className="relative aspect-[4/3] overflow-hidden bg-graphit">
        <Image
          src={image}
          alt={imageAlt}
          fill
          sizes="(min-width: 1024px) 40vw, (min-width: 640px) 50vw, 100vw"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-graphit/70 via-graphit/0 to-graphit/0" />
        <span className="absolute left-4 top-4 font-mono text-[11px] uppercase tracking-[0.15em] text-nebel bg-graphit/70 backdrop-blur px-2.5 py-1">
          {tag}
        </span>
      </div>
      <h3 className="mt-5 text-lg font-semibold font-display">{titel}</h3>
      <p className="mt-2 text-sm text-graphit/70 leading-relaxed">{text}</p>
    </div>
  );
}
