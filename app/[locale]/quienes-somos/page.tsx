
import type { Locale } from '@/lib/i18n'

export default async function Page({ params }: { params: Promise<{ locale: Locale }> }) {
  const { locale } = await params
  return (
    <section className="section">
      <div className="container space-y-4">
        <h1 className="text-3xl font-bold">{locale === 'es' ? 'Quiénes somos' : 'About us'}</h1>
        <p className="text-slate-700">
          {locale === 'es' 
            ? 'Somos una oficina preparadora de impuestos acreditada por el IRS. Ayudamos a familias y negocios en Brentwood, NY.' 
            : 'We are an IRS-accredited tax preparer helping families and businesses in Brentwood, NY.'}
        </p>
        <div className="rounded-2xl border p-5">
          <p className="font-medium">{locale === 'es' ? 'Acreditaciones' : 'Accreditations'}</p>
          <ul className="list-disc pl-6 text-slate-700">
            <li>PTIN / EFIN</li>
            <li>EA/CPA {locale === 'es' ? '(si aplica)' : '(if applicable)'} </li>
          </ul>
        </div>
      </div>
    </section>
  )
}
