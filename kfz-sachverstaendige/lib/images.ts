// Zentrale Bild-Bibliothek: alle im Betrieb aufgenommenen Originalfotos
// und Logo-/Qualifikationsdateien werden ausschließlich hier importiert,
// damit jede Seite dieselben, sorgfältig ausgewählten Motive nutzt und
// Next/Image automatisch Breite, Höhe und Blur-Platzhalter ermitteln kann.

import hallePruefstand from "@/images/betrieb/20250830_173951.jpg";
import halleUebersicht from "@/images/betrieb/20250830_174311.jpg";
import halleFahrzeugMessanlage from "@/images/betrieb/20250830_175004.jpg";
import halleFahrzeugMessanlageWeit from "@/images/betrieb/20250830_175805.jpg";
import gebaeudeAussenansicht from "@/images/betrieb/20250830_180111.jpg";
import technischeUntersuchung from "@/images/betrieb/IMG_0290.jpg";

// Hinweis zu den beiden folgenden Dateinamen: Die Originaldateien wurden mit
// einer fehlerhaften Zeichenkodierung hochgeladen (kein normales "ä"/"ü",
// sondern die literalen Zeichen U+2560/U+00EA bzw. U+251C/U+0192 statt
// "ä"/"ü"). Der Pfad muss exakt diese Zeichen enthalten, nicht die
// eigentlich gemeinten deutschen Umlaute — nicht von Hand nachbearbeiten.
import logoSchriftDunkel from "@/images/betrieb/KFZ-Sachversta╠êndigenbu╠êro_Wu╠êrttemberg_Schrift-dunkel.png";
import logoMarkWeiss from "@/images/betrieb/KFZ-Sachversta╠êndigenbu╠êro_Wu╠êrttemberg_Mit Logoelent-wei├ƒ.png";
import meisterbrief from "@/images/betrieb/MEisterbrief.jpg";
import vksLogo from "@/images/betrieb/VKS_Logo_Mitglied_RGB.jpg";
import handwerkskammerLogo from "@/images/betrieb/handwerkskammer.png";
import adacBadge from "@/images/betrieb/Vertragssachverstaendiger_Kennung_HF_RGB (1).svg";

export const fotos = {
  // Außenansicht des Prüf- und Sachverständigenzentrums mit Beschriftung
  // "KFZ-Gutachten · Unfallprüfzentrum · Vermessungen" — starkes,
  // selbsterklärendes Vertrauensmotiv.
  gebaeude: {
    src: gebaeudeAussenansicht,
    alt: "Außenansicht des KFZ-Sachverständigenbüros Württemberg mit Prüf- und Unfallprüfzentrum in Villingen-Schwenningen",
  },
  // Fahrzeug auf der Achsmess- und Rahmenvermessungsanlage, Blick von der
  // Galerie — dynamischste Aufnahme der Prüfhalle, ideal als Hero.
  fahrzeugAufMessanlage: {
    src: halleFahrzeugMessanlage,
    alt: "Fahrzeug auf der Achsmess- und Rahmenvermessungsanlage im Prüfzentrum, aufgenommen von der Galerie der Prüfhalle",
  },
  fahrzeugAufMessanlageWeit: {
    src: halleFahrzeugMessanlageWeit,
    alt: "Fahrzeug auf der Hebebühne mit Achsmessanlage in der Prüfhalle des Sachverständigenzentrums",
  },
  // Prüfhalle mit Achsmessanlage, Hebebühne und Arbeitsbereich, leer.
  pruefstand: {
    src: hallePruefstand,
    alt: "Moderne Prüfhalle mit Achsmessanlage, Hebebühne und technischer Ausstattung im eigenen Prüfzentrum",
  },
  halleUebersicht: {
    src: halleUebersicht,
    alt: "Übersicht der Prüfhalle mit Diagnosearbeitsplatz, Hebebühne und Werkstattbereich",
  },
  // Technische Untersuchung / Zerlegung: Sachverständiger bei der
  // Freilegung eines beschädigten Frontbereichs zur Schadenfeststellung.
  technischeUntersuchung: {
    src: technischeUntersuchung,
    alt: "Sachverständiger bei der technischen Untersuchung eines zerlegten Fahrzeugfrontbereichs zur Schadenfeststellung",
  },
} as const;

export const logos = {
  schriftDunkel: {
    src: logoSchriftDunkel,
    alt: "KFZ-Sachverständigenbüro Württemberg",
  },
  markWeiss: {
    src: logoMarkWeiss,
    alt: "KFZ-Sachverständigenbüro Württemberg",
  },
  meisterbrief: {
    src: meisterbrief,
    alt: "Meisterbrief Kraftfahrzeugtechniker-Handwerk, Handwerkskammer Konstanz, Mehmet Altuntas",
  },
  vks: {
    src: vksLogo,
    alt: "Mitglied im VKS – Verband der Kfz-Sachverständigen",
  },
  handwerkskammer: {
    src: handwerkskammerLogo,
    alt: "Handwerkskammer Konstanz",
  },
  adacBadge: {
    src: adacBadge,
    alt: "ADAC Vertrags-Sachverständiger",
  },
} as const;
