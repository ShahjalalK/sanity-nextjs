import Navbar from '@/components/navbar'
import '../styles/globals.css'
import Banner from '@/components/banner'
export const metadata = {
  title: 'Shahjalalk',
  description: 'Shahjalal Khan',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <Banner />
        {children}
        
        </body>
    </html>
  )
}
