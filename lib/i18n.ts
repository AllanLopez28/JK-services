
export const locales = ['es', 'en'] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = 'es';

export const brand = {
  name: 'JK Service Agency',
  phone: '+1 (631) 555-1234',
  whatsapp: '+16315551234',
  address: 'Brentwood, NY',
  city: 'Brentwood',
  region: 'NY',
  postalCode: '11717',
  country: 'US'
};
