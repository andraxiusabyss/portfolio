import './globals.css'
import { Inter } from 'next/font/google'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import LoadingOverlay from '@/components/LoadingOverlay'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Andrei Sager Portfolio',
  description: 'A next.js portfolio',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className='flex justify-center'>
          <div className='flex flex-wrap w-full max-w-screen-xl'>
            {/* <LoadingOverlay/> */}
            <Navbar/>
            <main className='w-full'>
              {children}
            </main>
            <Footer/>
          </div>
        </div>
      </body>
    </html>
  )
}