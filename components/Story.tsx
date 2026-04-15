import Image from "next/image";

export default function Story() {
  return (
    <section id="historien" className="relative overflow-hidden bg-white py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-[var(--color-profrakt-lavender)] px-4 py-1.5">
          <span className="text-sm font-semibold text-[var(--color-profrakt-purple)]">Historien bak</span>
        </div>
        <h2 className="max-w-lg font-display text-4xl font-bold leading-[1.1] text-[var(--color-profrakt-purple)] sm:text-5xl lg:text-6xl">
          Drømmer som tar av
        </h2>

        <div className="mt-16 grid items-center gap-10 lg:grid-cols-12 lg:gap-16">
          <div className="relative lg:col-span-6">
            <img src="/images/symbol-purple.svg" alt="" aria-hidden="true" className="absolute -left-6 -top-6 h-24 w-auto opacity-20" />
            <div className="relative overflow-hidden rounded-3xl">
              <Image
                src="/images/walking-ski-jump.png"
                alt="Mikkel og Ea Cathrin i hoppbakken med stjerneblikk"
                width={900}
                height={550}
                className="h-auto w-full object-cover"
              />
            </div>
          </div>
          <div className="lg:col-span-6">
            <p className="text-lg leading-relaxed text-[var(--color-profrakt-text-muted)]">
              Logistikk handler om mer enn bare esker og paller. Det handler om forventninger som skal innfris og drømmer som skal realiseres.
            </p>
            <p className="mt-6 text-lg leading-relaxed text-[var(--color-profrakt-text-muted)]">
              Sammen med Johann André Forfang og Eirin Maria Kvandal reiste vi til Granåsen for å overraske to av sportens ivrigste talenter: søskenparet Mikkel og Ea&nbsp;Cathrin. Denne filmen viser essensen av hvorfor vi er med på laget – vi elsker å se ting nå frem til rett tid, enten det er nytt utstyr til rekrutter eller kritiske forsendelser til din bedrift.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
