/* components/tables/jobs/filters/OrderSelect.tsx */
'use client'

import { useJobFilters } from './FilterProvider'

export default function OrderSelect() {
  const { orderBy, orderDir, setOrdering } = useJobFilters()

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const value = e.target.value as
      | 'companyName'
      | 'appDate'
      | 'status'
      | 'priority'
    setOrdering(value, orderDir)
  }

  const toggleDir = () =>
    setOrdering(orderBy, orderDir === 'asc' ? 'desc' : 'asc')

  return (
    <div className='flex items-center gap-2'>
      <select
        value={orderBy}
        onChange={handleChange}
        className='border border-slate-400 rounded-2xl bg-slate-100 px-6 py-2 text-sm cursor-pointer'
      >
        <option value='companyName'>Company</option>
        <option value='appDate'>Date</option>
        <option value='status'>Status</option>
        <option value='priority'>Priority</option>
      </select>
      <button onClick={toggleDir} className='px-8 py-2 border border-cyan-500 bg-cyan-200 hover:bg-cyan-50 rounded-2xl shadow-md hover:shadow-xl text-sm cursor-pointer transition-all duration-200 hover-scale-105'>
        {orderDir === 'asc' ? 'Ascend' : 'Descend'}
      </button>
    </div>
  )
}
