import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight, ArrowRight } from "lucide-react";
import { guides } from "@/content/guides";
import { PromptLab } from "@/components/prompt-lab";
export const metadata: Metadata = {
  title: "Start Here",
  description:
    "A friendly starting point for using AI. Pick one small task, learn how to ask, and keep the final say.",
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
          <span className="eyebrow">ONE USEFUL THING AT A TIME</span>
          <h1>
            You don’t need to know
            <br />
            everything to get started.
          </h1>
          <p>
            Bring a small task and a little curiosity. These plain-language
            guides will help you find your feet, ask better questions, and use
            your own judgment.
          </p>
        </div>
      </section>
      <section className="section">
        <div className="container starter-grid">
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
      </section>
      <section className="section prompt-section">
        <div className="container">
          <PromptLab />
        </div>
      </section>
    </main>
  );
}
