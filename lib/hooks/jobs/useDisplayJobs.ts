

import { useFetchJobs } from '@/lib/hooks/jobs/useFetchJobs'
import { useJobFilters } from '@/components/layout/tables/jobs/filters'
import { filterJobs, sortJobs } from '@/lib/utils/jobDisplay'

export function useDisplayJobs() {
  const { jobs } = useFetchJobs()
  const {
    status: excludedStatus,
    priority: excludedPriority,
    orderBy,
    orderDir,
  } = useJobFilters()

  const filtered = filterJobs(jobs, excludedStatus, excludedPriority)
  return sortJobs(filtered, orderBy, orderDir)
}
