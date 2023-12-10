import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Yarn Berry Workspace Next-a',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang='ko'>
      <body>{children}</body>
    </html>
  )
}
