
import type { Locale } from '@/lib/i18n'
import { services } from '@/lib/services'
import ServiceCard from '@/components/ServiceCard'

export default async function Page({ params }: { params: Promise<{ locale: Locale }> }) {
  const { locale } = await params
  return (
    <section className="section">
      <div className="container space-y-6">
        <h1 className="text-3xl font-bold">{locale === 'es' ? 'Servicios' : 'Services'}</h1>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map(s => <ServiceCard key={s.slug} locale={locale} service={s} />)}
        </div>
      </div>
    </section>
  )
}
