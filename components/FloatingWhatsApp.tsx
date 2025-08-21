
'use client';
import Link from 'next/link';
import { brand } from '@/lib/i18n';
import { MessageCircle } from 'lucide-react';

export default function FloatingWhatsApp(){
  return (
    <Link
      href={`https://wa.me/${brand.whatsapp}`}
      target="_blank"
      className="fixed z-50 bottom-5 right-5 rounded-full shadow-lg bg-green-500 hover:bg-green-600 text-white w-14 h-14 flex items-center justify-center transition"
      aria-label="WhatsApp"
    >
      <MessageCircle className="w-7 h-7" />
    </Link>
  );
}
