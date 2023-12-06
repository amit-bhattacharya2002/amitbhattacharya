import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Header from './Utils/Header'
import Footer from './Utils/Footer'
import MobileNav from './Utils/MobileNav'
import ActiveSectionContextProvider from './Providers/ActiveSectionContext'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Amit | Portfolio',
  description: 'Amit Bhattacharya - Junior Full Stack Web Developer',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ActiveSectionContextProvider>
        <Header/>
        {/* <MobileNav/> */}
        {children}
        {/* <Footer/> */}

        </ActiveSectionContextProvider>
        </body>
    </html>
  )
}
