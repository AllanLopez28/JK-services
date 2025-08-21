
export type ServiceCategory = 'individual' | 'business' | 'compliance';
export type Service = {
  slug: string;
  icon: string;
  title: { es: string; en: string };
  excerpt: { es: string; en: string };
  bullets: { es: string[]; en: string[] };
  category: ServiceCategory;
};

export const services: Service[] = [
  {
    slug: '1040',
    icon: 'file-text',
    title: { es: 'Impuestos Individuales 1040', en: 'Individual Taxes 1040' },
    excerpt: { es: 'Preparación profesional de declaraciones 1040.', en: 'Professional preparation of 1040 returns.' },
    bullets: { es: ['W-2, 1099, 1098', 'Créditos y deducciones', 'E-file rápido'], en: ['W-2, 1099, 1098', 'Credits & deductions', 'Fast e-file'] },
    category: 'individual'
  },
  {
    slug: 'itin',
    icon: 'id-card',
    title: { es: 'ITIN (nuevo/renovación)', en: 'ITIN (new/renewal)' },
    excerpt: { es: 'Acompañamiento en el trámite de ITIN.', en: 'Guidance for ITIN application/renewal.' },
    bullets: { es: ['Checklist de documentos', 'Formulario W-7', 'Envíos y seguimiento'], en: ['Document checklist', 'W-7 form', 'Filing & tracking'] },
    category: 'individual'
  },
  {
    slug: '1099-self-employed',
    icon: 'briefcase',
    title: { es: 'Self-Employed / 1099', en: 'Self-Employed / 1099' },
    excerpt: { es: 'Cálculo de ingresos/gastos y estimados.', en: 'Income/expense tracking & estimates.' },
    bullets: { es: ['Schedule C', 'Kilometraje y gastos', 'Pagos estimados'], en: ['Schedule C', 'Mileage & expenses', 'Estimated payments'] },
    category: 'individual'
  },
  {
    slug: 'corporativos',
    icon: 'building-2',
    title: { es: 'Corporativos (LLC/Corp)', en: 'Business (LLC/Corp)' },
    excerpt: { es: 'Soporte fiscal para entidades.', en: 'Entity tax support.' },
    bullets: { es: ['EIN/EFIN', 'Elección de entidad', 'Presentaciones anuales'], en: ['EIN/EFIN', 'Entity elections', 'Annual filings'] },
    category: 'business'
  },
  {
    slug: 'payroll',
    icon: 'credit-card',
    title: { es: 'Payroll', en: 'Payroll' },
    excerpt: { es: 'Nómina y reportes.', en: 'Payroll and filings.' },
    bullets: { es: ['W-2, 941'], en: ['W-2, 941'] },
    category: 'business'
  },
  {
    slug: 'sales-tax',
    icon: 'receipt',
    title: { es: 'Sales Tax', en: 'Sales Tax' },
    excerpt: { es: 'Declaraciones de impuesto sobre ventas.', en: 'Sales tax returns.' },
    bullets: { es: ['Registros y reportes'], en: ['Records & reports'] },
    category: 'business'
  },
  {
    slug: 'bookkeeping',
    icon: 'book',
    title: { es: 'Bookkeeping', en: 'Bookkeeping' },
    excerpt: { es: 'Organización contable mensual.', en: 'Monthly bookkeeping.' },
    bullets: { es: ['Conciliaciones'], en: ['Reconciliations'] },
    category: 'business'
  },
  {
    slug: 'enmiedas',
    icon: 'asterisk',
    title: { es: 'Enmiendas', en: 'Amendments' },
    excerpt: { es: 'Corrección de declaraciones.', en: 'Fix prior filings.' },
    bullets: { es: ['1040X'], en: ['1040X'] },
    category: 'compliance'
  },
  {
    slug: 'back-taxes',
    icon: 'history',
    title: { es: 'Back Taxes', en: 'Back Taxes' },
    excerpt: { es: 'Ponte al día con años pendientes.', en: 'Catch up on prior years.' },
    bullets: { es: ['Estrategia y plan'], en: ['Plan & strategy'] },
    category: 'compliance'
  },
  {
    slug: 'representacion',
    icon: 'shield-check',
    title: { es: 'Representación IRS/NYSDTF', en: 'IRS/NYSDTF Representation' },
    excerpt: { es: 'Apoyo ante cartas y auditorías.', en: 'Support for notices and audits.' },
    bullets: { es: ['Cartas y apelaciones'], en: ['Notices & appeals'] },
    category: 'compliance'
  }
];
