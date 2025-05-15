// components/layout/modals/JobCreationModal.tsx
'use client'

import { useState } from 'react'
import Modal from './Modal'
import Button from '@/components/ui/buttons/Button'
import JobForm from '@/components/ui/forms/jobs/JobForm'
import { useCreateJob, type JobPayload } from '@/lib/hooks/jobs/useCreateJob'

export default function JobCreationModal() {
  const [isOpen, setIsOpen] = useState(false)
  const { createJob, loading } = useCreateJob()

  /* ───── handlers ───── */
  const handleSave = async (data: JobPayload) => {
    await createJob(data) // ⬅️ create the document
    setIsOpen(false) // close modal on success
  }

  const handleCancel = () => setIsOpen(false)

  /* ───── UI ───── */
  return (
    <>
      <Button variant='modal' onClick={() => setIsOpen(true)}>
        Create Job
      </Button>

      <Modal isOpen={isOpen} onClose={handleCancel}>
        <JobForm
          onSave={handleSave}
          onCancel={handleCancel}
          loading={loading}
        />
      </Modal>
    </>
  )
}
