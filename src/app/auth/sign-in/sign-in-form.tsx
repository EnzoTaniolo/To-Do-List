'use client'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { zodResolver } from '@hookform/resolvers/zod'
import { Loader2 } from 'lucide-react'
import Link from 'next/link'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { signInAction } from './actions'
import { useRouter } from 'next/navigation'

// Schema de validacao do zod
const signInSchema = z.object({
  email: z.string().email(),
  password: z.string().min(6, { message: 'invalid password.' }),
})

// convertendo o schema em type (tipagem)
export type SignInSchema = z.infer<typeof signInSchema>

export function SignInForm() {
  // register: registra oque está escrito nos inputs
  // handleSubmit: pega os valores do form e "manda" para a funcao que chamamos a API
  const router = useRouter()
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<SignInSchema>({
    resolver: zodResolver(signInSchema),
  })

  async function handleSignIn({ email, password }: SignInSchema) {
    await signInAction({ email, password })
    router.push('/')
  }

  return (
    <form onSubmit={handleSubmit(handleSignIn)} className="space-y-4">
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
        <Link href="/auth/sign-up">
          <p className="mt-2 text-right text-xs underline font-semibold">
            Dont have an account? Sign-up
          </p>
        </Link>
      </div>
      <div className="flex justify-center">
        <Button type="submit">
          {isSubmitting && <Loader2 className="animate-spin mr-2" />}
          Sign-in with Email
        </Button>
      </div>
    </form>
  )
}
