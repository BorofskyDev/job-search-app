/* components/tables/jobs/filters/FilterBar.tsx */
'use client'

import { useState } from 'react'
import FilterStatus from './FilterStatus'
import FilterPriority from './FilterPriority'
import OrderSelect from './OrderSelect'
import { BodyText, Heading } from '@/components/ui/typography'
import Button from '@/components/ui/buttons/Button'

export default function FilterBar() {
  const [isOpen, setIsOpen] = useState(false)

  const toggleFilterBar = () => {
    setIsOpen((prev) => !prev)
  }

  return (
    /* desktop-only for now */
    <div className='my-10 border-2 p-8 bg-slate-100 flex flex-col w-full items-center rounded-2xl shadow-xl gap-4 mb-6'>
      <Heading
        style='subsection-title'
        element='h3'
        title='Your Friendly Filter'
      />
      <Button variant='secondary' onClick={toggleFilterBar}>
        {isOpen ? 'Hide Filters' : 'Show Filters'}
      </Button>

      {isOpen && (
        <>
          <div className='w-full flex flex-wrap justify-between'>
            <div>
              <BodyText
                style='body'
                className='text-center font-medium my-4 text-lg'
              >
                Filter by Status
              </BodyText>
              <FilterStatus />
            </div>
            <div>
              <BodyText
                style='body'
                className='text-center font-medium my-4 text-lg'
              >
                Filter by Priority
              </BodyText>
              <FilterPriority />
            </div>
          </div>
          <div className=' py-4 px-8 border-2 border-slate-950 rounded-3xl my-10 shadow-xl flex flex-col md:flex-row items-center md:place-self-start bg-slate-300'>
            <BodyText style='light' className='text-center mr-4'>
              Order by
            </BodyText>
            <OrderSelect />
          </div>
        </>
      )}
    </div>
  )
}
