'use client'

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

interface Props {
  job: Job
  onClick: () => void
}

/** map each status to the bg/hover classes you want */
const rowBgClass = bgMap

export default function JobRow({ job, onClick }: Props) {
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

  const IconComponent = statusIcons[status as StatusIconVariant]

  const fontWeight =
    job.priority === 'high'
      ? 'font-black'
      : job.priority === 'low'
      ? 'font-thin'
      : ''

  const cellClass = 'max-w-[15ch] truncate'

  return (
    <button
      role='row'
      onClick={onClick}
      className={cn(
        'focused  grid grid-cols-6 items-center gap-2 w-full text-left py-5 px-4 my-3 border-1 border-slate-950 rounded-xl shadow hover:shadow-2xl hover:scale-y-105 cursor-pointer transition-all duration-200',
        rowBgClass[status],
        fontWeight
      )}
    >
      <span role='cell' className='flex justify-center'>
        {IconComponent && (
          <IconComponent
            className={cn(
              'w-8 h-8 fill-current',
              jobStatusTextColorMap[status]
            )}
          />
        )}
      </span>

      <span role='cell' className={cellClass}>
        {job.companyName}
      </span>
      <span role='cell' className={cellClass}>
        {new Date(job.appDate).toLocaleDateString()}
      </span>
      <span role='cell' className={`capitalize ${cellClass}`}>
        {job.status}
      </span>
      <span role='cell' className={cn('capitalize', cellClass)}>
        {job.priority || 'Medium'}
      </span>
      <span role='cell'>{job.followUp ? 'Yes' : 'No'}</span>
    </button>
  )
}
