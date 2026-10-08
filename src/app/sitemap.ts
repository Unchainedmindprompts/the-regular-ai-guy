import type { MetadataRoute } from "next";
import { site } from "@/content/site";
import { guides } from "@/content/guides";
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    "",
    "/start-here",
    "/explore",
    "/about",
    "/privacy",
    ...guides.map((g) => `/guides/${g.slug}`),
  ].map((path) => ({ url: `${site.url}${path}` }));
}
