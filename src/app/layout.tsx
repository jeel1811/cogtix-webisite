import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { I18nProvider } from "@/i18n/provider";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Product Development & Cloud Transformation Solutions",
  description:
    "Expert software development for businesses in the USA and India. Cogtix Solutions offers custom software, mobile, and cloud development services. Get a free quote today!",
  keywords: [
    "custom software development",
    "mobile app development",
    "cloud solutions",
    "software company",
    "Cogtix",
    "web development",
    "USA",
    "India",
  ],
  authors: [{ name: "Cogtix Solutions" }],
  icons: {
    icon: "/favicon.svg",
    apple: "/favicon.svg",
  },
  openGraph: {
    title: " Product Development & Cloud Transformation Solutions",
    description:
      "Expert software development for businesses in the USA and India. Get a free quote from Cogtix Solutions.",
    url: "https://www.cogtix.com",
    siteName: "Cogtix Solutions",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: " Product Development & Cloud Transformation Solutions",
    description:
      "Expert software development for businesses in the USA and India.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

import NextTopLoader from 'nextjs-toploader';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable} suppressHydrationWarning>
      <body className="font-sans antialiased">
        <NextTopLoader color="#0EA5E9" showSpinner={false} />
        <I18nProvider>
          <Navbar />
          <main>{children}</main>
          <Footer />
        </I18nProvider>
      </body>
    </html>
  );
}
