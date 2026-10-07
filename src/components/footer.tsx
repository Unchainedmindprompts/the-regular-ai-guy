import Link from "next/link";
import { AudioLines, ArrowUpRight } from "lucide-react";
export function Footer() {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-top">
          <div>
            <Link className="wordmark" href="/">
              <AudioLines aria-hidden="true" size={35} />
              <span>
                THE REGULAR <b>AI</b> GUY
                <span className="wordmark-sub">WITH MARK ABPLANALP</span>
              </span>
            </Link>
            <p>A little curiosity goes a long way.</p>
          </div>
          <div className="footer-links">
            <Link href="/start-here">
              Start here <ArrowUpRight size={15} />
            </Link>
            <Link href="/#explore">
              Explore topics <ArrowUpRight size={15} />
            </Link>
            <Link href="/about">
              Meet Mark <ArrowUpRight size={15} />
            </Link>
          </div>
          <div className="footer-status">
            <span className="status-dot" /> PODCAST IN THE MAKING
            <p>
              Good conversations are on the way.
              <br />
              Useful ideas are already here.
            </p>
          </div>
        </div>
        <div className="footer-bottom">
          <span>© {new Date().getFullYear()} The Regular AI Guy</span>
          <span>Curiosity welcome. Jargon optional.</span>
          <Link href="/privacy">Privacy</Link>
        </div>
      </div>
    </footer>
  );
}
