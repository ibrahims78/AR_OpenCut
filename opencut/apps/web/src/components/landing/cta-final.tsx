"use client";

import Link from "next/link";
import { useLocale } from "@/i18n/provider";
import { Button } from "@/components/ui/button";
import { ArrowRight, ArrowLeft, Github } from "lucide-react";
import { SOCIAL_LINKS } from "@/site/social";

export function CtaFinal() {
	const { t, locale } = useLocale();
	const Arrow = locale === "ar" ? ArrowLeft : ArrowRight;

	return (
		<section className="bg-background border-t px-4 py-20 md:py-28">
			<div className="mx-auto max-w-3xl text-center">
				<h2 className="text-3xl font-bold tracking-tight md:text-5xl">
					{t.ctaFinal.title}
				</h2>
				<p className="text-muted-foreground mx-auto mt-5 max-w-xl text-base md:text-lg">
					{t.ctaFinal.subtitle}
				</p>
				<div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
					<Link href="/projects">
						<Button size="lg" className="h-11 text-base">
							{t.ctaFinal.cta}
							<Arrow className="size-4" />
						</Button>
					</Link>
					<Link
						href={SOCIAL_LINKS.github}
						target="_blank"
						rel="noopener noreferrer"
					>
						<Button size="lg" variant="outline" className="h-11 text-base">
							<Github className="size-4" />
							{t.ctaFinal.secondaryCta}
						</Button>
					</Link>
				</div>
			</div>
		</section>
	);
}
