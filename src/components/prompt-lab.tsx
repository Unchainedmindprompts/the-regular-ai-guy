"use client";
import { useRef, useState } from "react";
import { Check, Copy, ArrowUpRight } from "lucide-react";
import Link from "next/link";
const samples = [
  {
    label: "Dinner plans",
    prompt:
      "Help me plan five family dinners and make a grocery list for a budget of $100. Ask how many people I’m feeding, any food preferences, and what I already have. Use estimated prices and keep the plan simple.",
  },
  {
    label: "A busy week",
    prompt:
      "Help me organize next week’s family schedule. I need to fit in the kids’ activities, appointments, and the usual routines. Ask me for the details, then make a simple plan I can use.",
  },
  {
    label: "The weekend",
    prompt:
      "Help me plan an affordable weekend. Ask where I’ll be, who’s coming, what we enjoy, and what I’d like to spend. Suggest a simple plan and flag any prices or opening hours I should confirm.",
  },
  {
    label: "A confusing letter",
    prompt:
      "Help me understand this confusing letter. Explain what it says in everyday language and suggest the next steps. Point out any deadline or detail I should confirm. I’ll paste the letter with private details removed.",
  },
];

export function PromptLab() {
  const [selected, setSelected] = useState(0);
  const [copied, setCopied] = useState(false);
  const [error, setError] = useState(false);
  const codeRef = useRef<HTMLParagraphElement>(null);
  async function copy() {
    try {
      await navigator.clipboard.writeText(samples[selected].prompt);
      setCopied(true);
      setError(false);
    } catch {
      setError(true);
      setCopied(false);
      const range = document.createRange();
      if (codeRef.current) {
        range.selectNodeContents(codeRef.current);
        const selection = window.getSelection();
        selection?.removeAllRanges();
        selection?.addRange(range);
      }
    }
  }
  return (
    <div className="prompt-lab" id="first-prompt">
      <div className="prompt-context">
        <span className="eyebrow">START WITH SOMETHING REAL</span>
        <h2>
          You don’t need to know how to build the solution, just ask the right
          questions.
        </h2>
        <p>
          Pick an example, copy it into an AI tool, and make it yours. You can
          just talk normally.
        </p>
        <Link className="text-link" href="/guides/first-useful-prompt">
          A quick guide to asking for help <ArrowUpRight size={19} />
        </Link>
      </div>
      <div className="prompt-paper">
        <div className="prompt-paper-header">
          <span>EXAMPLE REQUESTS</span>
          <span aria-hidden="true">↗</span>
        </div>
        <div className="prompt-options" aria-label="Choose a prompt example">
          {samples.map((sample, i) => (
            <button
              type="button"
              key={sample.label}
              aria-pressed={selected === i}
              className={selected === i ? "selected" : ""}
              onClick={() => {
                setSelected(i);
                setCopied(false);
                setError(false);
              }}
            >
              {sample.label}
            </button>
          ))}
        </div>
        <p className="prompt-text" ref={codeRef}>
          {samples[selected].prompt}
        </p>
        <div className="prompt-actions">
          <span>
            Make it yours.
            <br />
            Paste it into your AI tool.
          </span>
          <button className="button button-dark" onClick={copy} type="button">
            {copied ? <Check size={17} /> : <Copy size={17} />}{" "}
            {copied ? "Copied" : "Copy prompt"}
          </button>
        </div>
        <span className="sr-only" role="status">
          {copied
            ? "Prompt copied to clipboard."
            : error
              ? "Copy unavailable. The prompt is selected so you can copy it manually."
              : ""}
        </span>
        {error && (
          <p className="copy-error">
            The prompt is selected. Use your device’s Copy command.
          </p>
        )}
        <p className="local-note">
          Example requests only. This page isn’t connected to an AI service.
        </p>
      </div>
    </div>
  );
}
