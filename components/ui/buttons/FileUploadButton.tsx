// components/ui/inputs/FileUploadInput.tsx
'use client'

import { ChangeEvent, useRef } from 'react'
import Button, { ButtonVariant } from '@/components/ui/buttons/Button'
import { cn } from '@/lib/utils'

interface FileUploadButtonProps {
  id: string
  label: string
  accept?: string
  /** callback receives the chosen file or null when cleared */
  onChange: (file: File | null) => void
  /** currently selected file (to show its name) */
  file?: File | null
  buttonText?: string
  required?: boolean
  variant?: ButtonVariant
  className?: string
}
export default function FileUploadButton({
  id,
  label,
  accept = '.pdf,.doc,.docx',
  onChange,
  file,
  buttonText = 'Choose File',
  required = false,
  variant = 'upload',
  className,
}: FileUploadButtonProps) {
  const inputRef = useRef<HTMLInputElement>(null)

  const triggerPicker = () => inputRef.current?.click()
  const handleChange = (e: ChangeEvent<HTMLInputElement>) =>
    onChange(e.target.files?.[0] ?? null)

  return (
    <div className={cn('w-full', className)}>
      <label className='block mt-6 mb-2 font-medium text-slate-800'>
        {label}
        {required && ' *'}
      </label>

      {/* hidden native picker */}
      <input
        id={id}
        ref={inputRef}
        type='file'
        accept={accept}
        required={required}
        onChange={handleChange}
        className='sr-only'
      />

      {/* styled trigger */}
      <Button type='button' variant={variant} onClick={triggerPicker} icon='upload'>
        {buttonText}
      </Button>

      {/* file name feedback */}
      {file && (
        <p className='mt-2 text-sm text-slate-600 line-clamp-2'>{file.name}</p>
      )}
    </div>
  )
}
