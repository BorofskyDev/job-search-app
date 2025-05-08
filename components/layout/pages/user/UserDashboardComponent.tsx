// components/user/UserDashboardComponent.tsx
'use client'

import { useState } from 'react'
import Heading from '@/components/ui/typography/Heading'
import BodyText from '@/components/ui/typography/BodyText'
import { useAuth } from '@/context/auth/AuthProvider'
import DashboardJobSection from './sections/DashboardJobSection'
import { JobFilterProvider } from '../../tables/jobs/filters'

export default function UserDashboardComponent() {
  const { user, logout } = useAuth()
  const [view, setView] = useState<'card' | 'table'>('card')

  return (
    <section className='w-full max-w-6xl mx-auto px-4 py-10 '>
      <Heading element='h1' style='page-title' title='Job Search Dashboard' />
      <BodyText style='lead'>{`Welcome, ${user?.email ?? 'User'}`}</BodyText>


      <JobFilterProvider>
    
        <DashboardJobSection view={view} setView={setView} logout={logout} />
      </JobFilterProvider>
    </section>
  )
}
