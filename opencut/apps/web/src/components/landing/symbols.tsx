"use client";

import { useLocale } from "@/i18n/provider";
import { islamicSymbols, type IslamicSymbol } from "@/data/islamic-symbols";

const order: IslamicSymbol["category"][] = [
	"religious",
	"verse-marker",
	"celestial",
	"ornament",
];

export function Symbols() {
	const { t } = useLocale();
	const grouped = order.map((cat) => ({
		cat,
		items: islamicSymbols.filter((s) => s.category === cat),
	}));

	return (
		<section id="symbols" className="bg-muted/20 py-24 sm:py-32">
			<div className="mx-auto max-w-6xl px-4">
				<div className="mx-auto max-w-2xl text-center">
					<p className="text-muted-foreground text-sm font-medium tracking-widest uppercase">
						{t.symbols.eyebrow}
					</p>
					<h2 className="mt-3 text-balance text-3xl font-bold tracking-tight sm:text-4xl">
						{t.symbols.title}
					</h2>
					<p className="text-muted-foreground mt-5 text-lg leading-relaxed">
						{t.symbols.subtitle}
					</p>
				</div>

				<div className="mt-14 space-y-10">
					{grouped.map(({ cat, items }) => (
						<div key={cat}>
							<h3 className="text-muted-foreground mb-4 text-xs font-semibold tracking-widest uppercase">
								{t.symbols.categories[cat]}
							</h3>
							<div className="grid grid-cols-4 gap-3 sm:grid-cols-6 md:grid-cols-8">
								{items.map((s) => (
									<div
										key={s.id}
										title={`${s.nameAr} — ${s.nameEn}`}
										className="bg-card hover:bg-accent flex aspect-square cursor-default flex-col items-center justify-center rounded-xl border transition-colors"
									>
										<span className="text-3xl leading-none sm:text-4xl">
											{s.glyph}
										</span>
									</div>
								))}
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}
