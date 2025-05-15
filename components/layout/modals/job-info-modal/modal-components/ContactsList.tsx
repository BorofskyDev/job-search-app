// ContactsList.tsx
'use client'
import type { Contact } from './types'
import CustomLink from '@/components/ui/links/CustomLink'
import { BodyText, Heading } from '@/components/ui/typography'

export default function ContactsList({
  contacts,
  className,
}: {
  contacts: Contact[]
  className?: string
}) {
  if (!contacts.length) return null
  return (
    <div className={` ${className}`}>
      <Heading element='h3' style='paragraph-title' title='Contacts' />

      <ul>
        {contacts.map((c) => (
          <li
            key={c.id}
            className='flex flex-col gap-4 justify-center items-center border-1 border-slate-950 rounded-2xl py-4 px-8 min-w-fit mx-auto bg-slate-50 shadow-xl'
          >
            <BodyText style='lead'>{c.name}</BodyText>
            <BodyText style='body'>{c.position && ` ${c.position}`}</BodyText>

            <div className='flex flex-wrap gap-8 justify-center'>
              <CustomLink
                external
               
                href={`${c.email && ` (${c.email})`}`}
              >
                Email
              </CustomLink>

              <CustomLink
             
                href={`${c.phone && `  ${c.phone}`}`}
              >
                {c.phone}
              </CustomLink>

              {c.linkedIn && (
                <>
                  <CustomLink external href={c.linkedIn}>
                    LinkedIn
                  </CustomLink>
                </>
              )}
              {c.website && (
                <>
                  <CustomLink external href={c.website}>
                    Website
                  </CustomLink>
                </>
              )}
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}
