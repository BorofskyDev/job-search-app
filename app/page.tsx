
import CustomLink from '@/components/ui/links/CustomLink'
import { BodyText, Heading } from '@/components/ui/typography'

export default function Home() {
  return (
    <div className='w-full h-full'>
      <Heading element='h1' style='page-title' title='Heading Page Title' />
      <Heading
        element='h2'
        style='section-title'
        title='Heading Section Title'
      />
      <Heading
        element='h3'
        style='subsection-title'
        title='Heading Subsection Title'
      />
      <Heading
        element='h4'
        style='paragraph-title'
        title='Heading Paragraph Title'
      />
      <Heading
        element='h5'
        style='list-item-title'
        title='Heading List Item Title'
      />
      <Heading element='h6' style='small-title' title='Heading Small Title' />

      <div>
        <BodyText style='lead'>Welcome to the app.This is lead</BodyText>
        <BodyText style='body'>Welcome to the app. This is body</BodyText>
        <BodyText style='light'>Welcome to the app. This is light</BodyText>
        <BodyText style='important'>
          Welcome to the app. This is important
        </BodyText>
        <BodyText style='warning'>Welcome to the app. This is warning</BodyText>
        <BodyText style='success'>Welcome to the app. This is success</BodyText>
        <BodyText style='info'>Welcome to the app. This is info</BodyText>
        <BodyText style='muted'>Welcome to the app. This is muted</BodyText>
        <BodyText style='error'>Welcome to the app. This is error</BodyText>
        <BodyText style='caption'>Welcome to the app. This is caption</BodyText>
        <BodyText style='quote'>Welcome to the app. This is quote</BodyText>
        <BodyText style='small'>Welcome to the app. This is small</BodyText>
      </div>

      <CustomLink href='/' >Go Home</CustomLink>
      <CustomLink href='#' external>Go somewhere else</CustomLink>
    </div>
  )
}
