import Image from "next/image";

const steps = [
  { number: "01", title: "Opprett en gratis konto", description: "Det tar under to minutter å registrere seg og komme i gang.", icon: <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" /></svg> },
  { number: "02", title: "Koble til dine systemer", description: "Integrer med dine salgskanaler for automatisk overføring av ordrer.", icon: <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M13.19 8.688a4.5 4.5 0 011.242 7.244l-4.5 4.5a4.5 4.5 0 01-6.364-6.364l1.757-1.757m9.86-2.06a4.5 4.5 0 00-6.364-6.364L6.34 5.636a4.5 4.5 0 001.242 7.244" /></svg> },
  { number: "03", title: "Velg den beste frakten", description: "Sammenlign priser og leveringsmetoder i sanntid for hver enkelt pakke.", icon: <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M8.25 18.75a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 01-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 00-3.213-9.193 2.056 2.056 0 00-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 00-10.026 0 1.106 1.106 0 00-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12" /></svg> },
  { number: "04", title: "Send med selvtillit", description: "Skriv ut etiketter med ett klikk og la oss ta oss av resten.", icon: <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z" /></svg> },
];

export default function HowItWorks() {
  return (
    <section className="relative overflow-hidden bg-white py-24 lg:py-32">
      <img src="/images/symbol-purple.svg" alt="" aria-hidden="true" className="absolute -right-10 top-1/3 h-48 w-auto opacity-[0.06]" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-[var(--color-profrakt-lavender)] px-4 py-1.5">
          <span className="text-sm font-semibold text-[var(--color-profrakt-purple)]">Slik fungerer det</span>
        </div>
        <h2 className="max-w-2xl font-display text-4xl font-bold italic leading-[1.1] text-[var(--color-profrakt-purple)] sm:text-5xl">Fra hoppbakken til din nettbutikk</h2>

        <div className="relative mt-16">
          <div className="absolute left-0 right-0 top-16 hidden h-0.5 bg-gradient-to-r from-[var(--color-profrakt-violet)]/30 via-[var(--color-profrakt-violet)]/60 to-[var(--color-profrakt-violet)]/30 lg:block" />
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {steps.map((step) => (
              <div key={step.number} className="group relative">
                <div className="relative z-10 mb-6 flex h-12 w-12 items-center justify-center rounded-full bg-[var(--color-profrakt-purple)] text-white shadow-lg transition-transform group-hover:scale-110">{step.icon}</div>
                <span className="font-display text-sm font-bold text-[var(--color-profrakt-violet)]">Steg {step.number}</span>
                <h3 className="mt-1 text-lg font-semibold text-[var(--color-profrakt-purple)]">{step.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-[var(--color-profrakt-text-muted)]">{step.description}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="relative mx-auto mt-20 max-w-5xl">
          <div className="absolute -left-4 -top-4 h-full w-full rounded-3xl bg-[var(--color-profrakt-lavender)]" />
          <div className="relative overflow-hidden rounded-3xl border border-gray-200 bg-white shadow-2xl">
            <Image src="/images/platform-screenshot.png" alt="Skjermbilde av Profrakt-plattformen" width={1200} height={675} className="h-auto w-full" />
          </div>
        </div>

        <div className="mt-12 text-center">
          <a href="https://app.profrakt.no/auth/sign-up" className="inline-flex items-center gap-2 rounded-full bg-[var(--color-profrakt-purple)] px-7 py-3.5 text-base font-semibold text-white shadow-lg transition-all hover:bg-[var(--color-profrakt-purple-mid)] hover:shadow-xl hover:-translate-y-0.5">
            Kom i gang gratis
            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" /></svg>
          </a>
          <p className="mt-3 text-sm text-[var(--color-profrakt-text-muted)]">Ingen binding. Ingen oppstartskostnader.</p>
        </div>
      </div>
    </section>
  );
}
