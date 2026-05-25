import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { I18nProvider } from "@/i18n/provider";
import {
  DEFAULT_OG_IMAGE,
  PRIMARY_EMAIL,
  PRIMARY_PHONE_DISPLAY,
  SITE_NAME,
  SITE_TAGLINE,
  SITE_URL,
  TWITTER_HANDLE,
  buildLocalBusinessJsonLd,
  buildOrganizationJsonLd,
} from "@/lib/seo";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  applicationName: SITE_NAME,
  title: {
    default: `${SITE_TAGLINE} | ${SITE_NAME}`,
    template: `%s | ${SITE_NAME}`,
  },
  description:
    "Cogtix Solutions is a product engineering partner for custom software, cloud transformation, AI/ML, data, and Microsoft technology programs across the USA, UK, India, and Australia.",
  authors: [{ name: SITE_NAME, url: SITE_URL }],
  creator: SITE_NAME,
  publisher: SITE_NAME,
  generator: "Next.js",
  category: "technology",
  alternates: {
    canonical: SITE_URL,
  },
  icons: {
    icon: "/favicon.svg",
    apple: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
  openGraph: {
    title: `${SITE_TAGLINE} | ${SITE_NAME}`,
    description:
      "Cogtix Solutions delivers product engineering, cloud transformation, AI/ML, and data services for businesses in the USA, UK, India, and Australia.",
    url: SITE_URL,
    siteName: SITE_NAME,
    type: "website",
    locale: "en_US",
    images: [
      {
        url: DEFAULT_OG_IMAGE,
        width: 1200,
        height: 630,
        alt: `${SITE_NAME} - ${SITE_TAGLINE}`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: TWITTER_HANDLE,
    creator: TWITTER_HANDLE,
    title: `${SITE_TAGLINE} | ${SITE_NAME}`,
    description:
      "Custom software, cloud, AI/ML, data, and Microsoft technology services from Cogtix Solutions.",
    images: [DEFAULT_OG_IMAGE],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  other: {
    "contact:phone_number": PRIMARY_PHONE_DISPLAY,
    "contact:email": PRIMARY_EMAIL,
    "business:contact_data:phone_number": PRIMARY_PHONE_DISPLAY,
    "business:contact_data:email": PRIMARY_EMAIL,
    "business:contact_data:country_name": "India",
    "business:contact_data:locality": "Ahmedabad",
    "business:contact_data:region": "Gujarat",
    "geo.region": "IN-GJ",
    "geo.placename": "Ahmedabad",
    "geo.position": "23.0395;72.4796",
    ICBM: "23.0395, 72.4796",
  },
};

import NextTopLoader from "nextjs-toploader";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const organizationJsonLd = buildOrganizationJsonLd();
  const localBusinessJsonLd = buildLocalBusinessJsonLd();

  return (
    <html lang="en" className={inter.variable} suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationJsonLd),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(localBusinessJsonLd),
          }}
        />
      </head>
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
