'use client'

import { Heading } from '@/components/ui/typography'
import CardText from '@/components/ui/typography/CardText'
import { Job } from '@/lib/hooks/jobs/useFetchJobs'
import { cn } from '@/lib/utils'

type BodyStyle =
  | 'default'
  | 'denied'
  | 'interview'
  | 'ghosted'
  | 'offer'
  | 'hired'
  | 'prospect'

const bgMap: Record<BodyStyle, string> = {
  denied: 'bg-red-200 hover:bg-red-100',
  interview: 'bg-blue-200 hover:bg-blue-100',
  ghosted: 'bg-orange-200 hover:bg-orange-100',
  offer: 'bg-purple-200 hover:bg-purple-100',
  hired: 'bg-green-200 hover:bg-green-100',
  prospect: 'bg-yellow-200 hover:bg-yellow-100',
  default: 'bg-slate-200 hover:bg-slate-50',
}

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

  return (
    <div
      className={cn(
        'px-4 py-2 border-2 border-slate-950 rounded-4xl shadow-md hover:shadow-2xl transition-all duration-200 ease-in-out cursor-pointer',
        backgroundClasses
      )}
    >
      <Heading element='h3' title={job.companyName} style='subsection-title' />
      <CardText status='default'>
        {status === 'prospect'
          ? `Prospect added: ${new Date(job.appDate).toLocaleDateString()}`
          : `Applied: ${new Date(job.appDate).toLocaleDateString()}`}
      </CardText>
      <CardText status={status}>{job.status}</CardText>
    </div>
  )
}
