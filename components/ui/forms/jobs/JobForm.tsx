// components/ui/forms/jobs/JobForm.tsx   ←  (rename makes intent clearer)
'use client'

import { useEffect } from 'react'
import { useJobForm } from '@/lib/hooks/jobs/useJobForm'
import type { JobPayload } from '@/lib/hooks/jobs/useCreateJob'

import Heading from '@/components/ui/typography/Heading'
import BodyText from '@/components/ui/typography/BodyText'
import Button from '@/components/ui/buttons/Button'
import RequiredFields from './RequiredFields'
import OptionalFields from './OptionalFields'
import NotesField from './NotesField'

interface JobFormProps {
  initialValues?: Partial<JobPayload>
  /** parent decides whether this calls createJob() or updateJob() */
  onSave: (data: JobPayload) => Promise<void>
  onCancel: () => void
  /** disabled state for the Save button */
  loading?: boolean
  heading?: string // optional custom title
}

export default function JobForm({
  initialValues,
  onSave,
  onCancel,
  loading = false,
  heading = 'Create a New Job Entry',
}: JobFormProps) {
  const { form, update, reset, addContact, setAll } = useJobForm()

  /* hydrate the local form once */
  useEffect(() => {
    if (initialValues) setAll(initialValues)
  }, [initialValues, setAll])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    await onSave(form) // <-- parent handles create *or* update
    reset()
  }

  return (
    <form className='w-full space-y-8' onSubmit={handleSubmit}>
      {/* Header */}
      <div className='space-y-4'>
        <Heading element='h3' style='subsection-title' title={heading} />
        <BodyText style='muted'>
          Required fields are marked with&nbsp;*
        </BodyText>
      </div>

      {/* Field groups */}
      <RequiredFields form={form} update={update} />
      <OptionalFields form={form} update={update} addContact={addContact} />
      <NotesField form={form} update={update} />

      {/* Actions */}
      <div className='flex justify-end gap-4 pt-4'>
        <Button variant='cancel' type='button' icon='cancel' onClick={onCancel}>
          Cancel
        </Button>
        <Button variant='save' type='submit' icon='save' disabled={loading}>
          Save
        </Button>
      </div>
    </form>
  )
}
