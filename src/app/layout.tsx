import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: "INDIARK ENTERTAINMENTS | Media Rights & Content Representation",
  description: "Connecting Great Content with the Right Opportunities. Media Rights Representation, OTT Pitching, and Entertainment Business Agency for Producers, Platforms & Buyers.",
  keywords: [
    "Indiark Entertainments",
    "Media Rights Representation",
    "OTT Pitching",
    "Content Representation",
    "Film Syndication",
    "Entertainment Business Agency",
    "Digital Rights Licensing",
    "Satellite Rights",
    "Indian Film Distribution"
  ],
  authors: [{ name: "Indiark Entertainments" }],
  creator: "Indiark Entertainments",
  publisher: "Indiark Entertainments",
  metadataBase: new URL("https://indiarkentertainments.com"),
  openGraph: {
    title: "INDIARK ENTERTAINMENTS | Media Rights & Content Representation",
    description: "Connecting Great Content with the Right Opportunities. Media Rights, OTT Distribution, Film Syndication & Entertainment Business.",
    type: "website",
    locale: "en_US",
    siteName: "Indiark Entertainments",
  },
  twitter: {
    card: "summary_large_image",
    title: "INDIARK ENTERTAINMENTS | Media Rights Representation",
    description: "Connecting Great Content with the Right Opportunities.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <body className="min-h-screen flex flex-col bg-[#090B0D] text-[#F8F9FA] antialiased selection:bg-[#F5DE88] selection:text-[#090B0D]">
        <Navbar />
        <main className="flex-1 w-full">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
