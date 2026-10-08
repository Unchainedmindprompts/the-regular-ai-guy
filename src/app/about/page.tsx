import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
export const metadata: Metadata = {
  title: "Meet Mark Abplanalp",
  description:
    "Meet the owner of Luxe Window Works and self-taught website builder behind The Regular AI Guy.",
  alternates: { canonical: "/about" },
};
export default function About() {
  return (
    <main id="main-content">
      <section className="page-hero">
        <div className="container">
          <span className="eyebrow">MARK ABPLANALP · THE REGULAR AI GUY</span>
          <h1>
            A business owner.
            <br />A hands-on builder.
            <br />
            Always learning.
          </h1>
          <p>
            I’m Mark. I run Luxe Window Works, build websites, and look for
            practical ways to put AI to work.
          </p>
        </div>
      </section>
      <section className="section">
        <div className="container about-grid">
          <div className="about-art">
            <Image
              src="/images/mark-original.webp"
              alt="Mark Abplanalp at Luxe Window Works"
              width={1024}
              height={1536}
              sizes="(max-width:760px) 85vw, 36vw"
            />
            <p>Mark Abplanalp · Owner, Luxe Window Works</p>
          </div>
          <div className="prose">
            <section>
              <h2>It starts with understanding the business.</h2>
              <p>
                I’ve worked in window treatments since 2002. Today I run Luxe
                Window Works in North Idaho, helping customers choose the right
                shades and getting the installation right.
              </p>
              <p>
                I know how much a service business depends on trust. People want
                to know who they’re dealing with, what you can help them with,
                and what happens next. A website should make those things clear.
              </p>
              <p>
                That’s the perspective I bring to building websites: owner to
                owner, with attention to the details your customers actually
                need.
              </p>
            </section>
            <section>
              <h2>Self-taught. Hands-on. Still curious.</h2>
              <p>
                I’m self-taught in AI and website building. I learn by using the
                tools, asking questions, testing things, and improving the work.
                I’m not coming to this from a formal software-engineering
                background.
              </p>
              <p>
                AI helps me build and explore ideas. My job is to understand the
                business, check the details, and turn those ideas into something
                useful. You work directly with me.
              </p>
              <Link href="/#work" className="text-link">
                See the websites I’ve built <ArrowUpRight size={18} />
              </Link>
            </section>
            <section>
              <h2>There’s still room for curiosity.</h2>
              <p>
                The Regular AI Guy also has practical AI guides and a podcast in
                the making. No published episodes yet—just useful starting
                points and questions worth exploring.
              </p>
              <Link href="/explore" className="text-link">
                Explore the AI notes & podcast <ArrowUpRight size={18} />
              </Link>
            </section>
            <section>
              <h2>Let’s talk about your business.</h2>
              <p>
                A new website, a refresh, or a practical AI question. Tell me
                what you have in mind, and we’ll see what makes sense.
              </p>
              <Link href="/#contact" className="button button-dark">
                Get in touch <ArrowUpRight size={18} />
              </Link>
            </section>
          </div>
        </div>
      </section>
    </main>
  );
}
