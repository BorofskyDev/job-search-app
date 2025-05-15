'use client'

import { HTMLMotionProps, motion } from 'framer-motion'
import { forwardRef } from 'react'

const variants = {
  hidden: { opacity: 0, scale: 0 },
  visible: { opacity: 1, scale: 1 },
}

type FadeScaleProps = HTMLMotionProps<'div'> & {
  /** Element to render. Defaults to "div". */
  as?: React.ElementType
}

export const FadeScale = forwardRef<HTMLElement, FadeScaleProps>(
  ({ as: Tag = 'div', children, ...rest }, ref) => {
    const AnimatedTag = motion(Tag)
    return (
      <AnimatedTag
        ref={ref}
        layout
        variants={variants}
        initial='hidden'
        animate='visible'
        exit='hidden'
        transition={{
          opacity: { duration: 0.2, ease: 'easeInOut' },
          scale: { duration: 0.2, ease: 'easeInOut' },
          layout: { duration: 0.2, ease: 'easeInOut' },
        }}
        {...rest}
      >
        {children}
      </AnimatedTag>
    )
  }
)

FadeScale.displayName = 'FadeScale'
