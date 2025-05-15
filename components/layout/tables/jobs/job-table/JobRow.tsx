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
import { FadeScale } from '@/components/ui/animations/FadeScale'

interface Props {
  job: Job
  onClick: () => void
}

const rowBgClass = bgMap
const validStatuses: Record<BodyStyle, true> = {
  default: true,
  denied: true,
  interview: true,
  ghosted: true,
  offer: true,
  hired: true,
  prospect: true,
}

export default function JobRow({ job, onClick }: Props) {
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

  const cell = 'max-w-[15ch] truncate'

  return (
    <FadeScale
      as='button'
      role='row'
      onClick={onClick}
      whileHover={{ scaleY: 1.05 }}
      className={cn(
        'focused grid grid-cols-6 items-center gap-2 w-full text-left py-5 px-4 my-3 border border-slate-950 rounded-xl shadow hover:shadow-2xl cursor-pointer',
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

      <span role='cell' className={cell}>
        {job.companyName}
      </span>
      <span role='cell' className={cell}>
        {new Date(job.appDate).toLocaleDateString()}
      </span>
      <span role='cell' className={`capitalize ${cell}`}>
        {job.status}
      </span>
      <span role='cell' className={cn('capitalize', cell)}>
        {job.priority || 'Medium'}
      </span>
      <span role='cell'>{job.followUp ? 'Yes' : 'No'}</span>
    </FadeScale>
  )
}
