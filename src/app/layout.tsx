import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import "./globals.css";

const SITE_URL = "https://ibroketheminors.com";
const TITLE = "I Broke the Minors: The Thing It Broke Was the Brake";
const DESCRIPTION =
  "Engagement feeds are being sued for addicting kids. The fix isn't to censor content. It's to give the brake back. A design-and-parental-controls proposal: de-amplify, don't censor.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: TITLE,
  description: DESCRIPTION,
  keywords: [
    "social media addiction",
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
    siteName: "ibroketheminors.com",
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
