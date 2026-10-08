import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowDown,
  ArrowRight,
  ArrowUpRight,
  Check,
  Code2,
  Compass,
  Mail,
  Mountain,
  Smartphone,
} from "lucide-react";
import { StructuredData } from "@/components/structured-data";
import { contactHref, projects } from "@/content/work";
export const metadata: Metadata = { alternates: { canonical: "/" } };

export default function Home() {
  return (
    <>
      <StructuredData />
      <main id="main-content">
        <section className="service-hero">
          <div className="service-hero-image">
            <Image
              src="/images/mark-mountain-hero.webp"
              alt="Mark Abplanalp in his signature red flannel, with a mountain backdrop"
              fill
              preload
              sizes="(max-width: 760px) 150vw, 85vw"
            />
          </div>
          <div className="container service-hero-inner">
            <div className="service-hero-copy">
              <span className="eyebrow">
                <span className="status-dot" /> A REGULAR GUY. BUILDING USEFUL
                THINGS.
              </span>
              <h1>
                Websites for
                <br />
                service businesses.
                <br />
                <span>
                  Built by someone
                  <br />
                  who runs one.
                </span>
              </h1>
              <p>
                I’m Mark. I run Luxe Window Works, and I build websites that
                help people understand your business, trust your work, and take
                the next step.
              </p>
              <div className="service-actions">
                <Link href="#work" className="button button-cyan">
                  See my work <ArrowDown size={18} />
                </Link>
                <Link href="#contact" className="button button-outline">
                  Let’s talk <ArrowUpRight size={18} />
                </Link>
              </div>
              <p className="hero-footnote">
                Owner to owner. Plain language. Hands-on from the start.
              </p>
            </div>
            <div className="portrait-caption">
              <span className="portrait-signature">Hey, I’m Mark.</span>
              <span>BUSINESS OWNER · WEBSITE BUILDER · ALWAYS LEARNING</span>
            </div>
          </div>
        </section>
        <div className="service-strip">
          <div className="container">
            <span>
              <Compass size={18} /> A clear business story
            </span>
            <span>
              <Smartphone size={18} /> Thoughtful on every screen
            </span>
            <span>
              <Check size={18} /> A useful next step
            </span>
          </div>
        </div>

        <section id="work" className="section work-section">
          <div className="container">
            <div className="section-heading">
              <div>
                <span className="eyebrow">A FEW THINGS I’VE BUILT</span>
                <h2>
                  Real businesses.
                  <br />
                  Their own kind of website.
                </h2>
              </div>
              <p>
                Different people. Different work.
                <br /> A website that feels like the business behind it.
              </p>
            </div>
            <div className="work-grid">
              {projects.map((project, index) => (
                <a
                  className={`work-card work-${project.id}`}
                  key={project.id}
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Visit ${project.name} website (opens in a new tab)`}
                >
                  <div className="work-preview">
                    <div className="browser-bar" aria-hidden="true">
                      <span className="browser-dots">● ● ●</span>
                      <span>
                        {new URL(project.url).hostname.replace("www.", "")}
                      </span>
                      <ArrowUpRight size={12} />
                    </div>
                    <div className="work-screen">
                      <Image
                        src={`/images/work-${project.id}.webp`}
                        alt={`${project.name} live website homepage`}
                        width={1400}
                        height={710}
                        sizes="(max-width:760px) 90vw, 44vw"
                      />
                    </div>
                  </div>
                  <div className="work-card-heading">
                    <div>
                      <span className="work-category">
                        0{index + 1} / {project.category}
                      </span>
                      <h3>{project.name}</h3>
                    </div>
                    <span className="work-arrow">
                      <ArrowUpRight size={23} />
                    </span>
                  </div>
                  <p>{project.description}</p>
                  <span className="work-status">
                    {project.status} <span aria-hidden="true">↗</span>
                  </span>
                </a>
              ))}
            </div>
          </div>
        </section>

        <section id="approach" className="section service-offer">
          <div className="container">
            <div className="section-heading">
              <div>
                <span className="eyebrow">
                  MAKE YOUR BUSINESS EASY TO CHOOSE
                </span>
                <h2>
                  A good website does
                  <br />
                  more than look good.
                </h2>
              </div>
              <p>
                It answers the questions your customers already have.
                <br /> And makes getting in touch feel straightforward.
              </p>
            </div>
            <div className="offer-grid">
              <article>
                <span className="offer-number">01</span>
                <h3>Tell your story clearly.</h3>
                <p>
                  What you do, who you help, and where you work. Written in the
                  words your customers use, with your personality still in it.
                </p>
              </article>
              <article>
                <span className="offer-number">02</span>
                <h3>Give people a reason to trust.</h3>
                <p>
                  Show your actual work, your experience, and the people behind
                  the business. Help visitors see why you might be a good fit.
                </p>
              </article>
              <article>
                <span className="offer-number">03</span>
                <h3>Make the next step easy.</h3>
                <p>
                  A clear way to call, ask a question, or request a
                  consultation. Designed to work on a phone, between all the
                  other things in someone’s day.
                </p>
              </article>
            </div>
            <div className="offer-bottom">
              <span>
                <Code2 size={20} /> Thoughtful design. Clear content. A
                practical foundation.
              </span>
              <Link href="#contact" className="text-link">
                Tell me what you have in mind <ArrowRight size={18} />
              </Link>
            </div>
          </div>
        </section>

        <section id="about" className="section owner-section">
          <div className="container owner-grid">
            <div className="owner-photo">
              <Image
                src="/images/mark-original.webp"
                alt="Mark Abplanalp, owner of Luxe Window Works"
                width={1024}
                height={1536}
                sizes="(max-width:760px) 90vw, 35vw"
              />
              <div className="owner-label">
                <Mountain size={23} />
                <span>
                  ROOTED IN NORTH IDAHO.
                  <br />
                  CURIOUS ABOUT WHAT’S NEXT.
                </span>
              </div>
            </div>
            <div className="owner-copy">
              <span className="eyebrow">
                THE REGULAR GUY BEHIND THE WEBSITE
              </span>
              <h2>
                I know what it’s like
                <br />
                to have a business
                <br />
                <em>to get back to.</em>
              </h2>
              <p className="owner-lead">
                Quoting jobs. Talking with customers. Getting the details right.
                That’s my world, too.
              </p>
              <p>
                I run Luxe Window Works and have worked in window treatments
                since 2002. Building trust matters when someone invites you into
                their home. I bring that same care to how a business shows up
                online.
              </p>
              <p>
                I’m self-taught in AI and website building. I learn by doing,
                asking questions, and putting the tools to work on real
                projects. You work directly with me, from the first conversation
                through the details.
              </p>
              <Link href="/about" className="text-link">
                A little more about me <ArrowUpRight size={19} />
              </Link>
            </div>
          </div>
        </section>

        <section className="section foundation-section">
          <div className="container foundation-grid">
            <div>
              <span className="eyebrow">
                A USEFUL FOUNDATION FOR WHAT’S NEXT
              </span>
              <h2>
                Clear for people.
                <br />
                Organized for search.
                <br />
                <span>Open to useful AI.</span>
              </h2>
            </div>
            <div className="foundation-copy">
              <p>
                Your website comes first. Clear services, useful pages,
                consistent business details, and structured information give
                search engines and AI tools a better picture of what you do.
              </p>
              <p>
                Beyond the website, I can help you think through practical uses
                for AI: organizing information, drafting everyday content, or
                improving a repetitive task. We start with a real need and
                decide what’s worth trying.
              </p>
              <p className="foundation-note">
                No guaranteed rankings or magic lead promises. Just useful work,
                clear expectations, and room to improve.
              </p>
              <Link href="/start-here" className="text-link">
                Explore the practical AI guides <ArrowUpRight size={18} />
              </Link>
            </div>
          </div>
        </section>

        <section className="section process-section">
          <div className="container process-grid">
            <div>
              <span className="eyebrow">HERE’S HOW WE START</span>
              <h2>
                A conversation.
                <br />A clear plan.
                <br />
                Something you can see.
              </h2>
              <Link href="#contact" className="text-link">
                Let’s talk about your website <ArrowRight size={18} />
              </Link>
            </div>
            <ol className="process-list">
              <li>
                <span>01</span>
                <div>
                  <h3>Tell me about your business.</h3>
                  <p>
                    What you do, who you serve, and what isn’t working with your
                    website today.
                  </p>
                </div>
              </li>
              <li>
                <span>02</span>
                <div>
                  <h3>Agree on the useful stuff.</h3>
                  <p>
                    We define the pages, content, features, timing, and cost
                    before the build begins.
                  </p>
                </div>
              </li>
              <li>
                <span>03</span>
                <div>
                  <h3>Review it before it goes live.</h3>
                  <p>
                    You get a working preview to explore. We refine the details
                    together, then launch when you’re ready.
                  </p>
                </div>
              </li>
            </ol>
          </div>
        </section>

        <section id="contact" className="contact-section">
          <div className="container contact-inner">
            <div>
              <span className="eyebrow">
                NO NEED TO HAVE IT ALL FIGURED OUT
              </span>
              <h2>
                Let’s build something
                <br />
                <span>that feels like your business.</span>
              </h2>
              <p>
                Have a website that needs work? Starting from scratch?
                <br /> Send me a little about your business and what you’re
                thinking.
              </p>
              <a className="button button-cyan" href={contactHref}>
                Email Mark <Mail size={19} />
              </a>
              <a className="contact-email" href={contactHref}>
                mark@luxewindowworks.com
              </a>
              <span className="contact-note">
                That’s my Luxe inbox. Website questions are welcome there, too.
              </span>
            </div>
            <div className="contact-aside">
              <Image
                src="/images/regular-ai-guy-logo.webp"
                alt="The original Regular AI Guy artwork with Mark and his friendly robot sidekick"
                width={190}
                height={190}
                sizes="190px"
              />
              <p>
                Same regular guy.
                <br />A different set of tools.
              </p>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
