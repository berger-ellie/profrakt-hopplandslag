"use client";

import Link from "next/link";
import { useRef, useState } from "react";

export default function Hero() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  function togglePlay() {
    const video = videoRef.current;
    if (!video) return;
    if (video.paused) {
      video.play();
      setIsPlaying(true);
    } else {
      video.pause();
      setIsPlaying(false);
    }
  }
  return (
    <section className="relative overflow-hidden bg-[var(--color-profrakt-lavender-light)] pb-0 pt-12 lg:pt-24">
      <img src="/images/symbol-purple.svg" alt="" aria-hidden="true" className="absolute -left-10 top-8 h-40 w-auto opacity-15 lg:h-56" />
      <img src="/images/symbol-purple.svg" alt="" aria-hidden="true" className="absolute -right-12 top-1/4 h-64 w-auto opacity-10 rotate-180 lg:h-80" />

      <div className="relative mx-auto max-w-4xl px-6 text-center lg:px-8">
        <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-[var(--color-profrakt-purple)]/10 px-4 py-1.5">
          <img src="/images/symbol-purple.svg" alt="" className="h-4 w-auto" />
          <span className="text-sm font-medium text-[var(--color-profrakt-purple)]">Profrakt x Hopplandslaget</span>
        </div>

        <h1 className="font-display text-4xl font-bold leading-[1.05] text-[var(--color-profrakt-purple)] sm:text-5xl lg:text-7xl">
          En helt spesiell leveranse for hele Hopp-Norge
        </h1>

        <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-[var(--color-profrakt-text-muted)] sm:text-xl">
          Se hvordan vi sammen med stjernene fra både kvinne- og herrelandslaget overrasket søskenparet Mikkel og Ea&nbsp;Cathrin – og lær hvorfor Profrakt er en stolt partner av norsk hoppsport frem til 2027.
        </p>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
          <Link
            href="https://app.profrakt.no/auth/sign-up"
            className="inline-flex items-center rounded-full bg-[var(--color-profrakt-purple)] px-7 py-3.5 text-base font-semibold text-white shadow-lg transition-all hover:bg-[var(--color-profrakt-purple-mid)] hover:shadow-xl hover:-translate-y-0.5"
          >
            Kom i gang med Profrakt nå
          </Link>
          <a
            href="#partnerskapet"
            className="inline-flex items-center gap-2 rounded-full border-2 border-[var(--color-profrakt-purple)]/20 px-6 py-3 text-base font-medium text-[var(--color-profrakt-purple)] transition-all hover:border-[var(--color-profrakt-purple)]/40 hover:bg-white"
          >
            Les mer om vårt samarbeid
            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 13.5L12 21m0 0l-7.5-7.5M12 21V3" />
            </svg>
          </a>
        </div>
      </div>

      {/* Video embed area */}
      <div className="relative mx-auto mt-14 max-w-5xl px-6 lg:px-8">
        <div className="absolute -left-4 -top-4 hidden h-64 w-64 rounded-full bg-[var(--color-profrakt-purple)] opacity-60 blur-3xl lg:block" />
        <div className="absolute -right-4 -bottom-4 hidden h-48 w-48 rounded-full bg-[var(--color-profrakt-violet)] opacity-40 blur-3xl lg:block" />
        <div className="group relative overflow-hidden rounded-3xl shadow-2xl cursor-pointer" onClick={togglePlay}>
          <div className="relative aspect-video w-full bg-[var(--color-profrakt-purple)]">
            <video
              ref={videoRef}
              src="/videos/profrakt-overraskelse.webm"
              poster="/images/walking-ski-jump.png"
              playsInline
              preload="metadata"
              onEnded={() => setIsPlaying(false)}
              className="h-full w-full object-cover"
            />
            <div
              className={`absolute inset-0 flex flex-col items-center justify-center gap-3 bg-black/20 transition-opacity duration-300 ${
                isPlaying ? "opacity-0 group-hover:opacity-100" : "opacity-100"
              }`}
            >
              <div className="flex h-20 w-20 items-center justify-center rounded-full bg-white/90 shadow-xl backdrop-blur-sm transition-transform hover:scale-110">
                {isPlaying ? (
                  <svg className="h-8 w-8 text-[var(--color-profrakt-purple)]" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M6 4h4v16H6V4zm8 0h4v16h-4V4z" />
                  </svg>
                ) : (
                  <svg className="ml-1.5 h-8 w-8 text-[var(--color-profrakt-purple)]" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z" />
                  </svg>
                )}
              </div>
              {!isPlaying && (
                <span className="text-sm font-medium text-white/80">Hovedfilm: En helt spesiell leveranse</span>
              )}
            </div>
          </div>
        </div>
      </div>

      <div className="mt-16 h-24 bg-gradient-to-b from-[var(--color-profrakt-lavender-light)] to-white" />
    </section>
  );
}
