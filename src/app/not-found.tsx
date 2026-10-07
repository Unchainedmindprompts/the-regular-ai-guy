import Link from "next/link";
import { ArrowRight } from "lucide-react";
export default function NotFound() {
  return (
    <main id="main-content" className="not-found">
      <div className="container">
        <span className="eyebrow">404 / A SMALL DETOUR</span>
        <h1>
          Let’s get you
          <br />
          back on track.
        </h1>
        <p>That page isn’t here. There’s plenty to explore from the start.</p>
        <Link href="/start-here" className="button button-dark">
          Start here <ArrowRight size={17} />
        </Link>
      </div>
    </main>
  );
}
