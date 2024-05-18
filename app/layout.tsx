import { PropsWithChildren } from 'react'
import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'
import Providers from '@/contexts'
import { cn } from '@/utils/cn'
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
      <html lang="en">
        <body className={cn('font-poppins antialiased', poppins.className)}>
          {children}
        </body>
      </html>
    </Providers>
  )
}
