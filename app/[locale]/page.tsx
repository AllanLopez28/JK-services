
import { faqBase } from '@/lib/faq'
import type { Locale } from '@/lib/i18n'
import Hero from '@/components/Hero'
import FloatingWhatsApp from '@/components/FloatingWhatsApp'
import Reveal from '@/components/Reveal'
import FAQ from '@/components/FAQ'
import ServicesShowcase from '@/components/ServicesShowcase'
import StatsStrip from '@/components/StatsStrip'

export default async function Page({ params }: { params: Promise<{ locale: Locale }> }) {
  const { locale } = await params

  return (
    <>
      <Hero locale={locale} />
      <StatsStrip locale={locale} />

      <section className="section">
        <div className="container space-y-12">
          {/* Redesigned Services */}
          <ServicesShowcase locale={locale} />

          {/* Map */}
          <div className="space-y-3">
            <h2 className="text-2xl font-semibold">{locale === 'es' ? 'Estamos en Brentwood, NY' : 'We are in Brentwood, NY'}</h2>
            <div className="rounded-2xl overflow-hidden border">
              <iframe
                title="mapa"
                width="100%"
                height="320"
                style={{ border: 0 }}
                loading="lazy"
                allowFullScreen
                referrerPolicy="no-referrer-when-downgrade"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.274248043956!2d-73.257!3d40.781!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89e82a7d77d9c02f%3A0x9e5f1!2sBrentwood%2C%20NY!5e0!3m2!1sen!2sus!4v168"
              />
            </div>
          </div>

          {/* FAQ */}
          <div className="space-y-3">
            <h2 className="text-2xl font-semibold">FAQ</h2>
            <FAQ items={faqBase[locale]} />
          </div>
        </div>
      </section>

      {/* Floating WhatsApp button */}
      <FloatingWhatsApp />
    </>
  )
}
