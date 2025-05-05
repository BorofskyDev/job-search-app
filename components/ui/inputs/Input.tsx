// components/ui/inputs/Input.tsx
'use client'

import { cn } from '@/lib/utils'
import { InputHTMLAttributes } from 'react'

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string
  id: string
  value: string
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
  className?: string
}

export default function Input({
  label,
  id,
  value,
  onChange,
  type = 'text',
  required = false,
  className,
  ...props
}: InputProps) {
  return (
    <div className='w-full'>
      <label
        htmlFor={id}
        className='block mt-6 mb-2 font-medium text-slate-800'
      >
        {label}
      </label>
      <input
        type={type}
        id={id}
        name={id}
        value={value}
        onChange={onChange}
        required={required}
        aria-required={required}
        className={cn(
          'w-full px-4 py-3 border border-slate-950 rounded-2xl',
          'inset-shadow-2xs hover:inset-shadow-sm active:inset-shadow-sm focus:inset-shadow-sm',
          'inset-shadow-slate-950 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500',
          'transition-all duration-200 hover:bg-emerald-100 focus:bg-emerald-100 active:bg-emerald-100 font-semibold',
          className
        )}
        {...props}
      />
    </div>
  )
}
