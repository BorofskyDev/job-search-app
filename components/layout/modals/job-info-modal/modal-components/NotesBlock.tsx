
import { BodyText, Heading } from '@/components/ui/typography'

export default function NotesBlock({ notes, className }: { notes: string; className?: string }) {
  if (!notes) return null
  return (
    <div className={`max-h-1/2 py-6 border-1 rounded-3xl  bg-slate-100 shadow-lg  translate-y-4 overflow-auto scroll-auto ${className}`}>
      <Heading element='h3' style='paragraph-title' title='Notes' />
      <BodyText style='body' className='whitespace-pre-line'>{notes}</BodyText>
    </div>
  )
}
