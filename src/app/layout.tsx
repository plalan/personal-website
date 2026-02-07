import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Lalan Prasad | Cybersecurity Leader & Sales Engineer",
  description:
    "Principal Sales Engineer at Cohesity with 20+ years in cybersecurity. Helping enterprises secure their data with AI across hybrid and multi-cloud environments.",
  keywords: [
    "cybersecurity",
    "sales engineer",
    "data security",
    "AI",
    "zero trust",
    "Cohesity",
  ],
  openGraph: {
    title: "Lalan Prasad | Cybersecurity Leader",
    description:
      "20+ years helping enterprises secure their data with AI-driven solutions.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
