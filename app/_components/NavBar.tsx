"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const TABS = [
  { href: "/prazsky-times", label: "The Prazsky Times" },
  { href: "/matchups", label: "Matchups" },
  { href: "/standings", label: "Standings" },
  { href: "/power-rankings", label: "Power Rankings" },
] as const;

export default function NavBar() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-10 border-b border-border bg-surface/95 backdrop-blur">
      <div className="mx-auto flex max-w-4xl flex-col px-4 sm:flex-row sm:items-center sm:gap-8 sm:px-6">
        <span className="pt-3 pb-1 font-mono text-sm font-bold tracking-widest text-accent uppercase sm:py-4">
          Conleth&apos;s Virgins
        </span>
        <nav className="flex min-w-0 gap-1 overflow-x-auto [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          {TABS.map((tab) => {
            const isActive = pathname === tab.href;
            return (
              <Link
                key={tab.href}
                href={tab.href}
                className={`shrink-0 border-b-2 px-3 py-3 text-xs font-semibold tracking-wide whitespace-nowrap uppercase transition-colors sm:py-4 sm:text-sm ${
                  isActive
                    ? "border-accent text-foreground"
                    : "border-transparent text-muted hover:text-foreground"
                }`}
              >
                {tab.label}
              </Link>
            );
          })}
        </nav>
      </div>
    </header>
  );
}
