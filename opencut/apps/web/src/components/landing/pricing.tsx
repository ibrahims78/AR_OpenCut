"use client";

import Link from "next/link";
import { useLocale } from "@/i18n/provider";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";
import { SOCIAL_LINKS } from "@/site/social";

export function Pricing() {
	const { t } = useLocale();
	const community = t.pricing.tiers.community;
	const selfhost = t.pricing.tiers.selfhost;

	const tiers = [
		{
			name: community.name,
			price: community.price,
			description: community.description,
			features: community.features,
			cta: community.cta,
			href: "/projects",
			highlighted: true,
		},
		{
			name: selfhost.name,
			price: selfhost.price,
			description: selfhost.description,
			features: selfhost.features,
			cta: selfhost.cta,
			href: SOCIAL_LINKS.github,
			highlighted: false,
		},
	];

	return (
		<section id="pricing" className="border-t bg-muted/30 px-4 py-20 md:py-28">
			<div className="mx-auto max-w-5xl">
				<div className="mx-auto max-w-2xl text-center">
					<p className="text-muted-foreground text-sm font-medium uppercase tracking-wider">
						{t.pricing.eyebrow}
					</p>
					<h2 className="mt-3 text-3xl font-bold tracking-tight md:text-4xl">
						{t.pricing.title}
					</h2>
					<p className="text-muted-foreground mt-4 text-base md:text-lg">
						{t.pricing.subtitle}
					</p>
				</div>

				<div className="mt-12 grid gap-6 md:grid-cols-2">
					{tiers.map((tier) => (
						<div
							key={tier.name}
							className={`bg-background rounded-2xl border p-8 ${
								tier.highlighted ? "ring-foreground/20 ring-2" : ""
							}`}
						>
							<h3 className="text-lg font-semibold">{tier.name}</h3>
							<div className="mt-4 flex items-baseline gap-2">
								<span className="text-4xl font-bold tracking-tight">
									{tier.price}
								</span>
							</div>
							<p className="text-muted-foreground mt-3 text-sm">
								{tier.description}
							</p>
							<ul className="mt-6 space-y-3">
								{tier.features.map((feature) => (
									<li key={feature} className="flex items-start gap-2 text-sm">
										<Check className="text-emerald-500 mt-0.5 size-4 shrink-0" />
										<span>{feature}</span>
									</li>
								))}
							</ul>
							<div className="mt-8">
								<Link
									href={tier.href}
									target={tier.href.startsWith("http") ? "_blank" : undefined}
									rel={
										tier.href.startsWith("http")
											? "noopener noreferrer"
											: undefined
									}
								>
									<Button
										className="w-full"
										variant={tier.highlighted ? "default" : "outline"}
									>
										{tier.cta}
									</Button>
								</Link>
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}
