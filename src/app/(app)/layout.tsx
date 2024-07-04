import { Header } from '@/components/ui/header'
import { Nav } from '@/components/ui/nav'

export default function AppLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <div className="">
      <Header />
      <Nav />
      {children}
    </div>
  )
}
