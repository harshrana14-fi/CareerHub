"use client";

import { useState, useEffect } from "react";
import {
  Menu,
  X,
  User,
  Briefcase,
  Building2,
  Bookmark,
  GraduationCap,
  Award,
  CreditCard,
  Sparkles,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ThemeToggle } from "./theme-toggle";
import { usePathname } from "next/navigation";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Separator } from "@/components/ui/separator";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "auto";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  const handleSectionClick = (hash: string) => {
    if (window.location.pathname === "/") {
      document.getElementById(hash)?.scrollIntoView({ behavior: "smooth" });
    } else {
      window.location.href = `/#${hash}`;
    }
    setIsOpen(false);
  };

  const LINKS = [
    { name: "Browse", href: "/browse", icon: Briefcase },
    { name: "Companies", href: "/companies", icon: Building2 },
    { name: "Bookmarks", href: "/bookmarks", icon: Bookmark },
    { name: "Assessments", href: "/assessments", icon: GraduationCap },
    { name: "Success Stories", hash: "testimonials", icon: Award },
    { name: "Plans", hash: "pricing", icon: CreditCard },
  ];

  const renderLink = (link: typeof LINKS[number], mobile = false) => {
    const Icon = link.icon;

    const baseClasses = mobile
      ? "group w-full rounded-xl px-4 py-3.5 text-base font-medium text-left flex items-center gap-3 text-foreground/70 hover:text-foreground hover:bg-primary/10 transition-all duration-200"
      : "group relative px-3 py-2 text-sm font-medium text-foreground/70 hover:text-foreground flex items-center gap-2 transition-all duration-200 rounded-lg hover:bg-primary/5";

    if (link.href) {
      return (
        <Link
          key={link.name}
          href={link.href}
          className={baseClasses}
          onClick={() => mobile && setIsOpen(false)}
        >
          {Icon && <Icon className="w-4 h-4" />}
          {link.name}
        </Link>
      );
    }

    return (
      <button
        key={link.name}
        className={baseClasses}
        onClick={() => handleSectionClick(link.hash!)}
      >
        {Icon && <Icon className="w-4 h-4" />}
        {link.name}
      </button>
    );
  };

  const renderCTA = (mobile = false) => {
    const wrapperClass = mobile
      ? "w-full flex flex-col gap-2.5"
      : "flex items-center gap-2";

    return (
      <div className={wrapperClass}>
        <Link href="/company-signup" className={mobile ? "w-full" : ""}>
          <Button
            className={mobile ? "w-full justify-center" : "justify-center"}
            variant="outline"
          >
            <Building2 className="w-4 h-4 mr-1.5" />
            Companies
          </Button>
        </Link>

        <Link href="/login" className={mobile ? "w-full" : ""}>
          <Button
            className={mobile ? "w-full justify-center" : "justify-center"}
            variant="outline"
          >
            <User className="w-4 h-4 mr-1.5" />
            Login
          </Button>
        </Link>

        <Link href="/signup" className={mobile ? "w-full" : ""}>
          <Button
            className={`${mobile ? "w-full" : ""} glassmorphic-button-primary`}
          >
            <Sparkles className="w-4 h-4 mr-1.5" />
            Sign Up
          </Button>
        </Link>
      </div>
    );
  };

  return (
    <>
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur">
        <div className="container mx-auto flex h-16 items-center justify-between px-4">
          <Link href="/" className="flex items-center gap-2 font-bold">
            <div className="h-8 w-8 rounded-lg bg-primary text-primary-foreground flex items-center justify-center">
              C
            </div>
            CareerHub
          </Link>

          <nav className="hidden md:flex items-center gap-1">
            {LINKS.map((l) => renderLink(l))}
          </nav>

          <div className="hidden md:flex items-center gap-2">
            <ThemeToggle />
            {renderCTA()}
          </div>

          <button
            className="md:hidden p-2"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X /> : <Menu />}
          </button>
        </div>
      </header>

      {isOpen && (
        <div className="fixed inset-0 z-40 bg-black/30 md:hidden">
          <div className="fixed right-0 top-0 h-full w-80 bg-background p-4">
            <div className="space-y-2">
              {LINKS.map((l) => renderLink(l, true))}
            </div>
            <div className="mt-6">{renderCTA(true)}</div>
          </div>
        </div>
      )}
    </>
  );
}
