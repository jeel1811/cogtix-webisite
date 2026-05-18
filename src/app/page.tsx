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
