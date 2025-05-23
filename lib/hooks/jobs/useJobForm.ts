// hooks/useJobForm.ts
import { useCallback, useState } from 'react'

export type ContactDraft = {
  id: string
  name: string
  position?: string
  phone?: string
  email?: string
  linkedIn?: string
  website?: string
  notes?: string
}

export type JobForm = {
  companyName: string
  appDate: string
  status: string
  priority: string
  followUp: boolean
  jobTitle: string
  salary: string
  location: string
  jobLink: string
  notes: string
  resumesFiles: File | null
  coverLettersFiles: File | null
  contacts: ContactDraft[]
}

export function useJobForm() {
  const [form, setForm] = useState<JobForm>({
    companyName: '',
    appDate: '',
    status: 'Applied',
    priority: 'Medium',
    followUp: false,
    jobTitle: '',
    salary: '',
    location: '',
    jobLink: '',
    notes: '',
    resumesFiles: null,
    coverLettersFiles: null,
    contacts: [],
  })

  const removeContact = (id: string): void =>
    setForm(
      (f: JobForm): JobForm => ({
        ...f,
        contacts: f.contacts.filter((c: ContactDraft) => c.id !== id),
      })
    )
  const addContact = (c: ContactDraft) =>
    setForm((f) => ({ ...f, contacts: [...f.contacts, c] }))

  const update = <K extends keyof JobForm>(key: K, value: JobForm[K]) =>
    setForm((prev) => ({ ...prev, [key]: value }))

  const setAll = useCallback(
    (values: Partial<JobForm>) => setForm((f) => ({ ...f, ...values })),
    []
  )

  const reset = () =>
    setForm((prev) => ({
      ...prev,
      companyName: '',
      appDate: '',
      status: 'Applied',
      priority: 'Medium',
      followUp: false,
      jobTitle: '',
      salary: '',
      location: '',
      jobLink: '',
      notes: '',
      resumesFiles: null,
      coverLetterFiles: null,
      contacts: [],
    }))

  return { form, update, setAll, reset, removeContact, addContact }
}
