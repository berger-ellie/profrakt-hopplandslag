const advantages = [
  {
    title: "Både for små og store",
    description: "Vi demokratiserer fraktmarkedet. Du får storbetingelser fra dag én.",
    icon: (
      <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
      </svg>
    ),
  },
  {
    title: "Data og innsikt",
    description: "Akkurat som landslaget bruker data for å hoppe lengre, hjelper vi deg å sende smartere.",
    icon: (
      <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3v11.25A2.25 2.25 0 006 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0118 16.5h-2.25m-7.5 0h7.5m-7.5 0l-1 3m8.5-3l1 3m0 0l.5 1.5m-.5-1.5h-9.5m0 0l-.5 1.5m.75-9l3-3 2.148 2.148A12.061 12.061 0 0116.5 7.605" />
      </svg>
    ),
  },
  {
    title: "Én plattform",
    description: "Send med Bring, PostNord, Helthjem og DHL fra samme system.",
    icon: (
      <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6A2.25 2.25 0 016 3.75h2.25A2.25 2.25 0 0110.5 6v2.25a2.25 2.25 0 01-2.25 2.25H6a2.25 2.25 0 01-2.25-2.25V6zM3.75 15.75A2.25 2.25 0 016 13.5h2.25a2.25 2.25 0 012.25 2.25V18a2.25 2.25 0 01-2.25 2.25H6A2.25 2.25 0 013.75 18v-2.25zM13.5 6a2.25 2.25 0 012.25-2.25H18A2.25 2.25 0 0120.25 6v2.25A2.25 2.25 0 0118 10.5h-2.25a2.25 2.25 0 01-2.25-2.25V6zM13.5 15.75a2.25 2.25 0 012.25-2.25H18a2.25 2.25 0 012.25 2.25V18A2.25 2.25 0 0118 20.25h-2.25A2.25 2.25 0 0113.5 18v-2.25z" />
      </svg>
    ),
  },
  {
    title: "Internasjonale ambisjoner",
    description: "Vi hjelper deg med eksport og frakt ut i verden – akkurat slik vi følger landslaget utover grensene.",
    icon: (
      <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418" />
      </svg>
    ),
  },
];

export default function HowItWorks() {
  return (
    <section className="relative overflow-hidden bg-white py-24 lg:py-32">
      <img src="/images/symbol-purple.svg" alt="" aria-hidden="true" className="absolute -right-10 top-1/3 h-48 w-auto opacity-[0.06]" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-[var(--color-profrakt-lavender)] px-4 py-1.5">
          <span className="text-sm font-semibold text-[var(--color-profrakt-purple)]">For din bedrift</span>
        </div>
        <h2 className="max-w-2xl font-display text-4xl font-bold leading-[1.1] text-[var(--color-profrakt-purple)] sm:text-5xl">
          Profrakt: Laget bak din bedrift
        </h2>
        <p className="mt-6 max-w-3xl text-lg leading-relaxed text-[var(--color-profrakt-text-muted)]">
          Uansett om du er en liten gründerbedrift som drømmer stort, eller en etablert aktør klar for eksport, gir Profrakt deg verktøyene du trenger for å lykkes.
        </p>

        <div className="mt-4 mb-4 inline-flex items-center gap-2 rounded-full bg-[var(--color-profrakt-lavender)] px-4 py-1.5">
          <span className="text-sm font-semibold text-[var(--color-profrakt-purple)]">Hvorfor velge oss?</span>
        </div>

        <div className="mt-2 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {advantages.map((a) => (
            <div key={a.title} className="group rounded-2xl border border-[var(--color-profrakt-purple)]/10 bg-[var(--color-profrakt-lavender-light)] p-6 transition-all hover:border-[var(--color-profrakt-violet)]/30 hover:shadow-lg">
              <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-[var(--color-profrakt-purple)] text-white transition-transform group-hover:scale-110">
                {a.icon}
              </div>
              <h3 className="text-lg font-semibold text-[var(--color-profrakt-purple)]">{a.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-[var(--color-profrakt-text-muted)]">{a.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
