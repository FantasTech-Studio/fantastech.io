import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'FantasTech',
  description: 'Soluciones fantásticas para negocios inteligentes.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{ children }</body>
    </html>
  )
}
