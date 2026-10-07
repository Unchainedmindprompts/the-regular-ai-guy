import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
export const metadata: Metadata = {
  title: "Meet Mark Abplanalp",
  description:
    "Meet Mark Abplanalp, host of The Regular AI Guy, a podcast about using AI in everyday life.",
  alternates: { canonical: "/about" },
};
export default function About() {
  return (
    <main id="main-content">
      <section className="page-hero">
        <div className="container">
          <span className="eyebrow">THE GUY BEHIND THE MIC</span>
          <h1>Hi, I’m Mark.</h1>
          <p>
            I use AI a lot. I’m still learning, and I want to share what I find
            useful.
          </p>
        </div>
      </section>
      <section className="section">
        <div className="container about-grid">
          <div className="about-art">
            <Image
              src="/images/regular-ai-guy-logo.webp"
              alt="The Regular AI Guy podcast artwork featuring Mark and a friendly robot"
              width={1000}
              height={1000}
              sizes="(max-width:760px) 90vw, 40vw"
            />
            <p>Mark Abplanalp · The Regular AI Guy</p>
          </div>
          <div className="prose">
            <section>
              <h2>A little about me</h2>
              <p>
                I run Luxe Window Works and install shades. I also use AI, build
                websites, and spend a lot of time figuring out what these tools
                can do.
              </p>
              <p>
                The Regular AI Guy is where I’ll share what I’m learning, in
                everyday language.
              </p>
            </section>
            <section>
              <h2>There’s plenty to talk about.</h2>
              <p>
                Help with meals, family schedules, paperwork, trips, and work.
                We’ll also get into things like personal agents, data centers,
                and the risks worth understanding.
              </p>
              <p>
                Maybe you use AI already. Maybe you tried it and didn’t like it.
                Either way, you’re welcome here.
              </p>
            </section>
            <section>
              <h2>The podcast is on the way.</h2>
              <p>
                Episodes and listening links will be added when they’re ready.
                For now, there are a few simple requests and short guides to
                try.
              </p>
              <Link href="/start-here" className="text-link">
                Take a look <ArrowUpRight size={18} />
              </Link>
            </section>
          </div>
        </div>
      </section>
    </main>
  );
}
