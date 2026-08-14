import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Kontakt | Kfz-Sachverständigenbüro Mustermann",
};

export default function Kontakt() {
  return (
    <div className="max-w-content mx-auto px-6 py-20">
      <p className="eyebrow mb-3">Kontakt</p>
      <h1 className="text-4xl md:text-5xl font-semibold max-w-2xl">
        Schildern Sie uns Ihren Fall.
      </h1>

      <div className="mt-16 grid md:grid-cols-2 gap-16">
        <div>
          <p className="text-graphit/70 leading-relaxed max-w-md">
            Rufen Sie uns an, schreiben Sie uns eine E-Mail oder nutzen Sie
            das Formular — wir melden uns in der Regel innerhalb eines
            Werktages zurück.
          </p>

          <div className="mt-10 space-y-6 font-mono text-sm">
            <div>
              <p className="text-graphit/50 text-xs uppercase tracking-wide">Telefon</p>
              <p className="mt-1 text-lg">01234 / 567 890</p>
            </div>
            <div>
              <p className="text-graphit/50 text-xs uppercase tracking-wide">E-Mail</p>
              <p className="mt-1 text-lg">info@kfz-gutachten-mustermann.de</p>
            </div>
            <div>
              <p className="text-graphit/50 text-xs uppercase tracking-wide">Büro</p>
              <p className="mt-1 text-lg">Musterstraße 12, 12345 Musterstadt</p>
            </div>
            <div>
              <p className="text-graphit/50 text-xs uppercase tracking-wide">Erreichbarkeit</p>
              <p className="mt-1 text-lg">Mo–Fr, 8:00–17:00 Uhr</p>
            </div>
          </div>
        </div>

        {/* Hinweis: Formular ist rein clientseitig vorbereitet.
            Für echten Versand später an einen Dienst wie Formspree,
            Resend oder eine eigene API-Route anbinden. */}
        <form className="space-y-5">
          <div>
            <label htmlFor="name" className="block text-sm font-medium mb-1.5">
              Name
            </label>
            <input
              id="name"
              name="name"
              type="text"
              required
              className="w-full border border-messing/50 bg-transparent px-4 py-3 focus:border-stahlblau outline-none"
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium mb-1.5">
              E-Mail
            </label>
            <input
              id="email"
              name="email"
              type="email"
              required
              className="w-full border border-messing/50 bg-transparent px-4 py-3 focus:border-stahlblau outline-none"
            />
          </div>
          <div>
            <label htmlFor="anliegen" className="block text-sm font-medium mb-1.5">
              Art des Anliegens
            </label>
            <select
              id="anliegen"
              name="anliegen"
              className="w-full border border-messing/50 bg-transparent px-4 py-3 focus:border-stahlblau outline-none"
            >
              <option>Unfallschadengutachten</option>
              <option>Fahrzeugbewertung</option>
              <option>Zustandsbericht</option>
              <option>Sonstiges</option>
            </select>
          </div>
          <div>
            <label htmlFor="nachricht" className="block text-sm font-medium mb-1.5">
              Nachricht
            </label>
            <textarea
              id="nachricht"
              name="nachricht"
              rows={5}
              required
              className="w-full border border-messing/50 bg-transparent px-4 py-3 focus:border-stahlblau outline-none"
            />
          </div>
          <button type="submit" className="btn-primary">
            Anfrage senden
          </button>
        </form>
      </div>
    </div>
  );
}
