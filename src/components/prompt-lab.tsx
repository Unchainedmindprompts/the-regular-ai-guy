"use client";
import { useRef, useState } from "react";
import { Check, Copy, ArrowUpRight } from "lucide-react";
import Link from "next/link";
const samples = [
  {
    label: "At work",
    prompt:
      "Help me turn these rough job notes into a clear customer update. Use a friendly, direct tone. Keep it under 100 words. Don’t invent dates, prices, or promises. If a detail is missing, ask me.\n\nMy notes: [add a non-sensitive example here]",
  },
  {
    label: "At home",
    prompt:
      "Help me make a realistic weekend project checklist for [describe a simple project]. I have [time available] and [supplies I already own]. Break it into small steps and flag anything that needs an expert. Ask me up to three questions before making the plan.",
  },
  {
    label: "Something new",
    prompt:
      "Explain [a topic I want to understand] in everyday language. Start with the basic idea, give me one concrete example, and explain any unfamiliar terms. Tell me where your answer may be uncertain and what I should verify.",
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
        <span className="eyebrow">A SMALL PLACE TO START</span>
        <h2>
          You don’t need to know how to build the solution, just ask the right
          questions.
        </h2>
        <p>
          You don’t need the perfect prompt. Start with a real task, add a few
          details, and keep the final say.
        </p>
        <Link className="text-link" href="/guides/first-useful-prompt">
          The guide to your first useful prompt <ArrowUpRight size={19} />
        </Link>
        <div className="prompt-reminder">
          <span>THE REGULAR REMINDER</span>
          <p>
            Leave private details out.
            <br />
            Check the answer before you use it.
          </p>
        </div>
      </div>
      <div className="prompt-paper">
        <div className="prompt-paper-header">
          <span>YOUR FIRST EXPERIMENT</span>
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
            Fill in the brackets.
            <br />
            Paste into your AI tool of choice.
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
          Just a template. Nothing you do here is sent to an AI.
        </p>
      </div>
    </div>
  );
}
