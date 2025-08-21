import type { Metadata } from 'next'
import type { Locale } from '@/lib/i18n'

export const metadata: Metadata = {
  title: 'Política de Cookies | JK Service Agency',
  description: 'Cómo utilizamos cookies y tecnologías similares en nuestro sitio web.',
}

export default function CookiesPage({ params }: { params: { locale: Locale } }) {
  const { locale } = params
  const es = locale === 'es'
  const updatedAt = '2025-08-21'

  return (
    <section className="section">
      <div className="container prose max-w-3xl">
        <h1>{es ? 'Política de Cookies' : 'Cookie Policy'}</h1>
        <p>
          {es
            ? `Última actualización: ${updatedAt}. Esta política explica qué son las cookies, qué tipos usamos y cómo puedes gestionarlas.`
            : `Last updated: ${updatedAt}. This policy explains what cookies are, which types we use, and how you can manage them.`}
        </p>

        <h2>{es ? '¿Qué son las cookies?' : 'What are cookies?'}</h2>
        <p>
          {es
            ? 'Las cookies son pequeños archivos de texto que un sitio web guarda en tu dispositivo para recordar información sobre tu visita.'
            : 'Cookies are small text files a website stores on your device to remember information about your visit.'}
        </p>

        <h2>{es ? 'Tipos de cookies que usamos' : 'Types of cookies we use'}</h2>
        <ul>
          <li>
            <strong>{es ? 'Esenciales' : 'Essential'}:</strong>{' '}
            {es
              ? 'Necesarias para el funcionamiento básico del sitio (por ejemplo, navegación y seguridad).'
              : 'Required for the basic operation of the site (e.g., navigation and security).'}
          </li>
          <li>
            <strong>{es ? 'Analíticas' : 'Analytics'}:</strong>{' '}
            {es
              ? 'Nos ayudan a entender cómo se usa el sitio para mejorarlo.'
              : 'Help us understand how the site is used so we can improve it.'}
          </li>
          <li>
            <strong>{es ? 'Preferencias' : 'Preferences'}:</strong>{' '}
            {es
              ? 'Recuerdan tu idioma u otras opciones.'
              : 'Remember your language or other choices.'}
          </li>
        </ul>

        <h2>{es ? 'Gestión de cookies' : 'Managing cookies'}</h2>
        <p>
          {es
            ? 'Puedes configurar tu navegador para rechazar o eliminar cookies. Ten en cuenta que algunas funciones podrían no operar correctamente si deshabilitas ciertas cookies esenciales.'
            : 'You can set your browser to refuse or delete cookies. Note that some features may not function properly if you disable certain essential cookies.'}
        </p>

        <h2>{es ? 'Contacto' : 'Contact'}</h2>
        <p>
          {es
            ? 'Si tienes preguntas sobre esta política, contáctanos desde la página de Contacto.'
            : 'If you have questions about this policy, please contact us via the Contact page.'}{' '}
          <a href={`/${locale}/contacto`}>{es ? 'Ir a Contacto' : 'Go to Contact'}</a>.
        </p>
      </div>
    </section>
  )
}
