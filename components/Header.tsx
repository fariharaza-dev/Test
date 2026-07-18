"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { List, X } from "@phosphor-icons/react";
import ThemeToggle from "./ThemeToggle";

const navLinks = [
  { text: "Articles", href: "/articles" },
  { text: "Privacy Policy", href: "/privacy-policy" },
  { text: "Terms Of Service", href: "/terms" },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-black/5 bg-white/80 backdrop-blur-md dark:border-white/10 dark:bg-zinc-950/80">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:h-[72px] lg:px-8">
        <Link
          href="/"
          className="flex items-center rounded-lg dark:bg-white dark:px-2.5 dark:py-1.5"
          aria-label="Discareer home"
          onClick={() => setOpen(false)}
        >
          <Image
            src="/images/logoBlackFull.svg"
            alt="discareer logo"
            width={132}
            height={58}
            className="h-8 w-auto lg:h-9"
            priority
          />
        </Link>

        <nav className="hidden items-center gap-8 md:flex" aria-label="Primary">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-[15px] font-medium text-zinc-600 transition-colors hover:text-zinc-950 dark:text-zinc-400 dark:hover:text-white"
            >
              {link.text}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <ThemeToggle />
          <Link
            href="/login"
            className="hidden rounded-full px-4 py-2 text-[15px] font-medium text-zinc-700 transition-colors hover:bg-zinc-100 sm:inline-flex dark:text-zinc-300 dark:hover:bg-white/10"
          >
            Log In
          </Link>
          <Link
            href="/register"
            className="inline-flex items-center justify-center rounded-full bg-[#F0714E] px-5 py-2.5 text-[15px] font-semibold text-white shadow-sm shadow-[#F0714E]/25 transition-transform active:scale-[0.98] hover:bg-[#e5623e]"
          >
            Sign Up
          </Link>
          <button
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            className="flex h-9 w-9 items-center justify-center rounded-full text-zinc-700 md:hidden dark:text-zinc-300"
          >
            {open ? <X size={20} weight="bold" /> : <List size={20} weight="bold" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="border-t border-black/5 bg-white px-4 py-4 md:hidden dark:border-white/10 dark:bg-zinc-950">
          <nav className="flex flex-col gap-1" aria-label="Mobile primary">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="rounded-lg px-3 py-2.5 text-[15px] font-medium text-zinc-700 hover:bg-zinc-100 dark:text-zinc-300 dark:hover:bg-white/10"
              >
                {link.text}
              </Link>
            ))}
            <Link
              href="/login"
              onClick={() => setOpen(false)}
              className="rounded-lg px-3 py-2.5 text-[15px] font-medium text-zinc-700 hover:bg-zinc-100 dark:text-zinc-300 dark:hover:bg-white/10"
            >
              Log In
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
