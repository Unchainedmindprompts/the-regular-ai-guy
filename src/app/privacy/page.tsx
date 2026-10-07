import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "Privacy",
  description: "How this preview website handles information.",
  alternates: { canonical: "/privacy" },
};
export default function Privacy() {
  return (
    <main id="main-content" className="container">
      <div className="plain-page prose">
        <span className="eyebrow">PLAIN-LANGUAGE SITE NOTE</span>
        <h1>Privacy</h1>
        <section>
          <h2>A simple site, with a few useful tools.</h2>
          <p>
            This version of The Regular AI Guy is a podcast website preview. It
            has no accounts, email signup form, advertising trackers, embedded
            podcast players, or AI chat connection.
          </p>
          <p>
            The topic filters and prompt examples run in your browser. Clicking
            “Copy prompt” copies the displayed text to your device’s clipboard.
            It does not send the prompt to an AI service.
          </p>
        </section>
        <section>
          <h2>Hosting and outside links</h2>
          <p>
            The site is hosted on Vercel. Like other hosting providers, it may
            process technical request information such as IP addresses, browser
            details, and requested pages to operate and secure the service. See{" "}
            <a
              href="https://vercel.com/legal/privacy-policy"
              target="_blank"
              rel="noopener noreferrer"
            >
              Vercel’s privacy policy (opens in a new tab)
            </a>{" "}
            for its practices.
          </p>
          <p>
            The reading guides link to external resources. When you open one,
            that website’s own privacy practices apply.
          </p>
        </section>
        <section>
          <h2>Keep personal information out of experiments.</h2>
          <p>
            Before pasting a prompt into an AI service, check that service’s
            privacy settings and remove private customer details, account
            information, and anything you don’t have permission to share.
          </p>
          <p>
            This note describes the current site. It should be reviewed before
            adding accounts, analytics, newsletters, or other data collection.
          </p>
        </section>
      </div>
    </main>
  );
}
