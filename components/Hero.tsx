import Link from "next/link";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-[var(--color-profrakt-lavender-light)] pb-0 pt-12 lg:pt-20">
      <img src="/images/symbol-purple.svg" alt="" aria-hidden="true" className="absolute -left-10 top-8 h-40 w-auto opacity-15 lg:h-56" />
      <img src="/images/symbol-purple.svg" alt="" aria-hidden="true" className="absolute -right-12 top-1/4 h-64 w-auto opacity-10 rotate-180 lg:h-80" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
          <div className="max-w-xl">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-[var(--color-profrakt-purple)]/10 px-4 py-1.5">
              <img src="/images/symbol-purple.svg" alt="" className="h-4 w-auto" />
              <span className="text-sm font-medium text-[var(--color-profrakt-purple)]">Profrakt x Hopplandslaget</span>
            </div>
            <h1 className="font-display text-5xl font-bold italic leading-[1.05] text-[var(--color-profrakt-purple)] sm:text-6xl lg:text-7xl">
              En helt spesiell leveranse
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-[var(--color-profrakt-text-muted)] sm:text-xl">
              Se hvordan vi sammen med Hopplandslaget overrasket søskenparet Mikkel og Ea Cathrin – og hvordan Profrakt leverer for din bedrift hver eneste dag.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <Link href="https://app.profrakt.no/auth/sign-up" className="inline-flex items-center rounded-full bg-[var(--color-profrakt-purple)] px-7 py-3.5 text-base font-semibold text-white shadow-lg transition-all hover:bg-[var(--color-profrakt-purple-mid)] hover:shadow-xl hover:-translate-y-0.5">
                Prøv Profrakt gratis i dag
              </Link>
              <a href="#historien" className="inline-flex items-center gap-2 rounded-full border-2 border-[var(--color-profrakt-purple)]/20 px-6 py-3 text-base font-medium text-[var(--color-profrakt-purple)] transition-all hover:border-[var(--color-profrakt-purple)]/40 hover:bg-white">
                Les mer
                <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M19.5 13.5L12 21m0 0l-7.5-7.5M12 21V3" /></svg>
              </a>
            </div>
          </div>

          <div className="relative">
            <div className="absolute -right-6 -top-6 h-64 w-64 rounded-full bg-[var(--color-profrakt-purple)] lg:h-72 lg:w-72" />
            <img src="/images/symbol-white.svg" alt="" aria-hidden="true" className="absolute -bottom-4 -left-4 h-20 w-auto opacity-30" />
            <div className="relative overflow-hidden rounded-3xl shadow-2xl">
              <Image src="/images/walking-ski-jump.png" alt="Johann André Forfang, Eirin Maria Kvandal, Mikkel og Ea Cathrin ved hoppbakken" width={800} height={500} priority className="h-auto w-full object-cover" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="flex h-20 w-20 items-center justify-center rounded-full bg-white/90 shadow-xl backdrop-blur-sm transition-transform hover:scale-110">
                  <svg className="ml-1.5 h-8 w-8 text-[var(--color-profrakt-purple)]" fill="currentColor" viewBox="0 0 24 24"><path d="M8 5v14l11-7z" /></svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-16 h-24 bg-gradient-to-b from-[var(--color-profrakt-lavender-light)] to-white" />
    </section>
  );
}
