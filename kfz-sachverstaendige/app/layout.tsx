import type { Metadata, Viewport } from "next";
import { Space_Grotesk, IBM_Plex_Sans, IBM_Plex_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import StickyMobileContact from "@/components/StickyMobileContact";
import { JsonLd, localBusinessSchema } from "@/lib/schema";
import { siteConfig } from "@/lib/site-config";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-space-grotesk",
  display: "swap",
});

const plexSans = IBM_Plex_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-plex-sans",
  display: "swap",
});

const plexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-plex-mono",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.siteUrl),
  title: {
    default: `${siteConfig.companyName} | KFZ-Gutachter in Villingen-Schwenningen`,
    template: `%s | ${siteConfig.companyName}`,
  },
  description:
    "Unfallgutachten, Fahrzeugbewertung und technische Beweissicherung in Villingen-Schwenningen und Umgebung. ADAC Vertrags-Sachverständiger mit moderner Prüf- und Messtechnik.",
  keywords: [
    "KFZ Gutachter Villingen-Schwenningen",
    "KFZ Sachverständiger Villingen-Schwenningen",
    "Unfallgutachten Villingen-Schwenningen",
    "Schadengutachten Villingen-Schwenningen",
    "Fahrzeugbewertung Villingen-Schwenningen",
    "KFZ Gutachter Schwarzwald-Baar-Kreis",
  ],
  authors: [{ name: siteConfig.contactPerson }],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "de_DE",
    url: siteConfig.siteUrl,
    siteName: siteConfig.companyName,
    title: `${siteConfig.companyName} | KFZ-Gutachter in Villingen-Schwenningen`,
    description:
      "Unfallgutachten, Fahrzeugbewertung und technische Beweissicherung — ADAC Vertrags-Sachverständiger in Villingen-Schwenningen.",
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteConfig.companyName} | KFZ-Gutachter in Villingen-Schwenningen`,
    description:
      "Unfallgutachten, Fahrzeugbewertung und technische Beweissicherung in Villingen-Schwenningen.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  themeColor: "#1C2226",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="de">
      <body
        className={`${spaceGrotesk.variable} ${plexSans.variable} ${plexMono.variable}`}
      >
        <JsonLd data={localBusinessSchema()} />
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-2 focus:left-2 focus:z-[100] bg-signalorange text-nebel px-4 py-2"
        >
          Zum Inhalt springen
        </a>
        <Header />
        <main id="main-content">{children}</main>
        <Footer />
        <StickyMobileContact />
      </body>
    </html>
  );
}
