'use client'

import { useFetchJobs, Job } from '@/lib/hooks/jobs/useFetchJobs'
import JobCard from './JobCard'
import JobInfoModal from '@/components/layout/modals/JobInfoModal'
import { useState } from 'react'

export default function JobTableCard() {
  const { jobs } = useFetchJobs()
  const [selectedJob, setSelectedJob] = useState<Job | null>(null)

  return (
    <>
      <div className='my-10 grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
        {jobs.map((job) => (
          <JobCard key={job.id} job={job} onClick={() => setSelectedJob(job)} />
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
