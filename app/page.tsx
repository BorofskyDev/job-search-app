import  Button  from "@/components/ui/buttons/Button";


export default function Home() {
  return (
    <div className='w-full h-full'>
      <Button variant='primary'>Primary</Button>
      <Button variant='secondary'>Secondary</Button>
      <Button variant='delete' icon='delete'>Delete</Button>
    </div>
  )
}
