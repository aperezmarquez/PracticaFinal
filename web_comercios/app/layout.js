import { Inter } from 'next/font/google'
import './globals.css'
import Link from 'next/link'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <nav className='bg-orange-300'>
          <ul className='flex gap-10 p-3'>
            <li className='flex-none'>
              <Link href='http://localhost:3000/'>HOME</Link>
            </li>
            <li className='grow'>
              <Link href='http://localhost:3000/comercios'>COMMERCES</Link>
            </li>
            <li className='flex-none'>
              <Link href='http://localhost:3000/sign-in'>SIGN IN</Link>
            </li>
            <li className='flex-none'>
              <Link href='http://localhost:3000/register'>REGISTER</Link>
            </li>
          </ul>
        </nav>{children}
      </body>
    </html>
  )
}
