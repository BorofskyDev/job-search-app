/* components/tables/jobs/filters/FilterPriority.tsx */
'use client'

import FilterButton from './FilterButton'
import { useJobFilters } from './FilterProvider'
import {
  PriorityIcons,
  PriorityIconVariant,
} from '@/components/ui/icons/job-priority-icons'

const prioList = ['high', 'medium', 'low'] as const
type Prio = (typeof prioList)[number]

const prioBg: Record<Prio, string> = {
  high: 'bg-rose-200',
  medium: 'bg-amber-200',
  low: 'bg-teal-200',
}

export default function FilterPriority() {
  const { priority, togglePriority } = useJobFilters()

  const isActive = (p: Prio) => !priority.has(p)

  return (
    <div className='flex flex-wrap gap-2 '>
      {prioList.map((p) => {
        /* look up the matching icon: 'High' -> 'high', etc. */
        const Icon = PriorityIcons[p as PriorityIconVariant]

        return (
          <FilterButton
            key={p}
            active={isActive(p)}
            onClick={() => togglePriority(p)}
            bgActive={prioBg[p]}
            bgInactive='bg-slate-200'
          >
            {Icon && <Icon className='h-6 w-6' aria-hidden />}
            <span className='capitalize'>{p}</span>
          </FilterButton>
        )
      })}
    </div>
  )
}
