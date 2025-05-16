'use client'

import { useState } from 'react'
import { db } from '@/lib/firebase'
import { addDoc, collection, serverTimestamp } from 'firebase/firestore'
import { getStorage, ref, uploadBytes, getDownloadURL } from 'firebase/storage'
import { useAuth } from '@/context/auth/AuthProvider'
import type { ContactDraft } from './useJobForm'

export interface JobPayload {
  companyName: string
  appDate: string // ISO string
  status: string
  priority: string
  followUp: boolean
  salary?: string
  location?: string
  jobLink?: string
  notes?: string
  resumesFiles?: File | null
  coverLettersFiles?: File | null
  contacts: ContactDraft[]
}

export function useCreateJob() {
  const { user } = useAuth()
  const [loading, setLoading] = useState(false)
  const storage = getStorage() // lazy because firebase.ts doesn’t export storage

  const createJob = async (payload: JobPayload) => {
    if (!user) throw new Error('Not authenticated')
    setLoading(true)
    try {
      // 1. optional uploads
      const upload = async (
        file: File | null,
        folder: 'resumes' | 'covers'
      ) => {
        if (!file) return null
        const path = `${folder}/${user.uid}/${Date.now()}_${file.name}`
        const fileRef = ref(storage, path)
        await uploadBytes(fileRef, file)
        return await getDownloadURL(fileRef)
      }

      const resumeURL = await upload(payload.resumesFiles ?? null, 'resumes')
      const coverURL = await upload(payload.coverLettersFiles ?? null, 'covers')

      // 2. Firestore doc
      await addDoc(collection(db, 'jobs'), {
        userId: user.uid,
        companyName: payload.companyName,
        appDate: payload.appDate,
        status: payload.status,
        priority: payload.priority,
        followUp: payload.followUp,
        salary: payload.salary || null,
        location: payload.location || null,
        jobLink: payload.jobLink || null,
        notes: payload.notes || null,
        resumeURL,
        coverURL,
        contacts: payload.contacts,
        createdAt: serverTimestamp(),
      })
    } finally {
      setLoading(false)
    }
  }

  return { createJob, loading }
}
