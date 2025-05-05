

import { cn } from '@/lib/utils/cn'
import { ElementType, HTMLAttributes } from 'react'

type HeadingStyle =
  | 'page-title'
  | 'section-title'
  | 'subsection-title'
  | 'paragraph-title'
  | 'list-item-title'
  | 'small-title'

type Props = {
  element?: ElementType
  style?: HeadingStyle
  title: string
  className?: string
} & Omit<HTMLAttributes<HTMLElement>, 'style'>

const styleMap: Record<HeadingStyle, string> = {
  'page-title':
    'mx-auto my-10 w-full font-heading font-black uppercase tracking-wide text-5xl md:text-6xl lg:text-7xl xl:text-8xl primary-gradient text-center',
  'section-title':
    'mx-auto my-8 w-full font-heading font-extrabold uppercase tracking-wide text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-slate-950 text-center',
  'subsection-title':
    'my-6 font-heading font-bold capitalize text-2xl md:text-3xl lg:text-4xl xl:text-5xl text-slate-950 text-center',
  'paragraph-title':
    'my-4 font-heading font-semibold capitalize text-xl lg:text-2xl xl:text-3xl text-slate-950',
  'list-item-title':
    'my-2 font-heading font-medium capitalize text-lg lg:text-xl xl:text-2xl text-slate-950',
  'small-title':
    'my-1 font-heading capitalize text-base lg:text-lg xl:text-xl text-slate-950',
}

export default function Heading({
  element: Tag = 'h2',
  style = 'section-title',
  title,
  className,
  ...props
}: Props) {
  return (
    <Tag className={cn(styleMap[style], className)} {...props}>
      {title}
    </Tag>
  )
}
