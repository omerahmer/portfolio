import type { Metadata } from "next";
import {
  Bricolage_Grotesque,
  Hanken_Grotesk,
  JetBrains_Mono,
} from "next/font/google";
import "./globals.css";

const hankenGrotesk = Hanken_Grotesk({ variable: "--font-sans", subsets: ["latin"], display: "swap" });
const jetBrainsMono = JetBrains_Mono({ variable: "--font-mono", subsets: ["latin"], display: "swap" });
const bricolageGrotesque = Bricolage_Grotesque({ variable: "--font-nav", subsets: ["latin"], display: "swap" });

export const metadata: Metadata = {
  title: "Syed Omer Ahmer — Software Engineer",
  description: "Portfolio of Syed Omer Ahmer, a software engineer focused on full-stack systems, security, performance, and DevOps.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={`${hankenGrotesk.variable} ${jetBrainsMono.variable} ${bricolageGrotesque.variable}`}>{children}</body>
    </html>
  );
}
