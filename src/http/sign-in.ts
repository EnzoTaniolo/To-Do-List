import { api } from './api-client'

interface SignInRequest {
  email: string
  password: string
}

// mandando pro back as informaçoes do form sing-in
export async function signIn({ email, password }: SignInRequest) {
  const result = await api
    .post('sign-in', {
      json: { email, password },
    })
    .json()
  return result
}
