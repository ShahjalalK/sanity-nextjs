import '../styles/globals.css'
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
        {children}
        
        </body>
    </html>
  )
}
