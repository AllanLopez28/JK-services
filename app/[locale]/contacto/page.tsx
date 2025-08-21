
import type { Locale } from '@/lib/i18n'
import CallToAction from '@/components/CallToAction'

export default async function Page({ params }: { params: Promise<{ locale: Locale }> }) {
  const { locale } = await params
  return (
    <section className="section">
      <div className="container grid md:grid-cols-2 gap-8 items-start">
        <div className="space-y-4">
          <h1 className="text-3xl font-bold">{locale==='es'?'Contacto':'Contact'}</h1>
          <p className="text-slate-700">{locale==='es'?'Háblanos por teléfono o WhatsApp.':'Call or WhatsApp us.'}</p>
          <CallToAction locale={locale} />
        </div>
        <div className="rounded-2xl overflow-hidden border">
          <iframe
            title="mapa"
            width="100%"
            height="300"
            style={{ border: 0 }}
            loading="lazy"
            allowFullScreen
            referrerPolicy="no-referrer-when-downgrade"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.274248043956!2d-73.257!3d40.781"
          />
        </div>
      </div>
    </section>
  )
}
