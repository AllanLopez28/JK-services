
import Image from 'next/image';
import CallToAction from './CallToAction';
import { brand } from '@/lib/i18n';
import Reveal from './Reveal';
import { ShieldCheck, Languages, PhoneCall, Star } from 'lucide-react';

export default function Hero({ locale }: { locale: 'es' | 'en' }) {
  const t = {
    title: locale === 'es'
      ? 'Confianza y claridad para tus impuestos en Brentwood, NY'
      : 'Trusted, clear tax help in Brentwood, NY',
    sub: locale === 'es'
      ? 'Acreditada por el IRS. Bilingüe ES/EN. Atendemos a la comunidad hispana en temporada alta (ene–abr).'
      : 'IRS-accredited. Bilingual ES/EN. Serving the Hispanic community during peak season (Jan–Apr).',
    highlights: [
      locale === 'es' ? 'Servicio altamente personalizado' : 'Highly personalized service',
      locale === 'es' ? 'Historial comprobado de resultados' : 'Proven track record',
      locale === 'es' ? 'Atención en español e inglés' : 'Spanish & English service'
    ]
  }

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-brand-900 via-brand-800 to-brand-700 text-white">
      {/* Right curved accent */}
      <div className="pointer-events-none absolute inset-y-0 right-0 w-1/2">
        <div className="absolute -right-24 top-0 h-[120%] w-[140%] rounded-bl-[60%] bg-gradient-to-br from-white/10 to-white/0 blur-0" />
      </div>

      <div className="container py-16 md:py-20 grid md:grid-cols-2 gap-10 items-center">
        {/* Left copy */}
        <div className="space-y-5">
          <Reveal>
            <span className="inline-block rounded-full bg-white/10 border border-white/20 px-3 py-1 text-xs tracking-wide">
              IRS • PTIN / EFIN
            </span>
          </Reveal>

          <Reveal delay={100}>
            <h1 className="text-3xl md:text-5xl font-bold leading-tight">{t.title}</h1>
          </Reveal>

          <Reveal delay={200}>
            <p className="text-white/80 md:text-lg">{t.sub}</p>
          </Reveal>

          <Reveal delay={300}>
            <div className="flex flex-col sm:flex-row gap-3">
              <CallToAction locale={locale} />
            </div>
          </Reveal>

          <Reveal delay={400}>
            <ul className="mt-4 grid sm:grid-cols-3 gap-3 text-sm">
              {[
                { icon: <ShieldCheck className="w-5 h-5" />, text: t.highlights[0] },
                { icon: <Star className="w-5 h-5" />, text: t.highlights[1] },
                { icon: <Languages className="w-5 h-5" />, text: t.highlights[2] },
              ].map((h, i) => (
                <li key={i} className="flex items-center gap-2 rounded-xl bg-white/10 border border-white/15 px-3 py-2">
                  <span>{h.icon}</span><span>{h.text}</span>
                </li>
              ))}
            </ul>
          </Reveal>

        </div>

        {/* Right person image */}
        {/*
<div className="relative">
  <Reveal>
    <div className="relative mx-auto md:mx-0 w-[320px] md:w-[400px] lg:w-[480px]">
      <Image
        src="/jk_transparent.png"
        alt="Team member"
        width={480} height={640}
        className="relative z-10 drop-shadow-2xl"
        priority
      />
      />
      <div className="absolute -top-6 -left-6 right-0 bottom-0 rounded-[36px] bg-white/10 blur-[2px]"></div>
    </div>
  </Reveal>
</div>
*/}

      </div>
    </section>
  );
}
