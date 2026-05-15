"use client";

import {
  Fragment,
  useState,
  useEffect,
  useRef,
  useCallback,
  useMemo,
} from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import {
  ChevronDown,
  ChevronRight,
  ArrowRight,
  Phone,
  Mail,
  MapPin,
} from "lucide-react";
import Button from "@/components/ui/Button";
import { NAV_ITEMS, CONTACT_INFO, type NavItem } from "@/lib/constants";
import { useI18n } from "@/i18n/provider";
import { type Locale, LOCALE_LABELS } from "@/i18n/config";
import {
  EnFlag,
  EsFlag,
  FrFlag,
  DeFlag,
  NlFlag,
  ItFlag,
} from "@/components/icons/flags";

function CountryFlag({ locale }: { locale: Locale }) {
  switch (locale) {
    case "en":
      return <EnFlag />;
    case "es":
      return <EsFlag />;
    case "fr":
      return <FrFlag />;
    case "de":
      return <DeFlag />;
    case "nl":
      return <NlFlag />;
    case "it":
      return <ItFlag />;
    default:
      return <EnFlag />;
  }
}

function localizeNavLabel(
  label: string,
  localeText: ReturnType<typeof useI18n>["m"],
) {
  switch (label) {
    case "Company":
      return localeText.nav.company;
    case "Services":
      return localeText.nav.services;
    case "Engineering":
      return localeText.nav.engineering;
    case "Industries":
      return localeText.nav.industries;
    case "Partners":
      return localeText.nav.partners;
    case "Insights":
      return localeText.nav.insights;
    case "Careers":
      return localeText.nav.careers;
    default:
      return label;
  }
}

function localizeNavChildLabel(
  label: string,
  localeText: ReturnType<typeof useI18n>["m"],
) {
  switch (label) {
    case "About Us":
      return localeText.nav.aboutUs;
    case "Contact Us":
      return localeText.nav.contactUs;
    case "How We Work":
      return localeText.nav.howWeWork;
    case "AI":
      return localeText.nav.ai;
    case "Data & Analytics":
      return localeText.nav.dataAnalytics;
    case "Cloud":
      return localeText.nav.cloud;
    case "Microsoft Technologies":
      return localeText.nav.microsoftTechnologies;
    case "Experience Design":
      return localeText.nav.experienceDesign;
    case "CMS Development":
      return localeText.nav.cmsDevelopment;
    case "Digital Marketing":
      return localeText.nav.digitalMarketing;
    case "Quality Assurance":
      return localeText.nav.qualityAssurance;
    // Engineering dropdown - reuse the footer translations
    case "AI/ML Engineering":
      return localeText.footer.aiEngineering;
    case "Cloud & DevOps Engineering":
      return localeText.footer.cloudDevOpsEngineering;
    case "Data Engineering":
      return localeText.footer.dataEngineering;
    case "Digital Experience Engineering":
      return localeText.footer.experienceEngineering;
    case "Enterprise Services":
      return localeText.footer.enterpriseServices;
    case "Financial Services":
      return localeText.nav.financialServices || label;
    case "Healthcare and Life Sciences":
      return localeText.nav.healthcareLifeSciences || label;
    case "Retail and E-commerce":
      return localeText.nav.retailEcommerce || label;
    case "Supply Chain and Logistics":
      return localeText.nav.supplyChainLogistics || label;
    case "Hi-Tech and Digital Natives":
      return localeText.nav.hiTechDigitalNatives || label;
    case "Microsoft":
      return localeText.nav.microsoft;
    case "AWS":
      return localeText.nav.aws;
    case "Google Cloud":
      return localeText.nav.googleCloud;
    case "Case Studies":
      return localeText.nav.caseStudies;
    case "Blogs":
      return localeText.nav.blogs;
    default:
      return label;
  }
}

/* ──────────────────────────────────────────────────────────────────── */
/*  Mega Menu Panel                                                    */
/* ──────────────────────────────────────────────────────────────────── */
function MegaMenuPanel({
  item,
  onClose,
  onMouseEnter,
  isScrolled,
  localeText,
}: {
  item: NavItem;
  onClose: () => void;
  onMouseEnter: () => void;
  isScrolled: boolean;
  localeText: ReturnType<typeof useI18n>["m"];
}) {
  const [hoveredChild, setHoveredChild] = useState<string | null>(null);

  if (!item.children) return null;
  const childCount = item.children.length;
  const isTinyMenu = childCount <= 3;
  const isCompactMenu = childCount > 3 && childCount <= 6;
  const isMediumMenu = childCount > 6 && childCount <= 10;

  /* Split children into columns (balance columns). use 3 per column to reduce vertical wrapping */
  const perCol = 3;
  const cols: (typeof item.children)[] = [];
  for (let i = 0; i < item.children.length; i += perCol) {
    cols.push(item.children.slice(i, i + perCol));
  }

  const panelWidthClass = isTinyMenu
    ? "max-w-3xl px-4 sm:px-6"
    : isCompactMenu
      ? "max-w-[64rem] px-4 sm:px-6"
      : isMediumMenu
        ? "max-w-[80rem] px-4 sm:px-6"
        : isScrolled
          ? "max-w-7xl px-3 sm:px-5"
          : "max-w-8xl px-4 sm:px-6 lg:px-8";

  // Full width panel for expanded nested view.
  // Tiny menus (e.g. Company with only 3 items) get a tighter panel so the
  // left column does not balloon when a nested submenu (How We Work) opens.
  const expandedPanelClass = isTinyMenu
    ? "max-w-[66rem] px-4 sm:px-6"
    : isScrolled
      ? "max-w-[76rem] px-4 sm:px-6"
      : "max-w-[80rem] px-4 sm:px-6";

  const hoveredChildObj = hoveredChild
    ? item.children.find((c) => c.label === hoveredChild) ?? null
    : null;

  // Expand panel width only when nested child is hovered, so right side extends more
  const effectivePanelClass = hoveredChildObj && hoveredChildObj.children ? expandedPanelClass : panelWidthClass;

  // When a nested child is hovered, expand right column; otherwise use standard width.
  // For tiny menus, give the left column just enough room for its short labels
  // and let the right column (nested links + CTA) take the bulk of the width.
  const rightColSpanClass = hoveredChildObj && hoveredChildObj.children
    ? (isTinyMenu ? "flex-[0_0_68%] p-5" : isCompactMenu ? "flex-[0_0_41.67%] p-6" : "flex-[0_0_33.33%] p-6")
    : (isTinyMenu ? "col-span-6" : isCompactMenu ? "col-span-5" : "col-span-4");

  const leftColSpanClass = hoveredChildObj && hoveredChildObj.children
    ? (isTinyMenu ? "flex-[0_0_32%] p-6" : isCompactMenu ? "flex-[0_0_58.33%] p-8" : "flex-[0_0_66.67%] p-8")
    : (isTinyMenu ? "col-span-6 flex flex-col justify-center" : isCompactMenu ? "col-span-7" : "col-span-8");

  return (
    <div
      className="absolute left-0 right-0 top-full z-50"
      onMouseEnter={onMouseEnter}
      onMouseLeave={onClose}
    >
      {/* Invisible bridge so mouse can travel from trigger to panel */}
      <div className="h-2" />

      <div className={`mx-auto ${effectivePanelClass}`}>
        <div className="bg-white rounded-2xl border border-gray-200/60 shadow-2xl shadow-black/8 overflow-hidden animate-mega-open">
          <div className={`${hoveredChildObj && hoveredChildObj.children ? "flex" : "grid grid-cols-12"} divide-x divide-gray-100`}>
            {/* Links area */}
            <div
              className={`${leftColSpanClass} ${hoveredChildObj?.children ? "flex flex-col justify-center" : ""} ${!hoveredChildObj?.children && (isTinyMenu ? "p-6" : "p-8")}`}
            >
              <p className="text-[0.6875rem] font-semibold uppercase tracking-[0.15em] text-gray-400 mb-5">
                {item.label}
              </p>
              <div
                className={`grid ${
                  cols.length === 1
                    ? isTinyMenu
                      ? "grid-cols-1 max-w-56"
                      : "grid-cols-1 max-w-sm"
                    : cols.length === 2
                      ? "grid-cols-2"
                      : "grid-cols-3"
                } gap-x-12 gap-y-1`}
              >
                {cols.map((col, ci) => (
                  <div key={ci} className="space-y-1">
                    {col.map((child) => (
                      <div key={child.label} className="relative">
                        {child.children ? (
                          <div
                            className="group/parent"
                            onMouseEnter={() => setHoveredChild(child.label)}
                          >
                            {child.href ? (
                              <Link
                                href={child.href}
                                onClick={onClose}
                                className="group flex items-center justify-between gap-3 rounded-xl px-3 py-2.5 -mx-3 text-[0.9375rem] font-semibold text-gray-700 hover:text-navy-900 hover:bg-blue-50/60 transition-all duration-200"
                              >
                                <span>{child.label}</span>
                                <ChevronRight className="w-4 h-4 text-gray-400 group-hover:text-blue-500 transition-colors" />
                              </Link>
                            ) : (
                              <div className="flex items-center justify-between gap-3 rounded-xl px-3 py-2.5 -mx-3 text-[0.9375rem] font-semibold text-gray-700 hover:text-navy-900 hover:bg-blue-50/60 transition-all duration-200 cursor-pointer">
                                <span>{child.label}</span>
                                <ChevronRight className="w-4 h-4 text-gray-400 group-hover/parent:text-blue-500 transition-colors" />
                              </div>
                            )}

                            {/* Nested Sub-Dropdown is rendered in the right panel */}
                          </div>
                        ) : (
                          <Link
                            href={child.href ?? "#"}
                            onClick={onClose}
                            className="group flex items-center gap-2 px-3 py-2.5 -mx-3 rounded-xl text-[0.9375rem] text-gray-600 hover:text-navy-900 hover:bg-blue-50/60 transition-all duration-200"
                          >
                            <span>{child.label}</span>
                            <ArrowRight className="w-3.5 h-3.5 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-200 text-blue-500" />
                          </Link>
                        )}
                      </div>
                    ))}
                  </div>
                ))}
              </div>
            </div>

            {/* Right-side panel: show subpages at left and CTA at right when a child is hovered */}
            <div
              className={`${rightColSpanClass} bg-gray-50/60 ${!(hoveredChildObj?.children) && (isTinyMenu ? "p-4" : "p-6")} flex flex-col justify-between`}
              onMouseEnter={() =>
                setHoveredChild(hoveredChildObj?.label ?? null)
              }
            >
              {hoveredChildObj && hoveredChildObj.children ? (
                <div
                  className={`w-full grid gap-8 ${
                    isTinyMenu
                      ? "grid-cols-[minmax(0,1fr)_16rem]"
                      : "grid-cols-[1fr_20rem]"
                  }`}
                >
                  <div className="w-full min-w-0">
                    <p className="text-[0.6875rem] font-semibold uppercase tracking-[0.15em] text-gray-400 mb-4">
                      {hoveredChildObj.label}
                    </p>
                    <div className="space-y-1">
                      {hoveredChildObj.children.map((sub) => (
                        <Link
                          key={sub.label}
                          href={sub.href ?? "#"}
                          onClick={onClose}
                          className="group flex items-center justify-between gap-2 px-3 py-2.5 -mx-3 rounded-xl text-[0.9375rem] text-gray-600 hover:text-navy-900 hover:bg-blue-50/60 transition-all duration-200"
                        >
                          <span>{sub.label}</span>
                          <ArrowRight className="w-4 h-4 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-200 text-blue-500" />
                        </Link>
                      ))}
                    </div>
                  </div>

                  <div className="flex flex-col justify-center">
                    <p className="text-[0.6875rem] font-semibold uppercase tracking-[0.15em] text-gray-400 mb-3">
                      {localeText.common.getStarted}
                    </p>
                    <h4 className="text-[0.9375rem] font-bold text-navy-900 leading-snug mb-2">
                      Let&apos;s build your next project together
                    </h4>
                    <p className="text-[0.8125rem] text-gray-500 leading-relaxed mb-5">
                      Schedule a free 30-minute consultation with our experts to
                      discuss your requirements.
                    </p>
                    <Link
                      href="/contact-us"
                      onClick={onClose}
                      className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full bg-blue-500 text-white text-sm font-semibold hover:bg-blue-600 transition-colors w-fit shadow-lg shadow-blue-500/20"
                    >
                      {localeText.common.contactUs}
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
              ) : (
                <div className="w-full flex flex-col justify-between">
                  <div>
                    <p className="text-[0.6875rem] font-semibold uppercase tracking-[0.15em] text-gray-400 mb-4">
                      {localeText.common.getStarted}
                    </p>
                    <h4 className="text-lg font-bold text-navy-900 leading-snug mb-2">
                      Let&apos;s build your next project together
                    </h4>
                    <p className="text-sm text-gray-500 leading-relaxed mb-6">
                      Schedule a free 30-minute consultation with our experts to
                      discuss your requirements.
                    </p>
                  </div>
                  <Link
                    href="/contact-us"
                    onClick={onClose}
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-blue-500 text-white text-sm font-semibold hover:bg-blue-600 transition-colors w-fit shadow-lg shadow-blue-500/20"
                  >
                    {localeText.common.contactUs}
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ──────────────────────────────────────────────────────────────────── */
/*  Animated Hamburger Icon                                            */
/* ──────────────────────────────────────────────────────────────────── */
function HamburgerIcon({ isOpen }: { isOpen: boolean }) {
  return (
    <div className="w-5 h-5 relative flex items-center justify-center">
      <span
        className={`absolute h-[2px] w-5 bg-navy-900 rounded-full transition-all duration-300 ease-out ${
          isOpen ? "rotate-45 top-[9px]" : "top-[4px]"
        }`}
      />
      <span
        className={`absolute h-[2px] w-5 bg-navy-900 rounded-full transition-all duration-300 ease-out top-[9px] ${
          isOpen ? "opacity-0 scale-0" : "opacity-100 scale-100"
        }`}
      />
      <span
        className={`absolute h-[2px] w-5 bg-navy-900 rounded-full transition-all duration-300 ease-out ${
          isOpen ? "-rotate-45 top-[9px]" : "top-[14px]"
        }`}
      />
    </div>
  );
}

/* ──────────────────────────────────────────────────────────────────── */
/*  Main Navbar                                                        */
/* ──────────────────────────────────────────────────────────────────── */
export default function Navbar() {
  const { locale, setLocale, supportedLocales, m } = useI18n();
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const [mobileDropdown, setMobileDropdown] = useState<string | null>(null);
  const [mobileNestedDropdown, setMobileNestedDropdown] = useState<
    string | null
  >(null);
  const [isLangMenuOpen, setIsLangMenuOpen] = useState(false);
  const [isMobileLangMenuOpen, setIsMobileLangMenuOpen] = useState(false);
  const closeTimeout = useRef<ReturnType<typeof setTimeout> | null>(null);
  const langMenuRef = useRef<HTMLDivElement | null>(null);
  const mobileLangMenuRef = useRef<HTMLDivElement | null>(null);
  const navRef = useRef<HTMLElement | null>(null);

  const localizedNavItems = useMemo(
    () =>
      NAV_ITEMS.map((item) => ({
        ...item,
        id: item.label,
        label: localizeNavLabel(item.label, m),
        children: item.children?.map((child) => ({
          ...child,
          label: localizeNavChildLabel(child.label, m),
          children: child.children?.map((grand) => ({
            ...grand,
            label: localizeNavChildLabel(grand.label, m),
          })),
        })),
      })),
    [m],
  );

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 80);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) setIsMobileOpen(false);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isMobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMobileOpen]);

  useEffect(() => {
    const onPointerDown = (event: MouseEvent) => {
      const target = event.target as Node;

      if (langMenuRef.current && !langMenuRef.current.contains(target)) {
        setIsLangMenuOpen(false);
      }

      if (
        mobileLangMenuRef.current &&
        !mobileLangMenuRef.current.contains(target)
      ) {
        setIsMobileLangMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", onPointerDown);
    return () => document.removeEventListener("mousedown", onPointerDown);
  }, []);

  // Close mega menu when clicking outside the nav area
  useEffect(() => {
    const onDocDown = (e: MouseEvent) => {
      const t = e.target as Node;
      if (navRef.current && !navRef.current.contains(t)) {
        setActiveMenu(null);
      }
    };
    document.addEventListener("mousedown", onDocDown);
    return () => document.removeEventListener("mousedown", onDocDown);
  }, []);

  const openMenu = useCallback((label: string) => {
    if (closeTimeout.current) clearTimeout(closeTimeout.current);
    setActiveMenu(label);
  }, []);

  const scheduleClose = useCallback(() => {
    closeTimeout.current = setTimeout(() => setActiveMenu(null), 150);
  }, []);

  const closeMenu = useCallback(() => {
    setActiveMenu(null);
  }, []);

  const clearCloseTimeout = useCallback(() => {
    if (closeTimeout.current) {
      clearTimeout(closeTimeout.current);
      closeTimeout.current = null;
    }
  }, []);

  const activeItem = localizedNavItems.find(
    (item) => item.id === activeMenu && item.children,
  );

  return (
    <Fragment key={pathname}>
      {/* ── Header wrapper :  transforms into capsule on scroll ── */}
      <header ref={navRef} className="fixed top-0 left-0 right-0 z-50">
        <div
          className="will-change-transform transition-[padding] duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]"
          style={{
            padding: isScrolled ? "8px 16px 0" : "0",
          }}
        >
          <nav
            className="mx-auto will-change-[max-width,background-color,border-radius,box-shadow] transition-[max-width,background-color,border-radius,box-shadow,border-color] duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]"
            style={{
              maxWidth: isScrolled
                ? "min(92vw, 1400px)"
                : "min(95vw, 1600px)",
              backgroundColor: isScrolled
                ? "rgba(255,255,255,0.92)"
                : "rgba(255,255,255,0)",
              borderRadius: isScrolled ? "9999px" : "0px",
              boxShadow: isScrolled
                ? "0 8px 32px rgba(0,0,0,0.08), 0 1px 3px rgba(0,0,0,0.04)"
                : "none",
              backdropFilter: isScrolled ? "blur(20px)" : "none",
              WebkitBackdropFilter: isScrolled ? "blur(20px)" : "none",
              paddingLeft: isScrolled ? "24px" : "24px",
              paddingRight: isScrolled ? "24px" : "24px",
            }}
          >
            <div
              className="flex items-center justify-between will-change-[height] transition-[height] duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]"
              style={{ height: isScrolled ? "62px" : "72px" }}
            >
              {/* Logo */}
              <Link href="/" className="flex items-center flex-shrink-0">
                <Image
                  src="/cogtix.svg"
                  alt="Cogtix Solutions"
                  width={140}
                  height={36}
                  className="will-change-[height,width] transition-[height,width] duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]"
                  style={{
                    height: isScrolled ? "32px" : "36px",
                    width: "auto",
                  }}
                  priority
                />
              </Link>

              {/* Desktop Navigation */}
              <div className="hidden lg:flex items-center gap-0.5">
                {localizedNavItems.map((item) => (
                  <div
                    key={item.id}
                    onMouseEnter={() =>
                      item.children ? openMenu(item.id) : setActiveMenu(null)
                    }
                    onMouseLeave={scheduleClose}
                  >
                    {item.children ? (
                      <Link
                        href={item.href}
                        className={`relative flex items-center gap-1.5 px-3.5 py-2 text-sm font-medium transition-colors duration-200 rounded-full cursor-pointer group ${
                          activeMenu === item.id
                            ? "text-navy-900 bg-gray-100/80"
                            : "text-gray-600 hover:text-navy-900"
                        }`}
                      >
                        <span
                          className={`absolute top-1 right-1.5 w-[5px] h-[5px] rounded-full bg-blue-500 transition-all duration-300 ${
                            activeMenu === item.id
                              ? "opacity-100 scale-100"
                              : "opacity-0 scale-0 group-hover:opacity-100 group-hover:scale-100"
                          }`}
                        />
                        {item.label}
                        <ChevronDown
                          className={`w-3.5 h-3.5 transition-transform duration-300 ${
                            activeMenu === item.id ? "rotate-180" : ""
                          }`}
                        />
                      </Link>
                    ) : (
                      <Link
                        href={item.href}
                        className="relative flex items-center px-3.5 py-2 text-sm font-medium text-gray-600 hover:text-navy-900 transition-colors duration-200 rounded-full group"
                      >
                        <span className="absolute top-1 right-1.5 w-[5px] h-[5px] rounded-full bg-blue-500 opacity-0 scale-0 group-hover:opacity-100 group-hover:scale-100 transition-all duration-300" />
                        {item.label}
                      </Link>
                    )}
                  </div>
                ))}
              </div>

              {/* Desktop CTA */}
              <div className="hidden lg:flex items-center gap-3">
                <div ref={langMenuRef} className="relative">
                  <button
                    type="button"
                    onClick={() => setIsLangMenuOpen((prev) => !prev)}
                    className="inline-flex items-center gap-1.5 rounded-full border border-gray-200 bg-white/90 pl-2.5 pr-2 py-1.5 text-xs font-bold tracking-[0.06em] text-navy-900 hover:border-blue-300 transition-colors cursor-pointer"
                    aria-label={m.common.language}
                    aria-expanded={isLangMenuOpen}
                  >
                    <span>{locale.toUpperCase()}</span>
                    <CountryFlag locale={locale} />
                    <ChevronDown
                      className={`w-3.5 h-3.5 text-gray-500 transition-transform ${isLangMenuOpen ? "rotate-180" : ""}`}
                    />
                  </button>

                  {isLangMenuOpen && (
                    <div className="absolute right-0 top-[calc(100%+8px)] z-50 min-w-[150px] overflow-hidden rounded-xl border border-gray-200 bg-white shadow-xl">
                      {supportedLocales.map((localeCode) => (
                        <button
                          key={localeCode}
                          type="button"
                          onClick={() => {
                            setLocale(localeCode);
                            setIsLangMenuOpen(false);
                          }}
                          className={`flex w-full items-center justify-between px-3 py-2 text-left text-xs font-semibold transition-colors ${
                            localeCode === locale
                              ? "bg-blue-50 text-navy-900"
                              : "text-gray-600 hover:bg-gray-50"
                          }`}
                        >
                          <span>{LOCALE_LABELS[localeCode]}</span>
                          <CountryFlag locale={localeCode} />
                        </button>
                      ))}
                    </div>
                  )}
                </div>
                <Button variant="primary" size="md" href="/contact-us">
                  {m.common.contactUs}
                </Button>
              </div>

              {/* Mobile Menu Button :  animated hamburger */}
              <button
                onClick={() => setIsMobileOpen(!isMobileOpen)}
                className="lg:hidden w-10 h-10 rounded-full flex items-center justify-center hover:bg-gray-100 transition-colors cursor-pointer"
                aria-label="Toggle menu"
              >
                <HamburgerIcon isOpen={isMobileOpen} />
              </button>
            </div>
          </nav>

          {/* Mega Menu Dropdown :  positioned relative to the nav */}
          {activeItem && (
            <MegaMenuPanel
              item={activeItem}
              onClose={closeMenu}
              onMouseEnter={clearCloseTimeout}
              isScrolled={isScrolled}
              localeText={m}
            />
          )}
        </div>
      </header>

      {/* ── Mobile Full-screen Menu ── */}
      <div
        className={`lg:hidden fixed inset-0 z-[55] transition-opacity duration-300 ${
          isMobileOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
      >
        {/* Backdrop */}
        <div
          className="absolute inset-0 bg-navy-900/40 backdrop-blur-sm"
          onClick={() => setIsMobileOpen(false)}
        />

        {/* Slide-down panel */}
        <div
          className={`absolute left-3 right-3 top-[72px] transition-all duration-300 ease-out ${
            isMobileOpen
              ? "translate-y-0 opacity-100"
              : "-translate-y-4 opacity-0"
          }`}
        >
          <div className="bg-white rounded-2xl shadow-2xl shadow-black/10 border border-gray-200/60 overflow-hidden">
            {/* Nav Links */}
            <div className="p-4 max-h-[calc(100vh-160px)] overflow-y-auto">
              <div className="space-y-0.5">
                {localizedNavItems.map((item) => (
                  <div key={item.id}>
                    {item.children ? (
                      <>
                        <button
                          onClick={() =>
                            setMobileDropdown(
                              mobileDropdown === item.id ? null : item.id,
                            )
                          }
                          className="flex items-center justify-between w-full px-4 py-3.5 text-[0.9375rem] font-semibold text-navy-900 rounded-xl hover:bg-gray-50 transition-colors cursor-pointer"
                        >
                          <span>{item.label}</span>
                          <ChevronDown
                            className={`w-4 h-4 text-gray-400 transition-transform duration-300 ${
                              mobileDropdown === item.id
                                ? "rotate-180 text-blue-500"
                                : ""
                            }`}
                          />
                        </button>
                        <div
                          className={`overflow-hidden transition-all duration-300 ease-out ${
                            mobileDropdown === item.id
                              ? "max-h-[500px] opacity-100"
                              : "max-h-0 opacity-0"
                          }`}
                        >
                          <div
                            className={`pl-4 pr-2 pb-2 space-y-0.5 ${item.id === "Engineering" ? "pt-2" : ""}`}
                          >
                            {item.children.map((child) => (
                              <div key={child.label}>
                                {child.children ? (
                                  <>
                                    <button
                                      onClick={() =>
                                        setMobileNestedDropdown(
                                          mobileNestedDropdown ===
                                            `${item.id}:${child.label}`
                                            ? null
                                            : `${item.id}:${child.label}`,
                                        )
                                      }
                                      className="flex items-center justify-between w-full px-4 py-3 text-sm font-semibold text-gray-700 rounded-xl hover:bg-gray-50 transition-colors"
                                    >
                                      <span>{child.label}</span>
                                      <ChevronDown
                                        className={`w-4 h-4 text-gray-400 transition-transform duration-200 ${
                                          mobileNestedDropdown ===
                                          `${item.id}:${child.label}`
                                            ? "rotate-180 text-blue-500"
                                            : ""
                                        }`}
                                      />
                                    </button>

                                    <div
                                      className={`overflow-hidden transition-all duration-300 ease-out ${
                                        mobileNestedDropdown ===
                                        `${item.id}:${child.label}`
                                          ? "max-h-[500px] opacity-100"
                                          : "max-h-0 opacity-0"
                                      }`}
                                    >
                                      <div className="pl-6 pr-2 pb-2 space-y-0.5">
                                        {child.children.map((sub) => (
                                          <Link
                                            key={sub.label}
                                            href={sub.href ?? "#"}
                                            className="flex items-center gap-2 px-4 py-2.5 text-sm text-gray-500 hover:text-navy-900 rounded-xl hover:bg-blue-50/60 transition-all duration-200"
                                            onClick={() =>
                                              setIsMobileOpen(false)
                                            }
                                          >
                                            <span className="w-1.5 h-1.5 rounded-full bg-gray-300 flex-shrink-0" />
                                            {sub.label}
                                          </Link>
                                        ))}
                                      </div>
                                    </div>
                                  </>
                                ) : (
                                  <Link
                                    key={child.label}
                                    href={child.href ?? "#"}
                                    className={
                                      item.id === "Engineering"
                                        ? "flex items-center justify-between gap-3 rounded-xl border border-blue-200 bg-blue-500 px-4 py-3.5 text-base font-semibold text-blue-50 transition-all duration-200 hover:border-blue-300 hover:bg-blue-600 hover:text-white"
                                        : "flex items-center gap-2 px-4 py-2.5 text-sm text-gray-500 hover:text-navy-900 rounded-xl hover:bg-blue-50/60 transition-all duration-200"
                                    }
                                    onClick={() => setIsMobileOpen(false)}
                                  >
                                    {item.id === "Engineering" ? (
                                      <>
                                        <span>{child.label}</span>
                                        <ChevronRight className="h-5 w-5 text-blue-100/90" />
                                      </>
                                    ) : (
                                      <>
                                        <span className="w-1.5 h-1.5 rounded-full bg-gray-300 flex-shrink-0" />
                                        {child.label}
                                      </>
                                    )}
                                  </Link>
                                )}
                              </div>
                            ))}
                          </div>
                        </div>
                      </>
                    ) : (
                      <Link
                        href={item.href}
                        className="block px-4 py-3.5 text-[0.9375rem] font-semibold text-navy-900 rounded-xl hover:bg-gray-50 transition-colors"
                        onClick={() => setIsMobileOpen(false)}
                      >
                        {item.label}
                      </Link>
                    )}
                  </div>
                ))}
              </div>

              {/* Divider */}
              <div className="my-4 border-t border-gray-100" />

              <div ref={mobileLangMenuRef} className="px-2 pb-3">
                <div className="rounded-xl border border-gray-200 bg-white">
                  <button
                    type="button"
                    onClick={() => setIsMobileLangMenuOpen((prev) => !prev)}
                    className="flex w-full items-center justify-between px-4 py-3"
                    aria-label={m.common.language}
                    aria-expanded={isMobileLangMenuOpen}
                  >
                    <span className="text-xs font-semibold uppercase tracking-[0.08em] text-gray-400">
                      {m.common.language}
                    </span>
                    <div className="flex items-center gap-2">
                      <span className="text-sm font-bold tracking-[0.06em] text-navy-900">
                        {locale.toUpperCase()}
                      </span>
                      <CountryFlag locale={locale} />
                      <ChevronDown
                        className={`w-4 h-4 text-gray-500 transition-transform ${isMobileLangMenuOpen ? "rotate-180" : ""}`}
                      />
                    </div>
                  </button>

                  {isMobileLangMenuOpen && (
                    <div className="border-t border-gray-100 p-2">
                      {supportedLocales.map((localeCode) => (
                        <button
                          key={localeCode}
                          type="button"
                          onClick={() => {
                            setLocale(localeCode);
                            setIsMobileLangMenuOpen(false);
                          }}
                          className={`mb-1 flex w-full items-center justify-between rounded-lg px-3 py-2 text-sm font-semibold last:mb-0 ${
                            localeCode === locale
                              ? "bg-blue-50 text-navy-900"
                              : "text-gray-600 hover:bg-gray-50"
                          }`}
                        >
                          <span>{LOCALE_LABELS[localeCode]}</span>
                          <CountryFlag locale={localeCode} />
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              </div>

              {/* Quick Contact */}
              <div className="space-y-3 px-2">
                <p className="text-[0.6875rem] font-semibold uppercase tracking-[0.12em] text-gray-400 px-2">
                  {m.common.quickContact}
                </p>
                <a
                  href={`mailto:${CONTACT_INFO.email}`}
                  className="flex items-center gap-3 px-3 py-2.5 text-sm text-gray-500 hover:text-navy-900 rounded-xl hover:bg-gray-50 transition-colors"
                >
                  <span className="w-8 h-8 rounded-lg bg-blue-50 flex items-center justify-center flex-shrink-0">
                    <Mail className="w-4 h-4 text-blue-500" />
                  </span>
                  {CONTACT_INFO.email}
                </a>
                <a
                  href={`tel:${CONTACT_INFO.phones[0]?.number}`}
                  className="flex items-center gap-3 px-3 py-2.5 text-sm text-gray-500 hover:text-navy-900 rounded-xl hover:bg-gray-50 transition-colors"
                >
                  <span className="w-8 h-8 rounded-lg bg-blue-50 flex items-center justify-center flex-shrink-0">
                    <Phone className="w-4 h-4 text-blue-500" />
                  </span>
                  {CONTACT_INFO.phones[0]?.number}
                </a>
                <div className="flex items-center gap-3 px-3 py-2.5 text-sm text-gray-400">
                  <span className="w-8 h-8 rounded-lg bg-gray-50 flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-4 h-4 text-gray-400" />
                  </span>
                  USA • India • Australia • UK
                </div>
              </div>

              {/* CTA */}
              <div className="mt-4 px-2">
                <Button
                  variant="primary"
                  size="lg"
                  href="/contact-us"
                  className="w-full"
                >
                  {m.common.contactUs}
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
}
