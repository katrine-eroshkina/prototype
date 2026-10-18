/**
 * Услуги на главной — раскрывашка (shadcn Accordion). Один остров на все группы,
 * чтобы раскрытым был только один пункт во всём списке.
 * Внутри пункта: что это, «Помогает, когда…», услуги, цена «от» и две кнопки — «Обсудить» (основная) и «Подробнее».
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
  return (
    <Accordion type="single" collapsible className="w-full">
      {groups.map((g) => (
        <div key={g.title} className="mt-8 first:mt-0">
          <p className="border-b pb-2 text-xs font-medium uppercase tracking-wider text-muted-foreground">{g.title}</p>
          {g.items.map((c) => (
            <AccordionItem key={c.slug} value={c.slug}>
              <AccordionTrigger className="text-base">{c.title}</AccordionTrigger>
              <AccordionContent>
                {c.what && <p className="max-w-2xl text-base text-muted-foreground">{c.what}</p>}
                {c.when && <p className="mt-3 max-w-2xl text-base"><span className="font-medium">Помогает, когда</span> {c.when}</p>}
                {c.services.length > 0 && (
                  <ul className="mt-3 flex flex-wrap gap-x-4 gap-y-1">
                    {c.services.map((s) => (
                      <li key={s.href}><a className="underline underline-offset-4 hover:text-foreground" href={s.href}>{s.title}</a></li>
                    ))}
                  </ul>
                )}
                <p className="mt-5 text-2xl font-semibold tracking-tight">{c.price}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  <a className={buttonVariants()} href={ctaHref}>Обсудить</a>
                  <a className={buttonVariants({ variant: 'outline' })} href={c.href}>Подробнее</a>
                </div>
              </AccordionContent>
            </AccordionItem>
          ))}
        </div>
      ))}
    </Accordion>
  );
}
