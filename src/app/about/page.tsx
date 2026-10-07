import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
export const metadata: Metadata = {
  title: "Meet Mark Abplanalp",
  description:
    "Meet Mark Abplanalp, the hands-on business owner and curious AI user behind The Regular AI Guy.",
  alternates: { canonical: "/about" },
};
export default function About() {
  return (
    <main id="main-content">
      <section className="page-hero">
        <div className="container">
          <span className="eyebrow">MEET THE GUY BEHIND THE MIC</span>
          <h1>
            A regular guy.
            <br />
            An open mind.
            <br />A lot of questions.
          </h1>
          <p>
            I’m Mark Abplanalp. I’m using AI, figuring out what works, and
            sharing what I learn.
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
              <h2>
                Hands-on work.
                <br />
                Hands-on learning.
              </h2>
              <p>
                I run Luxe Window Works and install shades. I also spend a lot
                of time using AI, building websites, and figuring out how these
                tools can fit into real work and everyday life.
              </p>
              <p>
                That’s where The Regular AI Guy comes from. There’s a lot
                happening with AI. I want to explore it with the same practical
                question I’d bring to any tool: what can I actually do with
                this?
              </p>
            </section>
            <section>
              <h2>What we’ll get into</h2>
              <p>
                Useful tools for work and home. Personal agents. The data
                centers behind the technology. Real risks, unlikely fears, and
                possibilities worth exploring without pretending the outcome is
                guaranteed.
              </p>
              <p>
                The show is for curious people from all kinds of backgrounds. If
                you have a business to run, a job to do, a home to look after,
                or simply a question about AI, you belong in the conversation.
              </p>
            </section>
            <section>
              <h2>We’re just getting started.</h2>
              <p>
                The podcast is in the making. There aren’t published episodes
                here yet. In the meantime, you can explore the upcoming topics
                and try the practical starter guides.
              </p>
              <Link href="/start-here" className="text-link">
                Let’s figure something out <ArrowUpRight size={18} />
              </Link>
            </section>
          </div>
        </div>
      </section>
    </main>
  );
}
