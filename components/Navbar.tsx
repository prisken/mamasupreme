"use client";

import Link from "next/link";
import { useEffect, useId, useState } from "react";

const navLinks = [
  { label: "首頁", href: "/" },
  { label: "MDS理念", href: "/mds" },
  { label: "活動專區", href: "/events" },
  { label: "兒歌天地", href: "/songs" },
  { label: "資源庫", href: "/resources" },
  { label: "關於我們", href: "/about" },
] as const;

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const menuId = useId();

  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth >= 768) setIsOpen(false);
    };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  return (
    <header className="w-full border-b border-black/10 dark:border-white/10 bg-background/80 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <nav
        className="mx-auto w-full max-w-6xl px-4 sm:px-6"
        aria-label="Primary"
      >
        <div className="flex h-16 items-center justify-between">
          <Link
            href="/"
            className="font-semibold tracking-tight text-lg text-foreground hover:opacity-90"
            aria-label="Mama大晒 首頁"
          >
            Mama大晒
          </Link>

          <div className="hidden md:flex items-center gap-6">
            {navLinks.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className="text-sm font-medium text-foreground/80 hover:text-foreground transition-colors"
              >
                {l.label}
              </Link>
            ))}
          </div>

          <button
            type="button"
            className="md:hidden inline-flex items-center justify-center rounded-md p-2 text-foreground/80 hover:text-foreground hover:bg-black/5 dark:hover:bg-white/10 transition"
            aria-label={isOpen ? "關閉選單" : "開啟選單"}
            aria-controls={menuId}
            aria-expanded={isOpen}
            onClick={() => setIsOpen((v) => !v)}
          >
            <span className="sr-only">
              {isOpen ? "Close menu" : "Open menu"}
            </span>
            <svg
              viewBox="0 0 24 24"
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              {isOpen ? (
                <>
                  <path d="M18 6 6 18" />
                  <path d="M6 6l12 12" />
                </>
              ) : (
                <>
                  <path d="M4 6h16" />
                  <path d="M4 12h16" />
                  <path d="M4 18h16" />
                </>
              )}
            </svg>
          </button>
        </div>

        <div
          id={menuId}
          className={[
            "md:hidden overflow-hidden transition-[max-height,opacity] duration-200 ease-out",
            isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0",
          ].join(" ")}
        >
          <div className="pb-4 pt-2 flex flex-col gap-1">
            {navLinks.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className="rounded-md px-3 py-2 text-sm font-medium text-foreground/85 hover:text-foreground hover:bg-black/5 dark:hover:bg-white/10 transition"
                onClick={() => setIsOpen(false)}
              >
                {l.label}
              </Link>
            ))}
          </div>
        </div>
      </nav>
    </header>
  );
}

