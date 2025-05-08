/* components/tables/jobs/filters/FilterProvider.tsx */
'use client'

import { createContext, useContext, useMemo, useState, ReactNode } from 'react'
import { Job } from '@/lib/hooks/jobs/useFetchJobs'

/* tag unions already exist in your codebase; import instead of redefining */
export type JobStatus = Job['status'] // 'Applied' | 'Interview' | …
export type JobPriority = NonNullable<Job['priority']> // 'High' | 'Medium' | 'Low'

type OrderBy = 'companyName' | 'appDate' | 'status' | 'priority'
type OrderDir = 'asc' | 'desc'

interface FilterState {
  status: Set<JobStatus>
  priority: Set<JobPriority>
  orderBy: OrderBy
  orderDir: OrderDir
}

interface JobFilterContextType extends FilterState {
  /* mutators */
  toggleStatus: (s: JobStatus) => void
  togglePriority: (p: JobPriority) => void
  clearFilters: () => void
  setOrdering: (key: OrderBy, dir: OrderDir) => void
}

const JobFilterContext = createContext<JobFilterContextType | null>(null)

export function JobFilterProvider({ children }: { children: ReactNode }) {
  const [status, setStatus] = useState<Set<JobStatus>>(new Set())
  const [priority, setPriority] = useState<Set<JobPriority>>(new Set())
  const [orderBy, setOrderBy] = useState<OrderBy>('appDate')
  const [orderDir, setOrderDir] = useState<OrderDir>('desc')

  /* ------- mutators ------- */
  const toggleStatus = (s: JobStatus) =>
    setStatus((prev) =>
      prev.has(s)
        ? new Set([...prev].filter((x) => x !== s))
        : new Set(prev).add(s)
    )

  const togglePriority = (p: JobPriority) =>
    setPriority((prev) =>
      prev.has(p)
        ? new Set([...prev].filter((x) => x !== p))
        : new Set(prev).add(p)
    )

  const clearFilters = () => {
    setStatus(new Set())
    setPriority(new Set())
  }

  const setOrdering = (key: OrderBy, dir: OrderDir) => {
    setOrderBy(key)
    setOrderDir(dir)
  }

  /* memo so consumers don’t re-render on every keystroke elsewhere */
  const value = useMemo(
    () => ({
      status,
      priority,
      orderBy,
      orderDir,
      toggleStatus,
      togglePriority,
      clearFilters,
      setOrdering,
    }),
    [status, priority, orderBy, orderDir]
  )

  return (
    <JobFilterContext.Provider value={value}>
      {children}
    </JobFilterContext.Provider>
  )
}

/* ---------- single public hook ---------- */
export function useJobFilters() {
  const ctx = useContext(JobFilterContext)
  if (!ctx)
    throw new Error('useJobFilters must be used inside <JobFilterProvider>')
  return ctx
}
