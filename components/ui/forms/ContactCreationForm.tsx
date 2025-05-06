'use client'
import { useState } from 'react'
import Input from '@/components/ui/inputs/Input'
import Button from '@/components/ui/buttons/Button'
import { ContactPayload } from '@/lib/hooks/contacts/useContacts'

interface Props {
  companyName: string
  onSave: (data: ContactPayload) => Promise<void>
  onCancel: () => void
}

export default function ContactCreationForm({
  companyName,
  onSave,
  onCancel,
}: Props) {
  const [data, setData] = useState<ContactPayload>({
    companyName,
    name: '',
    position: '',
    phone: '',
    email: '',
    linkedIn: '',
    website: '',
    notes: '',
  })
  const [saving, setSaving] = useState(false)

  const handleChange =
    (field: keyof ContactPayload) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
      setData({ ...data, [field]: e.target.value })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setSaving(true)
    await onSave(data)
    setSaving(false)
  }

  return (
    <form onSubmit={handleSubmit} className='space-y-4'>
      <Input
        id='name'
        label='Name *'
        value={data.name}
        onChange={handleChange('name')}
        required
      />
      <Input
        id='position'
        label='Position'
        value={data.position ?? ''}
        onChange={handleChange('position')}
      />
      <Input
        id='phone'
        label='Phone'
        value={data.phone ?? ''}
        onChange={handleChange('phone')}
      />
      <Input
        id='email'
        type='email'
        label='Email'
        value={data.email ?? ''}
        onChange={handleChange('email')}
      />
      <Input
        id='linkedIn'
        label='LinkedIn'
        value={data.linkedIn ?? ''}
        onChange={handleChange('linkedIn')}
      />
      <Input
        id='website'
        label='Website'
        value={data.website ?? ''}
        onChange={handleChange('website')}
      />
      <Input
        id='notes'
        label='Notes'
        textarea
        rows={3}
        value={data.notes ?? ''}
        onChange={handleChange('notes')}
      />

      <div className='flex justify-end gap-3 pt-2'>
        <Button variant='cancel' type='button' icon='cancel' onClick={onCancel}>
          Cancel
        </Button>
        <Button
          variant='save'
          type='submit'
          icon='save'
          disabled={saving || !data.name.trim()}
        >
          {saving ? 'Saving…' : 'Save'}
        </Button>
      </div>
    </form>
  )
}
