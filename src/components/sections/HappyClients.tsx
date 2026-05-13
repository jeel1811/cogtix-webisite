"use client";

import Container from "@/components/ui/Container";
import { useI18n } from "@/i18n/provider";
import Image from "next/image";

const CLIENT_LOGOS = [
  { name: "Microsoft", logo: "/clients/microsoft.svg" },
  { name: "Indeed", logo: "/clients/indeed.svg" },
  { name: "Upwork", logo: "/clients/upwork.svg" },
  { name: "Pantheon", logo: "/clients/pantheon.svg" },
  { name: "Sulekha", logo: "/clients/sulekha.svg" },
  { name: "Inductotherm", logo: "/clients/inductotherm-group.svg" },
  { name: "Amiraj", logo: "/clients/Amiraj-Logo.webp" },
  { name: "Backbase", logo: "/clients/backbase.webp" },
  { name: "Beekeeper", logo: "/clients/beekeeper.webp" },
  { name: "Cattle Food", logo: "/clients/cattle-food.webp" },
  { name: "Emerson", logo: "/clients/emerson.webp" },
  { name: "Lancesoft", logo: "/clients/lancesoft.webp" },
  { name: "PreScouter", logo: "/clients/prescouter.webp" },
  { name: "Provident Bank", logo: "/clients/provident-bank.webp" },
  { name: "Semid Plast", logo: "/clients/semid-plast.webp" },
  { name: "SS Surveyors", logo: "/clients/ss-surveyors.webp" },
  { name: "Total Wine", logo: "/clients/total-wine.webp" },
];

function LogoItem({ name, logo }: { name: string; logo: string }) {
  return (
    <div className="flex items-center justify-center px-10 py-4 transition-all duration-500 group">
      <div className="relative h-10 w-36">
        <Image
          src={logo}
          alt={`${name} logo`}
          fill
          className="object-contain transition-transform duration-300 group-hover:scale-110"
        />
      </div>
    </div>
  );
}

export default function HappyClients() {
  const { m } = useI18n();

  // For a seamless infinite loop, we need at least 2 sets. 
  // I will use 2 sets and significantly slow down the animation speed as requested.
  const repeatedLogos = [...CLIENT_LOGOS, ...CLIENT_LOGOS];

  return (
    <section className="py-14 bg-gray-50/50 border-y border-gray-100 overflow-hidden">
      <Container className="mb-10">
        <p className="text-center text-sm font-bold text-gray-400 uppercase tracking-[0.3rem]">
          {m.clients.trustedBy}
        </p>
      </Container>
      
      <div className="relative overflow-hidden">
        {/* Gradients for smooth fade edges */}
        <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-gray-50/50 to-transparent z-10" />
        <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-gray-50/50 to-transparent z-10" />
        
        {/* Slowed down marquee (80 seconds for a full cycle) */}
        <div 
          className="flex w-max animate-marquee" 
          style={{ animationDuration: '80s' }}
        >
          {repeatedLogos.map((client, i) => (
            <LogoItem key={`${client.name}-${i}`} name={client.name} logo={client.logo} />
          ))}
        </div>
      </div>
    </section>
  );
}
