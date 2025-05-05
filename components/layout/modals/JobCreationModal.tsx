// components/layout/modals/JobCreationModal.tsx
'use client'

import Modal from './Modal'
import JobCreationForm from '@/components/ui/forms/JobCreationForm'
import { useState } from 'react'
import Button from '@/components/ui/buttons/Button'

export default function JobCreationModal() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      <Button variant='modal' onClick={() => setIsOpen(true)}>
        Create Job
      </Button>

      <Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>
        <JobCreationForm />
      </Modal>
    </>
  )
}
