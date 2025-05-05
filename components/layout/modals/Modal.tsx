// components/layout/modals/Modal.tsx
'use client'

import { Fragment, ReactNode, useEffect } from 'react'
import { Dialog, DialogPanel, Transition, TransitionChild } from '@headlessui/react'
import { motion } from 'framer-motion'
import { cn } from '@/lib/utils'

interface ModalProps {
  isOpen: boolean
  onClose: () => void
  children: ReactNode
  className?: string
}

export default function Modal({
  isOpen,
  onClose,
  children,
  className,
}: ModalProps) {
  // lock scroll
  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [isOpen])

  return (
    <Transition show={isOpen} as={Fragment} appear>
      <Dialog as='div' className='relative z-50' onClose={onClose}>
        {/* Overlay */}
        <TransitionChild
          as={Fragment}
          enter='ease-out duration-300'
          enterFrom='opacity-0'
          enterTo='opacity-100'
          leave='ease-in duration-200'
          leaveFrom='opacity-100'
          leaveTo='opacity-0'
        >
          <div className='fixed inset-0 bg-black/50 backdrop-blur-sm' />
        </TransitionChild>

        {/* Center container */}
        <div className='fixed inset-0 flex items-center justify-center p-4 text-center'>
          <TransitionChild
            as={Fragment}
            enter='ease-out duration-300'
            enterFrom='opacity-0 scale-90'
            enterTo='opacity-100 scale-100'
            leave='ease-in duration-200'
            leaveFrom='opacity-100 scale-100'
            leaveTo='opacity-0 scale-90'
          >
            <DialogPanel
              /* motion.div gives spring feel */
              as={motion.div}
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              // @ts-expect-error: Ignore type conflict with HeadlessUI's transition prop
              transition={{ type: 'spring', stiffness: 300, damping: 24 }}
              className={cn(
                'w-full max-w-lg lg:max-w-7xl max-h-[90dvh] overflow-y-auto rounded-2xl border border-slate-950 bg-stone-100 p-6 shadow-2xl',
                className
              )}
            >
              {children}
            </DialogPanel>
          </TransitionChild>
        </div>
      </Dialog>
    </Transition>
  )
}
