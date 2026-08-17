import Image from "next/image";
import { logos } from "@/lib/images";

// Kompakte, zurückhaltende Logo-Leiste — bewusst keine "Logo-Wand".
// Nur tatsächlich vorhandene, dafür vorgesehene Nachweis-Dateien.
export default function QualificationsBar() {
  return (
    <div className="flex flex-wrap items-center gap-x-12 gap-y-6">
      <Image
        src={logos.adacBadge.src}
        alt={logos.adacBadge.alt}
        className="h-14 w-auto"
      />
      <div className="bg-white px-3 py-2">
        <Image
          src={logos.vks.src}
          alt={logos.vks.alt}
          className="h-10 w-auto"
        />
      </div>
      <div className="bg-white px-3 py-2">
        <Image
          src={logos.handwerkskammer.src}
          alt={logos.handwerkskammer.alt}
          className="h-6 w-auto"
        />
      </div>
    </div>
  );
}
