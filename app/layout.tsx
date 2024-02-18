import { PropsWithChildren } from 'react'
import { Poppins } from 'next/font/google'
import type { Metadata } from 'next'
import Providers from '@/contexts'
import './globals.css'

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  variable: '--font-poppins',
})

export const metadata: Metadata = {
  title: 'Mathematical',
  description: 'Mathematical focuses on teaching Basic Math Operators.',
}

export default function RootLayout({ children }: PropsWithChildren) {
  return (
    <Providers>
      <html lang="en" className={`${poppins.variable} w-full font-poppins`}>
        <body>{children}</body>
      </html>
    </Providers>
  )
}
