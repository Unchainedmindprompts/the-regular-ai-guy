import { site } from "@/content/site";
export function StructuredData() {
  const data = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        "@id": `${site.url}/#website`,
        url: site.url,
        name: site.name,
        description: site.description,
        inLanguage: "en-US",
        about: { "@id": `${site.url}/#podcast` },
      },
      {
        "@type": "PodcastSeries",
        "@id": `${site.url}/#podcast`,
        name: site.name,
        url: site.url,
        description:
          "An upcoming practical AI podcast with Mark Abplanalp about using AI at work, at home, and in everyday life.",
        inLanguage: "en-US",
        image: `${site.url}/images/regular-ai-guy-logo.webp`,
        creator: { "@id": `${site.url}/#mark` },
      },
      {
        "@type": "Person",
        "@id": `${site.url}/#mark`,
        name: site.host,
        url: `${site.url}/about`,
        description:
          "Host of The Regular AI Guy. Mark runs Luxe Window Works, installs shades, and uses AI to build websites and explore practical tools.",
      },
    ],
  };
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(data).replace(/</g, "\\u003c"),
      }}
    />
  );
}
