
import Link from 'next/link';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { routes } from '@/lib/routes';
import { type Service } from '@/lib/services';
import { FileText, BadgeCheck, Briefcase, Building2, CreditCard, Receipt, Book, History, ShieldCheck, IdCard } from 'lucide-react';

const iconMap: Record<string, any> = {
  'file-text': FileText,
  'id-card': IdCard,
  'briefcase': Briefcase,
  'building-2': Building2,
  'credit-card': CreditCard,
  'receipt': Receipt,
  'book': Book,
  'history': History,
  'shield-check': ShieldCheck,
  'asterisk': BadgeCheck
};

export default function ServiceCard({ locale, service }:{ locale: 'es'|'en'; service: Service }) {
  const Icon = iconMap[service.icon] || FileText;
  return (
    <Card className="h-full transition hover:-translate-y-0.5 hover:shadow-lg">
      <CardHeader className="flex flex-row items-center gap-3">
        <Icon className="w-6 h-6 text-brand-700" />
        <CardTitle>{service.title[locale]}</CardTitle>
      </CardHeader>
      <CardContent className="space-y-3">
        <p className="text-slate-700">{service.excerpt[locale]}</p>
        <ul className="list-disc pl-5 text-slate-600 space-y-1">
          {service.bullets[locale].map((b, i) => <li key={i}>{b}</li>)}
        </ul>
        <Link className="text-brand-700 underline underline-offset-4" href={routes.servicio(locale, service.slug)}>
          {locale === 'es' ? 'Ver más' : 'Learn more'}
        </Link>
      </CardContent>
    </Card>
  );
}
