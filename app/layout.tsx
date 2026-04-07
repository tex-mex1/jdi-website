import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "JDI Energy Partners | Institutional Energy Investments",
  description:
    "JDI Energy Partners delivers institutional-grade returns through strategic energy sector investments. AUM $2.4B+, 18.7% annual returns.",
  keywords: [
    "energy investment",
    "private equity",
    "energy fund",
    "institutional investment",
    "renewable energy",
    "infrastructure",
  ],
  openGraph: {
    title: "JDI Energy Partners | Institutional Energy Investments",
    description:
      "Delivering institutional-grade returns through strategic energy sector investments.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-[#0A0E1A] text-gray-100">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
