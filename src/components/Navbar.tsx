"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { NAV_LINKS, STORE } from "@/lib/site";
import Icon from "./Icon";
import Logo from "./Logo";
import ThemeToggle from "./ThemeToggle";
import { buttonClass } from "./ui";

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  const isActive = (href: string) => pathname === href || pathname.startsWith(`${href}/`);

  return (
    <header className="sticky top-0 z-40 border-b border-neutral-200 bg-neutral-50/80 backdrop-blur-xl">
      <nav className="mx-auto flex h-16 w-full max-w-6xl items-center gap-6 px-5 sm:px-8" aria-label="Principal">
        <Logo />

        {/* Desktop links */}
        <ul className="ml-6 hidden items-center gap-1 md:flex">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                aria-current={isActive(link.href) ? "page" : undefined}
                className={`rounded-full px-3 py-1.5 text-sm transition-colors ${
                  isActive(link.href)
                    ? "bg-neutral-100 text-neutral-900"
                    : "text-neutral-500 hover:text-neutral-900"
                }`}
              >
                {link.label}
              </Link>
            </li>
          ))}
          <li>
            <a
              href={STORE.href}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 rounded-full px-3 py-1.5 text-sm text-neutral-500 transition-colors hover:text-neutral-900"
            >
              {STORE.label}
              <Icon name="external" className="h-3.5 w-3.5" />
            </a>
          </li>
        </ul>

        <div className="ml-auto flex items-center gap-2">
          <ThemeToggle />
          <Link href="/contacto" className={`max-sm:hidden ${buttonClass("primary")}`}>
            Solicitar demostración
          </Link>
          <button
            type="button"
            className="flex h-9 w-9 items-center justify-center rounded-full border border-neutral-200 text-neutral-900 md:hidden"
            aria-label={open ? "Cerrar menú" : "Abrir menú"}
            aria-expanded={open}
            aria-controls="mobile-menu"
            onClick={() => setOpen((v) => !v)}
          >
            <Icon name={open ? "close" : "menu"} className="h-4 w-4" />
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      <div
        id="mobile-menu"
        className={`grid border-neutral-200 transition-[grid-template-rows] duration-300 md:hidden ${
          open ? "grid-rows-[1fr] border-t" : "grid-rows-[0fr]"
        }`}
      >
        <div className="overflow-hidden">
          <ul className="flex flex-col gap-1 px-5 py-4">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  onClick={() => setOpen(false)}
                  aria-current={isActive(link.href) ? "page" : undefined}
                  className={`block rounded-lg px-3 py-2.5 text-base ${
                    isActive(link.href) ? "bg-neutral-100 text-neutral-900" : "text-neutral-600"
                  }`}
                >
                  {link.label}
                </Link>
              </li>
            ))}
            <li>
              <a
                href={STORE.href}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setOpen(false)}
                className="flex items-center gap-1.5 rounded-lg px-3 py-2.5 text-base text-neutral-600"
              >
                {STORE.label}
                <Icon name="external" className="h-4 w-4" />
              </a>
            </li>
            <li className="pt-2">
              <Link href="/contacto" onClick={() => setOpen(false)} className={`w-full ${buttonClass("primary", "lg")}`}>
                Solicitar demostración
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
}
