
import type { Metadata } from 'next';

export function baseMetadata(title: string, description: string): Metadata {
  return {
    title,
    description,
    openGraph: {
      title,
      description
    },
    alternates: {
      canonical: '/',
      languages: {
        'es': '/es',
        'en': '/en'
      }
    }
  };
}
