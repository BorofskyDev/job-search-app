'use client'

import { useFetchJobs } from '@/lib/hooks/jobs/useFetchJobs'
import Modal from '../Modal'
import { BodyStyle } from '@/lib/styles/jobStatusStyles'
import { Job } from './modal-components/types'
import {
  Actions,
  ContactsList,
  DetailsGrid,
  JobHeader,
  NotesBlock,
} from './modal-components'
import { useUpdateJob } from '@/lib/hooks/jobs/useUpdateJob'
import { useDeleteJob } from '@/lib/hooks/jobs/useDeleteJob'
import { JobPayload } from '@/lib/hooks/jobs/useCreateJob'
import { useState } from 'react'
import JobForm from '@/components/ui/forms/jobs/JobForm'

interface Props {
  jobKey: string
  isOpen: boolean
  onClose: () => void
}

const validStatuses = new Set<BodyStyle>([
  'default',
  'denied',
  'interview',
  'ghosted',
  'offer',
  'hired',
  'prospect',
])

export default function JobInfoModal({ jobKey, isOpen, onClose }: Props) {
  const { jobs } = useFetchJobs()
  const { updateJob } = useUpdateJob()
  const { deleteJob } = useDeleteJob()
  const [editMode, setEditMode] = useState(false)

  const job = jobs.find((j) => j.id.toString() === jobKey) as Job | undefined
  if (!job) return null

  // normalize status for styling
  const rawStatus = job.status?.toLowerCase()
  const status: BodyStyle = validStatuses.has(rawStatus as BodyStyle)
    ? (rawStatus as BodyStyle)
    : 'default'

  const handleSave = async (values: JobPayload) => {
    await updateJob(job.id, values)
    setEditMode(false)
  }

  const handleCancel = () => setEditMode(false)

  const handleDelete = async () => {
    const ok = window.confirm(
      `Delete “${job.companyName}” application? This can’t be undone.`
    )
    if (!ok) return
    try {
      await deleteJob(job.id)
      onClose() // modal disappears; list auto-updates via listener
    } catch (e) {
      console.error(e)
      alert('Delete failed. Try again.')
    }
  }

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      {editMode ? (
        <JobForm
          initialValues={job}
          onSave={handleSave}
          onCancel={handleCancel}
        />
      ) : (
        <div className='flex lg:grid lg:grid-cols-2 lg:auto-rows-auto items-center flex-col gap-6 lg:gap-y-10'>
          <JobHeader
            companyName={job.companyName}
            status={status}
            className='col-span-2 place-self-center gap-8'
          />
          <DetailsGrid job={job} className='col-1 row-2 self-start' />
          <NotesBlock notes={job.notes ?? ''} className='col-2 row-2 self-start' />
          <ContactsList contacts={job.contacts ?? ''} className='col-2' />
          <Actions
            className='col-2'
            onEdit={() => setEditMode(true)}
            onDelete={handleDelete}
          />
        </div>
      )}
    </Modal>
  )
}
