import type { Metadata } from "next";
import { Fraunces, Geist_Mono, Outfit } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
});

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "David Desing",
    template: "%s · David Desing",
  },
  description:
    "Computer science student at UW–Green Bay. I build web tools for games, communities, and curiosity.",
  metadataBase: new URL("https://daviddesing.website"),
  openGraph: {
    title: "David Desing",
    description:
      "Computer science student at UW–Green Bay. I build web tools for games, communities, and curiosity.",
    type: "website",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${outfit.variable} ${fraunces.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full bg-sky-50 font-sans text-slate-900">
        {children}
      </body>
    </html>
  );
}
