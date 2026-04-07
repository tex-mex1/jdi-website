import type { Metadata } from "next";
import { Poppins, EB_Garamond } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

const ebGaramond = EB_Garamond({
  variable: "--font-eb-garamond",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "JDI Energy Partners | Non-Operated Oil & Gas Income Fund",
  description:
    "JDI Energy Partners deploys capital behind established operators across five proven U.S. basins. Quarterly cash distributions, substantial tax offsets, and meaningful upside from established reserves.",
  keywords: [
    "oil and gas investment",
    "non-operated working interest",
    "energy income fund",
    "accredited investor",
    "tax advantaged investment",
    "Permian basin",
    "Anadarko basin",
  ],
  openGraph: {
    title: "JDI Energy Partners | Non-Operated Oil & Gas Income Fund",
    description:
      "Deploying capital behind institutional-grade operators across five proven U.S. basins.",
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
      className={`${poppins.variable} ${ebGaramond.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-[#0A0E1A] text-gray-100 font-[family-name:var(--font-eb-garamond)]">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
