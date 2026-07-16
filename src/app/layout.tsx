import type { Metadata, Viewport } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import JsonLd from "@/components/JsonLd";
import "./globals.css";

const SITE_URL = "https://de-amplify.com";
const TITLE = "de-amplify: the thing it broke was the brake";
const DESCRIPTION =
  "They sued the feed for addicting kids. Now find the brake on your own: open your feed, try to make it stop, watch the off-switch do nothing. Screenshot it. #WheresTheBrake. The receipts and the fix (de-amplify, don't censor) are one click in.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: TITLE,
  description: DESCRIPTION,
  keywords: [
    "find the brake",
    "where's the brake",
    "social media addiction",
    "doomscrolling",
    "engagement algorithm",
    "de-amplify",
    "content-neutral",
    "minors",
    "parental controls",
    "wedge amplification",
    "platform design regulation",
  ],
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: SITE_URL,
    siteName: "de-amplify.com",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESCRIPTION,
  },
  robots: { index: true, follow: true },
};

// mobile browser chrome (iOS URL bar, Android status bar) matches the void
export const viewport: Viewport = {
  themeColor: "#070709",
  colorScheme: "dark",
};

const SITE_JSON_LD = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": `${SITE_URL}/#org`,
      name: "de-amplify.com",
      url: SITE_URL,
      sameAs: ["https://github.com/geeks-accelerator/de-amplify"],
    },
    {
      "@type": "WebSite",
      "@id": `${SITE_URL}/#website`,
      name: TITLE,
      description: DESCRIPTION,
      url: SITE_URL,
      publisher: { "@id": `${SITE_URL}/#org` },
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${GeistSans.variable} ${GeistMono.variable}`}
    >
      <body className="min-h-screen bg-void font-sans text-bone antialiased">
        <JsonLd data={SITE_JSON_LD} />
        {children}
      </body>
    </html>
  );
}
