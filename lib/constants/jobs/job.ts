// constants/job.ts
export const statusOptions = [
  { value: 'Prospect', label: 'Prospect' },
  { value: 'Applied', label: 'Applied' },
  { value: 'Interview', label: 'Interview' },
  { value: 'Denied', label: 'Denied' },
  { value: 'Ghosted', label: 'Ghosted' },
  { value: 'Offer', label: 'Offer' },
  { value: 'Hired', label: 'Hired' },
] as const

export const priorityOptions = [
  { value: 'low', label: 'Low' },
  { value: 'medium', label: 'Medium' },
  { value: 'high', label: 'High' },
] as const
