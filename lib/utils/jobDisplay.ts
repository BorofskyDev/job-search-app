import { Job } from '@/lib/hooks/jobs/useFetchJobs'
import { BodyStyle } from '@/lib/styles/jobStatusStyles'


const validStatuses: Record<BodyStyle, true> = {
  default: true,
  denied: true,
  interview: true,
  ghosted: true,
  offer: true,
  hired: true,
  prospect: true,
}

export function normaliseStatus(raw: string): BodyStyle {
  const k = raw.toLowerCase() as BodyStyle
  return validStatuses[k] ? k : 'default'
}

export function normalisePriority(raw?: string): 'high' | 'medium' | 'low' {
  if (!raw) return 'medium'
  const k = raw.toLowerCase()
  return k === 'high' || k === 'low' ? k : 'medium'
}


export function filterJobs(
  jobs: Job[],
  excludedStatus: Set<string>,
  excludedPriority: Set<string>
) {
  return jobs.filter((j) => {
    const status = normaliseStatus(j.status)
    const prio = normalisePriority(j.priority)
    return !excludedStatus.has(status) && !excludedPriority.has(prio)
  })
}

export type OrderBy = 'companyName' | 'appDate' | 'status' | 'priority'
export type OrderDir = 'asc' | 'desc'

export function sortJobs(jobs: Job[], by: OrderBy, dir: OrderDir) {
  const factor = dir === 'asc' ? 1 : -1

  return [...jobs].sort((a, b) => {
    let A: string | number = ''
    let B: string | number = ''

    switch (by) {
      case 'companyName':
        A = a.companyName.toLowerCase()
        B = b.companyName.toLowerCase()
        break
      case 'appDate':
        A = new Date(a.appDate).getTime()
        B = new Date(b.appDate).getTime()
        break
      case 'status':
        A = normaliseStatus(a.status)
        B = normaliseStatus(b.status)
        break
      case 'priority':
        A = normalisePriority(a.priority)
        B = normalisePriority(b.priority)
        break
    }

    return A > B ? factor : A < B ? -factor : 0
  })
}
