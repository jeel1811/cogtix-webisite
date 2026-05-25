#!/usr/bin/env node
// Quick post-optimization SEO audit. Fetches every static route from a local
// Next.js dev server, parses the rendered HTML, and prints a one-line summary
// per page covering: HTTP status, title length, description length, number of
// <h1> elements, number of JSON-LD blocks, and any constraint violations.

import http from 'node:http'

const HOST = process.env.SEO_HOST || 'http://localhost:3000'

const PAGES = [
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
  '/hire-talent/node-developer',
  '/hire-talent/python-developer',
  '/hire-talent/dotnet-developer',
  '/insights',
  '/blogs',
  '/case-studies',
  '/careers',
  '/privacy-policy',
]

function fetchPage(path) {
  return new Promise((resolve, reject) => {
    http
      .get(HOST + path, (res) => {
        let data = ''
        res.on('data', (c) => (data += c))
        res.on('end', () => resolve({ status: res.statusCode, html: data }))
      })
      .on('error', reject)
  })
}

function unescape(value) {
  if (!value) return value
  return value
    .replaceAll('&amp;', '&')
    .replaceAll('&lt;', '<')
    .replaceAll('&gt;', '>')
    .replaceAll('&quot;', '"')
    .replaceAll('&#039;', "'")
    .replaceAll('&#x27;', "'")
}

function match(html, pattern) {
  const m = html.match(pattern)
  return m ? unescape(m[1]) : null
}

function countMatches(html, regex) {
  return (html.match(regex) || []).length
}

function pad(value, width) {
  const s = String(value)
  return s.length >= width ? s : s + ' '.repeat(width - s.length)
}

const headlines = []
let pass = 0
let warn = 0

for (const path of PAGES) {
  const { status, html } = await fetchPage(path)
  if (status >= 300) {
    headlines.push(`SKIP  ${status} ${path}`)
    continue
  }

  const title = match(html, /<title>([^<]*)<\/title>/)
  const description = match(
    html,
    /<meta name="description" content="([^"]+)"/,
  )
  const h1Count = countMatches(html, /<h1[\s>]/g)
  const ldCount = countMatches(html, /type="application\/ld\+json"/g)

  const issues = []
  if (!title) issues.push('NO-TITLE')
  else if (title.length > 60) issues.push(`TITLE-LEN=${title.length}`)
  if (!description) issues.push('NO-DESC')
  else if (description.length > 160) issues.push(`DESC-LEN=${description.length}`)
  else if (description.length < 80) issues.push(`DESC-TOO-SHORT=${description.length}`)
  if (h1Count === 0) issues.push('NO-H1')
  if (h1Count > 1) issues.push(`H1=${h1Count}`)
  if (ldCount < 1) issues.push('NO-JSONLD')

  const flag = issues.length ? 'WARN' : 'PASS'
  if (flag === 'PASS') pass++
  else warn++

  headlines.push(
    `${flag} ${pad(path, 46)} t=${pad(title?.length ?? '-', 4)} d=${pad(
      description?.length ?? '-',
      4,
    )} h1=${h1Count} ld=${ldCount} ${issues.join(',')}`,
  )
}

for (const line of headlines) console.log(line)
console.log('')
console.log(`SUMMARY: ${pass} passed, ${warn} with warnings, total ${headlines.length}`)
