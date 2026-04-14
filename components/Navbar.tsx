"use client";

import { useState } from "react";
import Link from "next/link";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-[var(--color-profrakt-purple)]/5 bg-[var(--color-profrakt-lavender)]/80 backdrop-blur-xl">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
        <Link href="https://profrakt.no">
          <img src="/images/logo-dark.svg" alt="Profrakt" className="h-5 w-auto lg:h-6" />
        </Link>

        <div className="hidden items-center gap-8 lg:flex">
          <Link href="https://profrakt.no/fraktavtale" className="text-sm font-medium text-[var(--color-profrakt-purple)]/70 transition-colors hover:text-[var(--color-profrakt-purple)]">Fraktavtale</Link>
          <Link href="https://profrakt.no/integrasjoner" className="text-sm font-medium text-[var(--color-profrakt-purple)]/70 transition-colors hover:text-[var(--color-profrakt-purple)]">Integrasjoner</Link>
          <Link href="https://profrakt.no/blogg" className="text-sm font-medium text-[var(--color-profrakt-purple)]/70 transition-colors hover:text-[var(--color-profrakt-purple)]">Blogg</Link>
          <Link href="https://profrakt.no/om-profrakt" className="text-sm font-medium text-[var(--color-profrakt-purple)]/70 transition-colors hover:text-[var(--color-profrakt-purple)]">Om Profrakt</Link>
        </div>

        <div className="hidden items-center gap-3 lg:flex">
          <Link href="https://app.profrakt.no/auth/sign-in" className="text-sm font-medium text-[var(--color-profrakt-purple)]/70 transition-colors hover:text-[var(--color-profrakt-purple)]">Logg inn</Link>
          <Link href="https://app.profrakt.no/auth/sign-up" className="inline-flex items-center rounded-full bg-[var(--color-profrakt-purple)] px-5 py-2.5 text-sm font-semibold text-white transition-all hover:bg-[var(--color-profrakt-purple-mid)] hover:-translate-y-px">Registrer deg</Link>
        </div>

        <button onClick={() => setOpen(!open)} className="lg:hidden text-[var(--color-profrakt-purple)]" aria-label="Toggle menu">
          <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
            {open ? <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" /> : <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5M3.75 17.25h16.5" />}
          </svg>
        </button>
      </nav>

      {open && (
        <div className="border-t border-[var(--color-profrakt-purple)]/5 bg-[var(--color-profrakt-lavender)] px-6 pb-6 lg:hidden">
          <div className="flex flex-col gap-4 pt-4">
            <Link href="https://profrakt.no/fraktavtale" className="text-sm font-medium text-[var(--color-profrakt-purple)]">Fraktavtale</Link>
            <Link href="https://profrakt.no/integrasjoner" className="text-sm font-medium text-[var(--color-profrakt-purple)]">Integrasjoner</Link>
            <Link href="https://profrakt.no/blogg" className="text-sm font-medium text-[var(--color-profrakt-purple)]">Blogg</Link>
            <Link href="https://profrakt.no/om-profrakt" className="text-sm font-medium text-[var(--color-profrakt-purple)]">Om Profrakt</Link>
            <div className="flex flex-col gap-3 border-t border-[var(--color-profrakt-purple)]/10 pt-4">
              <Link href="https://app.profrakt.no/auth/sign-in" className="text-sm font-medium text-[var(--color-profrakt-purple)]">Logg inn</Link>
              <Link href="https://app.profrakt.no/auth/sign-up" className="inline-flex items-center justify-center rounded-full bg-[var(--color-profrakt-purple)] px-5 py-2.5 text-sm font-semibold text-white">Registrer deg</Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
