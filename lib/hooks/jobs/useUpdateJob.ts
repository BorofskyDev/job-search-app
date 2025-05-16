// lib/hooks/jobs/useUpdateJob.ts
'use client'
import { db } from '@/lib/firebase'
import { useAuth } from '@/context/auth/AuthProvider'

import { doc, updateDoc, serverTimestamp } from 'firebase/firestore'
import { getStorage, ref, uploadBytes, getDownloadURL } from 'firebase/storage'
import { useState } from 'react'
import { JobPayload } from './useCreateJob'
import { ContactDraft } from './useJobForm'

type FireJob = Omit<JobPayload, 'resumesFiles' | 'coverLetterFiles'> & {
  resumeURL?: string | null
  coverURL?: string | null
  contacts: ContactDraft[]
  updatedAt?: ReturnType<typeof serverTimestamp>
}

export function useUpdateJob() {
  const { user } = useAuth()
  const [loading, setLoading] = useState(false)
  const storage = getStorage()
  const updateJob = async (id: string, data: Partial<JobPayload>) => {
    if (!user) throw new Error('Not Authenticated')

    setLoading(true)
    try {
      const { resumesFiles, coverLettersFiles, ...rest } = data

      /** helper */
      const upload = async (
        file: File | null | undefined,
        folder: 'resumes' | 'covers'
      ) => {
        if (!file) return null
        const path = `${folder}/${user.uid}/${id}_${Date.now()}_${file.name}`
        const fileRef = ref(storage, path)
        await uploadBytes(fileRef, file)
        return getDownloadURL(fileRef)
      }

      /* 3️⃣  Optional uploads */
      const [resumeURL, coverURL] = await Promise.all([
        upload(resumesFiles, 'resumes'),
        upload(coverLettersFiles, 'covers'),
      ])

      /* 4️⃣  Build the Firestore patch */
      const patch: Partial<FireJob> = {
        ...rest,
        ...(resumeURL ? { resumeURL } : {}),
        ...(coverURL ? { coverURL } : {}),
        updatedAt: serverTimestamp(),
      }

      await updateDoc(doc(db, 'jobs', id), patch)
    } finally {
      setLoading(false)
    }
  }
  return { updateJob, loading }
}
