import './globals.css'

export const metadata = {
  title: 'Learning Portal for DevOps subject',
  description: 'KBTU',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
