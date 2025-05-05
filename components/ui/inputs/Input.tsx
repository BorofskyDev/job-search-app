// components/ui/inputs/Input.tsx
'use client'

import { cn } from '@/lib/utils'
import {
  InputHTMLAttributes,
  TextareaHTMLAttributes,
  ChangeEvent,
  ReactElement,
} from 'react'

type CommonProps = {
  label: string
  id: string
  value: string
  onChange: (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void
  className?: string
  required?: boolean
  rows?: number
}

// INPUT --------------------------------------------------------------------
interface TextInputProps
  extends CommonProps,
    Omit<InputHTMLAttributes<HTMLInputElement>, 'id' | 'value' | 'onChange'> {
  textarea?: false
}

// TEXTAREA ------------------------------------------------------------------
interface TextAreaProps
  extends CommonProps,
    Omit<
      TextareaHTMLAttributes<HTMLTextAreaElement>,
      'id' | 'value' | 'onChange'
    > {
  textarea: true
}

export type InputProps = TextInputProps | TextAreaProps

export default function Input(props: InputProps): ReactElement {
  const {
    label,
    id,
    value,
    onChange,
    required = false,
    className,
    textarea,
    rows = 4,
    ...rest
  } = props

  const isNumber =
    !textarea &&
    (rest as InputHTMLAttributes<HTMLInputElement>).type === 'number'

  const baseClasses = cn(
    'w-full rounded-2xl border border-slate-950 px-4 py-3 font-semibold',
    'inset-shadow-2xs hover:inset-shadow-sm active:inset-shadow-sm focus:inset-shadow-sm',
    'inset-shadow-slate-950 transition-all duration-200',
    'hover:bg-emerald-100 focus:bg-emerald-100 active:bg-emerald-100',
    textarea && 'resize-y',
    // hide number spinners cross‑browser
    isNumber && 'appearance-none [-moz-appearance:textfield]',
    className
  )

  return (
    <div className='w-full'>
      <label
        htmlFor={id}
        className='block mt-6 mb-2 font-medium text-slate-800'
      >
        {label} {required && '*'}
      </label>

      {textarea ? (
        <textarea
          id={id}
          name={id}
          value={value}
          onChange={onChange}
          required={required}
          aria-required={required}
          rows={rows}
          className={baseClasses}
          {...(rest as TextareaHTMLAttributes<HTMLTextAreaElement>)}
        />
      ) : (
        <input
         
          type={(rest as InputHTMLAttributes<HTMLInputElement>).type ?? 'text'}
          id={id}
          name={id}
          value={value}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => onChange(e)}
          required={required}
          aria-required={required}
          className={baseClasses}
          {...(rest as InputHTMLAttributes<HTMLInputElement>)}
        />
      )}
    </div>
  )
}
