'use client'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { zodResolver } from '@hookform/resolvers/zod'
import { Loader2 } from 'lucide-react'
import Link from 'next/link'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { signUp } from '@/http/sign-up'

const signUpSchema = z.object({
  name: z.string(),
  email: z.string().email(),
  password: z.string().min(6, { message: 'password is too short.' }),
})

export type SignUpSchema = z.infer<typeof signUpSchema>

export function SignUpForm() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<SignUpSchema>({
    resolver: zodResolver(signUpSchema),
  })

  async function HandleSignUp({ email, password, name }: SignUpSchema) {
    await signUp({ email, password, name })
  }

  return (
    <form onSubmit={handleSubmit(HandleSignUp)} className="space-y-4">
      <div>
        <Label>Name</Label>
        <Input type="text" id="name" {...register('name')} />
      </div>
      <div>
        <Label>Email</Label>
        <Input type="email" id="email" {...register('email')} />
        <p>{errors.email?.message}</p>
      </div>
      <div>
        <Label>Password</Label>
        <Input type="password" id="password" {...register('password')} />
        <p className="text-sm text-destructive font-semibold">
          {errors.password?.message}
        </p>

        <Link href="/auth/sign-in">
          <p className="mt-2 text-right text-xs underline font-semibold">
            Already registered? Sign-in
          </p>
        </Link>
      </div>
      <div className="flex justify-center">
        <Button>
          {isSubmitting && <Loader2 className="animate-spin mr-2" />}
          Sign-Up
        </Button>
      </div>
    </form>
  )
}
