'use server'

import { signUp } from '@/http/sign-up'
import { SignUpSchema } from './sign-up-form'

export async function signUpAction({ email, password, name }: SignUpSchema) {
  await new Promise((resolve) => {
    setTimeout(resolve, 2000)
  })
  await signUp({ email, password, name })
}
