
import { Heading } from '@/components/ui/typography'

export default function NotesBlock({ notes, className }: { notes: string; className?: string }) {
  if (!notes) return null
  return (
    <div className={className}>
      <Heading element='h3' style='paragraph-title' title='Notes' />
      <p className='text-sm text-slate-700 whitespace-pre-line'>{notes}</p>
    </div>
  )
}
