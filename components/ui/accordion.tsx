
'use client';
import * as React from 'react';
import { cn } from './utils';

export function Accordion({ children, className }: { children: React.ReactNode; className?: string }) {
  return <div className={cn('divide-y divide-slate-200 rounded-2xl border border-slate-200', className)}>{children}</div>;
}

export function AccordionItem({ question, answer }: { question: string; answer: string }) {
  const [open, setOpen] = React.useState(false);
  return (
    <div>
      <button onClick={() => setOpen(o => !o)} className="w-full text-left px-5 py-4 flex items-center justify-between">
        <span className="font-medium">{question}</span>
        <span className="text-slate-500">{open ? '−' : '+'}</span>
      </button>
      {open && <div className="px-5 pb-5 text-slate-700">{answer}</div>}
    </div>
  );
}
