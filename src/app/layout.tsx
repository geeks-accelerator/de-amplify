import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
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

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${GeistSans.variable} ${GeistMono.variable}`}
    >
      <body className="min-h-screen bg-void font-sans text-bone antialiased">
        {children}
      </body>
    </html>
  );
}
