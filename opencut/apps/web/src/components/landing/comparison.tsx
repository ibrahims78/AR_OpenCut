"use client";

import { useLocale } from "@/i18n/provider";
import { Check, X } from "lucide-react";

export function Comparison() {
	const { t } = useLocale();
	const r = t.comparison.rows;

	const rows = [
		{
			label: r.price,
			us: r.priceUs,
			them: r.priceThem,
			usPositive: true,
			themPositive: false,
		},
		{
			label: r.rtl,
			us: r.rtlUs,
			them: r.rtlThem,
			usPositive: true,
			themPositive: false,
		},
		{
			label: r.privacy,
			us: r.privacyUs,
			them: r.privacyThem,
			usPositive: true,
			themPositive: false,
		},
		{
			label: r.watermark,
			us: r.watermarkUs,
			them: r.watermarkThem,
			usPositive: true,
			themPositive: false,
		},
		{
			label: r.offline,
			us: r.offlineUs,
			them: r.offlineThem,
			usPositive: true,
			themPositive: false,
		},
		{
			label: r.selfHost,
			us: r.selfHostUs,
			them: r.selfHostThem,
			usPositive: true,
			themPositive: false,
		},
	];

	return (
		<section className="border-t bg-muted/30 px-4 py-20 md:py-28">
			<div className="mx-auto max-w-4xl">
				<div className="mx-auto max-w-2xl text-center">
					<p className="text-muted-foreground text-sm font-medium uppercase tracking-wider">
						{t.comparison.eyebrow}
					</p>
					<h2 className="mt-3 text-3xl font-bold tracking-tight md:text-4xl">
						{t.comparison.title}
					</h2>
					<p className="text-muted-foreground mt-4 text-base md:text-lg">
						{t.comparison.subtitle}
					</p>
				</div>

				<div className="bg-background mt-12 overflow-hidden rounded-2xl border">
					<div className="grid grid-cols-3 border-b bg-muted/40 text-sm font-semibold">
						<div className="p-4" />
						<div className="border-x p-4 text-center text-foreground">
							{t.comparison.us}
						</div>
						<div className="text-muted-foreground p-4 text-center">
							{t.comparison.competitor}
						</div>
					</div>
					{rows.map((row) => (
						<div
							key={row.label}
							className="grid grid-cols-3 border-b text-sm last:border-b-0"
						>
							<div className="bg-muted/20 p-4 font-medium">{row.label}</div>
							<div className="border-x p-4">
								<div className="flex items-start gap-2">
									<Check className="text-emerald-500 mt-0.5 size-4 shrink-0" />
									<span>{row.us}</span>
								</div>
							</div>
							<div className="text-muted-foreground p-4">
								<div className="flex items-start gap-2">
									<X className="text-rose-500 mt-0.5 size-4 shrink-0" />
									<span>{row.them}</span>
								</div>
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}
