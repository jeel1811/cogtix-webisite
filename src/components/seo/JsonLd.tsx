/**
 * Server side JSON-LD injector.
 *
 * Plain `<script type="application/ld+json">` is rendered by React directly
 * into the SSR HTML, which is what we want for SEO. `next/script` with
 * "afterInteractive" defers the tag to client side hydration, which is too
 * late for the first crawl pass on some search engines.
 */
export default function JsonLd({ id, data }: { id: string; data: unknown }) {
  return (
    <script
      id={id}
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  )
}
