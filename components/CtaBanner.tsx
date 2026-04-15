import Link from "next/link";
import Image from "next/image";

export default function CtaBanner() {
  return (
    <section className="relative overflow-hidden bg-[var(--color-profrakt-lavender-light)] py-24 lg:py-32">
      <img src="/images/symbol-purple.svg" alt="" aria-hidden="true" className="absolute -left-16 top-1/2 h-72 w-auto -translate-y-1/2 opacity-[0.06]" />
      <img src="/images/symbol-purple.svg" alt="" aria-hidden="true" className="absolute -right-8 -top-8 h-40 w-auto opacity-[0.08] rotate-180" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-[var(--color-profrakt-lavender)] px-4 py-1.5">
            <span className="text-sm font-semibold text-[var(--color-profrakt-purple)]">Bli en del av laget</span>
          </div>
          <p className="text-lg leading-relaxed text-[var(--color-profrakt-text-muted)]">
            Vi heier på norsk hoppsport, og vi heier på din bedrift. Er du klar for å løfte logistikken til nye høyder?
          </p>
          <h2 className="mt-6 font-display text-4xl font-bold leading-[1.1] text-[var(--color-profrakt-purple)] sm:text-5xl">
            Klar for å sende smartere?
          </h2>
          <div className="mt-8">
            <Link
              href="https://app.profrakt.no/auth/sign-up"
              className="inline-flex items-center rounded-full bg-[var(--color-profrakt-purple)] px-8 py-4 text-lg font-semibold text-white shadow-lg transition-all hover:bg-[var(--color-profrakt-purple-mid)] hover:shadow-xl hover:-translate-y-0.5"
            >
              Opprett gratis konto
              <svg className="ml-2 h-5 w-5" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
              </svg>
            </Link>
          </div>
        </div>

        <div className="relative mx-auto mt-16 max-w-5xl">
          <div className="absolute -left-4 -top-4 h-full w-full rounded-3xl bg-[var(--color-profrakt-lavender)]" />
          <div className="relative overflow-hidden rounded-3xl border border-gray-200 bg-white shadow-2xl">
            <Image
              src="/images/platform-screenshot.png"
              alt="Skjermbilde av Profrakt-plattformen"
              width={1200}
              height={675}
              className="h-auto w-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
