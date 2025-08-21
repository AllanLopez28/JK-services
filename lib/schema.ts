
import { brand } from './i18n';

export function localBusinessJsonLd() {
  return {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: brand.name,
    address: {
      '@type': 'PostalAddress',
      addressLocality: brand.city,
      addressRegion: brand.region,
      postalCode: brand.postalCode,
      addressCountry: brand.country
    },
    telephone: brand.phone
  };
}

export function faqJsonLd(faq: Array<{q: string; a: string;}>) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    'mainEntity': faq.map(item => ({
      '@type': 'Question',
      'name': item.q,
      'acceptedAnswer': {
        '@type': 'Answer',
        'text': item.a
      }
    }))
  };
}
