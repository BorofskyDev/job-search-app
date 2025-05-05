// components/ui/Button.tsx
'use client'

import { cn } from '@/lib/utils'
import { buttonIcons, IconVariant } from '@/components/ui/icons/button-icons'
import { ButtonHTMLAttributes, ReactNode } from 'react'

export type ButtonVariant =
  | 'primary'
  | 'secondary'
  | 'delete'
  | 'save'
  | 'cancel'
  | 'link'
  | 'modal'
  | 'upload'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode
  variant?: ButtonVariant
  icon?: IconVariant
  disabled?: boolean
  className?: string
  type?: 'button' | 'submit' | 'reset'
  onClick?: () => void
}

export default function Button({
  children,
  variant = 'primary',
  icon,
  disabled = false,
  className,
  type = 'button',
  onClick,
  ...props
}: ButtonProps) {
  const Icon = icon ? buttonIcons[icon] : null

  return (
    <button
      type={type}
      disabled={disabled}
      aria-disabled={disabled}
      aria-label={typeof children === 'string' ? children : undefined}
      tabIndex={disabled ? -1 : 0}
      className={cn(
        'focused relative overflow-hidden group min-w-fit rounded-lg text-xl lg:text-2xl font-bold transition-transform duration-200',
        'px-8 border-2 border-slate-950 shadow-xl',
        disabled
          ? 'bg-slate-200 text-slate-600 cursor-not-allowed'
          : 'cursor-pointer hover:scale-105',
        variant === 'primary' &&
          !disabled &&
          'py-4 bg-blue-700 text-yellow-100',
        variant === 'secondary' && !disabled && 'py-4 bg-sky-100 text-slate-950',
        variant === 'delete' && !disabled && 'py-4 bg-red-100 text-slate-950',
        variant === 'save' && !disabled && 'py-4 bg-green-100 text-slate-950',
        variant === 'cancel' && !disabled && 'py-4 bg-slate-100 text-slate-950',
        variant === 'link' && !disabled && 'py-2 bg-fuchsia-100 text-slate-950',
        variant === 'modal' && !disabled && 'py-4 bg-teal-100 text-slate-950',
        variant === 'upload' && !disabled && 'py-1 bg-indigo-100 text-slate-950',
        className
      )}
      onClick={!disabled ? onClick : undefined}
      {...props}
    >
      <span
        aria-hidden
        className={cn(
          'absolute inset-0 z-0 transform translate-x-full transition-transform duration-300 ease-in-out',
          !disabled &&
            variant === 'primary' &&
            'group-hover:translate-x-0 group-focus:translate-x-0 bg-[linear-gradient(115deg,theme(colors.blue.700)_0%,theme(colors.blue.800)_75%,theme(colors.blue.900)_75%,theme(colors.blue.950)_100%)]',
          variant === 'secondary' &&
            'group-hover:translate-x-0 group-focus:translate-x-0 bg-[linear-gradient(115deg,theme(colors.sky.100)_0%,theme(colors.sky.200)_75%,theme(colors.sky.300)_75%,theme(colors.sky.400)_100%)]',
          variant === 'delete' &&
            'group-hover:translate-x-0 group-focus:translate-x-0 bg-[linear-gradient(115deg,theme(colors.red.100)_0%,theme(colors.red.200)_75%,theme(colors.red.300)_75%,theme(colors.red.400)_100%)]',
          variant === 'save' &&
            'group-hover:translate-x-0 group-focus:translate-x-0 bg-[linear-gradient(115deg,theme(colors.green.100)_0%,theme(colors.green.200)_75%,theme(colors.green.300)_75%,theme(colors.green.400)_100%)]',
          variant === 'cancel' &&
            'group-hover:translate-x-0 group-focus:translate-x-0 bg-[linear-gradient(115deg,theme(colors.slate.100)_0%,theme(colors.slate.200)_75%,theme(colors.slate.300)_75%,theme(colors.slate.400)_100%)]',
          variant === 'link' &&
            'group-hover:translate-x-0 group-focus:translate-x-0 bg-[linear-gradient(115deg,theme(colors.fuchsia.100)_0%,theme(colors.fuchsia.200)_75%,theme(colors.fuchsia.300)_75%,theme(colors.fuchsia.400)_100%)]',
          variant === 'modal' &&
            'group-hover:translate-x-0 group-focus:translate-x-0 bg-[linear-gradient(115deg,theme(colors.teal.100)_0%,theme(colors.teal.200)_75%,theme(colors.teal.300)_75%,theme(colors.teal.400)_100%)]',
          variant === 'upload' &&
            'group-hover:translate-x-0 group-focus:translate-x-0 bg-[linear-gradient(115deg,theme(colors.indigo.100)_0%,theme(colors.indigo.200)_75%,theme(colors.indigo.300)_75%,theme(colors.indigo.400)_100%)]'
        )}
      />
      <span className='relative z-10 flex items-center gap-2'>
        {children}
        {Icon && <Icon className='h-6 lg:h-10 w-6 lg:w-10' aria-hidden />}
      </span>
    </button>
  )
}
