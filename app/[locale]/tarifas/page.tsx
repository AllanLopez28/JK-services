
import type { Locale } from '@/lib/i18n'

export default async function Page({ params }: { params: Promise<{ locale: Locale }> }) {
  const { locale } = await params
  const rows = [
    { name: locale==='es'?'1040 Individual':'1040 Individual', price: '$99' },
    { name: 'ITIN', price: '$120' },
    { name: locale==='es'?'Self-Employed / 1099':'Self-Employed / 1099', price: '$199' },
    { name: locale==='es'?'Corporativos (LLC/Corp)':'Business (LLC/Corp)', price: '$299' },
  ]
  return (
    <section className="section">
      <div className="container space-y-4">
        <h1 className="text-3xl font-bold">{locale === 'es' ? 'Tarifas' : 'Pricing'}</h1>
        <p className="text-slate-700">{locale==='es'?'Precios desde (referenciales). ':'Starting prices (reference). '}{locale==='es'?'Consulta para un estimado final.':'Contact us for a final quote.'}</p>
        <div className="overflow-x-auto rounded-2xl border">
          <table className="min-w-full text-sm">
            <thead className="bg-slate-50">
              <tr>
                <th className="px-4 py-3 text-left">Servicio</th>
                <th className="px-4 py-3 text-left">{locale==='es'?'Desde':'From'}</th>
              </tr>
            </thead>
            <tbody>
              {rows.map((r, i)=>(
                <tr key={i} className="border-t">
                  <td className="px-4 py-3">{r.name}</td>
                  <td className="px-4 py-3">{r.price}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  )
}
