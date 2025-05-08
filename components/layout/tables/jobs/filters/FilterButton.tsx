/* components/tables/jobs/filters/FilterButton.tsx */
'use client'

import { cn } from '@/lib/utils'
import { ReactNode } from 'react'

interface Props {
  active: boolean
  onClick: () => void
  bgActive: string // Tailwind classes for active bg (e.g. bg-blue-200)
  bgInactive: string // Tailwind classes for inactive bg
  children: ReactNode // icon + label
}

export default function FilterButton({
  active,
  onClick,
  bgActive,
  bgInactive,
  children,
}: Props) {
  return (
    <button
      onClick={onClick}
      className={cn(
        'mx-1 focused border flex flex-col items-center gap-1 rounded-lg px-3 py-2 text-xs font-medium transition-all duration-150 cursor-pointer',
        active ? bgActive : bgInactive,
        active ? 'inset-shadow-sm/70 scale-95' : 'opacity-40 scale-105 hover:opacity-90 hover:inset-shadow-2xs/50 hover:scale-100'
      )}
      aria-pressed={active}
    >
      {children}
    </button>
  )
}
