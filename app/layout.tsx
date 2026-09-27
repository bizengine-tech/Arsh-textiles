import type { Metadata, Viewport } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'ARSH TEXTILES | Khadi Jo Andaz Banaye',
  description: 'ARSH TEXTILES — Khadi garments manufacturer and wholesaler from Meerut, Uttar Pradesh.',
}

export const viewport: Viewport = {
  themeColor: '#f4efe4',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>
}
