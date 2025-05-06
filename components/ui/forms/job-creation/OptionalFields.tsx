// components/ui/forms/job-creation/OptionalFields.tsx
'use client'

import Input from '@/components/ui/inputs/Input'
import FileUploadButton from '@/components/ui/buttons/FileUploadButton'
import Button from '@/components/ui/buttons/Button'
import { JobForm } from '@/lib/hooks/job-creation/useJobsForm'

type UpdateFn = <K extends keyof JobForm>(key: K, value: JobForm[K]) => void

interface Props {
  form: Pick<
    JobForm,
    'jobTitle' | 'salary' | 'location' | 'jobLink' | 'resumeFile' | 'coverFile'
  >
  update: UpdateFn
}

export default function OptionalFields({ form, update }: Props) {
  return (
    <details className='space-y-6 rounded-2xl bg-sky-50 p-4 shadow-inner'>
      <summary className='cursor-pointer font-semibold text-slate-900'>
        Optional Details
      </summary>

      {/* Text inputs */}
      <div className='grid gap-6 md:grid-cols-2'>
        <Input
          id='jobTitle'
          label='Job Title'
          value={form.jobTitle}
          onChange={(e) => update('jobTitle', e.target.value)}
        />
        <Input
          id='salary'
          label='Salary (USD)'
          type='number'
          value={form.salary}
          onChange={(e) => update('salary', e.target.value)}
        />
        <Input
          id='location'
          label='Location'
          value={form.location}
          onChange={(e) => update('location', e.target.value)}
        />
        <Input
          id='jobLink'
          label='Job Link'
          type='url'
          value={form.jobLink}
          onChange={(e) => update('jobLink', e.target.value)}
        />
      </div>

      {/* File uploads */}
      <div className='grid gap-6 md:grid-cols-2'>
        <FileUploadButton
          id='resume'
          label='Resume Sent'
          accept='.pdf,.doc,.docx'
          file={form.resumeFile}
          onChange={(file) => update('resumeFile', file)}
        />
        <FileUploadButton
          id='coverLetter'
          label='Cover Letter Sent'
          accept='.pdf,.doc,.docx'
          file={form.coverFile}
          onChange={(file) => update('coverFile', file)}
        />
      </div>

      {/* Contacts placeholder */}
      <div className='space-y-2'>
        <Button variant='modal' type='button' icon='add'>
          Add Contact
        </Button>
        <p className='text-sm italic text-slate-500'>No contacts added yet.</p>
      </div>
    </details>
  )
}
