import type { Metadata } from 'next'
import type { Locale } from '@/lib/i18n'

export const metadata: Metadata = {
  title: 'Disclaimer | JK Service Agency',
  description: 'Aviso y limitación de responsabilidad sobre la información publicada.',
}

export default function DisclaimerPage({ params }: { params: { locale: Locale } }) {
  const { locale } = params
  const es = locale === 'es'
  const updatedAt = '2025-08-21'

  return (
    <section className="section">
      <div className="container prose max-w-3xl">
        <h1>{es ? 'Descargo de responsabilidad' : 'Disclaimer'}</h1>
        <p>
          {es
            ? `Última actualización: ${updatedAt}. La información de este sitio se ofrece con fines informativos generales.`
            : `Last updated: ${updatedAt}. The information on this website is provided for general informational purposes only.`}
        </p>

        <h2>{es ? 'No constituye asesoría' : 'No professional advice'}</h2>
        <p>
          {es
            ? 'El contenido no constituye asesoría legal, fiscal, contable ni profesional. Antes de tomar decisiones, consulta con un profesional calificado.'
            : 'Content does not constitute legal, tax, accounting, or professional advice. You should consult a qualified professional before making decisions.'}
        </p>

        <h2>{es ? 'Exactitud y disponibilidad' : 'Accuracy & availability'}</h2>
        <p>
          {es
            ? 'Nos esforzamos por mantener la información actualizada, pero no garantizamos su exactitud o disponibilidad permanente.'
            : 'We strive to keep information up to date but do not guarantee accuracy or continuous availability.'}
        </p>

        <h2>{es ? 'Enlaces a terceros' : 'Third-party links'}</h2>
        <p>
          {es
            ? 'Los enlaces externos se proporcionan por conveniencia. No somos responsables del contenido o prácticas de sitios de terceros.'
            : 'External links are provided for convenience. We are not responsible for third-party content or practices.'}
        </p>

        <h2>{es ? 'Limitación de responsabilidad' : 'Limitation of liability'}</h2>
        <p>
          {es
            ? 'En la medida permitida por la ley, no seremos responsables por pérdidas derivadas del uso de este sitio.'
            : 'To the extent permitted by law, we shall not be liable for losses arising from the use of this website.'}
        </p>

        <h2>{es ? 'Contacto' : 'Contact'}</h2>
        <p>
          {es ? '¿Dudas sobre este aviso? ' : 'Questions about this notice? '}
          <a href={`/${locale}/contacto`}>{es ? 'Escríbenos aquí.' : 'Contact us here.'}</a>
        </p>
      </div>
    </section>
  )
}
