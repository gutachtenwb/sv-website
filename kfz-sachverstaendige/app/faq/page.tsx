import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import CTASection from "@/components/CTASection";
import FAQAccordion from "@/components/FAQAccordion";
import { JsonLd, faqSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Häufige Fragen (FAQ)",
  description:
    "Antworten auf häufige Fragen rund um Unfallgutachten, Fahrzeugbewertung, Achsvermessung, Karosserievermessung und technische Beweissicherung.",
  alternates: { canonical: "/faq" },
};

const faqItems = [
  {
    question: "Wann benötige ich ein Unfallgutachten?",
    answer:
      "Ein Unfallgutachten ist grundsätzlich sinnvoll, wenn ein Fahrzeug bei einem Verkehrsunfall beschädigt wurde und der Schadenumfang, die Reparaturkosten oder eine mögliche Wertminderung nachvollziehbar dokumentiert werden sollen. Bei sehr geringen Schäden kann unter Umständen bereits ein Kostenvoranschlag ausreichen.",
  },
  {
    question: "Wann reicht ein Kostenvoranschlag?",
    answer:
      "Bei sogenannten Bagatellschäden mit sehr geringer Schadenhöhe wird teilweise anstelle eines Gutachtens ein Kostenvoranschlag akzeptiert. Wo die Grenze im Einzelfall verläuft, hängt von den konkreten Umständen ab — im Zweifel beraten wir Sie gerne dazu, ohne eine verbindliche Rechtsberatung zu ersetzen.",
  },
  {
    question: "Wer darf den Sachverständigen auswählen?",
    answer:
      "Bei einem unverschuldeten Haftpflichtschaden kann der Geschädigte in der Regel einen unabhängigen Sachverständigen seiner Wahl beauftragen, sofern die dafür maßgeblichen Voraussetzungen vorliegen. Die konkrete rechtliche Einordnung hängt vom jeweiligen Einzelfall ab.",
  },
  {
    question: "Wer bezahlt das Gutachten bei einem unverschuldeten Unfall?",
    answer:
      "Bei einem unverschuldeten Haftpflichtschaden werden die Kosten des Gutachtens in der Regel im Rahmen der Schadenregulierung von der gegnerischen Versicherung übernommen, sofern die Voraussetzungen dafür vorliegen. Eine allgemeingültige Zusage können wir dazu nicht treffen, da dies vom Einzelfall abhängt.",
  },
  {
    question: "Was ist die Bagatellschadengrenze?",
    answer:
      "Als Bagatellschaden werden üblicherweise sehr geringfügige Schäden bezeichnet, bei denen teilweise auf ein vollständiges Gutachten verzichtet wird. Eine feste, immer gültige Grenze gibt es nicht — die Einordnung erfolgt im Einzelfall.",
  },
  {
    question: "Was ist eine merkantile Wertminderung?",
    answer:
      "Die merkantile Wertminderung beschreibt den Wertverlust, den ein Fahrzeug allein durch die Tatsache eines Unfallschadens erleidet — auch wenn es fachgerecht repariert wurde. Sie wird im Rahmen des Schadengutachtens ermittelt und dokumentiert.",
  },
  {
    question: "Was ist ein Wiederbeschaffungswert?",
    answer:
      "Der Wiederbeschaffungswert ist der Betrag, der erforderlich wäre, um ein vergleichbares Fahrzeug gleichen Alters, gleicher Ausstattung und gleichen Zustands auf dem Gebrauchtwagenmarkt zu erwerben.",
  },
  {
    question: "Was ist ein Restwert?",
    answer:
      "Der Restwert ist der Betrag, den ein beschädigtes Fahrzeug im aktuellen, unreparierten Zustand noch wert ist — etwa bei einem wirtschaftlichen Totalschaden.",
  },
  {
    question: "Was bedeutet Nutzungsausfall?",
    answer:
      "Der Nutzungsausfall ist eine Entschädigung für den Zeitraum, in dem ein Fahrzeug unfallbedingt nicht genutzt werden kann, sofern kein Ersatzfahrzeug (z. B. Mietwagen) in Anspruch genommen wird. Die Berechnungsgrundlagen werden im Gutachten dokumentiert.",
  },
  {
    question: "Welche Unterlagen werden für die Begutachtung benötigt?",
    answer:
      "In der Regel sind Fahrzeugschein, ggf. vorhandene Vorschadendokumente sowie — bei Unfallschäden — Informationen zum Unfallhergang hilfreich. Welche Unterlagen im konkreten Fall sinnvoll sind, klären wir bei der Terminvereinbarung mit Ihnen.",
  },
  {
    question: "Wie läuft eine Fahrzeugbegutachtung ab?",
    answer:
      "Nach der Kontaktaufnahme vereinbaren wir einen Besichtigungstermin. Das Fahrzeug wird untersucht und der Schaden bzw. Zustand dokumentiert. Bei Bedarf erfolgen ergänzende technische Messungen. Anschließend wird das Gutachten erstellt.",
  },
  {
    question: "Wann ist eine Achsvermessung sinnvoll?",
    answer:
      "Insbesondere nach einem Radanstoß, Bordsteinkontakt oder einem Unfall im Radbereich kann eine Achsvermessung mit Beissbarth Q.Lign sinnvoll sein, da eine rein optische Prüfung veränderte Spur- oder Sturzwerte nicht immer zuverlässig erkennen lässt.",
  },
  {
    question: "Wann ist eine Karosserievermessung sinnvoll?",
    answer:
      "Bei Unfällen mit stärkerer Krafteinwirkung oder Verdacht auf Strukturschäden kann eine 3D-Karosserie- und Rahmenvermessung mit Spanesi Touch sinnvoll sein, um die Fahrzeugstruktur zu prüfen und mögliche Verformungen zu dokumentieren.",
  },
  {
    question: "Warum sollte nach einem Radanstoß vermessen werden?",
    answer:
      "Ein Fahrzeug kann nach einem Radanstoß äußerlich unauffällig wirken, obwohl sich die Fahrwerksgeometrie verändert hat. Eine Achsvermessung macht solche Abweichungen messbar und dokumentierbar.",
  },
  {
    question: "Was ist eine Lackschichtdickenmessung?",
    answer:
      "Bei der Lackschichtdickenmessung wird die Dicke der Beschichtung an der Fahrzeugoberfläche gemessen. Abweichungen können ein Hinweis auf frühere Reparaturen oder Nachlackierungen sein.",
  },
  {
    question: "Können auch Kunststoffbauteile untersucht werden?",
    answer:
      "Ja, abhängig vom Bauteil und Messverfahren können auch geeignete lackierte Kunststoffbauteile wie Stoßfänger auf Beschichtungszustand untersucht werden.",
  },
  {
    question: "Was bringt eine Fahrzeugdiagnose?",
    answer:
      "Die elektronische Fahrzeugdiagnose ergänzt die mechanische Schadenaufnahme um Informationen aus dem Fehlerspeicher des Fahrzeugs, die rein optisch nicht erkennbar sind.",
  },
  {
    question: "Was ist eine Reparaturbestätigung?",
    answer:
      "Bei einer Reparaturbestätigung wird der bei der Besichtigung erkennbare Reparaturzustand des Fahrzeugs dokumentiert. Sie bezieht sich auf zugängliche und sichtbare Bereiche und ist keine uneingeschränkte Garantie für verdeckte Reparaturbereiche.",
  },
  {
    question: "Was ist eine technische Beweissicherung?",
    answer:
      "Bei der technischen Beweissicherung werden Schäden über die reine Sichtprüfung hinaus mit Fotodokumentation, Messungen und Analysen nachvollziehbar festgehalten — etwa zur Klärung von Vorschäden, Kontaktspuren oder Plausibilität.",
  },
  {
    question: "Werden auch Oldtimer bewertet?",
    answer:
      "Ja, wir erstellen Zustands- und Wertgutachten für Oldtimer und Youngtimer, etwa für Kauf, Verkauf oder Versicherungszwecke.",
  },
  {
    question: "Werden Wohnmobile begutachtet?",
    answer:
      "Ja, auch Wohnmobile und Camper können im Rahmen von Fahrzeugbewertung und Schadenbegutachtung berücksichtigt werden. Der konkrete Umfang richtet sich nach dem jeweiligen Fahrzeug und Auftrag.",
  },
  {
    question: "Werden Elektro- und Hybridfahrzeuge begutachtet?",
    answer:
      "Ja, unsere Leistungen richten sich grundsätzlich auch an Elektro- und Hybridfahrzeuge. Sprechen Sie uns bei Fragen zu Ihrem konkreten Fahrzeug gerne an.",
  },
  {
    question: "Bieten Sie Kaufbegleitungen an?",
    answer:
      "Ja, im Rahmen einer Kaufbegleitung prüfen wir Zustand, Karosserie, Lack und Technik eines Fahrzeugs vor dem Kauf. Der Prüfungsumfang richtet sich nach Auftrag, Fahrzeug und Zugänglichkeit.",
  },
];

export default function FAQPage() {
  return (
    <>
      <JsonLd data={faqSchema(faqItems)} />
      <PageHero
        eyebrow="FAQ"
        title="Häufige Fragen"
        lead="Antworten auf häufig gestellte Fragen rund um Unfallgutachten, technische Beweissicherung und Fahrzeugbewertung. Bei rechtlichen Fragen ersetzt diese Übersicht keine individuelle Rechtsberatung."
        breadcrumbs={[{ name: "FAQ", path: "/faq" }]}
      />

      <section className="max-w-content mx-auto px-6 pb-16 max-w-3xl">
        <FAQAccordion items={faqItems} />
      </section>

      <CTASection
        title="Ihre Frage war nicht dabei?"
        text="Kontaktieren Sie uns direkt — wir beantworten Ihre Fragen gerne persönlich."
      />
    </>
  );
}
