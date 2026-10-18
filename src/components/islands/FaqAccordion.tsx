/** FAQ-аккордеон (shadcn). Единый остров: составные части Radix должны жить в одном React-дереве. */
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

export default function FaqAccordion({ items }: { items: { q: string; a: string }[] }) {
  return (
    <Accordion type="single" collapsible defaultValue="0" className="w-full">
      {items.map((f, i) => (
        <AccordionItem key={i} value={String(i)}>
          <AccordionTrigger className="text-base">{f.q}</AccordionTrigger>
          <AccordionContent className="text-muted-foreground">{f.a}</AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
}
