// lib/hooks/jobs/useFetchJobs.ts
'use client'

import { useEffect, useState } from 'react'
import {
  collection,
  query,
  where,
  // getDocs,
  onSnapshot,
  orderBy,
  Timestamp,
} from 'firebase/firestore'
import { db } from '@/lib/firebase'
import { useAuth } from '@/context/auth/AuthProvider'
import type { ContactDraft } from './useJobForm'

export interface Job {
  id: string
  companyName: string
  appDate: string
  status: string
  priority: string
  followUp: boolean
  salary?: string
  location?: string
  jobLink?: string
  notes?: string
  resumeURL?: string
  coverURL?: string
  contacts: ContactDraft[]
  createdAt?: Timestamp
}

export function useFetchJobs() {
  const { user } = useAuth()
  const [jobs, setJobs] = useState<Job[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    if (!user) return

    const q = query(
      collection(db, 'jobs'),
      where('userId', '==', user.uid),
      orderBy('createdAt', 'desc')
    )

    const unsub = onSnapshot(q, (snap) => {
      const list = snap.docs.map((d) => ({ id: d.id, ...d.data() })) as Job[]
      setJobs(list)
      setLoading(false)
    })

    return unsub  

    // const fetchJobs = async () => {
    //   setLoading(true)
    //   const q = query(
    //     collection(db, 'jobs'),
    //     where('userId', '==', user.uid),
    //     orderBy('createdAt', 'desc')
    //   )
    //   const snapshot = await getDocs(q)
    //   const fetched: Job[] = snapshot.docs.map((doc) => ({
    //     id: doc.id,
    //     ...doc.data(),
    //   })) as Job[]
    //   setJobs(fetched)
    //   setLoading(false)
    // }

    // fetchJobs()
  }, [user])

  return { jobs, loading }
}
