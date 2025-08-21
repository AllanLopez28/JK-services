
import Reveal from './Reveal';

export default function StatsStrip({ locale }:{ locale: 'es'|'en' }){
  const items = [
    { v: '7+', es: 'Años de experiencia', en: 'Years of experience' },
    { v: '1,000+', es: 'Declaraciones presentadas', en: 'Returns filed' },
    { v: 'Enero-Marzo', es: 'Soporte en temporada', en: 'Peak season support' }
  ];
  return (
    <div className="bg-white">
      <div className="container grid sm:grid-cols-3 gap-6 py-10">
        {items.map((it,i)=>(
          <Reveal key={i}>
            <div className="rounded-2xl border p-6 text-center bg-gradient-to-b from-slate-50 to-white">
              <div className="text-3xl font-bold text-brand-800">{it.v}</div>
              <div className="text-slate-600">{locale==='es'?it.es:it.en}</div>
            </div>
          </Reveal>
        ))}
      </div>
    </div>
  );
}
