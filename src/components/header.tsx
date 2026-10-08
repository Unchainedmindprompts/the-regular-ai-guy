"use client";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { ArrowUpRight, Menu, X } from "lucide-react";
const links = [
  { href: "/#work", label: "The work" },
  { href: "/#approach", label: "How I help" },
  { href: "/about", label: "Meet Mark" },
];
export function Header() {
  const [open, setOpen] = useState(false);
  const toggleRef = useRef<HTMLButtonElement>(null);
  useEffect(() => {
    function escape(event: KeyboardEvent) {
      if (event.key === "Escape" && open) {
        setOpen(false);
        toggleRef.current?.focus();
      }
    }
    window.addEventListener("keydown", escape);
    return () => window.removeEventListener("keydown", escape);
  }, [open]);
  const close = () => setOpen(false);
  return (
    <header className="site-header service-header">
      <div className="container header-inner">
        <Link
          className="wordmark service-wordmark"
          href="/"
          aria-label="The Regular AI Guy home"
          onClick={close}
        >
          <span>
            <span className="wordmark-the">THE</span> REGULAR <b>AI</b> GUY
            <span className="wordmark-sub">
              WEBSITES & PRACTICAL AI · WITH MARK ABPLANALP
            </span>
          </span>
          <span className="brand-dot" aria-hidden="true" />
        </Link>
        <nav className="desktop-nav" aria-label="Main navigation">
          {links.map((link) => (
            <Link key={link.href} href={link.href}>
              {link.label}
            </Link>
          ))}
        </nav>
        <Link className="header-cta" href="/#contact">
          Let’s talk <ArrowUpRight size={17} />
        </Link>
        <button
          className="menu-toggle"
          ref={toggleRef}
          type="button"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          aria-controls="mobile-navigation"
          onClick={() => setOpen(!open)}
        >
          {open ? <X /> : <Menu />}
        </button>
      </div>
      <nav
        id="mobile-navigation"
        className="mobile-nav"
        hidden={!open}
        aria-label="Mobile navigation"
      >
        {[...links, { href: "/#contact", label: "Let’s talk" }].map((link) => (
          <Link key={link.href} href={link.href} onClick={close}>
            {link.label}
            <ArrowUpRight size={18} />
          </Link>
        ))}
      </nav>
    </header>
  );
}
