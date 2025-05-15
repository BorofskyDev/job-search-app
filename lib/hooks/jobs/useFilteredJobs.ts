
import { useFetchJobs } from '@/lib/hooks/jobs/useFetchJobs'
import { useJobFilters } from '@/components/layout/tables/jobs/filters'
import { filterJobs } from '@/lib/utils/jobFilters'

export function useFilteredJobs() {
  const { jobs } = useFetchJobs()
  const { status: excludedStatus, priority: excludedPriority } = useJobFilters()

  return filterJobs(jobs, excludedStatus, excludedPriority)
}
