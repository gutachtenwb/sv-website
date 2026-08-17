import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/site-config";

const routes = [
  "",
  "/leistungen",
  "/leistungen/unfallgutachten",
  "/leistungen/technische-beweissicherung",
  "/leistungen/karosserievermessung",
  "/leistungen/achsvermessung",
  "/leistungen/lackschichtdickenmessung",
  "/leistungen/fahrzeugdiagnose",
  "/leistungen/fahrzeugbewertung",
  "/leistungen/oldtimer-youngtimer",
  "/leistungen/kaufbegleitung",
  "/pruefzentrum",
  "/ueber-uns",
  "/faq",
  "/kontakt",
  "/impressum",
  "/datenschutz",
];

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map((route) => ({
    url: `${siteConfig.siteUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: route === "" ? "weekly" : "monthly",
    priority: route === "" ? 1 : route.startsWith("/leistungen/") ? 0.8 : 0.6,
  }));
}
