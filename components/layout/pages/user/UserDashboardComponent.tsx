// components/user/UserDashboardComponent.tsx
'use client'

import Heading from '@/components/ui/typography/Heading'
import BodyText from '@/components/ui/typography/BodyText'
import Button from '@/components/ui/buttons/Button'
import { useAuth } from '@/context/auth/AuthProvider'
import JobCreationModal from '@/components/layout/modals/JobCreationModal'
import JobTableCard from '@/components/layout/tables/jobs/job-card-table/JobTableCard'

export default function UserDashboardComponent() {
  const { user, logout } = useAuth()

  return (
    <section className='w-full max-w-6xl mx-auto px-4 py-10'>
      <Heading style='page-title' title={`Welcome, ${user?.email ?? 'User'}`} />
      <BodyText style='lead'>This is your job tracking dashboard.</BodyText>

      {/* Top-level actions */}
      <div className='mt-8 flex flex-wrap gap-4'>
    
        <Button variant='secondary' onClick={logout}>
          Logout
        </Button>
      </div>

      <JobCreationModal />
   <JobTableCard />

    </section>
  )
}
