import { siteConfig } from "@/lib/site-config";

export default function RegionSection() {
  const mapQuery = encodeURIComponent(
    `${siteConfig.address.street}, ${siteConfig.address.zip} ${siteConfig.address.city}`
  );

  return (
    <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
      <div>
        <p className="mt-2 text-graphit/70 leading-relaxed max-w-md">
          Unser Standort ist {siteConfig.address.city}. Vor Ort sind wir
          außerdem erreichbar in:
        </p>
        <div className="mt-6 flex flex-wrap gap-2">
          {siteConfig.region.areas.slice(1).map((area) => (
            <span
              key={area}
              className="text-sm border border-messing/40 px-3.5 py-1.5"
            >
              {area}
            </span>
          ))}
        </div>
      </div>

      <div className="relative aspect-[4/3] lg:aspect-[16/11] border border-messing/30">
        <iframe
          title={`Standort ${siteConfig.companyName}`}
          src={`https://www.google.com/maps?q=${mapQuery}&output=embed`}
          className="absolute inset-0 w-full h-full grayscale-[40%]"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>
    </div>
  );
}
