'use client'

import { useState } from 'react'
import { useFetchJobs } from '@/lib/hooks/jobs/useFetchJobs'
import { useJobFilters } from '../filters'
import JobRow from './JobRow'
import JobInfoModal from '@/components/layout/modals/JobInfoModal'

export default function JobTable() {
  const { jobs } = useFetchJobs()
  const { status: excludedStatus, priority: excludedPriority } = useJobFilters()

  // store only the job ID in state (as a string)
  const [selectedJobKey, setSelectedJobKey] = useState<string | null>(null)

  // exclusion-based filtering
  const filteredJobs = jobs.filter(
    (job) =>
      !excludedStatus.has(job.status.toLowerCase()) &&
      !excludedPriority.has((job.priority ?? '').toLowerCase())
  )

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
          {filteredJobs.map((job) => (
            <JobRow
              key={job.id}
              job={job}
              onClick={() => setSelectedJobKey(job.id.toString())}
            />
          ))}
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
