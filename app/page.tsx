import CustomLink from '@/components/ui/links/CustomLink'
import { Heading } from '@/components/ui/typography'

export default function Home() {
  return (
    <div className='w-full h-full grid items-center content-center'>
      <Heading style='page-title' title='Welcome to the App' />
      <CustomLink href='/login'>Login</CustomLink>
    </div>
  )
}
