import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
export function Footer() {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-top">
          <div>
            <Link className="wordmark service-wordmark" href="/">
              <span>
                THE REGULAR <b>AI</b> GUY
                <span className="wordmark-sub">WITH MARK ABPLANALP</span>
              </span>
            </Link>
            <p>
              Websites for service businesses.
              <br />
              Built by someone who runs one.
            </p>
          </div>
          <div className="footer-links">
            <Link href="/#work">
              The work <ArrowUpRight size={15} />
            </Link>
            <Link href="/#approach">
              How I help <ArrowUpRight size={15} />
            </Link>
            <Link href="/about">
              Meet Mark <ArrowUpRight size={15} />
            </Link>
          </div>
          <div className="footer-links">
            <Link href="/start-here">
              Practical AI guides <ArrowUpRight size={15} />
            </Link>
            <Link href="/explore">
              AI notes & podcast <ArrowUpRight size={15} />
            </Link>
            <Link href="/#contact">
              Get in touch <ArrowUpRight size={15} />
            </Link>
          </div>
        </div>
        <div className="footer-bottom">
          <span>© {new Date().getFullYear()} The Regular AI Guy</span>
          <span>Based in North Idaho. Built with curiosity.</span>
          <Link href="/privacy">Privacy</Link>
        </div>
      </div>
    </footer>
  );
}
