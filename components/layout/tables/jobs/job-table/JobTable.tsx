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
      <div className='overflow-x-auto my-10 rounded-xl border border-slate-300'>
        <table className='min-w-full text-left text-sm table-auto'>
          <thead className='bg-slate-200 text-slate-900 font-semibold'>
            <tr>
              <th className='py-2 px-4'>Company</th>
              <th className='py-2 px-4'>Date</th>
              <th className='py-2 px-4'>Status</th>
              <th className='py-2 px-4'>Priority</th>
              <th className='py-2 px-4'>Follow Up</th>
              <th className='py-2 px-4 text-center'>Icon</th>
            </tr>
          </thead>
          <tbody className='divide-y divide-slate-300'>
            {jobs.map((job) => (
              <JobRow
                key={job.id}
                job={job}
                onClick={() => setSelectedJob(job)}
              />
            ))}
          </tbody>
        </table>
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
