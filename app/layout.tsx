import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Playfair_Display, Caveat } from "next/font/google";

export const caveat = Caveat({
  subsets: ["latin"],
  weight: ["400"],
});


const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "If I lived there",
  description: "Travel diary in Next.js",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="de">
      <body className={inter.variable}>{children}</body>
    </html>
  );
}
