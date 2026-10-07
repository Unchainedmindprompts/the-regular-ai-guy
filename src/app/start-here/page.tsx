import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight, ArrowRight } from "lucide-react";
import { guides } from "@/content/guides";
import { PromptLab } from "@/components/prompt-lab";
export const metadata: Metadata = {
  title: "Start Here",
  description:
    "What would you like help with? Start with an everyday goal and let AI help with the details.",
  alternates: { canonical: "/start-here" },
};
export default function StartHere() {
  return (
    <main id="main-content">
      <section className="page-hero">
        <div className="container">
          <div className="breadcrumb">
            <Link href="/">Home</Link>
            <ArrowRight size={13} />
            <span>Start here</span>
          </div>
          <span className="eyebrow">JUST SAY WHAT YOU NEED</span>
          <h1>
            What would you
            <br />
            like help with?
          </h1>
          <p>
            Getting dinner sorted. Making next week easier. Understanding a
            letter. Start with your goal and let AI ask for the details.
          </p>
        </div>
      </section>
      <section className="section prompt-section">
        <div className="container">
          <PromptLab />
        </div>
      </section>
      <section className="section">
        <div className="container">
          <div className="section-heading">
            <div>
              <span className="eyebrow">WHEN YOU WANT A LITTLE MORE</span>
              <h2>A few short guides.</h2>
            </div>
          </div>
          <div className="starter-grid">
            {guides.map((guide, i) => (
              <article className="starter-tile" key={guide.slug}>
                <span className="eyebrow">
                  0{i + 1} / {guide.eyebrow}
                </span>
                <h2>{guide.title}</h2>
                <p>{guide.summary}</p>
                <Link href={`/guides/${guide.slug}`} className="text-link">
                  Read the guide <ArrowUpRight size={18} />
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
