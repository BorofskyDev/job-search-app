// components/ui/forms/job-creation/RequiredFields.tsx
'use client'

import { JobForm } from '@/lib/hooks/job-creation/useJobsForm'
import { statusOptions, priorityOptions } from '@/lib/constants/jobs/job'
import Input from '@/components/ui/inputs/Input'
import DropdownInput from '@/components/ui/inputs/DropdownInput'
import Checkbox from '@/components/ui/inputs/Checkbox'

type UpdateFn = <K extends keyof JobForm>(key: K, value: JobForm[K]) => void

interface Props {
  form: Pick<
    JobForm,
    'companyName' | 'appDate' | 'status' | 'priority' | 'followUp'
  >
  update: UpdateFn
}

export default function RequiredFields({ form, update }: Props) {
  return (
    <>
      <div className='grid gap-6 md:grid-cols-2'>
        <Input
          id='company'
          label='Company Name *'
          value={form.companyName}
          onChange={(e) => update('companyName', e.target.value)}
          required
        />
        <Input
          id='appDate'
          label='Application Date *'
          type='date'
          value={form.appDate}
          onChange={(e) => update('appDate', e.target.value)}
          required
        />
        <DropdownInput
          id='status'
          label='Status'
          value={form.status}
          onChange={(v) => update('status', v)}
          required
          options={[...statusOptions]}
        />
        <DropdownInput
          id='priority'
          label='Priority'
          value={form.priority}
          onChange={(v) => update('priority', v)}
          required
          options={[...priorityOptions]}
        />
      </div>

      <Checkbox
        label='Requires Follow‑Up?'
        checked={form.followUp}
        onChange={(v) => update('followUp', v)}
      />
    </>
  )
}
