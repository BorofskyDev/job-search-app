'use client'

import { useState } from 'react'
import { AnimatePresence } from 'framer-motion'
import { useFilteredJobs } from '@/lib/hooks/jobs/useFilteredJobs'

import JobCard from './JobCard'
import JobInfoModal from '@/components/layout/modals/JobInfoModal'

export default function JobTableCard() {
  /* already filtered by the shared hook */
  const jobs = useFilteredJobs()

  const [selectedJobKey, setSelectedJobKey] = useState<string | null>(null)

  if (jobs.length === 0) {
    return (
      <div className='p-6 my-10 text-center text-lg'>
        All filters deselected
      </div>
    )
  }

  return (
    <>
      <div className='my-10'>
        <div className='grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
          <AnimatePresence initial={false}>
            {jobs.map((job) => (
              <JobCard
                key={job.id}
                job={job}
                onClick={() => setSelectedJobKey(job.id.toString())}
              />
            ))}
          </AnimatePresence>
        </div>
      </div>

      {selectedJobKey && (
        <JobInfoModal
          jobKey={selectedJobKey}
          isOpen
          onClose={() => setSelectedJobKey(null)}
        />
      )}
    </>
  )
}
