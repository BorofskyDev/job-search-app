// components/user/UserDashboardComponent.tsx
'use client'

import Heading from '@/components/ui/typography/Heading'
import BodyText from '@/components/ui/typography/BodyText'
import Button from '@/components/ui/buttons/Button'
import { useAuth } from '@/context/auth/AuthProvider'
import JobCreationModal from '@/components/layout/modals/JobCreationModal'
import JobTableCard from '@/components/layout/tables/jobs/job-card-table/JobTableCard'
import JobTable from '../../tables/jobs/job-table/JobTable'

export default function UserDashboardComponent() {
  const { user, logout } = useAuth()

  return (
    <section className='w-full max-w-6xl mx-auto px-4 py-10'>
      <Heading element='h1' style='page-title' title='Job Search Dashboard' />
      <BodyText style='lead'>{`Welcome, ${user?.email ?? 'User'}`}</BodyText>

      {/* Top-level actions */}
      <div className='my-8 flex flex-wrap gap-4'>
        <Button variant='secondary' onClick={logout}>
          Logout
        </Button>
      </div>

      <JobCreationModal />
      <JobTableCard />
      <JobTable />
    </section>
  )
}
