import { BodyStyle } from '@/lib/styles/jobStatusStyles'
import { Job } from '@/lib/hooks/jobs/useFetchJobs'

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
  const key = raw.toLowerCase() as BodyStyle
  return validStatuses[key] ? key : 'default'
}

export function normalisePriority(raw?: string): 'high' | 'medium' | 'low' {
  if (!raw) return 'medium'
  const key = raw.toLowerCase()
  return key === 'high' || key === 'low' ? key : 'medium'
}

export function filterJobs(
  jobs: Job[],
  excludedStatus: Set<string>,
  excludedPriority: Set<string>
) {
  return jobs.filter((job) => {
    const statusKey = normaliseStatus(job.status)
    const priorityKey = normalisePriority(job.priority)

    return !excludedStatus.has(statusKey) && !excludedPriority.has(priorityKey)
  })
}
