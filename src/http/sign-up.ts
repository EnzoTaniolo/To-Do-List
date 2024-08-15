import { api } from './api-client'

interface SignUpRequest {
  email: string
  password: string
  name: string
}

export async function signUp({ email, password, name }: SignUpRequest) {
  const result = await api
    .post('sign-up', {
      json: { email, password, name },
    })
    .json()
  return result
}
