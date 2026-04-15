import Image from "next/image";

export default function Partnership() {
  return (
    <section id="partnerskapet" className="relative overflow-hidden bg-[var(--color-profrakt-purple)] py-24 lg:py-32">
      <img src="/images/symbol-white.svg" alt="" aria-hidden="true" className="absolute -right-8 top-12 h-48 w-auto opacity-[0.06] lg:h-64" />
      <img src="/images/symbol-white.svg" alt="" aria-hidden="true" className="absolute left-8 bottom-16 h-28 w-auto opacity-[0.04] rotate-180" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid items-start gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="relative lg:col-span-5">
            <div className="absolute -left-6 -top-6 h-full w-full rounded-3xl bg-[var(--color-profrakt-violet)]/20" />
            <div className="relative overflow-hidden rounded-3xl">
              <Image
                src="/images/ski-jump-action.png"
                alt="Montasje med både kvinnelige og mannlige hoppere i Profrakt-profilert utstyr"
                width={600}
                height={750}
                className="h-auto w-full object-cover"
              />
            </div>
          </div>

          <div className="lg:col-span-7">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-1.5">
              <span className="text-sm font-semibold text-white/70">Partnerskap</span>
            </div>
            <h2 className="font-display text-4xl font-bold leading-[1.1] text-white sm:text-5xl">
              En stolt partner for hele landslaget – ut 2027
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-white/70">
              Profrakt er stolte av å være offisiell partner for både kvinne- og herrelandslaget. For oss er det en selvfølge å støtte hele bredden av toppidretten. Etter et spennende OL i Milano Cortina, fortsetter vi reisen sammen med hopperne mot nye mål og mesterskap.
            </p>
            <p className="mt-4 text-lg leading-relaxed text-white/70">
              Med vår logo på hoppernes dresser og treningsutstyr frem til 2027, er vi med på å legge til rette for at våre utøvere har de beste forutsetningene for å prestere på verdensbasis.
            </p>

            {/* Quote */}
            <blockquote className="mt-10 rounded-2xl border-l-4 border-[var(--color-profrakt-violet)] bg-white/[0.07] py-6 pl-6 pr-6 backdrop-blur-sm">
              <p className="text-lg font-medium leading-relaxed text-white/90">
                &laquo;At Profrakt er med oss som partner betyr mye. Med dem på laget tar vi nye skritt mot drømmen om å være verdens beste hoppnasjon.&raquo;
              </p>
              <footer className="mt-3 text-sm font-semibold text-[var(--color-profrakt-violet)]">
                — Jan-Erik Aalbu, hoppsjef
              </footer>
            </blockquote>

            {/* Presisjon og internasjonal ekspansjon */}
            <div className="mt-10">
              <h3 className="font-display text-2xl font-bold text-white sm:text-3xl">
                Presisjon og internasjonal ekspansjon
              </h3>
              <p className="mt-4 text-base leading-relaxed text-white/70">
                Hoppsporten krever ekstrem presisjon og perfekt timing – verdier vi lever etter hver dag i Profrakt. Mens landslaget kjemper i verdenstoppen, er vi i Profrakt klare for vår egen internasjonale reise.
              </p>
              <p className="mt-4 text-base leading-relaxed text-white/70">
                Som en del av avtalen bidrar vi ikke bare som sponsor, men bistår også hopplandslaget med vår kjernekompetanse: effektiv frakt gjennom data.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
