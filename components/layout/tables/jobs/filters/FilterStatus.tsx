/* components/tables/jobs/filters/FilterStatus.tsx */
'use client'

import { statusIcons, StatusIconVariant } from '@/components/ui/icons/job-status-icons'
import {
  bgMap,
  BodyStyle,
  jobStatusTextColorMap,
} from '@/lib/styles/jobStatusStyles'
import FilterButton from './FilterButton'
import { useJobFilters } from './FilterProvider'

const statusList: BodyStyle[] = [
  'default',
  'denied',
  'interview',
  'ghosted',
  'offer',
  'hired',
  'prospect',
]

export default function FilterStatus() {
  const { status, toggleStatus } = useJobFilters()

  // active if the inclusion set is empty OR contains the status
  const isActive = (s: BodyStyle) => status.size === 0 || status.has(s)

  return (
    <div className='flex flex-wrap gap-2'>
      {statusList.map((s) => {
        const Icon = statusIcons[s as StatusIconVariant]
        return (
          <FilterButton
            key={s}
            active={isActive(s)}
            onClick={() => toggleStatus(s)}
            bgActive={bgMap[s]}
            bgInactive='bg-slate-200'
          >
            {Icon && (
              <Icon
                className={`h-6 w-6 ${jobStatusTextColorMap[s]}`}
                aria-hidden
              />
            )}
            <span className='capitalize'>{s}</span>
          </FilterButton>
        )
      })}
    </div>
  )
}
