import { api } from './api-client'

interface SignInRequest {
  email: string
  password: string
}

export async function signIn({ email, password }: SignInRequest) {
  const result = await api
    .post('sign-in', {
      json: { email, password },
    })
    .json()
  return result
}
