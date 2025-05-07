'use client'

import { Heading } from '@/components/ui/typography'
import CardText from '@/components/ui/typography/CardText'
import { Job } from '@/lib/hooks/jobs/useFetchJobs'
import { cn } from '@/lib/utils'
import {
  statusIcons,
  StatusIconVariant,
} from '@/components/ui/icons/job-status-icons'
import {
  jobStatusTextColorMap,
  BodyStyle,
  bgMap,
} from '@/lib/styles/jobStatusStyles'

interface Props {
  job: Job
}

export default function JobCard({ job }: Props) {
  const validStatuses = new Set<BodyStyle>([
    'default',
    'denied',
    'interview',
    'ghosted',
    'offer',
    'hired',
    'prospect',
  ])

  const rawStatus = job.status?.toLowerCase()
  const status: BodyStyle = validStatuses.has(rawStatus as BodyStyle)
    ? (rawStatus as BodyStyle)
    : 'default'

  const backgroundClasses = bgMap[status]

  const IconComponent = statusIcons[status as StatusIconVariant]

  return (
    <div
      className={cn(
        'px-8 py-4 border-2 border-slate-950 rounded-4xl shadow-md hover:shadow-2xl transition-all duration-200 ease-in-out cursor-pointer hover:scale-105',
        backgroundClasses
      )}
    >
      <Heading element='h3' title={job.companyName} style='subsection-title' />
      <div className='flex items-center justify-between'>
        <div className='flex flex-col gap-2'>
          <CardText status='default'>
            {status === 'prospect'
              ? `Prospect added: ${new Date(job.appDate).toLocaleDateString()}`
              : `Applied: ${new Date(job.appDate).toLocaleDateString()}`}
          </CardText>
          <CardText status={status}>
            <strong>Status: </strong>
            {job.status ? job.status : 'Applied'}
          </CardText>
          <CardText status={status} className='capitalize'>
            <strong>Priority: </strong>
            {job.priority ? job.priority : 'Medium'}
          </CardText>
          <CardText status={status}>
            <strong>Follow Up: </strong>
            {job.followUp ? 'Yes' : 'No'}
          </CardText>
        </div>
        {IconComponent && (
          <IconComponent
            className={cn(
              'w-10 h-10 fill-current',
              jobStatusTextColorMap[status]
            )}
          />
        )}
      </div>
    </div>
  )
}
