'use client'
import { useState } from 'react'
import Modal from './Modal'
import Button from '@/components/ui/buttons/Button'
import ContactCreationForm from '@/components/ui/forms/ContactCreationForm'
import { toast } from 'react-toastify'
import type { ContactDraft } from '@/lib/hooks/job-creation/useJobForm'

export default function ContactCreationModal({
  companyName,
  onAdd,
}: {
  companyName: string
  onAdd: (c: ContactDraft) => void
}) {
  const [open, setOpen] = useState(false)

  const handleSave = async (data: Omit<ContactDraft, 'id'>): Promise<void> => {
    try {
      onAdd({ ...data, id: Date.now().toString() })
      toast.success('Contact saved')
      setOpen(false)
    } catch (err) {
      toast.error((err as Error).message)
    }
  }

  return (
    <>
      <Button
        variant='modal'
        type='button'
        icon='add'
        onClick={() => setOpen(true)}
      >
        Add Contact
      </Button>

      <Modal isOpen={open} onClose={() => setOpen(false)}>
        <ContactCreationForm
          companyName={companyName}
          onSave={handleSave}
          onCancel={() => setOpen(false)}
        />
      </Modal>
    </>
  )
}
