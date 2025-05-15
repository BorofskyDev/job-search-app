'use client'

import { useState } from 'react'
import { AnimatePresence } from 'framer-motion'
import { useFetchJobs } from '@/lib/hooks/jobs/useFetchJobs'
import { useJobFilters } from '../filters'
import JobRow from './JobRow'
import JobInfoModal from '@/components/layout/modals/JobInfoModal'
import { BodyStyle } from '@/lib/styles/jobStatusStyles'

export default function JobTable() {
  const { jobs } = useFetchJobs()
  const { status: excludedStatus, priority: excludedPriority } = useJobFilters()

  // store only the job ID in state (as a string)
  const [selectedJobKey, setSelectedJobKey] = useState<string | null>(null)

  const validStatuses = new Set<BodyStyle>([
    'default',
    'denied',
    'interview',
    'ghosted',
    'offer',
    'hired',
    'prospect',
  ])

  const filteredJobs = jobs.filter((job) => {
    const raw = job.status.toLowerCase()
    const statusKey = validStatuses.has(raw as BodyStyle) ? (raw as BodyStyle) : 'default'

    const priorityKey = ( job.priority ? job.priority.toLowerCase() : 'medium') as 'high' | 'medium' | 'low'

    return ( 
      !excludedStatus.has(statusKey) &&
      !excludedPriority.has(priorityKey)
    )

  })

  return (
    <>
      {filteredJobs.length === 0 ? (
        <div className='p-6 my-10 text-center text-lg'>
          All filters deselected
        </div>
      ) : (
        <div
          role='table'
          aria-label='Job application table'
          className='hidden lg:block overflow-auto max-w-full max-h-[70vh] my-10 rounded-xl'
        >
          {/* header */}
          <div
            role='row'
            className='grid grid-cols-6 sticky top-0 bg-blue-800 text-slate-50 font-semibold px-4 py-2 rounded-t-xl'
          >
            <span role='columnheader' className='text-center'>
              Icon
            </span>
            <span role='columnheader'>Company</span>
            <span role='columnheader'>Date</span>
            <span role='columnheader'>Status</span>
            <span role='columnheader'>Priority</span>
            <span role='columnheader'>Follow Up</span>
          </div>

          {/* rows: now using filteredJobs */}
          <AnimatePresence initial={false}>
            {filteredJobs.map((job) => (
              <JobRow
                key={job.id}
                job={job}
                onClick={() => setSelectedJobKey(job.id.toString())}
              />
            ))}
          </AnimatePresence>
        </div>
      )}

      {selectedJobKey && (
        <JobInfoModal
          jobKey={selectedJobKey}
          isOpen={true}
          onClose={() => setSelectedJobKey(null)}
        />
      )}
    </>
  )
}
