'use client'

import Input from '@/components/ui/inputs/Input'
import { useMemo } from 'react'

interface Props {
  form: { notes?: string | null }
  update: <K extends 'notes'>(key: K, value: string) => void
}

export default function NotesField({ form, update }: Props) {
  const notes = form.notes ?? ''
  const charCount = useMemo(() => notes.length, [notes])

  return (
    <div className='space-y-1'>
      <Input
        id='notes'
        label='Notes'
        textarea
        rows={6}
        value={notes}
        onChange={(e) => update('notes', e.target.value)}
      />
      <p className='text-right text-xs text-slate-500'>{charCount}/1 000</p>
    </div>
  )
}
