import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight, ArrowUpRight } from "lucide-react";
import { getGuide, guides } from "@/content/guides";
import { site } from "@/content/site";
export function generateStaticParams() {
  return guides.map((guide) => ({ slug: guide.slug }));
}
export const dynamicParams = false;
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const guide = getGuide(slug);
  if (!guide) return {};
  return {
    title: guide.title,
    description: guide.summary,
    alternates: { canonical: `/guides/${slug}` },
    openGraph: {
      title: guide.title,
      description: guide.summary,
      url: `/guides/${slug}`,
      type: "article",
      images: [
        {
          url: "/images/social-cover.jpg",
          width: 1200,
          height: 630,
          alt: "The Regular AI Guy",
        },
      ],
    },
  };
}
export default async function GuidePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const guide = getGuide(slug);
  if (!guide) notFound();
  const data = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: guide.title,
    description: guide.summary,
    url: `${site.url}/guides/${slug}`,
    isPartOf: {
      "@type": "WebSite",
      "@id": `${site.url}/#website`,
      name: site.name,
    },
    inLanguage: "en-US",
  };
  return (
    <main id="main-content">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(data).replace(/</g, "\\u003c"),
        }}
      />
      <section className="page-hero">
        <div className="container">
          <div className="breadcrumb">
            <Link href="/start-here">Start here</Link>
            <ArrowRight size={13} />
            <span>Reading guide</span>
          </div>
          <span className="eyebrow">{guide.eyebrow}</span>
          <h1>{guide.title}</h1>
          <p>{guide.summary}</p>
          <div className="guide-meta">
            <span>{guide.readTime}</span>
            <span>A Regular AI Guy guide</span>
          </div>
        </div>
      </section>
      <div className="container reading-layout">
        <aside className="reading-sidebar" aria-label="In this guide">
          <span>IN THIS GUIDE</span>
          {guide.sections.map((section, i) => (
            <a href={`#section-${i + 1}`} key={section.title}>
              {section.title}
            </a>
          ))}
          <a href="#takeaway">The takeaway</a>
          <Link href="/start-here" className="back-link">
            ← All starter guides
          </Link>
        </aside>
        <article className="prose">
          {guide.sections.map((section, i) => (
            <section id={`section-${i + 1}`} key={section.title}>
              <h2>{section.title}</h2>
              {section.body.map((text) => (
                <p key={text}>{text}</p>
              ))}
              {section.bullets && (
                <ul>
                  {section.bullets.map((text) => (
                    <li key={text}>{text}</li>
                  ))}
                </ul>
              )}
            </section>
          ))}
          <div className="takeaway" id="takeaway">
            <span className="eyebrow">THE TAKEAWAY</span>
            <p>{guide.takeaway}</p>
          </div>
          <section className="source-list">
            <h2>Keep learning</h2>
            <p>Official resources behind the practical advice:</p>
            <ul>
              {guide.sourceLinks.map((source) => (
                <li key={source.url}>
                  <a
                    href={source.url}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {source.label} <ArrowUpRight size={13} aria-hidden="true" />
                    <span className="sr-only"> (opens in a new tab)</span>
                  </a>
                </li>
              ))}
            </ul>
          </section>
          <Link className="text-link" href="/start-here">
            <ArrowLeft size={16} /> Back to the starter guides
          </Link>
        </article>
      </div>
    </main>
  );
}
