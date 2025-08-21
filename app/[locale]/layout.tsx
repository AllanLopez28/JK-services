
import type { Locale } from '@/lib/i18n'
import { locales } from '@/lib/i18n'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import '../styles/globals.css'
import LocalBusinessSchema from '@/components/LocalBusinessSchema'
import { baseMetadata } from '@/lib/seo'
import { Metadata } from 'next'

export const metadata: Metadata = baseMetadata(
  'JK Service Agency — Accounting & Tax Services',
  'Tax preparer in Brentwood, NY. Bilingual Spanish/English. 1040, ITIN, 1099, business taxes, payroll, bookkeeping, amendments, back taxes and IRS representation.'
)

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode
  params: Promise<{ locale: Locale }>
}) {
  const { locale } = await params
  if (!locales.includes(locale)) { /* could 404 */ }
  return (
    <html lang={locale}>
      <body className="min-h-screen flex flex-col">
        <Navbar locale={locale} />
        <main className="flex-1">{children}</main>
        <Footer locale={locale} />
        <LocalBusinessSchema />
      </body>
    </html>
  )
}
