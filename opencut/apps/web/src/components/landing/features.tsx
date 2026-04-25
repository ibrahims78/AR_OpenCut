"use client";

import { useLocale } from "@/i18n/provider";
import {
	Languages,
	ShieldCheck,
	Zap,
	LayoutTemplate,
	Captions,
	GitBranch,
} from "lucide-react";

export function Features() {
	const { t } = useLocale();
	const items = [
		{ key: "rtl", Icon: Languages, item: t.features.items.rtl },
		{ key: "privacy", Icon: ShieldCheck, item: t.features.items.privacy },
		{ key: "speed", Icon: Zap, item: t.features.items.speed },
		{
			key: "templates",
			Icon: LayoutTemplate,
			item: t.features.items.templates,
		},
		{ key: "captions", Icon: Captions, item: t.features.items.captions },
		{
			key: "openSource",
			Icon: GitBranch,
			item: t.features.items.openSource,
		},
	] as const;

	return (
		<section
			id="features"
			className="border-t bg-background px-4 py-20 md:py-28"
		>
			<div className="mx-auto max-w-5xl">
				<div className="mx-auto max-w-2xl text-center">
					<p className="text-muted-foreground text-sm font-medium uppercase tracking-wider">
						{t.features.eyebrow}
					</p>
					<h2 className="mt-3 text-3xl font-bold tracking-tight md:text-4xl">
						{t.features.title}
					</h2>
					<p className="text-muted-foreground mt-4 text-base md:text-lg">
						{t.features.subtitle}
					</p>
				</div>

				<div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
					{items.map(({ key, Icon, item }) => (
						<div
							key={key}
							className="group bg-card rounded-2xl border p-6 transition-colors hover:border-foreground/30"
						>
							<div className="bg-muted text-foreground mb-5 flex size-10 items-center justify-center rounded-lg">
								<Icon className="size-5" />
							</div>
							<h3 className="text-lg font-semibold">{item.title}</h3>
							<p className="text-muted-foreground mt-2 text-sm leading-relaxed">
								{item.description}
							</p>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}
