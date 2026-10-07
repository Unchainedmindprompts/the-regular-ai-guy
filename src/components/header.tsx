"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { ArrowUpRight, AudioLines, Menu, X } from "lucide-react";
export function Header() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const toggleRef = useRef<HTMLButtonElement>(null);
  useEffect(() => {
    function escape(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setOpen(false);
        toggleRef.current?.focus();
      }
    }
    window.addEventListener("keydown", escape);
    return () => window.removeEventListener("keydown", escape);
  }, []);
  function close() {
    setOpen(false);
  }
  return (
    <header className="site-header">
      <div className="container header-inner">
        <Link
          className="wordmark"
          href="/"
          aria-label="The Regular AI Guy home"
          onClick={close}
        >
          <AudioLines aria-hidden="true" size={34} />
          <span>
            THE REGULAR <b>AI</b> GUY
            <span className="wordmark-sub">WITH MARK ABPLANALP</span>
          </span>
        </Link>
        <nav className="desktop-nav" aria-label="Main navigation">
          <Link
            className={pathname === "/start-here" ? "active" : ""}
            href="/start-here"
          >
            Start here
          </Link>
          <Link href="/#explore">Explore topics</Link>
          <Link className={pathname === "/about" ? "active" : ""} href="/about">
            Meet Mark
          </Link>
        </nav>
        <Link className="header-cta" href="/start-here">
          Let’s figure it out <ArrowUpRight size={17} />
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
        <Link href="/start-here" onClick={close}>
          Start here <ArrowUpRight size={18} />
        </Link>
        <Link href="/#explore" onClick={close}>
          Explore topics <ArrowUpRight size={18} />
        </Link>
        <Link href="/about" onClick={close}>
          Meet Mark <ArrowUpRight size={18} />
        </Link>
      </nav>
    </header>
  );
}
