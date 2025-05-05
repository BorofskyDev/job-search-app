
'use client'

import { useState } from 'react'
import { useAuth } from '@/context/auth/AuthProvider'
import Button from '../buttons/Button'
import Heading from '@/components/ui/typography/Heading'
import BodyText from '@/components/ui/typography/BodyText'
import Input from '../inputs/Input'

export default function LoginForm() {
  const { login } = useAuth()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
   e.preventDefault()
   setLoading(true)
   try {
    await login(email, password)

   } catch {
    setError('Login failed. Please check your credentials')
   } finally {
    setLoading(false)
   }
  }

  return (
    <form
      onSubmit={handleSubmit}
      className='w-full max-w-md mx-auto mt-12 p-6 rounded-lg bg-slate-100 shadow-2xl border border-slate-950'
    >
      <Heading style='subsection-title' title='Login to Your Account' />

      <Input
        type='email'
        id='email'
        label='Email'
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required={true}
      />

      <Input
        type='password'
        id='password'
        label='Password'
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required={true}
      />
{error && <p className='text-red-800 mt-4'>{error}</p>}
      <div className='mt-10 w-full flex justify-center'>
        <Button type='submit' variant='primary' disabled={loading}>
          {loading ? 'Logging in...' : 'Login'}
        </Button>
      </div>

      <BodyText style='muted' className='text-center mt-6'>
        Don’t have an account? Contact your admin to get access.
      </BodyText>
    </form>
  )
}
