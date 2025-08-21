
import type { Locale } from '@/lib/i18n'

export default async function Page({ params }: { params: Promise<{ locale: Locale }> }) {
  const { locale } = await params
  const posts = [
    { title: locale==='es'?'Fechas clave de temporada de impuestos':'Key tax season deadlines', href:'#' },
    { title: locale==='es'?'¿ITIN nuevo o renovación?':'New ITIN or renewal?', href:'#' },
    { title: locale==='es'?'Checklist 1040 básica':'Basic 1040 checklist', href:'#' },
  ]
  return (
    <section className="section">
      <div className="container space-y-4">
        <h1 className="text-3xl font-bold">{locale==='es'?'Blog y recursos':'Blog & resources'}</h1>
        <ul className="space-y-2">
          {posts.map((p,i)=>(<li key={i}><a className="underline text-brand-700" href={p.href}>{p.title}</a></li>))}
        </ul>
      </div>
    </section>
  )
}
