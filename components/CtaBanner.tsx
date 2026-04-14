import Link from "next/link";
import Image from "next/image";

export default function CtaBanner() {
  return (
    <section className="relative overflow-hidden bg-[var(--color-profrakt-lavender-light)] py-24 lg:py-32">
      <img src="/images/symbol-purple.svg" alt="" aria-hidden="true" className="absolute -left-16 top-1/2 h-72 w-auto -translate-y-1/2 opacity-[0.06]" />
      <img src="/images/symbol-purple.svg" alt="" aria-hidden="true" className="absolute -right-8 -top-8 h-40 w-auto opacity-[0.08] rotate-180" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
          <div className="relative">
            <img src="/images/symbol-purple.svg" alt="" aria-hidden="true" className="absolute -bottom-4 -right-4 h-16 w-auto opacity-20" />
            <div className="relative overflow-hidden rounded-3xl">
              <Image src="/images/profrakt-box.png" alt="Profrakt-pakke klar for levering" width={700} height={450} className="h-auto w-full object-cover" />
            </div>
          </div>
          <div>
            <p className="text-lg leading-relaxed text-[var(--color-profrakt-text-muted)]">
              Uansett om du sender to eller to tusen pakker i måneden, er Profrakt her for å løfte logistikken din til nye høyder. Bli med på laget som velger smartere fraktløsninger.
            </p>
            <h2 className="mt-6 font-display text-4xl font-bold italic leading-[1.1] text-[var(--color-profrakt-purple)] sm:text-5xl">Klar for å sende smartere?</h2>
            <div className="mt-8">
              <Link href="https://app.profrakt.no/auth/sign-up" className="inline-flex items-center rounded-full bg-[var(--color-profrakt-purple)] px-8 py-4 text-lg font-semibold text-white shadow-lg transition-all hover:bg-[var(--color-profrakt-purple-mid)] hover:shadow-xl hover:-translate-y-0.5">
                Kom i gang nå – helt gratis
                <svg className="ml-2 h-5 w-5" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" /></svg>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
