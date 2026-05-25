"use client";

import Link from "next/link";
import Image from "next/image";
import Script from "next/script";
import {
  SiX,
  SiFacebook,
  SiInstagram,
  SiDribbble,
  SiBehance,
} from "@icons-pack/react-simple-icons";
import {
  Mail,
  Phone,
  MessageCircle,
  ArrowUpRight,
} from "lucide-react";
import Container from "@/components/ui/Container";
import { CONTACT_INFO, SOCIAL_LINKS } from "@/lib/constants";
import { useI18n } from "@/i18n/provider";

/* LinkedIn SVG :  not available in @icons-pack/react-simple-icons */
function LinkedInIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" width="16" height="16">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}

const socialIcons = [
  {
    icon: <LinkedInIcon className="w-4 h-4" />,
    href: SOCIAL_LINKS.linkedin,
    label: "LinkedIn",
  },
  {
    icon: <SiX size={14} color="currentColor" />,
    href: SOCIAL_LINKS.twitter,
    label: "X (Twitter)",
  },
  {
    icon: <SiFacebook size={14} color="currentColor" />,
    href: SOCIAL_LINKS.facebook,
    label: "Facebook",
  },
  {
    icon: <SiInstagram size={14} color="currentColor" />,
    href: SOCIAL_LINKS.instagram,
    label: "Instagram",
  },
  {
    icon: <SiDribbble size={14} color="currentColor" />,
    href: SOCIAL_LINKS.dribble,
    label: "Dribbble",
  },
  {
    icon: <SiBehance size={14} color="currentColor" />,
    href: SOCIAL_LINKS.behance,
    label: "Behance",
  },
];

function DmcaBadge({ className }: { className?: string }) {
  return (
    <svg 
      className={className} 
      viewBox="0 0 200 40" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Background with subtle border */}
      <rect x="0.5" y="0.5" width="199" height="39" rx="1.5" stroke="currentColor" strokeOpacity="0.2" />
      <path d="M0 2C0 0.895431 0.895431 0 2 0H75V40H2C0.89543 40 0 39.1046 0 38V2Z" fill="currentColor" fillOpacity="0.1" />
      
      {/* Middle Lock Icon */}
      <circle cx="75" cy="20" r="12" fill="white" />
      <path 
        d="M75 14.5C73.6193 14.5 72.5 15.6193 72.5 17V19H71.5V25.5H78.5V19H77.5V17C77.5 15.6193 76.3807 14.5 75 14.5ZM73.5 19V17C73.5 16.1716 74.1716 15.5 75 15.5C75.8284 15.5 76.5 16.1716 76.5 17V19H73.5Z" 
        fill="#76C038" 
      />
      
      {/* Text Elements */}
      <text 
        x="37.5" 
        y="25" 
        textAnchor="middle" 
        fill="currentColor" 
        style={{ font: "bold 15px Arial, sans-serif" }}
      >
        DMCA
      </text>
      <text 
        x="137.5" 
        y="25" 
        textAnchor="middle" 
        fill="currentColor" 
        style={{ font: "bold 13px Arial, sans-serif", letterSpacing: "0.5px" }}
      >
        PROTECTED
      </text>
    </svg>
  );
}

import { InFlag, UsFlag, UkFlag } from "@/components/icons/flags";

export default function Footer() {
  const { m } = useI18n();

  const footerLinks = {
    [m.footer.company]: [
      { label: m.footer.home, href: "/" },
      { label: m.footer.aboutUs, href: "/about-us" },
      { label: m.footer.caseStudies, href: "/case-studies" },
      { label: m.footer.blog, href: "/blogs" },
      { label: m.footer.careers, href: "/careers" },
      { label: m.nav.hireTalent, href: "/hire-talent" },
      { label: m.footer.contactUsLink, href: "/contact-us" },
    ],
    [m.footer.engineering]: [
      { label: m.footer.aiEngineering, href: "/services/ai-ml-development" },
      { label: m.footer.cloudDevOpsEngineering, href: "/services/cloud-devops-engineering" },
      { label: m.footer.dataEngineering, href: "/services/data-engineering" },
      { label: m.footer.experienceEngineering, href: "/services/digital-experience-engineering" },
      { label: m.footer.enterpriseServices, href: "/services/enterprise-solutions" },
      { label: "Microsoft Technologies", href: "/services/microsoft-technologies" },
    ],
  };

  return (
    <footer className="bg-navy-900 text-white pt-12 pb-6">
      <Container>
        {/* Main Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 pb-12 border-b border-white/10 items-start">
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center gap-2 mb-8 -mt-2">
              <Image
                src="/cogtix.svg"
                alt="Cogtix Solutions"
                width={120}
                height={32}
                className="brightness-0 invert"
                style={{ height: "32px", width: "auto" }}
              />
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed mb-6 max-w-xs">
              {m.footer.description}
            </p>
            
            {/* Social Icons */}
            <div className="flex items-center gap-3">
              {socialIcons.map(({ icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="w-9 h-9 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:text-white hover:bg-blue-500/20 hover:border-blue-500/30 transition-all duration-300"
                >
                  {icon}
                </a>
              ))}
            </div>
          </div>
          
          {/* Engineering Column */}
          <div className="lg:col-span-1">
            <h4 className="text-white font-semibold text-sm uppercase tracking-wider mb-6">
              {m.footer.engineering}
            </h4>
            <ul className="space-y-3">
              {footerLinks[m.footer.engineering].map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-gray-400 text-sm hover:text-white transition-colors duration-200 inline-flex items-center gap-1 group"
                  >
                    {link.label}
                    <ArrowUpRight className="w-3 h-3 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-200" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Column */}
          <div className="lg:col-span-1">
            <h4 className="text-white font-semibold text-sm uppercase tracking-wider mb-6">
              {m.footer.company}
            </h4>
            <ul className="space-y-3">
              {footerLinks[m.footer.company].map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-gray-400 text-sm hover:text-white transition-colors duration-200 inline-flex items-center gap-1 group"
                  >
                    {link.label}
                    <ArrowUpRight className="w-3 h-3 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-200" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          

          {/* Contact Column */}
          <div>
            <h4 className="text-white font-semibold text-sm uppercase tracking-wider mb-6">
              {m.footer.contactUs}
            </h4>
            <ul className="space-y-4">
              <li>
                <a
                  href={`mailto:${CONTACT_INFO.email}`}
                  className="flex items-center gap-4 text-gray-400 text-sm hover:text-white transition-colors group"
                >
                  <span className="w-9 h-9 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-blue-500/20 transition-colors shrink-0">
                    <Mail className="w-4 h-4" />
                  </span>
                  <span className="font-medium">{CONTACT_INFO.email}</span>
                </a>
              </li>
              {CONTACT_INFO.phones.map((phone) => {
                const Flag = phone.label === "India" ? InFlag : 
                             phone.label === "USA" ? UsFlag : 
                             phone.label === "UK" ? UkFlag : null;
                return (
                  <li key={phone.label}>
                    <a
                      href={`tel:${phone.number}`}
                      className="flex items-center gap-4 text-gray-400 text-sm hover:text-white transition-colors group"
                    >
                      <span className="w-9 h-9 rounded-full flex items-center justify-center shrink-0 overflow-hidden">
                        {Flag ? (
                          <div className="scale-[0.6]">
                            <Flag />
                          </div>
                        ) : (
                          <Phone className="w-4 h-4" />
                        )}
                      </span>
                      <div className="flex flex-col justify-center">
                        <span className="text-gray-500 text-[0.625rem] font-bold uppercase tracking-wider leading-none mb-1">
                          {phone.label}
                        </span>
                        <span className="text-sm font-medium leading-none">
                          {phone.number}
                        </span>
                      </div>
                    </a>
                  </li>
                );
              })}
              <li>
                <a
                  href={CONTACT_INFO.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 text-gray-400 text-sm hover:text-white transition-colors group"
                >
                  <span className="w-9 h-9 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-blue-500/20 transition-colors shrink-0">
                    <MessageCircle className="w-4 h-4" />
                  </span>
                  <span className="font-medium">Chat with us</span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Company Logos section */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 py-8 border-b border-white/10">
          <div className="flex flex-wrap items-center justify-center md:justify-start gap-6 lg:gap-10">
            <a
              target="_blank"
              href="https://www.dmca.com/r/1z3pw89"
              title="DMCA.com Protection Status"
              className="dmca-badge transition-opacity hover:opacity-80"
              rel="noopener noreferrer"
            >
              <DmcaBadge className="h-6 w-auto text-gray-400 opacity-70 hover:opacity-100 transition-opacity" />
            </a>
            <Script
              src="https://images.dmca.com/Badges/DMCABadgeHelper.min.js"
              strategy="lazyOnload"
            />
            
            <a
              href="https://www.goodfirms.co/company/cogtix-solutions"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-opacity hover:opacity-80"
            >
              <Image
                src="/good-firms.svg"
                alt="goodFirms"
                width={120}
                height={20}
                className="h-5 w-auto brightness-0 invert opacity-60 hover:opacity-100 transition-opacity"
              />
            </a>
            
            <a
              href="https://clutch.co/profile/cogtix-solutions#highlights"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-opacity hover:opacity-80"
            >
              <Image
                src="/clutch.svg"
                alt="Clutch"
                width={80}
                height={24}
                className="h-6 w-auto brightness-0 invert opacity-60 hover:opacity-100 transition-opacity"
              />
            </a>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-8">
          <p className="text-gray-500 text-sm">
            © <span suppressHydrationWarning>{new Date().getFullYear()}</span> {m.footer.rightsReserved} {m.footer.designedBy}{" "}
            <Link
              href="/"
              className="text-gray-400 hover:text-white transition-colors"
            >
              Cogtix Solutions
            </Link>
          </p>
          <div className="flex items-center gap-6">
            <Link
              href="/privacy-policy"
              className="text-gray-500 text-sm hover:text-white transition-colors"
            >
              {m.footer.privacyPolicy}
            </Link>
          </div>
        </div>
      </Container>
    </footer>
  );
}
