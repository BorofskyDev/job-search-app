// components/ui/forms/JobCreationForm.tsx
'use client'

import { useState } from 'react'
import Heading from '@/components/ui/typography/Heading'
import BodyText from '@/components/ui/typography/BodyText'
import Input from '@/components/ui/inputs/Input'
import Button from '@/components/ui/buttons/Button'
import DropdownInput from '../inputs/DropdownInput'
import FileUploadButton from '../buttons/FileUploadButton'
import Checkbox from '../inputs/Checkbox'

export default function JobCreationForm() {
  const [companyName, setCompanyName] = useState('')
  const [appDate, setAppDate] = useState('')
  const [status, setStatus] = useState<
    | 'Applied'
    | 'Prospect'
    | 'Interview'
    | 'Denied'
    | 'Ghosted'
    | 'Offer'
    | 'Hired'
  >('Applied')
  const [priority, setPriority] = useState<'low' | 'medium' | 'high'>('medium')
  const [followUp, setFollowUp] = useState(false)

  const [jobTitle, setJobTitle] = useState('')
  const [salary, setSalary] = useState('')
  const [location, setLocation] = useState('')
  const [jobLink, setJobLink] = useState('')

  const [resumeFile, setResumeFile] = useState<File | null>(null)
  const [coverFile, setCoverFile] = useState<File | null>(null)

  const [notes, setNotes] = useState('')

  return (
    <form className='w-full space-y-8'>
      <div className='space-y-4'>
        <Heading style='subsection-title' title='Create a New Job Entry' />
        <BodyText style='muted'>
          Fill out the details below. Required fields are marked with *
        </BodyText>
      </div>

      {/* ─────────────────── Required Fields ─────────────────── */}
      <div className='grid gap-6 md:grid-cols-2'>
        <Input
          label='Company Name *'
          id='companyName'
          value={companyName}
          onChange={(e) => setCompanyName(e.target.value)}
          required
        />

        <Input
          label='Application Date *'
          id='appDate'
          type='date'
          value={appDate}
          onChange={(e) => setAppDate(e.target.value)}
          required
        />

        <DropdownInput
          id='status'
          label='Status'
          value={status}
          required
          onChange={(v) => setStatus(v as typeof status)}
          options={[
            { value: 'Prospect', label: 'Prospect' },
            { value: 'Applied', label: 'Applied' },
            { value: 'Interview', label: 'Interview' },
            { value: 'Denied', label: 'Denied' },
            { value: 'Ghosted', label: 'Ghosted' },
            { value: 'Offer', label: 'Offer' },
            { value: 'Hired', label: 'Hired' },
          ]}
        />

        <DropdownInput
          id='priority'
          label='Priority'
          value={priority}
          required
          onChange={(v) => setPriority(v as typeof priority)}
          options={[
            { value: 'low', label: 'Low' },
            { value: 'medium', label: 'Medium' },
            { value: 'high', label: 'High' },
          ]}
        />
      </div>

      {/* Follow‑Up */}
      <Checkbox
        label='Requires Follow-Up?'
        checked={followUp}
        onChange={setFollowUp}
      />

      {/* ─────────────────── Optional Fields ─────────────────── */}
      <details className='space-y-6 rounded-2xl bg-sky-50 p-4 shadow-inner'>
        <summary className='cursor-pointer font-semibold text-slate-900'>
          Optional Details
        </summary>
        <div className='grid gap-6 md:grid-cols-2'>
          <Input
            label='Job Title'
            id='jobTitle'
            value={jobTitle}
            onChange={(e) => setJobTitle(e.target.value)}
          />
          <Input
            label='Salary (USD)'
            id='salary'
            type='number'
            value={salary}
            onChange={(e) => setSalary(e.target.value)}
          />
          <Input
            label='Location'
            id='location'
            value={location}
            onChange={(e) => setLocation(e.target.value)}
          />
          <Input
            label='Job Link'
            id='jobLink'
            type='url'
            value={jobLink}
            onChange={(e) => setJobLink(e.target.value)}
          />
        </div>

        {/* Uploads */}
        <div className='grid gap-6 md:grid-cols-2'>
          <FileUploadButton
            id='resume'
            label='Resume Sent'
            accept='.pdf, .doc, .docx'
            file={resumeFile}
            onChange={setResumeFile}
          />

          <FileUploadButton
            id='coverLetter'
            label='Cover Letter Sent'
            accept='.pdf, .doc, .docx'
            file={coverFile}
            onChange={setCoverFile}
          />
        </div>

        {/* Contacts */}
        <div className='space-y-2'>
          <Button variant='modal' type='button' icon='add'>
            Add Contact
          </Button>
          {/* Placeholder for Contact chips/list */}
          <p className='text-sm italic text-slate-500'>
            No contacts added yet.
          </p>
        </div>
      </details>

      {/* Notes */}
      <Input
        id='notes'
        label='Notes'
        textarea
        rows={6}
        value={notes}
        onChange={(e) => setNotes(e.target.value)}
      />

      {/* Actions */}
      <div className='flex justify-end gap-4 pt-4'>
        <Button variant='cancel' type='reset' icon='cancel'>
          Clear
        </Button>
        <Button variant='save' type='submit' icon='save'>
          Save Job
        </Button>
      </div>
    </form>
  )
}
