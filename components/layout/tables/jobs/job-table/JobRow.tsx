
'use client'

import { Job } from '@/lib/hooks/jobs/useFetchJobs'
import {
  statusIcons,
  StatusIconVariant,
} from '@/components/ui/icons/job-status-icons'
import { jobStatusTextColorMap, BodyStyle } from '@/lib/styles/jobStatusStyles'
import { cn } from '@/lib/utils'

interface Props {
  job: Job
  onClick: () => void
}

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

  return (
    <tr
      onClick={onClick}
      className={cn(
        'cursor-pointer hover:bg-slate-100 transition-colors duration-150',
        fontWeight
      )}
    >
      <td className='py-2 px-4'>{job.companyName}</td>
      <td className='py-2 px-4'>
        {new Date(job.appDate).toLocaleDateString()}
      </td>
      <td className='py-2 px-4 capitalize'>{job.status}</td>
      <td className='py-2 px-4 capitalize'>{job.priority || 'Medium'}</td>
      <td className='py-2 px-4'>{job.followUp ? 'Yes' : 'No'}</td>
      <td className='py-2 px-4 text-center'>
        {IconComponent && (
          <IconComponent
            className={cn(
              'w-5 h-5 inline fill-current',
              jobStatusTextColorMap[status]
            )}
          />
        )}
      </td>
    </tr>
  )
}
