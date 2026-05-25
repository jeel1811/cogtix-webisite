import type { Metadata } from "next";
import Hero from "@/components/sections/Hero";
import HappyClients from "@/components/sections/HappyClients";
import AboutUs from "@/components/sections/AboutUs";
import ContactForm from "@/components/sections/ContactForm";
import Awards from "@/components/sections/Awards";
import ClutchWidget from "@/components/sections/ClutchWidget";
import Offices from "@/components/sections/Offices";
import WhyChooseUs from "@/components/sections/WhyChooseUs";
import Testimonials from "@/components/sections/Testimonials";
import EngineeringServices from "@/components/sections/EngineeringServices";
import WhoWeWorkWith from "@/components/sections/WhoWeWorkWith";
import HomeCaseStudiesSection from "@/components/sections/HomeCaseStudiesSection";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  // Page-level title is left short on purpose so the root layout template
  // can append " | Cogtix" and still land inside Google's 60 char window.
  title: "Custom Software, Cloud & AI Engineering Partner",
  description:
    "Cogtix Solutions builds custom software, cloud platforms, AI/ML systems, and data products for global teams. Get an engineering partner that ships.",
  path: "/",
  keywords: [
    "custom software development company",
    "cloud transformation services",
    "AI ML development company",
    "data engineering services",
    "Microsoft technology partner",
    "product engineering company",
    "software development USA",
    "software development India",
    "Cogtix Solutions",
    "dedicated development team",
    "offshore software development",
  ],
});

export default function Home() {
  return (
    <>
      <Hero />
      <HappyClients />
      <AboutUs />
      <WhoWeWorkWith />
      <EngineeringServices />
      <WhyChooseUs />
      <HomeCaseStudiesSection />
      <Awards />
      <Testimonials />
      <ClutchWidget />
      <ContactForm />
      <Offices />
    </>
  );
}
