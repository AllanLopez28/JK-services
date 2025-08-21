import type { Metadata } from 'next'
import type { Locale } from '@/lib/i18n'

export const metadata: Metadata = {
  title: 'Política de Privacidad | JK Service Agency',
  description: 'Información sobre cómo recopilamos, usamos y protegemos tus datos personales.',
}

export default function PrivacyPage({ params }: { params: { locale: Locale } }) {
  const { locale } = params
  const es = locale === 'es'
  const updatedAt = '2025-08-21'

  return (
    <section className="section">
      <div className="container prose max-w-3xl">
        <h1>{es ? 'Política de Privacidad' : 'Privacy Policy'}</h1>
        <p>
          {es
            ? `Última actualización: ${updatedAt}. Esta política describe cómo tratamos tu información personal al usar nuestro sitio.`
            : `Last updated: ${updatedAt}. This policy explains how we handle your personal information when you use our site.`}
        </p>

        <h2>{es ? 'Datos que recopilamos' : 'Data we collect'}</h2>
        <ul>
          <li>
            <strong>{es ? 'Información que proporcionas' : 'Information you provide'}:</strong>{' '}
            {es ? 'formularios de contacto, solicitudes y mensajes.' : 'contact forms, inquiries, and messages.'}
          </li>
          <li>
            <strong>{es ? 'Datos técnicos' : 'Technical data'}:</strong>{' '}
            {es
              ? 'dirección IP, tipo de dispositivo/navegador y páginas visitadas (a través de cookies y análisis).'
              : 'IP address, device/browser type, and pages visited (via cookies and analytics).'}
          </li>
        </ul>

        <h2>{es ? 'Cómo usamos tus datos' : 'How we use your data'}</h2>
        <ul>
          <li>{es ? 'Responder a tus consultas y proveer servicios.' : 'Respond to your inquiries and provide services.'}</li>
          <li>{es ? 'Mejorar el sitio y la experiencia de usuario.' : 'Improve the website and user experience.'}</li>
          <li>{es ? 'Cumplir obligaciones legales.' : 'Comply with legal obligations.'}</li>
        </ul>

        <h2>{es ? 'Base legal' : 'Legal basis'}</h2>
        <p>
          {es
            ? 'Dependiendo del caso: tu consentimiento, la ejecución de un contrato o intereses legítimos (por ejemplo, mejorar nuestros servicios).'
            : 'Depending on the case: your consent, performance of a contract, or legitimate interests (e.g., improving our services).'}
        </p>

        <h2>{es ? 'Con quién compartimos datos' : 'Sharing your data'}</h2>
        <p>
          {es
            ? 'Podemos compartir datos con proveedores que nos ayudan a operar el sitio (analítica, hosting), bajo acuerdos de confidencialidad.'
            : 'We may share data with service providers who help operate the site (analytics, hosting) under confidentiality agreements.'}
        </p>

        <h2>{es ? 'Retención' : 'Retention'}</h2>
        <p>
          {es
            ? 'Conservamos los datos solo el tiempo necesario para los fines descritos o según lo exija la ley.'
            : 'We retain data only as long as necessary for the purposes described or as required by law.'}
        </p>

        <h2>{es ? 'Tus derechos' : 'Your rights'}</h2>
        <ul>
          <li>{es ? 'Acceder, corregir o eliminar tus datos.' : 'Access, correct, or delete your data.'}</li>
          <li>{es ? 'Retirar tu consentimiento cuando aplique.' : 'Withdraw consent where applicable.'}</li>
          <li>{es ? 'Oponerte a cierto procesamiento.' : 'Object to certain processing.'}</li>
        </ul>
        <p>
          {es
            ? 'Para ejercer derechos, contáctanos desde la página de Contacto.'
            : 'To exercise rights, contact us via the Contact page.'}{' '}
          <a href={`/${locale}/contacto`}>{es ? 'Ir a Contacto' : 'Go to Contact'}</a>.
        </p>

        <h2>{es ? 'Seguridad' : 'Security'}</h2>
        <p>
          {es
            ? 'Aplicamos medidas razonables para proteger tu información; sin embargo, ningún sistema es 100% seguro.'
            : 'We apply reasonable measures to protect your information; however, no system is 100% secure.'}
        </p>

        <h2>{es ? 'Cambios a esta política' : 'Changes to this policy'}</h2>
        <p>
          {es
            ? 'Podemos actualizar esta política ocasionalmente. Publicaremos la versión vigente en este sitio.'
            : 'We may update this policy from time to time. We will post the current version on this site.'}
        </p>
      </div>
    </section>
  )
}
