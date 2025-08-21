
import { brand } from '@/lib/i18n';

export default function Footer({ locale }: { locale: 'es' | 'en' }) {
  return (
    <footer className="border-t border-slate-200">
      <div className="container py-10 text-sm text-slate-600 flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
        <p>© {new Date().getFullYear()} {brand.name}. {locale === 'es' ? 'Todos los derechos reservados.' : 'All rights reserved.'}</p>
        <p>{brand.address}</p>
      </div>
    </footer>
  );
}
