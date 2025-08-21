
import { Button } from './ui/button';
import { brand } from '@/lib/i18n';

export default function CallToAction({ locale }: { locale: 'es' | 'en' }) {
  const call = locale === 'es' ? 'Llamar' : 'Call';
  const wa = 'WhatsApp';
  return (
    <div className="flex flex-col sm:flex-row gap-3">
      <a href={`tel:${brand.whatsapp}`}><Button size="lg">{call}</Button></a>
      <a href={`https://wa.me/${brand.whatsapp}`} target="_blank" rel="noreferrer">
        <Button size="lg" variant="outline">{wa}</Button>
      </a>
    </div>
  );
}
