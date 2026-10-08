import { site } from "@/content/site";
export function StructuredData({ podcast = false }: { podcast?: boolean }) {
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
        creator: { "@id": `${site.url}/#mark` },
      },
      {
        "@type": "Person",
        "@id": `${site.url}/#mark`,
        name: site.host,
        url: `${site.url}/about`,
        description:
          "Mark runs Luxe Window Works, has worked in window treatments since 2002, and is self-taught in AI and website building.",
      },
      ...(podcast
        ? [
            {
              "@type": "PodcastSeries",
              "@id": `${site.url}/#podcast`,
              name: site.name,
              url: `${site.url}/explore`,
              description:
                "An upcoming practical AI podcast with Mark Abplanalp.",
              image: `${site.url}/images/regular-ai-guy-logo.webp`,
              creator: { "@id": `${site.url}/#mark` },
            },
          ]
        : [
            {
              "@type": "Service",
              name: "Websites for service businesses",
              serviceType: "Website design and development",
              url: site.url,
              provider: { "@id": `${site.url}/#mark` },
              description:
                "Website design, clear business content, and practical AI guidance for service-business owners.",
            },
          ]),
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
