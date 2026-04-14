const partners = [
  { name: "Bring", color: "#00643a" },
  { name: "PostNord", color: "#003c71" },
  { name: "Helthjem", color: "#e4002b" },
  { name: "DHL", color: "#d40511" },
  { name: "Posten", color: "#e32d22" },
  { name: "UPS", color: "#351c15" },
];

export default function Partners() {
  return (
    <section className="border-t border-gray-100 bg-white py-16 lg:py-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <p className="text-center text-sm font-semibold uppercase tracking-widest text-[var(--color-profrakt-text-muted)]">Våre transportpartnere</p>
        <div className="mt-10 flex flex-wrap items-center justify-center gap-x-12 gap-y-6 lg:gap-x-20">
          {partners.map((p) => (
            <div key={p.name} className="group flex items-center justify-center">
              <span className="font-display text-2xl font-bold tracking-wide opacity-40 transition-all duration-300 group-hover:opacity-100 group-hover:scale-110 lg:text-3xl" style={{ color: p.color }}>{p.name}</span>
            </div>
          ))}
        </div>
        <div className="mt-10 text-center">
          <a href="https://profrakt.no/fraktavtale" className="inline-flex items-center gap-2 text-sm font-semibold text-[var(--color-profrakt-purple)] transition-colors hover:text-[var(--color-profrakt-violet)]">
            Se alle fraktavtaler
            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" /></svg>
          </a>
        </div>
      </div>
    </section>
  );
}
