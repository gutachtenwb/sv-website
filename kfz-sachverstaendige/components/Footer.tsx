import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-graphit text-nebel mt-32">
      <div className="max-w-content mx-auto px-6 py-16 grid gap-12 md:grid-cols-4">
        <div className="md:col-span-2">
          <p className="font-display font-semibold text-lg">
            Kfz-Sachverständigenbüro Württemberg
          </p>
          <p className="mt-3 text-sm text-nebel/70 max-w-sm">
            Unabhängige Gutachten für Unfallschäden, Fahrzeugbewertung und
            Zustandsberichte — neutral, nachvollziehbar, gerichtsfest.
          </p>
        </div>

        <div className="text-sm">
          <p className="eyebrow text-nebel/50 mb-3">Kontakt</p>
          <p className="text-nebel/80">Neuer Markt 2 12</p>
          <p className="text-nebel/80">78052 Villingen - Schwenningen t</p>
          <p className="mt-2 text-nebel/80">0162 8550 222</p>
          <p className="text-nebel/80">gutachten.wb@gmail.com</p>
        </div>

        <div className="text-sm">
          <p className="eyebrow text-nebel/50 mb-3">Rechtliches</p>
          <ul className="space-y-2 text-nebel/80">
            <li>
              <Link href="/impressum" className="hover:text-signalorange">
                Impressum
              </Link>
            </li>
            <li>
              <Link href="/datenschutz" className="hover:text-signalorange">
                Datenschutz
              </Link>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-nebel/10">
        <div className="max-w-content mx-auto px-6 py-5 flex flex-col md:flex-row justify-between gap-2 text-xs text-nebel/50 font-mono">
          <span>© {new Date().getFullYear()} Kfz-Sachverständigenbüro Mustermann</span>
          <span>Öffentlich bestellt & vereidigt · Muster-IHK</span>
        </div>
      </div>
    </footer>
  );
}
