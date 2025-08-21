import type { Metadata } from 'next'
import type { Locale } from '@/lib/i18n'

export const metadata: Metadata = {
  title: 'Términos y Condiciones | JK Service Agency',
  description: 'Condiciones de uso del sitio web y de los servicios ofrecidos.',
}

export default function TermsPage({ params }: { params: { locale: Locale } }) {
  const { locale } = params
  const es = locale === 'es'
  const updatedAt = '2025-08-21'

  return (
    <section className="section">
      <div className="container prose max-w-3xl">
        <h1>{es ? 'Términos y Condiciones' : 'Terms & Conditions'}</h1>
        <p>
          {es
            ? `Última actualización: ${updatedAt}. Al usar este sitio aceptas estos términos. Si no estás de acuerdo, no uses el sitio.`
            : `Last updated: ${updatedAt}. By using this site, you agree to these terms. If you do not agree, do not use the site.`}
        </p>

        <h2>{es ? 'Uso del sitio' : 'Use of the site'}</h2>
        <p>
          {es
            ? 'Te comprometes a usar el sitio de forma lícita y a no interferir con su funcionamiento.'
            : 'You agree to use the site lawfully and not interfere with its operation.'}
        </p>

        <h2>{es ? 'Servicios y contenido' : 'Services & content'}</h2>
        <p>
          {es
            ? 'La información publicada es de carácter general y puede cambiar sin previo aviso.'
            : 'Information provided is general in nature and may change without prior notice.'}
        </p>

        <h2>{es ? 'Propiedad intelectual' : 'Intellectual property'}</h2>
        <p>
          {es
            ? 'El contenido del sitio es propiedad de JK Service Agency o sus licenciantes. No puedes reproducirlo sin autorización.'
            : 'Site content is owned by JK Service Agency or its licensors. You may not reproduce it without permission.'}
        </p>

        <h2>{es ? 'Limitación de responsabilidad' : 'Limitation of liability'}</h2>
        <p>
          {es
            ? 'En la medida permitida por la ley, no seremos responsables por daños derivados del uso o imposibilidad de uso del sitio.'
            : 'To the extent permitted by law, we are not liable for damages arising from the use or inability to use the site.'}
        </p>

        <h2>{es ? 'Ley aplicable' : 'Governing law'}</h2>
        <p>
          {es
            ? 'Estos términos se regirán por las leyes aplicables del lugar donde operamos, sin perjuicio de normas de conflicto.'
            : 'These terms are governed by the applicable laws of our place of operation, without regard to conflict-of-law rules.'}
        </p>

        <h2>{es ? 'Cambios a los términos' : 'Changes to terms'}</h2>
        <p>
          {es
            ? 'Podemos actualizar estos términos en cualquier momento. El uso continuo del sitio implica aceptación de los cambios.'
            : 'We may update these terms at any time. Continued use of the site constitutes acceptance of the changes.'}
        </p>

        <h2>{es ? 'Contacto' : 'Contact'}</h2>
        <p>
          {es ? '¿Preguntas sobre estos términos? ' : 'Questions about these terms? '}
          <a href={`/${locale}/contacto`}>{es ? 'Contáctanos aquí.' : 'Contact us here.'}</a>
        </p>
      </div>
    </section>
  )
}
