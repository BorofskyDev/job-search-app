'use client'

import { Job } from '@/lib/hooks/jobs/useFetchJobs'
import Modal from './Modal'
import {
  statusIcons,
  StatusIconVariant,
} from '@/components/ui/icons/job-status-icons'
import { jobStatusTextColorMap, BodyStyle } from '@/lib/styles/jobStatusStyles'
import { cn } from '@/lib/utils'
import CardText from '@/components/ui/typography/CardText'

interface Props {
  job: Job
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

export default function JobInfoModal({ job, isOpen, onClose }: Props) {
  const rawStatus = job.status?.toLowerCase()
  const status: BodyStyle = validStatuses.has(rawStatus as BodyStyle)
    ? (rawStatus as BodyStyle)
    : 'default'

  const IconComponent = statusIcons[status as StatusIconVariant]

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <div className='flex items-center justify-between mb-6'>
        <h2 className='text-3xl font-bold'>{job.companyName}</h2>
        {IconComponent && (
          <IconComponent
            className={cn(
              'w-10 h-10 fill-current',
              jobStatusTextColorMap[status]
            )}
          />
        )}
      </div>

      <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
        <CardText status='default'>
          <strong>Status:</strong> {job.status}
        </CardText>

        <CardText status='default' className='capitalize'>
          <strong>Priority:</strong> {job.priority || 'Medium'}
        </CardText>

        <CardText status='default'>
          <strong>Follow Up:</strong> {job.followUp ? 'Yes' : 'No'}
        </CardText>

        <CardText status='default'>
          <strong>Date:</strong> {new Date(job.appDate).toLocaleDateString()}
        </CardText>

        {job.salary && (
          <CardText status='default'>
            <strong>Salary:</strong> {job.salary}
          </CardText>
        )}

        {job.location && (
          <CardText status='default'>
            <strong>Location:</strong> {job.location}
          </CardText>
        )}

        {job.jobLink && (
          <CardText status='default'>
            <strong>Link:</strong>{' '}
            <a
              href={job.jobLink}
              target='_blank'
              rel='noopener noreferrer'
              className='underline text-blue-800 hover:text-blue-600'
            >
              View Job Posting
            </a>
          </CardText>
        )}

        {job.resumeURL && (
          <CardText status='default'>
            <strong>Resume:</strong>{' '}
            <a
              href={job.resumeURL}
              target='_blank'
              rel='noopener noreferrer'
              className='underline text-blue-800 hover:text-blue-600'
            >
              View Uploaded Resume
            </a>
          </CardText>
        )}

        {job.coverURL && (
          <CardText status='default'>
            <strong>Cover Letter:</strong>{' '}
            <a
              href={job.coverURL}
              target='_blank'
              rel='noopener noreferrer'
              className='underline text-blue-800 hover:text-blue-600'
            >
              View Uploaded Cover Letter
            </a>
          </CardText>
        )}
      </div>

      {job.notes && (
        <div className='mt-6'>
          <CardText status='default'>
            <strong>Notes:</strong>
          </CardText>
          <p className='text-sm text-slate-700 whitespace-pre-line'>
            {job.notes}
          </p>
        </div>
      )}

      {job.contacts.length > 0 && (
        <div className='mt-6'>
          <CardText status='default'>
            <strong>Contacts:</strong>
          </CardText>
          <ul className='text-sm text-slate-700 list-disc list-inside'>
            {job.contacts.map((c) => (
              <li key={c.id}>
                {c.name} {c.position && `– ${c.position}`}{' '}
                {c.email && `(${c.email})`}
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* Temp Edit/Delete */}
      <div className='flex justify-end gap-4 mt-8'>
        <button type='button'>Edit</button>
        <button type='button'>Delete</button>
      </div>
    </Modal>
  )
}
