import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import '@/styles/globals.css'
import { i18n } from '@/config/i18n.config'

const inter = Inter({ subsets: ['latin'] })

export async function generateStaticParams() {
  const languages = i18n.locales.map((lang) => (( lang )));
  return languages;
}

export const metadata: Metadata = {
  title: 'Gabriel Castro',
}

export default function RootLayout({
  children, params
}: {
  children: React.ReactNode,
  params: {lang: string}
}) {
  return (
    <html lang={params.lang}>
      <body className={inter.className}>{children}</body>
    </html>
  )
}
