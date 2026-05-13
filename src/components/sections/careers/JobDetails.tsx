'use client'

import Container from '@/components/ui/Container'
import JobOverview from './JobOverview'
import type { CareerNode } from './types'

interface JobDetailsProps {
  data: CareerNode
}

export default function JobDetails({ data }: JobDetailsProps) {
  const description = data?.careers?.jobDescription ?? ''

  return (
    <section className="relative bg-white py-10 md:py-14">
      <Container>
        <div className="grid gap-10 lg:grid-cols-12 lg:gap-14">
          <div className="lg:col-span-8">
            <div className="inline-flex items-center gap-2 rounded-full bg-blue-50 px-4 py-2 text-[0.6875rem] font-bold uppercase tracking-[0.2em] text-blue-700">
              <span className="h-1.5 w-1.5 rounded-full bg-blue-500" />
              Role Overview
            </div>
            <h2 className="mt-4 text-2xl font-bold text-navy-900 md:text-4xl">
              Job Details
            </h2>

            {description ? (
              <article
                className="job-description mt-8"
                dangerouslySetInnerHTML={{ __html: description }}
              />
            ) : (
              <p className="mt-8 rounded-2xl border border-dashed border-gray-200 bg-gray-50 p-8 text-center text-gray-500">
                Description is being updated. Please check back shortly.
              </p>
            )}
          </div>

          <div className="lg:col-span-4">
            <JobOverview data={data} />
          </div>
        </div>
      </Container>
    </section>
  )
}
