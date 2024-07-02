import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'To-Do List',
  description:
    'To-do list is an app to write and note your daily tasks, then you dont forget it =)',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`dark min-h-screen ${inter.className}`}>{children}</body>
    </html>
  )
}
