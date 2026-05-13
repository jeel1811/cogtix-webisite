'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { ArrowUpRight, Layers3, ChevronLeft, ChevronRight } from 'lucide-react';
import Container from '@/components/ui/Container';
import type { CaseStudyEdge } from '@/components/sections/case-studies/types';

interface CaseStudiesGridProps {
  studies: CaseStudyEdge[];
}

const ITEMS_PER_PAGE = 9;
const DESCRIPTION_LIMIT = 150;

function resolveCaseStudyTitle(edge: CaseStudyEdge) {
  return edge.node.caseStudy?.projectName || edge.node.title || 'Case Study';
}

function stripHtml(value: string) {
  return value.replace(/<[^>]*>/g, ' ').replace(/\s+/g, ' ').trim();
}

function truncateDescription(text: string, limit: number = DESCRIPTION_LIMIT) {
  const clean = stripHtml(text);
  if (clean.length <= limit) return clean;
  return clean.substring(0, limit).trim() + '...';
}

function resolveCaseStudyDescription(edge: CaseStudyEdge) {
  const value =
    edge.node.caseStudy?.shortPreviewDescription ||
    edge.node.caseStudy?.projectOverview ||
    edge.node.caseStudy?.ourSolution ||
    '';

  return truncateDescription(value);
}

function resolveCaseStudyImage(edge: CaseStudyEdge) {
  return (
    edge.node.featuredImage?.node?.mediaItemUrl ||
    edge.node.caseStudy?.projectImages?.firstImage?.mediaItemUrl ||
    null
  );
}

export default function CaseStudiesGrid({ studies }: CaseStudiesGridProps) {
  const [currentPage, setCurrentPage] = useState(1);

  if (!studies.length) {
    return (
      <section className="relative overflow-hidden bg-slate-50 py-10 md:py-14">
        <Container className="relative z-10">
          <div className="rounded-[1.5rem] border border-slate-200 bg-white p-10 text-center shadow-sm">
            <Layers3 className="mx-auto h-10 w-10 text-blue-500" />
            <h2 className="mt-4 text-2xl font-bold text-slate-950">
              No case studies found
            </h2>
            <p className="mt-2 text-slate-600">
              The CMS did not return any case studies for the selected category.
            </p>
          </div>
        </Container>
      </section>
    );
  }

  const totalPages = Math.ceil(studies.length / ITEMS_PER_PAGE);
  const startIdx = (currentPage - 1) * ITEMS_PER_PAGE;
  const endIdx = startIdx + ITEMS_PER_PAGE;
  const paginatedStudies = studies.slice(startIdx, endIdx);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    // Scroll to top of grid
    const gridElement = document.getElementById('case-studies-grid');
    if (gridElement) {
      gridElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section className="relative overflow-hidden bg-slate-50 py-10 md:py-14">
      <div className="absolute inset-0 pointer-events-none opacity-[0.03]">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid-pattern" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="1" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid-pattern)" />
        </svg>
      </div>

      <Container className="relative z-10">
        <div id="case-studies-grid" className="scroll-mt-20">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 lg:gap-8 auto-rows-auto">
            {paginatedStudies.map((study, idx) => {
              const title = resolveCaseStudyTitle(study);
              const description = resolveCaseStudyDescription(study);
              const image = resolveCaseStudyImage(study);
              const sector = study.node.caseStudy?.sector;
              const technologies = study.node.caseStudy?.technologiesCategory ?? [];
              const slug = study.node.slug;

              return (
                <motion.article
                  key={study.node.id || slug}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: idx * 0.08 }}
                  className="group relative overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition-all duration-500 hover:-translate-y-1 hover:shadow-xl col-span-1"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 to-cyan-50/50 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

                  <Link href={`/case-studies/${slug}`} className="relative z-10 flex h-full flex-col">
                    <div className="relative aspect-[16/10] w-full overflow-hidden bg-gradient-to-br from-slate-50 via-white to-slate-100 p-4">
                      {image ? (
                        <Image
                          src={image}
                          alt={title}
                          fill
                          className="object-contain p-2 transition-transform duration-700 group-hover:scale-[1.03]"
                          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                          unoptimized={image.startsWith('http')}
                        />
                      ) : (
                        <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-blue-100 via-white to-cyan-100">
                          <span className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">
                            Case Study
                          </span>
                        </div>
                      )}
                    </div>

                    <div className="flex flex-1 flex-col p-8">
                      <div className="mb-5 flex items-start justify-between gap-4">
                        <div>
                          {sector ? (
                            <span className="inline-flex items-center rounded-full bg-blue-50 px-3 py-1 text-[11px] font-bold uppercase tracking-[0.18em] text-blue-700 ring-1 ring-blue-100">
                              {sector}
                            </span>
                          ) : null}
                          <p className="mt-3 text-sm font-medium text-slate-500">
                            {study.node.caseStudy?.technology || 'Technology-led delivery'}
                          </p>
                        </div>
                        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-slate-200 bg-slate-50 transition-colors duration-300 group-hover:border-blue-500 group-hover:bg-blue-600">
                          <ArrowUpRight className="h-5 w-5 text-slate-400 transition-colors duration-300 group-hover:text-white" />
                        </div>
                      </div>

                      <div className="mb-7 flex-1">
                        <h3 className="font-bold leading-tight tracking-tight text-slate-950 transition-colors duration-300 group-hover:text-blue-600 text-2xl">
                          {title}
                        </h3>
                        {description ? (
                          <p className="mt-4 line-clamp-2 leading-relaxed text-slate-600">
                            {description}
                          </p>
                        ) : null}
                      </div>

                      {technologies.length ? (
                        <div className="mt-auto flex flex-wrap gap-2 border-t border-slate-100 pt-6">
                          {technologies.slice(0, 5).map((tag) => (
                            <span
                              key={tag}
                              className="rounded-md border border-slate-200 bg-slate-50 px-2.5 py-1 text-xs font-semibold text-slate-600"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      ) : null}
                    </div>
                  </Link>
                </motion.article>
              );
            })}
          </div>

          {/* Pagination Controls */}
          {totalPages > 1 && (
            <div className="mt-12 flex items-center justify-center gap-2">
              <button
                onClick={() => handlePageChange(currentPage - 1)}
                disabled={currentPage === 1}
                className="inline-flex items-center justify-center rounded-lg border border-slate-200 bg-white p-2 text-slate-600 transition-all hover:border-blue-500 hover:bg-blue-50 hover:text-blue-600 disabled:cursor-not-allowed disabled:opacity-50 disabled:hover:border-slate-200 disabled:hover:bg-white disabled:hover:text-slate-600"
                aria-label="Previous page"
              >
                <ChevronLeft className="h-5 w-5" />
              </button>

              <div className="flex items-center gap-1">
                {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                  <button
                    key={page}
                    onClick={() => handlePageChange(page)}
                    className={`inline-flex h-10 min-w-10 items-center justify-center rounded-lg text-sm font-semibold transition-all ${
                      currentPage === page
                        ? 'border border-blue-500 bg-blue-600 text-white shadow-md shadow-blue-500/30'
                        : 'border border-slate-200 bg-white text-slate-600 hover:border-blue-300 hover:bg-blue-50 hover:text-blue-600'
                    }`}
                    aria-label={`Go to page ${page}`}
                    aria-current={currentPage === page ? 'page' : undefined}
                  >
                    {page}
                  </button>
                ))}
              </div>

              <button
                onClick={() => handlePageChange(currentPage + 1)}
                disabled={currentPage === totalPages}
                className="inline-flex items-center justify-center rounded-lg border border-slate-200 bg-white p-2 text-slate-600 transition-all hover:border-blue-500 hover:bg-blue-50 hover:text-blue-600 disabled:cursor-not-allowed disabled:opacity-50 disabled:hover:border-slate-200 disabled:hover:bg-white disabled:hover:text-slate-600"
                aria-label="Next page"
              >
                <ChevronRight className="h-5 w-5" />
              </button>
            </div>
          )}

          {/* Results info */}
          <div className="mt-8 text-center text-sm text-slate-500">
            Showing {startIdx + 1}–{Math.min(endIdx, studies.length)} of {studies.length} case studies
          </div>
        </div>
      </Container>
    </section>
  );
}
