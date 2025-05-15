'use client'
import {
  statusIcons,
  StatusIconVariant,
} from '@/components/ui/icons/job-status-icons'
import { Heading } from '@/components/ui/typography'
import { jobStatusTextColorMap } from '@/lib/styles/jobStatusStyles'
import { BodyStyle } from '@/lib/styles/jobStatusStyles'
import { cn } from '@/lib/utils'

interface JobHeaderProps {
  companyName: string
  status: BodyStyle
  className?: string
}

export default function JobHeader({ companyName, status, className }: JobHeaderProps) {
  const Icon = statusIcons[status as StatusIconVariant]
  return (
    <div className={`flex items-center justify-between mb-6 ${className}`}>
      <Heading element='h2' style='subsection-title' title={companyName} />
      {Icon && (
        <Icon
          className={cn(
            'w-10 h-10 fill-current',
            jobStatusTextColorMap[status]
          )}
        />
      )}
    </div>
  )
}
