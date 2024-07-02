'use client'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { signIn } from '@/http/sign-in'
import { zodResolver } from '@hookform/resolvers/zod'
import Link from 'next/link'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

const signInSchema = z.object({
  email: z.string().email(),
  password: z.string().min(6),
})

type SignInSchema = z.infer<typeof signInSchema>

export function SignInForm() {
  const {
    register,
    handleSubmit,
    // formState: { errors },
  } = useForm<SignInSchema>({ resolver: zodResolver(signInSchema) })
  async function handleSignIn({ email, password }: SignInSchema) {
    await signIn({ email, password })
  }

  return (
    <form onSubmit={handleSubmit(handleSignIn)} className="space-y-4">
      <div>
        <Label>Email</Label>
        <Input type="email" id="email" {...register('email')} />
      </div>
      <div>
        <Label>Password</Label>
        <Input type="password" id="password" {...register('password')} />
        <Link href="/auth/sign-up">
          <p className="mt-2 text-right text-xs underline font-semibold">
            Dont have an account? Sign-up
          </p>
        </Link>
      </div>
      <div className="flex justify-center">
        <Button type="submit">Sign-in with Email</Button>
      </div>
    </form>
  )
}
