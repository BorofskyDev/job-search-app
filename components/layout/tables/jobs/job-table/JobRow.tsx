'use client'

import { Job } from '@/lib/hooks/jobs/useFetchJobs'
import { motion } from 'framer-motion'
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

const rowVariants = {
  hidden: { opacity: 0, scale: 0 },
  visible: { opacity: 1, scale: 1 },
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

  const cellClass = 'max-w-[15ch] truncate'

  return (
    <motion.button
      role='row'
      onClick={onClick}
      layout
      variants={rowVariants}
      whileHover={{ scaleY: 1.1 }}
      transition={{
        opacity: { duration: 0.2, ease: 'easeInOut' },
        scale: { duration: 0.2, ease: 'easeInOut' },
        layout: { duration: 0.2, ease: 'easeInOut' },
      }}
      initial='hidden'
      animate='visible'
      exit='hidden'
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
    </motion.button>
  )
}
