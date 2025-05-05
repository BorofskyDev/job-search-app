// components/ui/inputs/Checkbox.tsx
'use client'

import { useId } from 'react'
import { cn } from '@/lib/utils'
import { CheckIcon } from '../icons'

interface CheckboxProps {
  checked: boolean
  label: string
  onChange: (checked: boolean) => void
  className?: string
  disabled?: boolean
}

export default function Checkbox({
  checked,
  label,
  onChange,
  className,
  disabled = false,
}: CheckboxProps) {
  const id = useId()

  const toggle = () => !disabled && onChange(!checked)

  return (
    <div className={cn('flex items-center gap-3', className)}>
      <button
        id={id}
        type='button'
        role='checkbox'
        aria-checked={checked}
        aria-disabled={disabled}
        disabled={disabled}
        tabIndex={disabled ? -1 : 0}
        onClick={toggle}
        onKeyDown={(e) => {
          if (e.key === ' ' || e.key === 'Enter') {
            e.preventDefault()
            toggle()
          }
        }}
        className={cn(
          'h-8 w-8 rounded-full border-2 border-slate-950 transition-all',
          'inset-shadow-2xs hover:inset-shadow-sm active:inset-shadow-sm hover:bg-emerald-300',
          disabled && 'cursor-not-allowed opacity-50',
          !disabled && 'cursor-pointer',
          checked ? 'bg-blue-700' : 'bg-blue-100',
          checked && 'text-yellow-100',
          'flex items-center justify-center'
        )}
      >
        {checked && <CheckIcon />}
      </button>
      <label htmlFor={id} className='font-medium text-slate-800 select-none'>
        {label}
      </label>
    </div>
  )
}
