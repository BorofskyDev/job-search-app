// components/ui/forms/JobCreationForm.tsx
'use client'

import { toast } from 'react-toastify'
import { useJobForm } from '@/lib/hooks/job-creation/useJobsForm'
import { useCreateJob } from '@/lib/hooks/job-creation/useCreateJob'
import Heading from '@/components/ui/typography/Heading'
import BodyText from '@/components/ui/typography/BodyText'
import Button from '@/components/ui/buttons/Button'
import RequiredFields from './RequiredFields'
import OptionalFields from './OptionalFields'
import NotesField from './NotesField'

export default function JobCreationForm() {
  const { form, update, reset } = useJobForm()
  const { createJob, loading } = useCreateJob()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    try {
      await createJob(form)
      toast.success('Job saved!')
      reset()
    } catch (err) {
      toast.error((err as Error).message)
    }
  }

  return (
    <form className='w-full space-y-8' onSubmit={handleSubmit}>
      <div className='space-y-4'>
        <Heading style='subsection-title' title='Create a New Job Entry' />
        <BodyText style='muted'>
          Fill out the details below. Required fields are marked with *
        </BodyText>
      </div>

      <RequiredFields form={form} update={update} />
      <OptionalFields form={form} update={update} />
      <NotesField form={form} update={update} />

      {/* Actions */}
      <div className='flex justify-end gap-4 pt-4'>
        <Button variant='cancel' type='reset' icon='cancel'>
          Clear
        </Button>
        <Button variant='save' type='submit' icon='save' disabled={loading}>
          Save Job
        </Button>
      </div>
    </form>
  )
}
