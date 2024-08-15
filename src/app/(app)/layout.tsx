import { isAuthenticated } from '@/auth/auth'
import { Header } from '@/components/header'
import { Nav } from '@/components/ui/nav'
import { redirect } from 'next/navigation'

export default function AppLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  if (!isAuthenticated()) {
    redirect('/auth/sign-in')
  }
  return (
    <div className="">
      <Header />
      <Nav />
      {children}
    </div>
  )
}
