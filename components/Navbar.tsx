'use client';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { locales, type Locale } from '@/lib/i18n';
import { routes } from '@/lib/routes';
import { cn } from './ui/utils';
import { useState, useEffect } from 'react';

export default function Navbar({ locale }: { locale: Locale }) {
  const pathname = usePathname();
  const other = locale === 'es' ? 'en' : 'es';
  const [open, setOpen] = useState(false);

  // Cierra el menú al cambiar de ruta
  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  // Bloquea el scroll del body cuando el menú está abierto
  useEffect(() => {
    if (open) document.body.style.overflow = 'hidden';
    else document.body.style.overflow = '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  const switchHref = pathname?.replace(`/${locale}`, `/${other}`) || `/${other}`;

  const nav = [
    { href: routes.servicios(locale), label: locale === 'es' ? 'Servicios' : 'Services' },
    { href: routes.quienesSomos(locale), label: locale === 'es' ? 'Quiénes somos' : 'About' },
    { href: routes.tarifas(locale), label: locale === 'es' ? 'Tarifas' : 'Pricing' },
    { href: routes.faq(locale), label: locale === 'es' ? 'Preguntas' : 'FAQ' },
    // { href: routes.blog(locale), label: locale === 'es' ? 'Blog' : 'Resources' },
    { href: routes.documentos(locale), label: locale === 'es' ? 'Documentos' : 'Documents' },
    { href: routes.contacto(locale), label: locale === 'es' ? 'Contacto' : 'Contact' },
  ];

  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur border-b border-slate-200">
      <div className="container flex h-16 items-center justify-between">
        <Link className="flex items-center gap-2" href={routes.home(locale)}>
          <Image src="/logo.png" width={36} height={36} alt="Logo" />
          <span className="font-semibold">JK Service Agency</span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-6">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn('text-sm text-slate-700 hover:text-slate-900')}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Acciones (desktop) */}
        <div className="hidden md:flex items-center gap-3">
          <Link href={switchHref} className="text-sm underline underline-offset-4">
            {other.toUpperCase()}
          </Link>
          <a
            href="tel:+16315551234"
            className="text-sm px-3 py-1.5 rounded-lg bg-brand-700 text-white"
          >
            Call
          </a>
        </div>

        {/* Móvil: idioma + hamburguesa */}
        <div className="md:hidden flex items-center gap-2">
          <Link href={switchHref} className="text-sm underline underline-offset-4">
            {other.toUpperCase()}
          </Link>
          <button
            type="button"
            aria-label={
              open ? (locale === 'es' ? 'Cerrar menú' : 'Close menu') : (locale === 'es' ? 'Abrir menú' : 'Open menu')
            }
            aria-controls="mobile-menu"
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="inline-flex items-center justify-center rounded-md border border-slate-300 p-2"
          >
            {/* Ícono hamburguesa */}
            <svg
              className={cn('h-5 w-5', open && 'hidden')}
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="3" y1="6" x2="21" y2="6" />
              <line x1="3" y1="12" x2="21" y2="12" />
              <line x1="3" y1="18" x2="21" y2="18" />
            </svg>
            {/* Ícono X */}
            <svg
              className={cn('h-5 w-5', !open && 'hidden')}
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </button>
        </div>
      </div>

      {/* Móvil: overlay + panel con links */}
      {open && (
        <div className="md:hidden fixed inset-0 z-40" role="dialog" aria-modal="true">
          {/* Overlay */}
          <div className="absolute inset-0 bg-black/40" onClick={() => setOpen(false)} />
          {/* Panel */}
          <div
            id="mobile-menu"
            className="absolute top-16 inset-x-0 bg-white border-b border-slate-200 shadow-sm"
          >
            <nav className="container py-4 grid gap-2">
              {nav.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="block rounded-md px-2 py-2 text-slate-800 hover:bg-slate-100"
                >
                  {item.label}
                </Link>
              ))}
              <div className="flex items-center gap-3 pt-2">
                <a
                  href="tel:+16315551234"
                  className="text-sm px-3 py-2 rounded-lg bg-brand-700 text-white inline-block"
                >
                  Call
                </a>
              </div>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
}
