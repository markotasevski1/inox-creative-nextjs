import NavigationMenu from '@/components/navigation-menu/NavigationMenu'
import './globals.css'
import type { Metadata } from 'next'
import { Roboto_Condensed } from 'next/font/google'
import Footer from '@/components/footer/Footer'

const roboto = Roboto_Condensed({
  subsets: ['latin'],
  weight: ['400', '700'],
})
export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={roboto.className}>
        <div className="m-auto bg-tailwind-dark-blue-color">
          <NavigationMenu />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  )
}
