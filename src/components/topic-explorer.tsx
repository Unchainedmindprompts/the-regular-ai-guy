"use client";
import { useRef, useState } from "react";
import Link from "next/link";
import {
  ArrowRight,
  BriefcaseBusiness,
  House,
  Lightbulb,
  ShieldCheck,
} from "lucide-react";
import { topicGroups } from "@/content/site";
const icons = [BriefcaseBusiness, House, Lightbulb, ShieldCheck];
export function TopicExplorer() {
  const [active, setActive] = useState(0);
  const tabs = useRef<(HTMLButtonElement | null)[]>([]);
  const topic = topicGroups[active];
  function change(index: number) {
    setActive(index);
    tabs.current[index]?.focus();
  }
  return (
    <div className="topic-explorer">
      <div className="topic-tabs" role="tablist" aria-label="Explore AI topics">
        {topicGroups.map((group, i) => {
          const Icon = icons[i];
          return (
            <button
              key={group.id}
              ref={(el) => {
                tabs.current[i] = el;
              }}
              id={`tab-${group.id}`}
              role="tab"
              aria-selected={i === active}
              aria-controls={`panel-${group.id}`}
              tabIndex={i === active ? 0 : -1}
              className={i === active ? "selected" : ""}
              onClick={() => setActive(i)}
              onKeyDown={(event) => {
                if (event.key === "ArrowRight") {
                  event.preventDefault();
                  change((i + 1) % 4);
                }
                if (event.key === "ArrowLeft") {
                  event.preventDefault();
                  change((i + 3) % 4);
                }
                if (event.key === "Home") {
                  event.preventDefault();
                  change(0);
                }
                if (event.key === "End") {
                  event.preventDefault();
                  change(3);
                }
              }}
            >
              <Icon size={20} />
              {group.name}
            </button>
          );
        })}
      </div>
      <div
        id={`panel-${topic.id}`}
        role="tabpanel"
        aria-labelledby={`tab-${topic.id}`}
        tabIndex={0}
        className="topic-panel"
      >
        <div className="topic-intro">
          <p>{topic.description}</p>
          <Link href={`/guides/${topic.guide}`} className="text-link">
            Read a related guide <ArrowRight size={18} />
          </Link>
        </div>
        <div className="topic-ideas">
          {topic.ideas.map((idea, i) => (
            <article className="topic-idea" key={idea.title}>
              <span className="topic-index">0{i + 1}</span>
              <div>
                <div className="small-label">{idea.tag}</div>
                <h3>{idea.title}</h3>
                <p>{idea.detail}</p>
                <span className="concept-label">Upcoming topic concept</span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}
