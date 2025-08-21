
import type { Locale } from '@/lib/i18n'
import { services } from '@/lib/services'
import FAQ from '@/components/FAQ'
import { faqBase } from '@/lib/faq'

export default async function Page({ params }: { params: Promise<{ locale: Locale; slug: string }> }) {
  const { locale, slug } = await params
  const service = services.find(s => s.slug === slug)

  if (!service) {
    return <div className="container section"><h1>Not found</h1></div>
  }

  return (
    <section className="section">
      <div className="container space-y-6">
        <h1 className="text-3xl font-bold">{service.title[locale]}</h1>
        <p className="text-slate-700">{service.excerpt[locale]}</p>
        <div>
          <h2 className="font-semibold mb-2">{locale === 'es' ? '¿Qué incluye?' : 'What’s included?'}</h2>
          <ul className="list-disc pl-6 space-y-1 text-slate-700">
            {service.bullets[locale].map((b, i) => (<li key={i}>{b}</li>))}
          </ul>
        </div>
        <div>
          <h2 className="font-semibold mb-2">FAQ</h2>
          <FAQ items={faqBase[locale]} />
        </div>
      </div>
    </section>
  )
}
