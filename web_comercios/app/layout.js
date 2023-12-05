import { Ubuntu } from 'next/font/google'
import './globals.css'
import './layout.css'
import Link from 'next/link'

const ubuntu = Ubuntu({ 
  subsets: ['latin'],
  weight: ['300', '400', '500', '700'] 
})

export const metadata = {
  title: 'Create Next App',
  description: 'A web for vintage sales',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={ubuntu.className}>
        <nav className='flex justify-center'>
          <div className='grid grid-cols-6 gap-10 p-3'>
            <Link href='http://localhost:3000/' className='col-start-1 text-center seccion p-2 rounded-full'>
              HOME
            </Link>
            <Link href='http://localhost:3000/comercios' className='col-start-2 text-center seccion p-2 rounded-full'>
              COMMERCES
            </Link>
            <Link href='http://localhost:3000/sign-in' className='col-end-6 text-center seccion p-2 rounded-full'>
              SIGN IN
            </Link>
            <Link href='http://localhost:3000/register' className='col-end-7 text-center seccion p-2 rounded-full'>
              REGISTER
            </Link>
          </div>
        </nav>{children}
      </body>
    </html>
  )
}
