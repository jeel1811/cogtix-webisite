// Comprehensive SEO audit script.
// Fetches every important route from the dev server and emits a per page
// report plus site wide findings.

import http from 'node:http'

const BASE = 'http://localhost:3000'

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
  '/sitemap.xml',
  '/robots.txt',
]

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

function decodeEntities(s) {
  if (!s) return s
  return s
    .replace(/&amp;/g, '&')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
}

function extract(html, re) {
  const m = html.match(re)
  return m ? m[1] : null
}

function extractAll(html, re) {
  const out = []
  let m
  const g = new RegExp(re.source, re.flags.includes('g') ? re.flags : re.flags + 'g')
  while ((m = g.exec(html))) out.push(m[1])
  return out
}

function extractJsonLd(html) {
  const re =
    /<script(?:\s+id="[^"]*")?\s+type="application\/ld\+json"[^>]*>([\s\S]*?)<\/script>/g
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
  if (path === '/sitemap.xml' || path === '/robots.txt') {
    return { path, status, contentLength: html.length, type: 'file' }
  }

  const title = decodeEntities(extract(html, /<title>([^<]*)<\/title>/))
  const description = decodeEntities(
    extract(html, /<meta name="description" content="([^"]+)"/)
  )
  const keywords = decodeEntities(
    extract(html, /<meta name="keywords" content="([^"]+)"/)
  )
  const canonical = extract(html, /<link rel="canonical" href="([^"]+)"/)

  const ogTitle = decodeEntities(
    extract(html, /<meta property="og:title" content="([^"]+)"/)
  )
  const ogDescription = decodeEntities(
    extract(html, /<meta property="og:description" content="([^"]+)"/)
  )
  const ogImage = extract(html, /<meta property="og:image" content="([^"]+)"/)
  const ogUrl = extract(html, /<meta property="og:url" content="([^"]+)"/)
  const ogType = extract(html, /<meta property="og:type" content="([^"]+)"/)
  const ogLocale = extract(html, /<meta property="og:locale" content="([^"]+)"/)
  const ogSiteName = extract(
    html,
    /<meta property="og:site_name" content="([^"]+)"/
  )

  const twitterCard = extract(
    html,
    /<meta name="twitter:card" content="([^"]+)"/
  )
  const twitterTitle = decodeEntities(
    extract(html, /<meta name="twitter:title" content="([^"]+)"/)
  )
  const twitterDescription = decodeEntities(
    extract(html, /<meta name="twitter:description" content="([^"]+)"/)
  )
  const twitterImage = extract(
    html,
    /<meta name="twitter:image" content="([^"]+)"/
  )
  const twitterSite = extract(html, /<meta name="twitter:site" content="([^"]+)"/)

  const robots = extract(html, /<meta name="robots" content="([^"]+)"/)
  const googlebot = extract(html, /<meta name="googlebot" content="([^"]+)"/)
  const viewport = extract(html, /<meta name="viewport" content="([^"]+)"/)
  const charset = !!html.match(/<meta\s+charset="utf-8"/i)

  // Phone + geo coords are now stored in Organization / LocalBusiness JSON-LD
  // (which Google actually consumes) instead of legacy non-standard meta tags.

  // Extract all H1 tags (also handle attributes inside <h1 ...>)
  const h1Re = /<h1\b[^>]*>([\s\S]*?)<\/h1>/g
  const h1Matches = []
  let h1m
  while ((h1m = h1Re.exec(html))) {
    h1Matches.push(
      decodeEntities(
        h1m[1]
          .replace(/<[^>]+>/g, ' ')
          .replace(/\s+/g, ' ')
          .trim()
      )
    )
  }

  // Extract all images
  const imgRe = /<img\b[^>]*>/g
  const imgs = []
  let im
  while ((im = imgRe.exec(html))) {
    const tag = im[0]
    const src = (tag.match(/src="([^"]+)"/) || [])[1] || ''
    const alt = (tag.match(/alt="([^"]*)"/) || [])[1]
    imgs.push({ src, alt })
  }
  const imagesMissingAlt = imgs.filter(
    (img) =>
      img.alt === undefined ||
      img.alt === null ||
      (img.alt === '' && !img.src.match(/data:image\/svg/))
  ).length

  // Extract internal links count
  const links = extractAll(html, /<a [^>]*href="([^"]+)"/)
  const internalLinks = links.filter(
    (h) => h.startsWith('/') || h.startsWith('https://www.cogtix.com')
  )
  const externalLinks = links.filter(
    (h) => h.startsWith('http') && !h.startsWith('https://www.cogtix.com')
  )

  const jsonLd = extractJsonLd(html)
  const jsonLdTypes = jsonLd
    .map((d) => d['@type'])
    .filter(Boolean)

  const hasEmDash =
    (title && title.includes('—')) ||
    (description && description.includes('—'))
  const langAttr = (html.match(/<html[^>]*\blang="([^"]+)"/) || [])[1]

  // Compute scores per criterion
  const ok = []
  const warn = []
  const fail = []

  // Title
  if (!title) fail.push('Missing <title>')
  else {
    const tlen = title.length
    if (tlen < 30) warn.push(`Title is short (${tlen} chars, target 50 to 60)`)
    else if (tlen > 65) warn.push(`Title is long (${tlen} chars, target 50 to 60)`)
    else ok.push(`Title length ${tlen} chars`)
  }

  // Description
  if (!description) fail.push('Missing meta description')
  else {
    const dlen = description.length
    if (dlen < 120)
      warn.push(`Description is short (${dlen} chars, target 140 to 160)`)
    else if (dlen > 170)
      warn.push(`Description is long (${dlen} chars, target 140 to 160)`)
    else ok.push(`Description length ${dlen} chars`)
  }

  // Keywords
  if (!keywords) warn.push('Missing meta keywords')
  else ok.push(`Keywords (${keywords.split(',').length} terms)`)

  // Canonical
  if (!canonical) fail.push('Missing canonical link')
  else ok.push(`Canonical ${canonical}`)

  // OG
  if (!ogTitle || !ogDescription || !ogImage || !ogUrl)
    fail.push('Incomplete Open Graph tags')
  else ok.push('Open Graph complete')

  // Twitter
  if (!twitterCard || !twitterTitle || !twitterImage)
    warn.push('Twitter card incomplete')
  else ok.push('Twitter card complete')

  // Robots
  if (!robots) warn.push('Missing meta robots')
  else ok.push('Meta robots ' + robots)

  // Viewport / charset
  if (!viewport) warn.push('Missing meta viewport')
  if (!charset) warn.push('Missing UTF-8 charset')

  // Phone presence in JSON-LD (Google reads telephone from Organization /
  // LocalBusiness, not from non-standard meta tags).
  const jsonLdRaw = JSON.stringify(jsonLd)
  const hasIndianPhone =
    jsonLdRaw.includes('+919327924201') || jsonLdRaw.includes('+91 93279 24201')
  if (!hasIndianPhone) warn.push('Indian phone not found in JSON-LD')
  else ok.push('Indian phone in JSON-LD')

  // Geo precision in LocalBusiness (Google asks for >=5 decimal places)
  const localBusiness = jsonLd.find(
    (d) =>
      d['@type'] === 'ProfessionalService' || d['@type'] === 'LocalBusiness'
  )
  if (localBusiness?.geo) {
    const lat = String(localBusiness.geo.latitude || '')
    const lng = String(localBusiness.geo.longitude || '')
    const latDecimals = (lat.split('.')[1] || '').length
    const lngDecimals = (lng.split('.')[1] || '').length
    if (latDecimals < 5 || lngDecimals < 5)
      warn.push(
        `Geo precision below 5 decimals (lat ${latDecimals}, lng ${lngDecimals})`
      )
    else ok.push(`Geo precision ${latDecimals}/${lngDecimals} decimals`)
  }

  // H1
  if (h1Matches.length === 0) fail.push('No <h1> found')
  else if (h1Matches.length > 1)
    warn.push(`${h1Matches.length} H1 tags found (best practice: exactly 1)`)
  else ok.push(`Single H1: "${h1Matches[0].slice(0, 60)}"`)

  // Images alt
  if (imagesMissingAlt > 0)
    warn.push(`${imagesMissingAlt} images missing alt text`)
  else if (imgs.length > 0) ok.push(`All ${imgs.length} images have alt text`)

  // JSON-LD
  if (jsonLd.length === 0) fail.push('No JSON-LD structured data')
  else ok.push(`${jsonLd.length} JSON-LD blocks (${jsonLdTypes.join(', ')})`)

  // Em dash
  if (hasEmDash) warn.push('Em dash found in title or description')

  // HTML lang
  if (!langAttr) warn.push('Missing html lang attribute')
  else ok.push(`html lang="${langAttr}"`)

  return {
    path,
    status,
    title,
    description,
    keywords,
    canonical,
    ogTitle,
    ogDescription,
    ogImage,
    ogUrl,
    ogType,
    ogLocale,
    ogSiteName,
    twitterCard,
    twitterTitle,
    twitterDescription,
    twitterImage,
    twitterSite,
    robots,
    googlebot,
    viewport,
    charset,
    h1Matches,
    imageCount: imgs.length,
    imagesMissingAlt,
    internalLinkCount: internalLinks.length,
    externalLinkCount: externalLinks.length,
    jsonLdTypes,
    jsonLdCount: jsonLd.length,
    hasEmDash,
    langAttr,
    ok,
    warn,
    fail,
  }
}

;(async () => {
  const reports = []
  for (const route of ROUTES) {
    try {
      const { status, html } = await fetchPage(route)
      reports.push(inspect(route, status, html))
    } catch (err) {
      reports.push({
        path: route,
        status: 'error',
        error: String(err),
        ok: [],
        warn: [],
        fail: ['Fetch error: ' + err.message],
      })
    }
  }

  // Duplicate detection
  const titles = new Map()
  const descs = new Map()
  for (const r of reports) {
    if (!r.title || r.path === '/sitemap.xml' || r.path === '/robots.txt') continue
    if (titles.has(r.title))
      r.warn.push('Duplicate title with ' + titles.get(r.title))
    else titles.set(r.title, r.path)
    if (descs.has(r.description))
      r.warn.push('Duplicate description with ' + descs.get(r.description))
    else descs.set(r.description, r.path)
  }

  console.log(JSON.stringify(reports, null, 2))
})()
