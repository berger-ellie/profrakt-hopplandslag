import Image from "next/image";

export default function Story() {
  return (
    <section id="historien" className="relative overflow-hidden bg-white py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-[var(--color-profrakt-lavender)] px-4 py-1.5">
          <span className="text-sm font-semibold text-[var(--color-profrakt-purple)]">Historien bak</span>
        </div>
        <h2 className="max-w-lg font-display text-4xl font-bold italic leading-[1.1] text-[var(--color-profrakt-purple)] sm:text-5xl lg:text-6xl">
          Drømmer som tar av
        </h2>

        <div className="mt-16 grid items-center gap-10 lg:grid-cols-12 lg:gap-12">
          <div className="relative lg:col-span-7">
            <img src="/images/symbol-purple.svg" alt="" aria-hidden="true" className="absolute -left-6 -top-6 h-24 w-auto opacity-20" />
            <div className="relative overflow-hidden rounded-3xl">
              <Image src="/images/walking-ski-jump.png" alt="Mikkel og Ea Cathrin sammen med Johann André Forfang og Eirin Maria Kvandal ved hoppbakken i Granåsen" width={900} height={550} className="h-auto w-full object-cover" />
            </div>
          </div>
          <div className="lg:col-span-5">
            <p className="text-lg leading-relaxed text-[var(--color-profrakt-text-muted)]">
              Logistikk handler om mer enn bare esker, paller og fraktbrev. Det handler om forventninger som skal innfris, løfter som skal holdes og drømmer som skal realiseres.
            </p>
            <p className="mt-6 text-lg leading-relaxed text-[var(--color-profrakt-text-muted)]">
              Sammen med stjernehopperne Johann André Forfang og Eirin Maria Kvandal reiste vi i Profrakt til Granåsen for å overraske to av sportens ivrigste talenter: søskenparet Mikkel og Ea Cathrin.
            </p>
          </div>
        </div>

        <div className="mt-24 grid items-center gap-10 lg:grid-cols-12 lg:gap-12">
          <div className="order-2 lg:order-1 lg:col-span-5">
            <p className="text-lg leading-relaxed text-[var(--color-profrakt-text-muted)]">
              Gjennom filmen &laquo;En helt spesiell leveranse&raquo; ønsker vi å vise gleden ved en perfekt levering. Enten det er nytt hopputstyr til morgendagens helter eller en viktig sending til din kunde, er målet vårt det samme:
            </p>
            <p className="mt-6 font-display text-2xl font-bold italic leading-snug text-[var(--color-profrakt-purple)] sm:text-3xl">
              At det skal komme trygt&nbsp;frem, til rett tid.
            </p>
            <div className="mt-8">
              <a href="https://profrakt.no/book-en-demo" className="inline-flex items-center gap-2 rounded-full bg-[var(--color-profrakt-purple)] px-6 py-3 text-sm font-semibold text-white transition-all hover:bg-[var(--color-profrakt-purple-mid)] hover:-translate-y-0.5">
                Book en demo
                <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" /></svg>
              </a>
            </div>
          </div>
          <div className="relative order-1 lg:order-2 lg:col-span-7">
            <img src="/images/symbol-purple.svg" alt="" aria-hidden="true" className="absolute -bottom-6 -right-6 h-20 w-auto opacity-15 rotate-180" />
            <div className="relative overflow-hidden rounded-3xl">
              <Image src="/images/athletes-with-boxes.png" alt="Johann André Forfang og Eirin Maria Kvandal overrekker Profrakt-pakker" width={900} height={550} className="h-auto w-full object-cover" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
