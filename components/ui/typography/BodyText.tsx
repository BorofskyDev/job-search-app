'use client'

import { cn } from '@/lib/utils'
import { ElementType, HTMLAttributes } from 'react'

type BodyStyle =
  | 'body'
  | 'light'
  | 'important'
  | 'warning'
  | 'success'
  | 'info'
  | 'muted'
  | 'error'
  | 'caption'
  | 'lead'
  | 'quote'
  | 'small'

type Props = {
  element?: ElementType
  children: React.ReactNode
  style?: BodyStyle
  className?: string
} & Omit<HTMLAttributes<HTMLElement>, 'style'>

const styleMap: Record<BodyStyle, string> = {
  body: 'my-2 font-body text-base lg:text-lg text-slate-950 leading-[1.65]',
  light:
    'my-6 font-body font-light text-sm lg:text-base text-slate-700 leading-[1.65]',
  important:
    'my-8 font-body font-bold text-lg lg:text-xl text-slate-950 leading-[1.65]',
  warning: 'my-8 font-body font-bold text-lg lg:text-xl text-red-950',
  success: 'my-8 font-body font-bold text-lg lg:text-xl text-green-950',
  info: 'my-8 font-body font-bold text-lg lg:text-xl text-yellow-950',
  muted: 'my-4 font-body text-sm text-slate-500',
  error: 'my-6 font-body text-base text-red-700',
  caption: 'mt-1 font-body text-xs uppercase tracking-wide text-slate-500',
  lead: 'mb-6 font-body text-xl md:text-2xl font-medium text-slate-900',
  quote:
    'my-6 font-body italic text-lg text-slate-800 border-l-4 border-slate-300 pl-4',
  small: 'text-xs text-slate-700 font-body',
}

export default function BodyText({
  element: Tag = 'p',
  style = 'body',
  children,
  className,
  ...props
}: Props) {
  return (
    <Tag className={cn(styleMap[style], className)} {...props}>
      {children}
    </Tag>
  )
}
