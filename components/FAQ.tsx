'use client';
import * as React from 'react';
import { ChevronRight } from 'lucide-react';

type Item = { q: string; a: string };

export default function FAQ({
  items,
  bodyClassName = 'font-sans', // ← fuente para preguntas + panel
}: { items?: Item[]; bodyClassName?: string }) {
  const list = Array.isArray(items) ? items : [];
  const [active, setActive] = React.useState(0);
  if (list.length === 0) return null;
  const activeItem = list[active];

  const onKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
    if (e.key === 'ArrowDown') { e.preventDefault(); setActive(i => Math.min(i + 1, list.length - 1)); }
    if (e.key === 'ArrowUp') { e.preventDefault(); setActive(i => Math.max(i - 1, 0)); }
    if (e.key === 'Home') { e.preventDefault(); setActive(0); }
    if (e.key === 'End') { e.preventDefault(); setActive(list.length - 1); }
  };

  return (
    <div className="grid gap-6 md:grid-cols-2 items-start">
      {/* Lista izquierda */}
      <div
        className="rounded-2xl border border-slate-200 bg-white overflow-hidden"
        role="listbox"
        aria-label="FAQ"
        tabIndex={0}
        onKeyDown={onKeyDown}
      >
        {list.map((f, idx) => (
          <button
            key={idx}
            role="option"
            aria-selected={active === idx}
            onClick={() => setActive(idx)}
            className={[
              'w-full text-left px-5 py-4 flex items-center justify-between gap-4 transition',
              'hover:bg-slate-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-500',
              active === idx ? 'bg-slate-50' : 'bg-white'
            ].join(' ')}
          >
            <div className="flex items-center gap-3">
              <span
                aria-hidden
                className={`h-3 w-3 rounded-full ${active === idx ? 'bg-[#000080]' : 'bg-[#000080]/60'
                  }`}
              />
              <span className={`${bodyClassName} font-medium text-[#001F3F]`}>
                {f.q}
              </span>
            </div>

            <ChevronRight className="h-4 w-4 text-slate-400" />
          </button>
        ))}
      </div>

      {/* Panel derecho */}
      <div className="relative rounded-2xl border border-slate-200 bg-white shadow-sm p-6 md:p-8">
        <div aria-hidden className="absolute -left-2 top-10 h-4 w-4 rotate-45 bg-white border-l border-t border-slate-200 shadow-sm" />
        <h3 className={`${bodyClassName} text-slate-900 text-lg md:text-xl font-semibold`}>{activeItem.q}</h3>
        <p className={`${bodyClassName} mt-3 leading-7 text-slate-700`}>{activeItem.a}</p>
      </div>
    </div>
  );
}
