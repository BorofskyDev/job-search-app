// components/ui/inputs/DropdownInput.tsx
'use client'

import { Fragment } from 'react'
import { Listbox, ListboxButton, ListboxOption, ListboxOptions, Transition } from '@headlessui/react'
import { CheckIcon, ChevronUpIcon } from '@/components/ui/icons/'
import { cn } from '@/lib/utils'

type Option<T extends string | number> = {
  value: T
  label: string
}

interface DropdownInputProps<T extends string | number> {
  id: string
  label: string
  value: T
  onChange: (newValue: T) => void
  options: Option<T>[]
  required?: boolean
  className?: string // extra width / margin utilities, etc.
}

export default function DropdownInput<T extends string | number>({
  id,
  label,
  value,
  onChange,
  options,
  required = false,
  className,
}: DropdownInputProps<T>) {
  const selected = options.find((o) => o.value === value) ?? options[0]

  return (
    <div className={cn('w-full', className)}>
      <label
        htmlFor={id}
        className='block mt-6 mb-2 font-medium text-slate-800'
      >
        {label} {required && '*'}
      </label>

      <Listbox value={selected} onChange={(o) => onChange(o.value)} as='div'>
        {() => (
          <>
            <ListboxButton
              className={cn(
                'relative w-full cursor-pointer rounded-2xl border border-slate-950',
                'bg-stone-50 py-3 pl-4 pr-10 text-left',
                'inset-shadow-2xs hover:inset-shadow-sm focus:inset-shadow-sm',
                'focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500'
              )}
            >
              <span className='block truncate'>{selected.label}</span>
              <ChevronUpIcon
                className='pointer-events-none absolute inset-y-0 top-1/2 -translate-y-1/2 right-3 h-5 w-5 text-slate-500 rotate-180 '
                aria-hidden='true'
              />
            </ListboxButton>

            <Transition
              as={Fragment}
              enter='transition ease-out duration-100'
              enterFrom='opacity-0 scale-95'
              enterTo='opacity-100 scale-100'
              leave='transition ease-in duration-75'
              leaveFrom='opacity-100 scale-100'
              leaveTo='opacity-0 scale-95'
            >
              <ListboxOptions
                className={cn(
                  'absolute z-50 mt-1 max-h-60 w-fit overflow-auto',
                  'rounded-2xl border border-slate-950 bg-blue-50 py-4 px-10 shadow-lg'
                )}
              >
                {options.map((o) => (
                  <ListboxOption
                    key={o.value}
                    value={o}
                    className={({ active }) =>
                      cn(
                        'relative cursor-pointer select-none py-2 pl-10 pr-4 transition-all duration-200 rounded-xl',
                        active && 'bg-blue-100'
                      )
                    }
                  >
                    {({ selected: isSelected }) => (
                      <>
                        <span
                          className={cn(
                            'block truncate',
                            isSelected && 'font-medium'
                          )}
                        >
                          {o.label}
                        </span>
                        {isSelected && (
                          <CheckIcon
                            className='absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-blue-600'
                            aria-hidden='true'
                          />
                        )}
                      </>
                    )}
                  </ListboxOption>
                ))}
              </ListboxOptions>
            </Transition>
          </>
        )}
      </Listbox>
    </div>
  )
}
