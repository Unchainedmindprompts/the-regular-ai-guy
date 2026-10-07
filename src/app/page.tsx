import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  AudioLines,
  Lightbulb,
  Wrench,
  Compass,
  Check,
} from "lucide-react";
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
                <span className="status-dot" /> REAL LIFE. REAL QUESTIONS.
                REALLY USEFUL AI.
              </div>
              <h1>
                AI for work,
                <br />
                home, and
                <br />
                <span>
                  everything
                  <br className="hero-break" /> in between.
                </span>
              </h1>
              <p>
                A podcast for curious people with real things to do.
                <br className="desktop-break" /> I’m Mark. I’m using this stuff,
                figuring out what works, and sharing what I learn.
              </p>
              <div className="hero-actions">
                <Link href="/start-here" className="button button-cyan">
                  New to AI? Start here <ArrowUpRight size={20} />
                </Link>
                <Link href="#explore" className="hero-secondary">
                  Explore the topics <ArrowRight size={18} />
                </Link>
              </div>
              <div className="hero-note">
                <AudioLines size={20} />
                <span>
                  The podcast is in the making. The curiosity starts now.
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
              <Wrench size={17} /> Useful in the real world
            </span>
            <span>
              <Lightbulb size={17} /> Explained in everyday language
            </span>
            <span>
              <Compass size={17} /> Room for a healthy dose of skepticism
            </span>
          </div>
        </div>
        <section className="section intro-section">
          <div className="container intro-grid">
            <div>
              <span className="eyebrow">
                YOU DON’T HAVE TO HAVE IT ALL FIGURED OUT
              </span>
              <h2>
                That’s kind of
                <br />
                the whole point.
              </h2>
            </div>
            <div className="intro-copy">
              <p className="lead">
                AI is showing up everywhere. Let’s figure out where it actually
                fits in your life.
              </p>
              <p>
                On the job, running a business, at the kitchen table. We’ll get
                into practical tools, big changes, honest questions, and the
                stuff worth being careful about. Bring your experience. Bring
                your skepticism. There’s room for both.
              </p>
              <Link href="/about" className="text-link">
                Meet the regular guy behind the mic <ArrowUpRight size={19} />
              </Link>
            </div>
          </div>
        </section>
        <section id="explore" className="section explore-section">
          <div className="container">
            <div className="section-heading">
              <div>
                <span className="eyebrow">FOLLOW YOUR CURIOSITY</span>
                <h2>What’s on your mind?</h2>
              </div>
              <p>
                Four ways into the conversation.
                <br />
                Plenty to figure out together.
              </p>
            </div>
            <TopicExplorer />
            <div className="upcoming-note">
              <span className="status-dot dark-dot" />
              <p>
                These are topics we’re exploring for the show. Episodes and
                listening links will appear here when they’re ready.
              </p>
            </div>
          </div>
        </section>
        <section className="section start-section">
          <div className="container">
            <div className="section-heading">
              <div>
                <span className="eyebrow">NO EXPERIENCE REQUIRED</span>
                <h2>A good place to begin.</h2>
              </div>
              <Link href="/start-here" className="text-link">
                See the starter guide <ArrowRight size={19} />
              </Link>
            </div>
            <div className="guide-grid">
              <Link
                href="/guides/first-useful-prompt"
                className="guide-card card-cyan"
              >
                <div className="guide-card-top">
                  <span>01 / GET STARTED</span>
                  <ArrowUpRight size={25} />
                </div>
                <div
                  className="guide-illustration prompt-illustration"
                  aria-hidden="true"
                >
                  <div className="mini-prompt">
                    <span>Help me with...</span>
                    <div />
                    <div />
                    <b>↗</b>
                  </div>
                  <span className="pencil-stroke" />
                </div>
                <h3>
                  Your first useful
                  <br />
                  AI conversation.
                </h3>
                <p>
                  Pick a small task. Give it some context.
                  <br />
                  Learn by giving it a try.
                </p>
                <span className="guide-card-link">
                  Read the guide <ArrowRight size={17} />
                </span>
              </Link>
              <Link
                href="/guides/personal-agents"
                className="guide-card card-peach"
              >
                <div className="guide-card-top">
                  <span>02 / UNDERSTAND THE TOOLS</span>
                  <ArrowUpRight size={25} />
                </div>
                <div
                  className="guide-illustration agent-illustration"
                  aria-hidden="true"
                >
                  <span className="agent-node">
                    <Check size={23} />
                  </span>
                  <span className="agent-line" />
                  <span className="agent-node main-agent">
                    <AudioLines size={39} />
                  </span>
                  <span className="agent-line" />
                  <span className="agent-node">?</span>
                  <span className="agent-caption">YOU’RE IN THE LOOP</span>
                </div>
                <h3>
                  So, what exactly
                  <br />
                  is an AI agent?
                </h3>
                <p>
                  A plain-language look at tools that can
                  <br />
                  help take a next step.
                </p>
                <span className="guide-card-link">
                  Read the guide <ArrowRight size={17} />
                </span>
              </Link>
              <Link
                href="/guides/risks-and-reality"
                className="guide-card card-lilac"
              >
                <div className="guide-card-top">
                  <span>03 / KEEP YOUR HEAD</span>
                  <ArrowUpRight size={25} />
                </div>
                <div
                  className="guide-illustration reality-illustration"
                  aria-hidden="true"
                >
                  <div className="reality-sheet">
                    <span>LOOK CLOSER</span>
                    <i />
                    <i />
                    <i />
                  </div>
                  <div className="magnifier">
                    <Check size={24} />
                  </div>
                </div>
                <h3>
                  Stay curious.
                  <br />
                  Stay in control.
                </h3>
                <p>
                  Real risks, useful boundaries,
                  <br />
                  and a few good habits.
                </p>
                <span className="guide-card-link">
                  Read the guide <ArrowRight size={17} />
                </span>
              </Link>
            </div>
          </div>
        </section>
        <section className="section prompt-section">
          <div className="container">
            <PromptLab />
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
                  HANDS-ON WORK.
                  <br />
                  OPEN-MINDED THINKING.
                </span>
              </div>
            </div>
            <div className="host-copy">
              <span className="eyebrow">YOUR HOST, MARK ABPLANALP</span>
              <h2>
                I work with my hands.
                <br />
                And I’m putting AI
                <br />
                to work, too.
              </h2>
              <p>
                I run Luxe Window Works and install shades. I also spend a lot
                of time using AI, building websites, and figuring out what these
                tools can actually do.
              </p>
              <p>
                The Regular AI Guy is where I bring that curiosity. Practical
                uses, bigger questions, and lessons from trying things for real.
              </p>
              <Link className="button button-dark" href="/about">
                A little more about me <ArrowUpRight size={18} />
              </Link>
            </div>
          </div>
        </section>
        <section className="closing-section">
          <div className="container closing-inner">
            <div>
              <span className="eyebrow">LET’S MAKE THIS USEFUL</span>
              <h2>
                You bring the real life.
                <br />
                We’ll explore the AI.
              </h2>
            </div>
            <Link
              className="round-link"
              href="/start-here"
              aria-label="Start exploring AI"
            >
              <ArrowUpRight size={48} />
            </Link>
          </div>
        </section>
      </main>
    </>
  );
}
