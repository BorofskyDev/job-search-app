// lib/hooks/jobs/useDeleteJob.ts
'use client'

import { deleteDoc, doc } from 'firebase/firestore'
import { db } from '@/lib/firebase'
import { useAuth } from '@/context/auth/AuthProvider'

export function useDeleteJob() {
  const { user } = useAuth()

  const deleteJob = async (jobId: string) => {
    if (!user) throw new Error('User not authenticated')
    await deleteDoc(doc(db, 'jobs', jobId)) // single collection; adjust path if nested
  }

  return { deleteJob }
}
