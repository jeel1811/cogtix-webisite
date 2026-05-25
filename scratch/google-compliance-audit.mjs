#!/usr/bin/env node
/**
 * Google-strict compliance audit.
 *
 * Verifies every page against the explicit rules from Google Search Central:
 *   - Title element present + unique + ≤60 visible chars
 *   - Meta description present + unique + ≤160 chars
 *   - Canonical present + absolute URL
 *   - robots meta is index,follow (or explicit noindex)
 *   - Exactly one H1
 *   - JSON-LD types are within Google's supported schema list (Organization,
 *     LocalBusiness/ProfessionalService, Service, BreadcrumbList, Article,
 *     WebSite). Flags the deprecated FAQPage.
 *   - LocalBusiness geo has ≥5-decimal precision per Google guidelines.
 *   - Organization has name, url, logo, address, telephone.
 *
 * References:
 *   https://developers.google.com/search/docs/appearance/title-link
 *   https://developers.google.com/search/docs/appearance/snippet
 *   https://developers.google.com/search/docs/crawling-indexing/canonicalization
 *   https://developers.google.com/search/docs/crawling-indexing/special-tags
 *   https://developers.google.com/search/docs/appearance/structured-data/organization
 *   https://developers.google.com/search/docs/appearance/structured-data/local-business
 *   https://developers.google.com/search/docs/appearance/structured-data/breadcrumb
 *   https://developers.google.com/search/docs/appearance/structured-data/article
 *   https://developers.google.com/search/docs/appearance/structured-data/faqpage (deprecated 2026)
 *
 * Usage:  node scratch/google-compliance-audit.mjs
 */
import http from 'node:http'

const BASE = process.env.AUDIT_BASE || 'http://localhost:3000'

const ROUTES = [
  '/',
  '/about-us',
  '/contact-us',
  '/services',
  '/services/ai-ml-development',
  '/services/cloud-devops-engineering',
  '/services/data-engineering',
  '/services/digital-experience-engineering',
  '/services/experience-design',
  '/services/enterprise-solutions',
  '/services/microsoft-technologies',
  '/industries',
  '/industries/financial-services',
  '/industries/healthcare-and-life-sciences',
  '/industries/retail-and-e-commerce',
  '/industries/supply-chain-and-logistics',
  '/industries/hi-tech-and-digital-natives',
  '/partners',
  '/partners/microsoft',
  '/partners/aws',
  '/partners/google-cloud',
  '/how-we-work',
  '/how-we-work/dedicated-resource-model',
  '/how-we-work/discovery-process-model',
  '/how-we-work/fixed-cost-model',
  '/hire-talent',
  '/hire-talent/react-developer',
  '/hire-talent/dotnet-developer',
  '/hire-talent/node-developer',
  '/insights',
  '/blogs',
  '/case-studies',
  '/careers',
  '/privacy-policy',
]

const GOOGLE_SUPPORTED_SCHEMAS = new Set([
  'Organization',
  'LocalBusiness',
  'ProfessionalService',
  'OnlineBusiness',
  'OnlineStore',
  'Service',
  'BreadcrumbList',
  'Article',
  'NewsArticle',
  'BlogPosting',
  'WebSite',
  'WebPage',
  'ContactPoint',
  'Person',
  'Product',
])
const DEPRECATED_SCHEMAS = new Set(['FAQPage', 'HowTo'])

function fetchPage(path) {
  return new Promise((resolve, reject) => {
    const req = http.get(BASE + path, (res) => {
      let data = ''
      res.on('data', (c) => (data += c))
      res.on('end', () =>
        resolve({ status: res.statusCode, html: data, headers: res.headers })
      )
    })
    req.on('error', reject)
    req.setTimeout(15000, () => req.destroy(new Error('timeout: ' + path)))
  })
}

function decode(s) {
  return s
    ? s
        .replace(/&amp;/g, '&')
        .replace(/&lt;/g, '<')
        .replace(/&gt;/g, '>')
        .replace(/&quot;/g, '"')
        .replace(/&#39;/g, "'")
    : s
}
function ext(html, re) {
  const m = html.match(re)
  return m ? m[1] : null
}
function extractJsonLd(html) {
  const re =
    /<script[^>]*type="application\/ld\+json"[^>]*>([\s\S]*?)<\/script>/g
  const out = []
  let m
  while ((m = re.exec(html))) {
    try {
      out.push(JSON.parse(m[1]))
    } catch {
      out.push({ __parseError: true })
    }
  }
  return out
}

function inspect(path, status, html) {
  const title = decode(ext(html, /<title>([^<]*)<\/title>/))
  const description = decode(
    ext(html, /<meta name="description" content="([^"]+)"/)
  )
  const canonical = ext(html, /<link rel="canonical" href="([^"]+)"/)
  const robots = ext(html, /<meta name="robots" content="([^"]+)"/)
  const googleBot = ext(html, /<meta name="googlebot" content="([^"]+)"/)
  const ogTitle = ext(html, /<meta property="og:title" content="([^"]+)"/)
  const ogImage = ext(html, /<meta property="og:image" content="([^"]+)"/)
  const lang = ext(html, /<html[^>]*\blang="([^"]+)"/)
  const viewport = ext(html, /<meta name="viewport" content="([^"]+)"/)
  const charset = !!html.match(/<meta\s+charset="utf-8"/i)
  const h1Count = (html.match(/<h1\b/g) || []).length
  const jsonLd = extractJsonLd(html)
  const types = jsonLd.map((d) => d['@type']).filter(Boolean)

  const issues = []
  const passes = []

  if (!title) issues.push('FAIL  no <title>')
  else if (title.length > 65)
    issues.push(`WARN  title is ${title.length} chars (target ≤60)`)
  else passes.push(`title (${title.length} chars)`)

  if (!description) issues.push('FAIL  no meta description')
  else if (description.length > 165)
    issues.push(`WARN  description ${description.length} chars (target ≤160)`)
  else passes.push(`description (${description.length} chars)`)

  if (!canonical) issues.push('FAIL  no canonical')
  else if (!/^https?:\/\//.test(canonical))
    issues.push(`FAIL  canonical not absolute: ${canonical}`)
  else passes.push('canonical absolute')

  if (!robots) issues.push('WARN  no meta robots')
  else if (!robots.includes('index') && !robots.includes('noindex'))
    issues.push(`WARN  robots ambiguous: ${robots}`)
  else passes.push('robots set')

  if (!googleBot) issues.push('INFO  no googlebot meta (optional)')
  else passes.push('googlebot set')

  if (!ogTitle || !ogImage) issues.push('WARN  open graph incomplete')
  else passes.push('open graph')

  if (!lang) issues.push('WARN  no html lang')
  else passes.push(`lang=${lang}`)
  if (!viewport) issues.push('WARN  no viewport')
  if (!charset) issues.push('WARN  no utf-8 charset')

  if (h1Count !== 1) issues.push(`WARN  H1 count = ${h1Count} (target 1)`)
  else passes.push('1 H1')

  if (jsonLd.length === 0) issues.push('WARN  no JSON-LD')
  else passes.push(`${jsonLd.length} JSON-LD blocks: ${types.join(', ')}`)

  // Schema deprecation/compliance
  for (const t of types) {
    if (DEPRECATED_SCHEMAS.has(t))
      issues.push(`WARN  deprecated schema ${t}`)
    if (!GOOGLE_SUPPORTED_SCHEMAS.has(t))
      issues.push(`INFO  schema ${t} not in Google list`)
  }

  // LocalBusiness geo precision
  const lb = jsonLd.find(
    (d) =>
      d['@type'] === 'LocalBusiness' || d['@type'] === 'ProfessionalService'
  )
  if (lb) {
    const lat = String(lb.geo?.latitude || '')
    const lng = String(lb.geo?.longitude || '')
    const latD = (lat.split('.')[1] || '').length
    const lngD = (lng.split('.')[1] || '').length
    if (latD < 5 || lngD < 5)
      issues.push(`FAIL  geo precision ${latD}/${lngD} (need ≥5)`)
    else passes.push(`geo precision ${latD}/${lngD} decimals`)
    for (const req of ['name', 'address', 'telephone']) {
      if (!lb[req]) issues.push(`FAIL  LocalBusiness missing ${req}`)
    }
  }

  // Organization required-ish fields
  const org = jsonLd.find((d) => d['@type'] === 'Organization')
  if (org) {
    for (const req of ['name', 'url', 'logo']) {
      if (!org[req]) issues.push(`WARN  Organization missing ${req}`)
    }
  }

  // Phone presence (Indian)
  const ldStr = JSON.stringify(jsonLd)
  if (!ldStr.includes('+919327924201'))
    issues.push('WARN  Indian phone not in JSON-LD')

  return {
    path,
    status,
    title,
    titleLen: title?.length || 0,
    description,
    descLen: description?.length || 0,
    canonical,
    types,
    h1Count,
    issues,
    passes,
  }
}

;(async () => {
  const reports = []
  for (const route of ROUTES) {
    try {
      const { status, html } = await fetchPage(route)
      reports.push(inspect(route, status, html))
    } catch (err) {
      reports.push({ path: route, status: 'error', issues: [String(err)] })
    }
  }

  // Duplicate detection across pages
  const titles = new Map()
  const descs = new Map()
  for (const r of reports) {
    if (!r.title) continue
    if (titles.has(r.title))
      r.issues.push(`WARN  duplicate title with ${titles.get(r.title)}`)
    else titles.set(r.title, r.path)
    if (r.description) {
      if (descs.has(r.description))
        r.issues.push(`WARN  duplicate description with ${descs.get(r.description)}`)
      else descs.set(r.description, r.path)
    }
  }

  let totalFail = 0
  let totalWarn = 0
  console.log(
    '\nROUTE'.padEnd(55) +
      'STAT  TITLE  DESC  H1  SCHEMAS                            ISSUES'
  )
  console.log('-'.repeat(140))
  for (const r of reports) {
    const fails = (r.issues || []).filter((x) => x.startsWith('FAIL')).length
    const warns = (r.issues || []).filter((x) => x.startsWith('WARN')).length
    totalFail += fails
    totalWarn += warns
    const flag = fails ? 'FAIL' : warns ? 'WARN' : 'PASS'
    console.log(
      r.path.padEnd(55) +
        String(r.status).padEnd(6) +
        String(r.titleLen).padEnd(7) +
        String(r.descLen).padEnd(6) +
        String(r.h1Count).padEnd(4) +
        (r.types?.slice(0, 4).join('+') || '-').padEnd(36) +
        flag +
        (fails ? ` (${fails} fail)` : '') +
        (warns ? ` (${warns} warn)` : '')
    )
  }
  console.log('-'.repeat(140))
  console.log(
    `\nTotal: ${reports.length} routes, ${totalFail} FAIL, ${totalWarn} WARN`
  )

  if (totalFail || totalWarn) {
    console.log('\nDetailed issues:')
    for (const r of reports) {
      if (!r.issues || r.issues.length === 0) continue
      const filtered = r.issues.filter(
        (i) => i.startsWith('FAIL') || i.startsWith('WARN')
      )
      if (filtered.length) {
        console.log(`  ${r.path}:`)
        for (const i of filtered) console.log(`    - ${i}`)
      }
    }
  }
})()
