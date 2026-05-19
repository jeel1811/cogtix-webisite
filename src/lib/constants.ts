// ─── Industries ────────────────────────────────────────────────────
export const INDUSTRIES = [
  {
    title: 'Financial Services',
    description:
      'Secure payment systems, digital banking, and compliance solutions.',
    href: '/industries/financial-services',
  },
  {
    title: 'Healthcare and Life Sciences',
    description: 'Telemedicine, EHR systems, and patient management solutions.',
    href: '/industries/healthcare-and-life-sciences',
  },
  {
    title: 'Retail and E-commerce',
    description:
      'Omnichannel commerce, POS integrations, and personalized shopping experiences.',
    href: '/industries/retail-and-e-commerce',
  },
  {
    title: 'Supply Chain and Logistics',
    description:
      'Fleet management, warehouse automation, and real-time tracking visibility.',
    href: '/industries/supply-chain-and-logistics',
  },
  {
    title: 'Hi-Tech and Digital Natives',
    description:
      'Scalable SaaS solutions, cloud-native architecture, and rapid prototyping.',
    href: '/industries/hi-tech-and-digital-natives',
  },
] as const

// ─── Navigation ────────────────────────────────────────────────────
export interface NavChild {
  label: string
  href?: string
  children?: NavChild[]
}

export interface NavItem {
  label: string
  href: string
  children?: NavChild[]
}

export const NAV_ITEMS: NavItem[] = [
  {
    label: 'Engineering',
    href: '/services',
    children: [
      { label: 'AI/ML Engineering', href: '/services/gen-ai-ml-development' },
      {
        label: 'Cloud & DevOps Engineering',
        href: '/services/cloud-devops-engineering',
      },
      {
        label: 'Digital Experience Engineering',
        href: '/services/digital-experience-engineering',
      },
      { label: 'Data Engineering', href: '/services/data-engineering' },
      { label: 'Enterprise Services', href: '/services/enterprise-solutions' },
      {
        label: 'Microsoft Technologies',
        href: '/services/microsoft-technologies',
      },
    ],
  },
  {
    label: 'Industries',
    href: '/industries',
    children: [
      { label: 'Financial Services', href: '/industries/financial-services' },
      { label: 'Healthcare and Life Sciences', href: '/industries/healthcare-and-life-sciences' },
      { label: 'Retail and E-commerce', href: '/industries/retail-and-e-commerce' },
      { label: 'Supply Chain and Logistics', href: '/industries/supply-chain-and-logistics' },
      { label: 'Hi-Tech and Digital Natives', href: '/industries/hi-tech-and-digital-natives' },
    ],
  },
  {
    label: 'Partners',
    href: '/partners',
    children: [
      { label: 'Microsoft', href: '/partners/microsoft' },
      { label: 'AWS', href: '/partners/aws' },
      { label: 'Google Cloud', href: '/partners/google-cloud' },
    ],
  },
  {
    label: 'Insights',
    href: '/insights',
    children: [
      { label: 'Case Studies', href: '/case-studies' },
      { label: 'Blogs', href: '/blogs' },
    ],
  },
  {
    label: 'Company',
    href: '/about-us',
    children: [
      { label: 'About Us', href: '/about-us' },
      { label: 'Contact Us', href: '/contact-us' },
      {
        label: 'How We Work',
        href: '/how-we-work',
        children: [
          { label: 'Dedicated Resource Model', href: '/how-we-work/dedicated-resource-model' },
          { label: 'Discovery Process Model', href: '/how-we-work/discovery-process-model' },
          { label: 'Fixed Cost Model', href: '/how-we-work/fixed-cost-model' },
        ],
      },
    ],
  },
  { label: 'Careers', href: '/careers' },
]

// ─── Technologies ──────────────────────────────────────────────────
export const TECHNOLOGIES: Record<string, string[]> = {
  Backend: ['.NET', 'Node.js', 'Java', 'Laravel', 'Python', 'PHP'],
  Frontend: ['Angular', 'ReactJS', 'Next.js', 'Vue.js', 'Blazor', '.NET MVC'],
  Mobile: ['Flutter', 'Ionic', 'Android Native', 'iOS Native', 'React Native'],
  'Infra & Cloud': ['AWS', 'Azure', 'DevOps', 'Jenkins'],
  CMS: ['Magento', 'WordPress'],
  Database: ['MongoDB', 'PostgreSQL', 'MySQL', 'Redis', 'Firebase'],
  Blockchain: ['Ethereum', 'Solidity', 'Web3.js', 'Hyperledger'],
}

// ─── Stats ─────────────────────────────────────────────────────────
export const STATS = [
  { value: 310, suffix: '+', label: 'Projects Delivered' },
  { value: 150, suffix: '+', label: 'Happy Clients' },
  { value: 4, suffix: '', label: 'Global Offices' },
  { value: 50, suffix: '+', label: 'Expert Developers' },
] as const

// ─── Offices ───────────────────────────────────────────────────────
export const OFFICES = [
  {
    country: 'India',
    flag: '🇮🇳',
    city: 'Ahmedabad',
    address:
      'A-901, Eastface, Ambli - Bopal Road, Near Maruti Suzuki Showroom, Ambli, Ahmedabad, Gujarat 380058.',
    timezone: 'Asia/Kolkata',
  },
  {
    country: 'USA',
    flag: '🇺🇸',
    city: 'New York',
    address: '1740 Broadway, 15th Floor, New York City, New York 10019, US.',
    timezone: 'America/New_York',
  },
  {
    country: 'Australia',
    flag: '🇦🇺',
    city: 'Perth',
    address: '93 Welshpool Road Welshpool Western Australia 6106',
    timezone: 'Australia/Perth',
  },
  {
    country: 'UK',
    flag: '🇬🇧',
    city: 'Bridgwater',
    address: '30, Duke Street, TA6 3TG Bridgwater, UK',
    timezone: 'Europe/London',
  },
] as const

// ─── Contact ───────────────────────────────────────────────────────
export const CONTACT_INFO = {
  email: 'info@cogtix.com',
  phones: [
    { label: 'India', number: '+91 93279 24201' },
    { label: 'USA', number: '+1 (862) 660-2554' },
    { label: 'UK', number: '+44 7442 185036' },
  ],
  whatsapp: 'https://wa.me/919327924201',
  calendly: 'https://calendly.com/akash-cogtix/30min',
  /** Contact page anchor for inline Calendly widget */
  calendlyContactPath: '/contact-us',
} as const

// ─── Social Links ──────────────────────────────────────────────────
export const FOUNDER_SOCIAL_LINKS = {
  linkedin: 'https://www.linkedin.com/in/akash--limbani/',
  x: 'https://x.com/limbani_akash',
} as const

export const SOCIAL_LINKS = {
  linkedin: 'https://www.linkedin.com/company/cogtix',
  twitter: 'https://twitter.com/cogtix',
  facebook: 'https://facebook.com/cogtix',
  instagram: 'https://instagram.com/cogtix',
  dribble:"https://dribbble.com/cogtix",
  behance:"https://behance.net/cogtix"
} as const

// ─── Awards ────────────────────────────────────────────────────────
export const AWARDS = [
  { name: 'Upwork Top Rated', logo: '/awards/upwork-badge.webp' },
  {
    name: 'Top Web Development Companies',
    logo: '/awards/top-web-development-companies.webp',
  },
  {
    name: 'Top Rated Software Development',
    logo: '/awards/top_rated_software_development_companies.webp',
  },
  {
    name: 'Appian Development Ahmedabad',
    logo: '/awards/appian-development-ahmedabad.webp',
  },
  {
    name: 'Appian Development Specialist',
    logo: '/awards/appian-development.webp',
  },
  { name: 'API Development NYC', logo: '/awards/api-development-ny.webp' },
  { name: 'API Development Expert', logo: '/awards/api-development.webp' },
  { name: 'JQuery Award', logo: '/awards/jquery-award.webp' },
  { name: 'JQuery Specialist', logo: '/awards/jquery.webp' },
  { name: 'Rest API Specialist', logo: '/awards/rest-api.webp' },
] as const
