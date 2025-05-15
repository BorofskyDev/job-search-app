// DetailsGrid.tsx
'use client'
import CustomLink from '@/components/ui/links/CustomLink'
import InfoItem from './shared/InfoItem'
import type { Job } from './types'
import { Heading } from '@/components/ui/typography'

interface DetailsGridProps {
  job: Job
  className?: string
}

export default function DetailsGrid({ job, className }: DetailsGridProps) {
  return (
    <div
      className={`flex flex-col justify-center align-center gap-6 ${className}`}
    >
        <Heading element='h3' style='paragraph-title' title='Details' />
      <div className='bg-slate-100 py-4 px-6 border-1 border-slate-950 rounded-2xl shadow-lg flex flex-wrap gap-4 lg:gap-8 justify-center lg:justify-start'>
        <InfoItem label='Status'>{job.status || 'Applied'}</InfoItem>
        <InfoItem label='Priority'>{job.priority || 'Medium'}</InfoItem>
        <InfoItem label='Follow Up'>{job.followUp ? 'Yes' : 'No'}</InfoItem>
        <InfoItem label='Job Title'>{job.jobTitle ? job.jobTitle : ''}</InfoItem>
        <InfoItem label='Date'>
          {new Date(job.appDate).toLocaleDateString()}
        </InfoItem>

        {job.salary && <InfoItem label='Salary'>{job.salary}</InfoItem>}
        {job.location && <InfoItem label='Location'>{job.location}</InfoItem>}
      </div>

      <div className='px-4 py-6 mt-4 border-t-1 border-b-1 border-slate-950 flex flex-wrap gap-4 lg:gap-8 justify-center lg:justify-start'>
        {job.jobLink && (
          <InfoItem label='Link'>
            <CustomLink external href={job.jobLink}>
              View Job Posting
            </CustomLink>
          </InfoItem>
        )}

        {job.resumeURL && (
          <InfoItem label='Resume'>
            <CustomLink href={job.resumeURL}>View Uploaded Resume</CustomLink>
          </InfoItem>
        )}

        {job.coverURL && (
          <InfoItem label='Cover Letter'>
            <CustomLink href={job.coverURL}>
              View Uploaded Cover Letter
            </CustomLink>
          </InfoItem>
        )}
      </div>
    </div>
  )
}
