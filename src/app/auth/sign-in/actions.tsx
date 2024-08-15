'use server'
import { signIn } from '@/http/sign-in'
import { SignInSchema } from './sign-in-form'
import { cookies } from 'next/headers'

export async function signInAction({ email, password }: SignInSchema) {
  await new Promise((resolve) => {
    setTimeout(resolve, 2000)
  })
  try {
    const { token } = await signIn({ email, password })
    cookies().set('auth', token, {
      path: '/',
      maxAge: 60 * 60 * 24 * 7,
      httpOnly: true,
    })
    console.log('ola')
  } catch (err) {
    // if (err instanceof HTTPError) {
    // }
    console.error(err)
  }
}
