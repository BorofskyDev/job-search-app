'use client'

import { useState } from 'react'
import { AnimatePresence } from 'framer-motion'
import JobRow from './JobRow'
import JobInfoModal from '@/components/layout/modals/JobInfoModal'
import { useDisplayJobs } from '@/lib/hooks/jobs/useDisplayJobs'

export default function JobTable() {
  const jobs = useDisplayJobs()

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
      <div
        role='table'
        aria-label='Job application table'
        className='hidden lg:block overflow-auto max-w-full max-h-[70vh] my-10 rounded-xl'
      >
        {/* header row */}
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

        {/* animated body */}
        <AnimatePresence initial={false}>
          {jobs.map((job) => (
            <JobRow
              key={job.id}
              job={job}
              onClick={() => setSelectedJobKey(job.id.toString())}
            />
          ))}
        </AnimatePresence>
      </div>

      {/* modal */}
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
