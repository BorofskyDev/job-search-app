// hooks/useJobForm.ts
import { useState } from 'react'

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
  resumeFile: File | null
  coverFile: File | null
}

export function useJobForm() {
  const [form, setForm] = useState<JobForm>({
    companyName: '',
    appDate: '',
    status: 'Applied',
    priority: 'medium',
    followUp: false,
    jobTitle: '',
    salary: '',
    location: '',
    jobLink: '',
    notes: '',
    resumeFile: null,
    coverFile: null,
  })

  const update = <K extends keyof JobForm>(key: K, value: JobForm[K]) =>
    setForm((prev) => ({ ...prev, [key]: value }))

  const reset = () =>
    setForm((prev) => ({
      ...prev,
      companyName: '',
      appDate: '',
      status: 'Applied',
      priority: 'medium',
      followUp: false,
      jobTitle: '',
      salary: '',
      location: '',
      jobLink: '',
      notes: '',
      resumeFile: null,
      coverFile: null,
    }))

  return { form, update, reset }
}
