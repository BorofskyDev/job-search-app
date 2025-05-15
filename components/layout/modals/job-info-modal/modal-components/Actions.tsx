// Actions.tsx
'use client'

import Button from '@/components/ui/buttons/Button'
import { Heading } from '@/components/ui/typography'
import { cn } from '@/lib/utils'

interface ActionsProps {
  onEdit: () => void
  onDelete: () => void
  className?: string
}
export default function Actions({ onEdit, onDelete, className }: ActionsProps) {
  return (
    <div
      className={cn(
        'flex flex-col items-center lg:items-end gap-4 mt-10 py-8 border-t-1 border-slate-950 ',
        className
      )}
    >
      <Heading element='h3' style='paragraph-title' title='Actions' />
      <div className='flex flex-wrap justify-center gap-4 lg:justify-end'>
        <Button variant='edit' icon='edit' onClick={onEdit}>
          Edit
        </Button>
        <Button variant='delete' icon='delete' onClick={onDelete}>
          Delete
        </Button>
      </div>
    </div>
  )
}
