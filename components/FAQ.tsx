import { Accordion, AccordionItem } from './ui/accordion';

export default function FAQ({ items }:{ items?: Array<{q:string;a:string}> }){
  const list = Array.isArray(items) ? items : [];
  return (
    <Accordion className="bg-white">
      {list.map((f, idx)=>(<AccordionItem key={idx} question={f.q} answer={f.a} />))}
    </Accordion>
  );
}
