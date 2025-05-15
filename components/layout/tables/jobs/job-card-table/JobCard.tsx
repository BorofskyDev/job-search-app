'use client'

import { Heading } from '@/components/ui/typography'
import CardText from '@/components/ui/typography/CardText'
import { Job } from '@/lib/hooks/jobs/useFetchJobs'
import {
  statusIcons,
  StatusIconVariant,
} from '@/components/ui/icons/job-status-icons'
import {
  jobStatusTextColorMap,
  BodyStyle,
  bgMap,
} from '@/lib/styles/jobStatusStyles'
import { cn } from '@/lib/utils'
import { FadeScale } from '@/components/ui/animations/FadeScale'

interface Props {
  job: Job
  onClick: () => void
}

const validStatuses: Record<BodyStyle, true> = {
  default: true,
  denied: true,
  interview: true,
  ghosted: true,
  offer: true,
  hired: true,
  prospect: true,
}

export default function JobCard({ job, onClick }: Props) {
  /* normalise status to one of our colour keys */
  const rawStatus = job.status?.toLowerCase()
  const status: BodyStyle = validStatuses[rawStatus as BodyStyle]
    ? (rawStatus as BodyStyle)
    : 'default'

  const IconComponent = statusIcons[status as StatusIconVariant]

  const fontWeight =
    job.priority === 'high'
      ? 'font-black'
      : job.priority === 'low'
      ? 'font-thin'
      : ''

  return (
    <FadeScale
      as='button'
      whileHover={{ scale: 1.05 }}
      onClick={onClick}
      className={cn(
        'focused min-w-fit px-8 py-4 border-2 border-slate-950 rounded-4xl shadow-md hover:shadow-2xl cursor-pointer',
        bgMap[status],
        fontWeight
      )}
    >
      <Heading element='h3' title={job.companyName} style='subsection-title' />
      <div className='flex items-center justify-between'>
        <div className='flex flex-col items-start gap-2'>
          <CardText status='default'>
            {status === 'prospect'
              ? `Prospect Added: ${new Date(job.appDate).toLocaleDateString()}`
              : `Applied: ${new Date(job.appDate).toLocaleDateString()}`}
          </CardText>

          <CardText status={status}>
            <strong>Status: </strong>
            {job.status ?? 'Applied'}
          </CardText>

          <CardText status={status} className='capitalize'>
            <strong>Priority: </strong>
            {job.priority ?? 'Medium'}
          </CardText>

          <CardText status={status}>
            <strong>Follow Up: </strong>
            {job.followUp ? 'Yes' : 'No'}
          </CardText>
        </div>

        {IconComponent && (
          <IconComponent
            className={cn(
              'w-14 h-14 fill-current',
              jobStatusTextColorMap[status]
            )}
          />
        )}
      </div>
    </FadeScale>
  )
}
