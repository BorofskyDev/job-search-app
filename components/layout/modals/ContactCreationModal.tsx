'use client'
import { useState } from 'react'
import Modal from './Modal'
import Button from '@/components/ui/buttons/Button'
import ContactCreationForm from '@/components/ui/forms/ContactCreationForm'
import { useContacts } from '@/lib/hooks/contacts/useContacts'
import { toast } from 'react-toastify'

export default function ContactCreationModal({
  companyName,
}: {
  companyName: string
}) {
  const [open, setOpen] = useState(false)
  const { createContact } = useContacts()

  const handleSave = async (payload: Parameters<typeof createContact>[0]) => {
    try {
      await createContact(payload)
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
