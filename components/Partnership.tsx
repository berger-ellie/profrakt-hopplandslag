import Image from "next/image";

const benefits = [
  { icon: <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6A2.25 2.25 0 016 3.75h2.25A2.25 2.25 0 0110.5 6v2.25a2.25 2.25 0 01-2.25 2.25H6a2.25 2.25 0 01-2.25-2.25V6zM3.75 15.75A2.25 2.25 0 016 13.5h2.25a2.25 2.25 0 012.25 2.25V18a2.25 2.25 0 01-2.25 2.25H6A2.25 2.25 0 013.75 18v-2.25zM13.5 6a2.25 2.25 0 012.25-2.25H18A2.25 2.25 0 0120.25 6v2.25A2.25 2.25 0 0118 10.5h-2.25a2.25 2.25 0 01-2.25-2.25V6zM13.5 15.75a2.25 2.25 0 012.25-2.25H18a2.25 2.25 0 012.25 2.25V18A2.25 2.25 0 0118 20.25h-2.25A2.25 2.25 0 0113.5 18v-2.25z" /></svg>, title: "Én plattform, alle løsninger", description: "Send med Bring, PostNord, Helthjem, DHL og flere fra én enkel portal." },
  { icon: <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18.75a60.07 60.07 0 0115.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 013 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 00-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 01-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 003 15h-.75M15 10.5a3 3 0 11-6 0 3 3 0 016 0zm3 0h.008v.008H18V10.5zm-12 0h.008v.008H6V10.5z" /></svg>, title: "Ferdigforhandlede avtaler", description: "Få tilgang til markedets beste fraktpriser fra dag én, uten krav til egne volum." },
  { icon: <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3v11.25A2.25 2.25 0 006 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0118 16.5h-2.25m-7.5 0h7.5m-7.5 0l-1 3m8.5-3l1 3m0 0l.5 1.5m-.5-1.5h-9.5m0 0l-.5 1.5m.75-9l3-3 2.148 2.148A12.061 12.061 0 0116.5 7.605" /></svg>, title: "Full kontroll", description: "Følg alle sendinger i sanntid og gi kundene dine en profesjonell leveringsopplevelse." },
  { icon: <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M13.5 16.875h3.375m0 0h3.375m-3.375 0V13.5m0 3.375v3.375M6 10.5h2.25a2.25 2.25 0 002.25-2.25V6a2.25 2.25 0 00-2.25-2.25H6A2.25 2.25 0 003.75 6v2.25A2.25 2.25 0 006 10.5zm0 9.75h2.25A2.25 2.25 0 0010.5 18v-2.25a2.25 2.25 0 00-2.25-2.25H6a2.25 2.25 0 00-2.25 2.25V18A2.25 2.25 0 006 20.25zm9.75-9.75H18a2.25 2.25 0 002.25-2.25V6A2.25 2.25 0 0018 3.75h-2.25A2.25 2.25 0 0013.5 6v2.25a2.25 2.25 0 002.25 2.25z" /></svg>, title: "Sømløs integrasjon", description: "Koble Profrakt direkte til din nettbutikk (Shopify, WooCommerce, Mystore m.fl.)." },
];

export default function Partnership() {
  return (
    <section className="relative overflow-hidden bg-[var(--color-profrakt-purple)] py-24 lg:py-32">
      <img src="/images/symbol-white.svg" alt="" aria-hidden="true" className="absolute -right-8 top-12 h-48 w-auto opacity-[0.06] lg:h-64" />
      <img src="/images/symbol-white.svg" alt="" aria-hidden="true" className="absolute left-8 bottom-16 h-28 w-auto opacity-[0.04] rotate-180" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="relative lg:col-span-5">
            <div className="absolute -left-6 -top-6 h-full w-full rounded-3xl bg-[var(--color-profrakt-violet)]/20" />
            <div className="relative overflow-hidden rounded-3xl">
              <Image src="/images/ski-jump-action.png" alt="Hopper i svevet med Profrakt-logo synlig på drakten" width={600} height={750} className="h-auto w-full object-cover" />
            </div>
          </div>

          <div className="lg:col-span-7">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-1.5">
              <span className="text-sm font-semibold text-white/70">Partnerskap</span>
            </div>
            <h2 className="font-display text-4xl font-bold italic leading-[1.1] text-white sm:text-5xl">En stolt støttespiller</h2>
            <p className="mt-6 text-lg leading-relaxed text-white/70">
              Som offisiell partner for Hopplandslaget frem til 2027, er Profrakt stolte av å støtte våre nasjonale hopphelter på veien mot nye høyder. Vi tar med oss de samme verdiene som preger hoppsporten – presisjon, timing og lidenskap – når vi fungerer som &laquo;laget bak din bedrift&raquo;.
            </p>

            <div className="mt-10 grid gap-4 sm:grid-cols-2">
              {benefits.map((b) => (
                <div key={b.title} className="group rounded-2xl bg-white/10 p-5 backdrop-blur-sm transition-all hover:bg-white/15">
                  <div className="mb-3 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-[var(--color-profrakt-violet)]/30 text-white transition-colors group-hover:bg-[var(--color-profrakt-violet)]/50">{b.icon}</div>
                  <h4 className="text-base font-semibold text-white">{b.title}</h4>
                  <p className="mt-1.5 text-sm leading-relaxed text-white/60">{b.description}</p>
                </div>
              ))}
            </div>

            <div className="mt-8">
              <a href="https://app.profrakt.no/auth/sign-up" className="inline-flex items-center gap-2 rounded-full bg-[var(--color-profrakt-cta)] px-6 py-3 text-sm font-semibold text-white transition-all hover:bg-[var(--color-profrakt-cta-hover)] hover:-translate-y-0.5">
                Opprett gratis konto
                <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" /></svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
