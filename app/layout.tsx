import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Marius Calin M.D. F.A.C.S',
  description: 'Obesity Hernia Surgery of New Jersey - Expert bariatric and hernia surgery services by Dr. Marius Calin',
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

