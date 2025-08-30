
'use client';
import Link from 'next/link';
import { useState, useMemo } from 'react';
import { services, type ServiceCategory } from '@/lib/services';
import { routes } from '@/lib/routes';
import { cn } from './ui/utils';
import { Check, ChevronRight, Filter } from 'lucide-react';
import { FileText, IdCard, Briefcase, Building2, CreditCard, Receipt, Book, History, ShieldCheck, BadgeCheck } from 'lucide-react';

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

const categories: { key: ServiceCategory | 'all'; es: string; en: string }[] = [
  { key: 'all', es: 'Todos', en: 'All' },
  { key: 'individual', es: 'Individual', en: 'Individual' },
  { key: 'business', es: 'Negocios', en: 'Business' },
  { key: 'compliance', es: 'Cumplimiento', en: 'Compliance' },
];

export default function ServicesShowcase({ locale }:{ locale: 'es'|'en' }){
  const [active, setActive] = useState<ServiceCategory | 'all'>('all');
  const list = useMemo(()=> active==='all' ? services : services.filter(s=>s.category===active), [active]);

  return (
    <section className="relative overflow-hidden rounded-[32px] border  from-slate-50 to-white">
      {/* background pattern */}
      <div className="pointer-events-none absolute inset-0 [mask-image:radial-gradient(400px_200px_at_20%_20%,black,transparent)] bg-[url('data:image/svg+xml;utf8,<svg xmlns=\'http://www.w3.org/2000/svg\' width=\'32\' height=\'32\' viewBox=\'0 0 32 32\'><path fill=\'%23e2e8f0\' d=\'M0 31h2v1H0zm30 0h2v1h-2zM0 0h1v2H0zm31 0h1v2h-1z\'/></svg>')] opacity-50"></div>

      <div className="p-6 md:p-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div>
            <h2 className=" font-serif text-3xl md:text-4xl font-semibold">{locale==='es'?'Nuestros servicios':'Our services'}</h2>
            <p className="text-slate-600">{locale==='es'?'Selecciona una categoría o explora todos.':'Choose a category or explore all.'}</p>
          </div>

          {/* Chips */}
          <div className="flex flex-wrap items-center gap-2">
            {categories.map(cat => (
              <button
                key={cat.key}
                onClick={()=>setActive(cat.key as any)}
                className={cn(
                  'px-3 py-1.5 rounded-full text-sm border transition',
                  active===cat.key ? 'bg-brand-700 text-white border-brand-700' : 'bg-white hover:bg-slate-50 border-slate-300'
                )}
              >
                {locale==='es'?cat.es:cat.en}
              </button>
            ))}
          </div>
        </div>

        {/* Grid */}
        <div className="mt-6 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {list.map((s, idx) => {
            const Icon = iconMap[s.icon] || FileText;
            return (
              <Link
                key={s.slug}
                href={routes.servicio(locale, s.slug)}
                className="group relative block rounded-3xl border bg-white p-5 transition hover:-translate-y-1 hover:shadow-xl"
                style={{ backgroundImage: 'linear-gradient(180deg,#ffffff, #f8fafc)' }}
              >
                <div className="absolute inset-0 rounded-3xl ring-1 ring-inset ring-slate-200 group-hover:ring-brand-300/70"></div>

                <div className="relative flex items-start gap-3">
                  <div className="rounded-2xl bg-brand-50 text-brand-800 p-3 shadow-inner">
                    <Icon className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold">{s.title[locale]}</h3>
                    <p className="text-slate-600 mt-0.5">{s.excerpt[locale]}</p>
                  </div>
                </div>

                <ul className="relative mt-4 space-y-1 text-sm text-slate-700">
                  {s.bullets[locale].map((b, i)=>(
                    <li key={i} className="flex items-center gap-2">
                      <Check className="w-4 h-4 text-brand-700" /> <span>{b}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-5 inline-flex items-center gap-1 text-brand-700 font-medium">
                  {locale==='es'?'Ver más':'Learn more'} <ChevronRight className="w-4 h-4" />
                </div>

                {/* gradient accent */}
                <div className="pointer-events-none absolute -z-10 -inset-1 rounded-[26px] bg-gradient-to-tr from-brand-200 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition"></div>
              </Link>
            )
          })}
        </div>
      </div>
    </section>
  );
}
