// import { getCookie } from 'cookies-next'
// import { CookiesFn } from 'cookies-next/lib/types'

import ky from 'ky'

// linkando com o back
export const api = ky.create({
  prefixUrl: 'https://eca1-2804-431-cfd9-7854-9121-5268-a8-ca8d.ngrok-free.app',
  // hooks: {
  //   beforeRequest: [
  //     async (request) => {
  //       let cookieStore: CookiesFn | undefined

  //       if (typeof window === 'undefined') {
  //         const { cookies: serverCookies } = await import('next/headers')

  //         cookieStore = serverCookies
  //       }
  //       const token = getCookie('token', { cookies: cookieStore })

  //       if (token) {
  //         request.headers.set('Authorization', Bearer ${token})
  //       }
  //     },
  //   ],
  // },
})
