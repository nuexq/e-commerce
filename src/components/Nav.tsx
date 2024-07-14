"use client";

import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ComponentProps, ReactNode } from "react";

export function Nav({ children }: { children: ReactNode }) {
  return (
    <header className="z-10 sticky top-0 w-full border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 max-w-screen-2xl items-center">
        {children}
      </div>
    </header>
  );
}

export function NavLink(props: Omit<ComponentProps<typeof Link>, "className">) {
  const pathname = usePathname();
  return (
    <nav className="flex items-center space-x-4 lg:space-x-6">
      <Link
        {...props}
        className={cn(
          "text-sm transition-colors px-3 hover:text-primary focus-visible:bg-secondary focus-visible:text-secondary-foreground",
          pathname === props.href ? "text-foreground" : "text-foreground/60",
        )}
      />
    </nav>
  );
}
