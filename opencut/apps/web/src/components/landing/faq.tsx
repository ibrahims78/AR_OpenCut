"use client";

import { useLocale } from "@/i18n/provider";
import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from "@/components/ui/accordion";

export function Faq() {
	const { t } = useLocale();

	return (
		<section id="faq" className="border-t bg-muted/30 px-4 py-20 md:py-28">
			<div className="mx-auto max-w-3xl">
				<div className="mx-auto max-w-2xl text-center">
					<p className="text-muted-foreground text-sm font-medium uppercase tracking-wider">
						{t.faq.eyebrow}
					</p>
					<h2 className="mt-3 text-3xl font-bold tracking-tight md:text-4xl">
						{t.faq.title}
					</h2>
					<p className="text-muted-foreground mt-4 text-base md:text-lg">
						{t.faq.subtitle}
					</p>
				</div>

				<Accordion
					type="single"
					collapsible
					className="bg-background mt-10 overflow-hidden rounded-2xl border"
				>
					{t.faq.items.map((item, idx) => (
						<AccordionItem
							key={item.q}
							value={`item-${idx}`}
							className="border-b last:border-b-0"
						>
							<AccordionTrigger className="px-5 py-4 text-start text-base font-semibold hover:no-underline">
								{item.q}
							</AccordionTrigger>
							<AccordionContent className="text-muted-foreground px-5 pb-4 text-sm leading-relaxed">
								{item.a}
							</AccordionContent>
						</AccordionItem>
					))}
				</Accordion>
			</div>
		</section>
	);
}
