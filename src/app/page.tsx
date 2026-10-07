import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ArrowUpRight, AudioLines } from "lucide-react";
import { TopicExplorer } from "@/components/topic-explorer";
import { PromptLab } from "@/components/prompt-lab";
import { StructuredData } from "@/components/structured-data";
export const metadata: Metadata = { alternates: { canonical: "/" } };
export default function Home() {
  return (
    <>
      <StructuredData />
      <main id="main-content">
        <section className="hero">
          <div className="container hero-grid">
            <div className="hero-copy">
              <div className="hero-eyebrow">
                <span className="status-dot" /> THE REGULAR AI GUY PODCAST
              </div>
              <h1>
                What would you
                <br />
                <span>like help with?</span>
              </h1>
              <p>
                Maybe you tried AI once and weren’t impressed. I use it all the
                time, and I want to share a few things that could make your day
                easier.
              </p>
              <div className="hero-actions">
                <Link href="#first-prompt" className="button button-cyan">
                  Try an everyday request <ArrowUpRight size={20} />
                </Link>
                <Link href="/start-here" className="hero-secondary">
                  New here? Start here <ArrowRight size={18} />
                </Link>
              </div>
              <div className="hero-note">
                <AudioLines size={20} />
                <span>
                  The podcast is in the making. Useful ideas are already here.
                </span>
              </div>
            </div>
            <div className="hero-art">
              <div className="art-orbit orbit-one" />
              <div className="art-orbit orbit-two" />
              <span className="art-cross cross-one" aria-hidden="true">
                +
              </span>
              <span className="art-cross cross-two" aria-hidden="true">
                +
              </span>
              <Image
                src="/images/regular-ai-guy-logo.webp"
                alt="The Regular AI Guy: illustrated Mark in a red plaid shirt beside a smiling robot wearing headphones"
                width={1000}
                height={1000}
                preload
                sizes="(max-width: 760px) 92vw, (max-width: 1100px) 47vw, 620px"
                className="hero-logo"
              />
              <div className="art-note">
                <span className="note-line" />
                <span>
                  A REGULAR GUY.
                  <br />A WHOLE LOT OF CURIOSITY.
                </span>
              </div>
            </div>
          </div>
        </section>
        <div className="belief-strip">
          <div className="container">
            <span>
              A podcast with Mark Abplanalp about using AI at home, at work, and
              in everyday life.
            </span>
          </div>
        </div>
        <section className="section prompt-section">
          <div className="container">
            <PromptLab />
          </div>
        </section>
        <section id="explore" className="section explore-section">
          <div className="container">
            <div className="section-heading">
              <div>
                <span className="eyebrow">COMING TO THE PODCAST</span>
                <h2>
                  Everyday questions.
                  <br />
                  Plenty to talk about.
                </h2>
              </div>
              <p>Home, family, work, and the bigger picture.</p>
            </div>
            <TopicExplorer />
            <div className="upcoming-note">
              <span className="status-dot dark-dot" />
              <p>
                Upcoming topic ideas. Episodes and listening links will be here
                when they’re ready.
              </p>
            </div>
          </div>
        </section>
        <section className="section host-section">
          <div className="container host-grid">
            <div className="host-graphic">
              <div className="host-number" aria-hidden="true">
                Hey.
              </div>
              <div className="host-stamp">
                <AudioLines size={26} />
                <span>
                  A REGULAR GUY.
                  <br />
                  FIGURING IT OUT.
                </span>
              </div>
            </div>
            <div className="host-copy">
              <span className="eyebrow">YOUR HOST, MARK ABPLANALP</span>
              <h2>
                I’m using this stuff.
                <br />
                And sharing what I learn.
              </h2>
              <p>
                I run Luxe Window Works and install shades. I also use AI, build
                websites, and explore what these tools can do in everyday life.
              </p>
              <Link className="button button-dark" href="/about">
                Meet Mark <ArrowUpRight size={18} />
              </Link>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
