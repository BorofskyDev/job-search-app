import { cn } from '@/lib/utils'
import { ElementType, HTMLAttributes } from 'react'
import { jobStatusTextColorMap, BodyStyle } from '@/lib/styles/jobStatusStyles'


type Props = {
  element?: ElementType
  children: React.ReactNode
  status: BodyStyle 
  className?: string
} & Omit<HTMLAttributes<HTMLElement>, 'style'>

const styleMap = jobStatusTextColorMap

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
