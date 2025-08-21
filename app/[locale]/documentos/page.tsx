
import type { Locale } from '@/lib/i18n'

export default async function Page({ params }: { params: Promise<{ locale: Locale }> }) {
  const { locale } = await params
  return (
    <section className="section">
      <div className="container space-y-4">
        <h1 className="text-3xl font-bold">{locale==='es'?'Documentos requeridos':'Required documents'}</h1>
        <p className="text-slate-700">{locale==='es'?'Descarga los checklists por servicio.':'Download the checklists per service.'}</p>
        <ul className="list-disc pl-6">
          <li><a className="text-brand-700 underline" href="/docs/checklist-1040-es.txt" download>Checklist 1040 (ES)</a></li>
          <li><a className="text-brand-700 underline" href="/docs/checklist-1040-en.txt" download>Checklist 1040 (EN)</a></li>
        </ul>
      </div>
    </section>
  )
}
