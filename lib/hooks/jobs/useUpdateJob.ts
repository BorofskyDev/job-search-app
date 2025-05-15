// lib/hooks/jobs/useUpdateJob.ts
'use client'
import { db } from '@/lib/firebase'
import { doc, updateDoc, serverTimestamp } from 'firebase/firestore'
import { getStorage, ref, uploadBytes, getDownloadURL } from 'firebase/storage'
import { useState } from 'react'
import { JobPayload } from './useCreateJob'
import { ContactDraft } from './useJobForm'

type FireJob = Omit<JobPayload, 'resumeFile' | 'coverFile'> & {
  resumeURL?: string | null
  coverURL?: string | null
  contacts: ContactDraft[],
  updatedAt?: ReturnType<typeof serverTimestamp>
}

export function useUpdateJob() {
    const [loading, setLoading] = useState(false)
    const storage = getStorage()
    const updateJob = async (id: string, data: Partial<JobPayload>) => {
      setLoading(true)

      const { resumeFile, coverFile, ...rest } = data

      /** helper */
      const upload = async (
        file: File | null | undefined,
        folder: 'resumes' | 'covers'
      ) => {
        if (!file) return null
        const path = `${folder}/${id}_${Date.now()}_${file.name}`
        const fRef = ref(storage, path)
        await uploadBytes(fRef, file)
        return await getDownloadURL(fRef)
      }

      /* 3️⃣  Optional uploads */
      const [resumeURL, coverURL] = await Promise.all([
        upload(resumeFile, 'resumes'),
        upload(coverFile, 'covers'),
      ])

      /* 4️⃣  Build the Firestore patch */
      const patch: Partial<FireJob> = {
        ...rest,
        ...(resumeURL ? { resumeURL } : {}),
        ...(coverURL ? { coverURL } : {}),
        updatedAt: serverTimestamp(),
      }

      await updateDoc(doc(db, 'jobs', id), patch)
      setLoading(false)
    }
    

  return { updateJob, loading }
}
