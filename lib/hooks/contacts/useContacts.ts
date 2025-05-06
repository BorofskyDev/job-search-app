'use client'
import { addDoc, collection, Timestamp } from 'firebase/firestore'
import { db } from '@/lib/firebase'
import { useAuth } from '@/context/auth/AuthProvider'

export interface ContactPayload {
  companyName: string
  name: string
  position?: string
  phone?: string
  email?: string
  linkedIn?: string
  website?: string
  notes?: string
}

export function useContacts() {
  const { user } = useAuth()

  const createContact = async (payload: ContactPayload) => {
    if (!user) throw new Error('Not authenticated')
    await addDoc(collection(db, 'contacts'), {
      ...payload,
      userId: user.uid,
      createdAt: Timestamp.now(),
    })
  }

  return { createContact }
}
