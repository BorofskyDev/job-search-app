import JobCreationModal from '@/components/layout/modals/JobCreationModal'
import FilterBar from '@/components/layout/tables/jobs/filters/FilterBar'
import JobTableCard from '@/components/layout/tables/jobs/job-card-table/JobTableCard'
import JobTable from '@/components/layout/tables/jobs/job-table/JobTable'
import Button from '@/components/ui/buttons/Button'

interface Props {
  view: 'card' | 'table'
  setView: (v: 'card' | 'table') => void
  logout: () => void
}

export default function DashboardJobSection({ view, setView, logout }: Props) {
  return (
    <>
      <div className='my-8 flex flex-wrap gap-4'>
        <Button variant='secondary' onClick={logout}>
          Logout
        </Button>
      </div>

      <JobCreationModal />
      <FilterBar />
      <div className='hidden lg:flex gap-2 my-6'>
        <Button
          variant={view === 'card' ? 'primary' : 'secondary'}
          onClick={() => setView('card')}
        >
          Card View
        </Button>
        <Button
          variant={view === 'table' ? 'primary' : 'secondary'}
          onClick={() => setView('table')}
        >
          Table View
        </Button>
      </div>
      <div className={view === 'table' ? 'lg:hidden' : ''}>
        <JobTableCard />
      </div>
      {view === 'table' && (
        <div className='hidden lg:block'>
          <JobTable />
        </div>
      )}
    </>
  )
}
