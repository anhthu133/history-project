import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/Navbar'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'CVLS',
  description: 'Trang Web Lich su',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}><Navbar/><main className='p-20'>{children}</main></body>
    </html>
  )
}
