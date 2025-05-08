'use client'

import { useState } from 'react'
import { useFetchJobs, Job } from '@/lib/hooks/jobs/useFetchJobs'
import JobRow from './JobRow'
import JobInfoModal from '@/components/layout/modals/JobInfoModal'



export default function JobTable() {
  const { jobs } = useFetchJobs()
  const [selectedJob, setSelectedJob] = useState<Job | null>(null)

  return (
    <>
      
      <div
        role='table'
        aria-label='Job application table'
        className='hidden lg:block overflow-auto max-w-full max-h-[70vh] my-10 rounded-xl '
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
          <span role='columnheader'>Follow&nbsp;Up</span>
        </div>

        {/* rows */}
        {jobs.map((job) => (
          <JobRow key={job.id} job={job} onClick={() => setSelectedJob(job)} />
        ))}
      </div>

      {selectedJob && (
        <JobInfoModal
          job={selectedJob}
          isOpen={!!selectedJob}
          onClose={() => setSelectedJob(null)}
        />
      )}
    </>
  )
}
