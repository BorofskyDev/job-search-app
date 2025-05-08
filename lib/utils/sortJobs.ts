import { Job } from '@/lib/hooks/jobs/useFetchJobs'

export function sortJobs<K extends 'companyName' | 'appDate' | 'status' | 'priority'>(
  jobs: Job[],
  key: K,
  dir: 'asc' | 'desc'
) {
  return [...jobs].sort((a, b) => {
    const aVal = a[key]
    const bVal = b[key]
    const order = aVal > bVal ? 1 : aVal < bVal ? -1 : 0
    return dir === 'asc' ? order : -order
  })
}
