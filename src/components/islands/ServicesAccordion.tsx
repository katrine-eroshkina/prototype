/**
 * Услуги на главной — раскрывашка (shadcn Accordion). Один остров на все группы,
 * чтобы раскрытым был только один пункт во всём списке.
 * Строка: номер + название крупным тонким шрифтом (как списки у Thrad).
 * Внутри: что это, «Помогает, когда…», услуги, цена «от» и две кнопки — «Обсудить» (основная) и «Подробнее».
 */
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { buttonVariants } from '@/components/ui/button';

type Item = {
  slug: string;
  title: string;
  href: string;
  what?: string;
  when?: string;
  price: string;
  services: { title: string; href: string }[];
};
type Group = { title: string; items: Item[] };

export default function ServicesAccordion({ groups, ctaHref }: { groups: Group[]; ctaHref: string }) {
  let n = 0;
  return (
    <Accordion type="single" collapsible className="w-full">
      {groups.map((g) => (
        <div key={g.title} className="mt-12 first:mt-0">
          <p className="eyebrow border-b pb-4 w-full">{g.title}</p>
          {g.items.map((c) => {
            n += 1;
            return (
              <AccordionItem key={c.slug} value={c.slug} className="last:border-b">
                <AccordionTrigger className="items-center gap-6 rounded-none py-6 hover:no-underline [&:hover_.t]:text-brand">
                  <span className="flex items-baseline gap-5">
                    <span className="w-6 font-mono text-xs text-muted-foreground">{String(n).padStart(2, '0')}</span>
                    <span className="t font-display text-2xl font-light tracking-tight transition-colors md:text-[1.75rem]">{c.title}</span>
                  </span>
                </AccordionTrigger>
                <AccordionContent className="pb-8 pl-11">
                  {c.what && <p className="max-w-2xl text-base text-muted-foreground">{c.what}</p>}
                  {c.when && <p className="mt-3 max-w-2xl text-base"><span className="font-medium">Помогает, когда</span> {c.when}</p>}
                  {c.services.length > 0 && (
                    <ul className="mt-4 flex flex-wrap gap-2">
                      {c.services.map((s) => (
                        <li key={s.href}><a className="inline-block rounded-sm border px-2.5 py-1 text-sm transition hover:border-foreground" href={s.href}>{s.title}</a></li>
                      ))}
                    </ul>
                  )}
                  {/* Цена и кнопки — разными строками (так просили раньше) */}
                  <p className="mt-6 font-display text-3xl font-light tracking-tight">{c.price}</p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    <a className={buttonVariants()} href={ctaHref}>Обсудить</a>
                    <a className={buttonVariants({ variant: 'outline' })} href={c.href}>Подробнее</a>
                  </div>
                </AccordionContent>
              </AccordionItem>
            );
          })}
        </div>
      ))}
    </Accordion>
  );
}
