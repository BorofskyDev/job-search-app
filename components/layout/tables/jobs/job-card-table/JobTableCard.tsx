// components/layout/tables/card-table/JobTableCard.tsx
'use client'

import { useFetchJobs } from '@/lib/hooks/jobs/useFetchJobs'
import JobCard from './JobCard'

export default function JobTableCard() {
  const { jobs, loading } = useFetchJobs()

  if (loading) return <p>Loading...</p>
  if (!jobs.length) return <p>No jobs found.</p>

  return (
    <div className='grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
      {jobs.map((job) => (
        <JobCard key={job.id} job={job} />
      ))}
    </div>
  )
}
