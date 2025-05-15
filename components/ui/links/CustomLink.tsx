'use client'
import { useState } from 'react'
import Link from 'next/link'
import { ExternalLinkIcon } from '@/components/ui/icons'
import { cn } from '@/lib/utils'
import { HTMLAttributes } from 'react'

type Props = {
  href: string
  children: React.ReactNode
  external?: boolean
  className?: string
} & HTMLAttributes<HTMLAnchorElement>

export default function CustomLink({
  href,
  children,
  external = false,
  className,
  ...props
}: Props) {
  const baseClasses = cn(
    'group max-w-fit relative inline-flex items-center gap-2 cursor-pointer font-bold text-indigo-800 transition-colors duration-200 hover:text-indigo-950 pb-2 pt-1',
    className
  )
  const [isHovered, setIsHovered] = useState(false)

  const underlineBottom = (
    <span className='absolute bottom-0 left-0 h-1 w-full bg-indigo-800 transition-colors duration-200 group-hover:bg-indigo-950' />
  )
  const underlineTop = (
    <span className='absolute top-0 left-0 h-1 w-full origin-left scale-x-0 bg-indigo-800 transition-transform duration-200 group-hover:scale-x-100 group-hover:bg-indigo-950' />
  )

  if (external) {
    return (
      <a
        href={href}
        target='_blank'
        rel='noopener noreferrer'
        className={baseClasses}
        onMouseEnter={() => setIsHovered(true)
        }
        onMouseLeave={() => setIsHovered(false)}
        onFocus={() => setIsHovered(true)}

        {...props}
      >
        {children}
        <ExternalLinkIcon
          hovered={isHovered}
          className='w-4 h-4 transition-colors duration-200'
        />
        {underlineBottom}
        {underlineTop}
      </a>
    )
  }

  return (
    <Link href={href} className={baseClasses} {...props}>
      {children}
      {underlineBottom}
      {underlineTop}
    </Link>
  )
}
