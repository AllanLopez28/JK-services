
import type { Locale } from '@/lib/i18n'
import { faqBase } from '@/lib/faq'
import FAQ from '@/components/FAQ'

export default async function Page({ params }: { params: Promise<{ locale: Locale }> }) {
  const { locale } = await params
  return (
    <section className="section">
      <div className="container space-y-4">
        <h1 className="text-3xl font-bold">FAQ</h1>
        <FAQ items={faqBase[locale]} />
      </div>
    </section>
  )
}
