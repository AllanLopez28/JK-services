
import Script from 'next/script';
import { localBusinessJsonLd } from '@/lib/schema';

export default function LocalBusinessSchema(){
  const json = localBusinessJsonLd();
  return (
    <Script id="schema-local" type="application/ld+json">{JSON.stringify(json)}</Script>
  );
}
