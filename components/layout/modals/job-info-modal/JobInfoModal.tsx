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
import { useDeleteJob } from '@/lib/hooks/jobs/useDeleteJob'

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
  const { deleteJob} = useDeleteJob()

  const job = jobs.find((j) => j.id.toString() === jobKey) as Job | undefined
  if (!job) return null

  // normalize status for styling
  const rawStatus = job.status?.toLowerCase()
  const status: BodyStyle = validStatuses.has(rawStatus as BodyStyle)
    ? (rawStatus as BodyStyle)
    : 'default'


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
      <div className="flex lg:grid lg:grid-cols-2 lg:auto-rows-auto items-center flex-col gap-6 lg:gap-y-10">

      <JobHeader companyName={job.companyName} status={status} className='col-1' />
      <DetailsGrid job={job} className='col-1' />
      <NotesBlock notes={job.notes ?? ''} className='col-2 row-1' />
      <ContactsList contacts={job.contacts ?? ''} className='col-2' />
      <Actions
      className='col-2'
        onEdit={() => {
          /* TODO */
        }}
        onDelete={handleDelete}
      />
      </div>
    </Modal>
  )
}
