
export const routes = {
  home: (locale: string) => `/${locale}`,
  servicios: (locale: string) => `/${locale}/servicios`,
  servicio: (locale: string, slug: string) => `/${locale}/servicios/${slug}`,
  quienesSomos: (locale: string) => `/${locale}/quienes-somos`,
  tarifas: (locale: string) => `/${locale}/tarifas`,
  faq: (locale: string) => `/${locale}/faq`,
  blog: (locale: string) => `/${locale}/blog`,
  documentos: (locale: string) => `/${locale}/documentos`,
  contacto: (locale: string) => `/${locale}/contacto`
};
