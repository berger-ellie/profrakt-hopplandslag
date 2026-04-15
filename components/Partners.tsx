const partners = [
  { name: "Bring", logo: "/images/partners/bring.svg" },
  { name: "PostNord", logo: "/images/partners/postnord.svg" },
  { name: "Helthjem", logo: "/images/partners/helthjem.svg" },
  { name: "DHL", logo: "/images/partners/dhl.svg" },
  { name: "Posten", logo: "/images/partners/posten.svg" },
  { name: "UPS", logo: "/images/partners/ups.svg" },
];

export default function Partners() {
  return (
    <section className="border-t border-gray-100 bg-white py-16 lg:py-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <h2 className="text-center font-display text-2xl font-bold text-[var(--color-profrakt-purple)] sm:text-3xl">
          Våre transportpartnere
        </h2>
        <div className="mt-10 flex flex-wrap items-center justify-center gap-x-12 gap-y-8 lg:gap-x-16">
          {partners.map((p) => (
            <div key={p.name} className="group flex items-center justify-center">
              <img
                src={p.logo}
                alt={p.name}
                className="h-8 w-auto opacity-50 grayscale transition-all duration-300 group-hover:opacity-100 group-hover:grayscale-0 group-hover:scale-110 lg:h-10"
              />
            </div>
          ))}
        </div>
        <div className="mt-10 text-center">
          <a
            href="https://profrakt.no/fraktavtale"
            className="inline-flex items-center gap-2 text-sm font-semibold text-[var(--color-profrakt-purple)] transition-colors hover:text-[var(--color-profrakt-violet)]"
          >
            Se alle fraktavtaler
            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
