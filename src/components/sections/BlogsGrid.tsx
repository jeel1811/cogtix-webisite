'use client'

import { useMemo, useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { ArrowUpRight, Layers3, Calendar, ChevronDown } from 'lucide-react'
import Container from '@/components/ui/Container'
import type { BlogEdge } from '@/components/sections/blogs/types'

interface BlogsGridProps {
  blogs: BlogEdge[]
}

const INITIAL_VISIBLE = 6
const LOAD_MORE_STEP = 6
const DESCRIPTION_LIMIT = 150

function stripHtml(value: string) {
  return value
    .replace(/<[^>]*>/g, ' ')
    .replace(/\s+/g, ' ')
    .trim()
}

function truncateDescription(text: string, limit: number = DESCRIPTION_LIMIT) {
  const clean = stripHtml(text)
  if (clean.length <= limit) return clean
  return clean.substring(0, limit).trim() + '...'
}

function hasDescription(blog: BlogEdge) {
  const description =
    blog.node.blogs?.previewDesc ||
    blog.node.blogs?.blogDescription ||
    blog.node.content ||
    ''

  return stripHtml(description).length > 0
}

function formatDate(dateString: string) {
  return new Date(dateString).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  })
}

export default function BlogsGrid({ blogs }: BlogsGridProps) {
  const [visibleCount, setVisibleCount] = useState(INITIAL_VISIBLE)
  const filteredBlogs = useMemo(() => blogs.filter(hasDescription), [blogs])
  const visibleBlogs = useMemo(
    () => filteredBlogs.slice(0, visibleCount),
    [filteredBlogs, visibleCount]
  )
  const hasMore = visibleCount < filteredBlogs.length

  if (!filteredBlogs.length) {
    return (
      <section className="relative overflow-hidden bg-slate-50 py-10 md:py-14">
        <Container className="relative z-10">
          <div className="rounded-[1.5rem] border border-slate-200 bg-white p-10 text-center shadow-sm">
            <Layers3 className="mx-auto h-10 w-10 text-blue-500" />
            <h2 className="mt-4 text-2xl font-bold text-slate-950">
              No blogs found
            </h2>
            <p className="mt-2 text-slate-600">
              The CMS did not return any blogs for the selected category.
            </p>
          </div>
        </Container>
      </section>
    )
  }

  const handleLoadMore = () => {
    setVisibleCount((current) =>
      Math.min(current + LOAD_MORE_STEP, filteredBlogs.length)
    )
  }

  const handleLoadLess = () => {
    setVisibleCount(INITIAL_VISIBLE)
    const gridElement = document.getElementById('blogs-grid')
    if (gridElement) {
      gridElement.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  return (
    <section className="relative overflow-hidden bg-slate-50 py-10 md:py-14">
      <div className="absolute inset-0 pointer-events-none opacity-[0.03]">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern
              id="blog-grid-pattern"
              width="40"
              height="40"
              patternUnits="userSpaceOnUse"
            >
              <path
                d="M 40 0 L 0 0 0 40"
                fill="none"
                stroke="currentColor"
                strokeWidth="1"
              />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#blog-grid-pattern)" />
        </svg>
      </div>

      <Container className="relative z-10">
        <div id="blogs-grid" className="scroll-mt-20">
          <div className="mb-8 flex items-end justify-between gap-4">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-600">
                Latest insights
              </p>
              <h2 className="mt-2 text-3xl font-bold tracking-tight text-slate-950 md:text-4xl">
                News, guides, and product thinking
              </h2>
            </div>
            <p className="hidden max-w-md text-sm leading-relaxed text-slate-500 md:block">
              A clean feed of articles with full images and compact summaries.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3 auto-rows-auto">
            {visibleBlogs.map((blog, idx) => {
              const title =
                blog.node.blogs?.blogTitle || blog.node.title || 'Blog Post'
              const description = truncateDescription(
                blog.node.blogs?.previewDesc ||
                  blog.node.blogs?.blogDescription ||
                  ''
              )
              const image = blog.node.featuredImage?.node?.mediaItemUrl
              //   const category = blog.node.blogs?.blogCategory;
              const date = formatDate(blog.node.date)
              const slug = blog.node.slug
              const tagName = blog.node.tags?.nodes?.[0]?.name || 'Blog'

              return (
                <motion.article
                  key={blog.node.id || slug}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: idx * 0.08 }}
                  className="group relative overflow-hidden rounded-[1.5rem] border border-slate-200 bg-white shadow-[0_8px_24px_rgba(15,23,42,0.06)] transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_16px_40px_rgba(15,23,42,0.12)]"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-50/30 via-transparent to-cyan-50/30 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

                  <Link
                    href={`/blogs/${slug}`}
                    className="relative z-10 flex h-full flex-col"
                  >
                    <div className="relative aspect-[16/10] overflow-hidden bg-slate-50 p-3">
                      {image ? (
                        <Image
                          src={image}
                          alt={title}
                          fill
                          className="object-contain transition-transform duration-700 group-hover:scale-[1.02]"
                          sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
                          unoptimized={image.startsWith('http')}
                        />
                      ) : (
                        <div className="flex h-full w-full items-center justify-center rounded-[1.25rem] bg-gradient-to-br from-blue-100 via-white to-cyan-100">
                          <span className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">
                            Blog Post
                          </span>
                        </div>
                      )}
                    </div>

                    <div className="flex flex-1 flex-col p-6 md:p-7">
                      <div className="mb-4 flex items-start justify-between gap-4">
                        <div className="flex items-center gap-2 text-sm text-slate-500">
                          <Calendar className="h-4 w-4 text-emerald-500" />
                          <span>{date}</span>
                        </div>
                        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-slate-200 bg-slate-50 transition-colors duration-300 group-hover:border-blue-500 group-hover:bg-blue-600">
                          <ArrowUpRight className="h-5 w-5 text-slate-400 transition-colors duration-300 group-hover:text-white" />
                        </div>
                      </div>

                      <div className="mb-5 flex-1">
                        <h3 className="text-2xl font-bold leading-tight tracking-tight text-slate-950 transition-colors duration-300 group-hover:text-blue-600">
                          {title}
                        </h3>
                        {description ? (
                          <p className="mt-4 line-clamp-3 text-base leading-relaxed text-slate-600">
                            {description}
                          </p>
                        ) : null}
                      </div>

                      {tagName ? (
                        <div className="mt-auto flex items-center justify-between gap-3 border-t border-slate-100 pt-5">
                          <span className="inline-block rounded-md border border-slate-200 bg-slate-50 px-2.5 py-1 text-xs font-semibold text-slate-600">
                            {tagName}
                          </span>
                          <span className="text-sm font-semibold text-blue-600 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                            Read article
                          </span>
                        </div>
                      ) : null}
                    </div>
                  </Link>
                </motion.article>
              )
            })}
          </div>

          <div className="mt-12 flex flex-col items-center gap-4">
            {hasMore ? (
              <button
                onClick={handleLoadMore}
                className="inline-flex items-center gap-2 rounded-full bg-blue-600 px-7 py-3 text-sm font-semibold text-white shadow-lg shadow-blue-500/25 transition-all hover:-translate-y-0.5 hover:bg-blue-700"
              >
                <ChevronDown className="h-4 w-4" />
                Load more blogs
              </button>
            ) : filteredBlogs.length > INITIAL_VISIBLE ? (
              <button
                onClick={handleLoadLess}
                className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-7 py-3 text-sm font-semibold text-slate-700 transition-all hover:border-blue-500 hover:text-blue-600"
              >
                Show fewer
              </button>
            ) : null}

            <div className="text-center text-sm text-slate-500">
              Showing {Math.min(visibleCount, filteredBlogs.length)} of{' '}
              {filteredBlogs.length} blogs
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}
