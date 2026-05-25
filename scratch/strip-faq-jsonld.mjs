#!/usr/bin/env node
/**
 * Strip the deprecated FAQPage JSON-LD blocks from every service page.
 *
 * Per Google Search Central (2026 deprecation): FAQ rich results are only
 * eligible for well-known authoritative health- or government-focused sites,
 * and the rich result rendering was removed from Google Search on
 * May 7, 2026. The FAQPage markup is therefore inert for Cogtix's domain.
 *
 * We keep the visual FAQ content rendered on each service page; we only
 * strip the JSON-LD payload + helper import + call site.
 */
import fs from 'node:fs'
import path from 'node:path'

const ROOT = path.resolve(process.cwd(), 'src/app/services')

const files = [
  'cloud-devops-engineering/page.tsx',
  'data-engineering/page.tsx',
  'digital-experience-engineering/page.tsx',
  'enterprise-solutions/page.tsx',
  'experience-design/page.tsx',
  'microsoft-technologies/page.tsx',
]

for (const rel of files) {
  const abs = path.join(ROOT, rel)
  let src = fs.readFileSync(abs, 'utf8')
  const before = src

  // 1) Drop "PRIMARY_PHONE_DISPLAY," and "buildFaqJsonLd," from the named imports.
  src = src.replace(/^\s*PRIMARY_PHONE_DISPLAY,\s*\r?\n/m, '')
  src = src.replace(/^\s*buildFaqJsonLd,\s*\r?\n/m, '')

  // 2) Drop the entire "const FAQS = [ ... ]" block.
  src = src.replace(/\nconst FAQS = \[[\s\S]*?\n\]\n/, '\n')

  // 3) Drop "const faqJsonLd = buildFaqJsonLd(FAQS)" line.
  src = src.replace(/^\s*const faqJsonLd = buildFaqJsonLd\(FAQS\)\r?\n/m, '')

  // 4) Drop the <JsonLd id="faq-jsonld-..." data={faqJsonLd} /> emission.
  src = src.replace(
    /^\s*<JsonLd id="faq-jsonld-[^"]+" data=\{faqJsonLd\} \/>\r?\n/m,
    ''
  )

  if (src !== before) {
    fs.writeFileSync(abs, src)
    console.log(`updated  ${rel}`)
  } else {
    console.log(`no-op    ${rel}`)
  }
}
