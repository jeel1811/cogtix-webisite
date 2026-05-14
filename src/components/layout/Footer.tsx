"use client";

import Link from "next/link";
import Image from "next/image";
import {
  SiX,
  SiFacebook,
  SiInstagram,
} from "@icons-pack/react-simple-icons";
import {
  Mail,
  Phone,
  // MessageCircle,
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
];

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
      { label: m.footer.contactUsLink, href: "/contact-us" },
    ],
    [m.footer.engineering]: [
      { label: m.footer.aiEngineering, href: "/services/gen-ai-ml-development" },
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
            </ul>
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
