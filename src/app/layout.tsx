import Header from '~/layout/component/Header'
import Footer from '~/layout/component/Footer'
import '~/styles/globals.css'


import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'ItourGo',
  description: "Website booking"
}
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

  return (
    <html lang="en">
      <body>
        <Header />

        {children}
        <Footer />
      </body>
    </html>
  )
}