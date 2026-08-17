import Breadcrumbs from "@/components/Breadcrumbs";

type PageHeroProps = {
  eyebrow: string;
  title: string;
  lead?: string;
  breadcrumbs?: { name: string; path: string }[];
  children?: React.ReactNode;
};

export default function PageHero({
  eyebrow,
  title,
  lead,
  breadcrumbs,
  children,
}: PageHeroProps) {
  return (
    <section className="max-w-content mx-auto px-6 pt-10 pb-16 md:pt-14 md:pb-20">
      {breadcrumbs && <Breadcrumbs items={breadcrumbs} />}
      <p className="eyebrow mb-3">{eyebrow}</p>
      <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold max-w-2xl leading-[1.15] md:leading-[1.1] break-words">
        {title}
      </h1>
      {lead && (
        <p className="mt-6 text-lg text-graphit/70 max-w-2xl leading-relaxed">
          {lead}
        </p>
      )}
      {children}
    </section>
  );
}
