export type Contact = {
  id: string
  name: string
  position?: string
  phone?: string
  email?: string
  linkedIn?: string
  website?: string
  notes?: string
}

export type Job = {
  id: string
  companyName: string
  appDate: string
  status: string
  priority: string
  followUp: boolean
  jobTitle?: string
  salary?: string
  location?: string
  jobLink?: string
  notes?: string
  resumeURL?: string
  coverURL?: string
  contacts: Contact[]
}
