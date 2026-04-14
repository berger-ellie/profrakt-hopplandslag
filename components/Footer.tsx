import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[var(--color-profrakt-purple)] pt-20 pb-10">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mb-16 flex flex-col items-start gap-6 border-b border-white/10 pb-16 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <img src="/images/logo-white.svg" alt="Profrakt" className="h-7 w-auto" />
            <p className="mt-4 max-w-md text-base leading-relaxed text-white/50">
              Bedre fraktavtaler. Mindre styr. Mer igjen. Én løsning som vokser med bedriften din.
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <Link href="https://profrakt.no/book-en-demo" className="inline-flex items-center rounded-full border border-white/20 px-6 py-2.5 text-sm font-medium text-white transition-colors hover:bg-white/10">Book en demo</Link>
            <Link href="https://app.profrakt.no/auth/sign-up" className="inline-flex items-center rounded-full bg-[var(--color-profrakt-cta)] px-6 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-[var(--color-profrakt-cta-hover)]">Registrer deg</Link>
          </div>
        </div>

        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-widest text-white/30">Tjenester</h3>
            <ul className="mt-5 space-y-3">
              <li><Link href="https://profrakt.no/fraktavtale" className="text-sm text-white/60 transition-colors hover:text-white">Fraktavtale</Link></li>
              <li><Link href="https://profrakt.no/integrasjoner" className="text-sm text-white/60 transition-colors hover:text-white">Integrasjoner</Link></li>
              <li><Link href="https://profrakt.no/etikettskrivere" className="text-sm text-white/60 transition-colors hover:text-white">Etikettskrivere</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-widest text-white/30">Ressurser</h3>
            <ul className="mt-5 space-y-3">
              <li><Link href="https://profrakt.no/blogg" className="text-sm text-white/60 transition-colors hover:text-white">Blogg</Link></li>
              <li><Link href="https://help.profrakt.com" className="text-sm text-white/60 transition-colors hover:text-white">Kunnskapsbase</Link></li>
              <li><Link href="https://profrakt.no/kundereferanser" className="text-sm text-white/60 transition-colors hover:text-white">Kundereferanser</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-widest text-white/30">Selskapet</h3>
            <ul className="mt-5 space-y-3">
              <li><Link href="https://profrakt.no/om-profrakt" className="text-sm text-white/60 transition-colors hover:text-white">Om Profrakt</Link></li>
              <li><Link href="https://profrakt.no/nettbutikken" className="text-sm text-white/60 transition-colors hover:text-white">Nettbutikken</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-widest text-white/30">Kontakt</h3>
            <ul className="mt-5 space-y-3">
              <li><a href="mailto:kundeservice@profrakt.no" className="text-sm text-white/60 transition-colors hover:text-white">kundeservice@profrakt.no</a></li>
              <li><a href="tel:+4723707000" className="text-sm text-white/60 transition-colors hover:text-white">+47 23 70 70 00</a></li>
              <li className="text-sm text-white/40">Man–Fre 08:00–16:00</li>
            </ul>
          </div>
        </div>

        <div className="mt-16 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 sm:flex-row">
          <p className="text-xs text-white/30">&copy; {new Date().getFullYear()} Logistikkgruppen AS. Alle rettigheter reservert.</p>
          <div className="flex gap-6">
            <Link href="https://profrakt.no/personvernerklaring" className="text-xs text-white/30 transition-colors hover:text-white/60">Personvernerklæring</Link>
            <Link href="https://profrakt.no/cookies" className="text-xs text-white/30 transition-colors hover:text-white/60">Informasjonskapsler</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
