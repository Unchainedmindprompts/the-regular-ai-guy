import type { Metadata } from "next";
import "@fontsource-variable/dm-sans";
import "@fontsource-variable/manrope";
import "./globals.css";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { site } from "@/content/site";
export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: "The Regular AI Guy | AI for Work, Home & Everyday Life",
    template: "%s | The Regular AI Guy",
  },
  description: site.description,
  openGraph: {
    type: "website",
    siteName: site.name,
    title: site.name,
    description: site.description,
    url: site.url,
    images: [
      {
        url: "/images/social-cover.jpg",
        width: 1200,
        height: 630,
        type: "image/jpeg",
        alt: "The Regular AI Guy with Mark Abplanalp. AI for work, home, and everything in between.",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: site.name,
    description: site.description,
    images: ["/images/social-cover.jpg"],
  },
  robots:
    process.env.VERCEL_ENV === "production"
      ? { index: true, follow: true }
      : { index: false, follow: false },
};
export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>
        <a className="skip-link" href="#main-content">
          Skip to content
        </a>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
