import { cn } from '@/lib/utils'
import { ElementType, HTMLAttributes } from 'react'

type BodyStyle =
  | 'default'
  | 'denied'
  | 'interview'
  | 'ghosted'
  | 'offer'
  | 'hired'
  | 'prospect'

type Props = {
  element?: ElementType
  children: React.ReactNode
  status: BodyStyle 
  className?: string
} & Omit<HTMLAttributes<HTMLElement>, 'style'>

const styleMap: Record<BodyStyle, string> = {
  default: 'text-slate-950',
  denied:
    'text-red-950',
  interview:
    'text-blue-950',
  ghosted: 'text-orange-950',
  offer: 'text-purple-950',
  hired: 'text-green-950',
  prospect: 'text-yellow-950',
}

export default function CardText({
  element: Tag = 'p',
  status = 'default',
  children,
  className,
  ...props
}: Props) {
  return (
    <Tag className={cn(styleMap[status], className)} {...props}>
      {children}
    </Tag>
  )
}
