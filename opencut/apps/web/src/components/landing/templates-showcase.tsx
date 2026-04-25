"use client";

import Link from "next/link";
import { useLocale } from "@/i18n/provider";
import {
	CONTENT_TEMPLATES,
	type ContentTemplate,
} from "@/data/content-templates";
import { ArrowRight, ArrowLeft } from "lucide-react";

const ASPECT_CLASS: Record<ContentTemplate["aspectRatio"], string> = {
	"16:9": "aspect-video",
	"9:16": "aspect-[9/16]",
	"1:1": "aspect-square",
	"4:5": "aspect-[4/5]",
};

function formatDuration(seconds: number, locale: "en" | "ar"): string {
	if (seconds < 60) {
		return locale === "ar" ? `${seconds} ث` : `${seconds}s`;
	}
	const minutes = Math.round(seconds / 60);
	return locale === "ar" ? `${minutes} د` : `${minutes}m`;
}

export function TemplatesShowcase() {
	const { t, locale } = useLocale();
	const Arrow = locale === "ar" ? ArrowLeft : ArrowRight;

	return (
		<section
			id="templates"
			className="border-t bg-background px-4 py-20 md:py-28"
		>
			<div className="mx-auto max-w-6xl">
				<div className="mx-auto max-w-2xl text-center">
					<p className="text-muted-foreground text-sm font-medium uppercase tracking-wider">
						{t.templates.eyebrow}
					</p>
					<h2 className="mt-3 text-3xl font-bold tracking-tight md:text-4xl">
						{t.templates.title}
					</h2>
					<p className="text-muted-foreground mt-4 text-base md:text-lg">
						{t.templates.subtitle}
					</p>
				</div>

				<div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
					{CONTENT_TEMPLATES.slice(0, 9).map((template) => {
						const title = locale === "ar" ? template.titleAr : template.titleEn;
						const description =
							locale === "ar" ? template.descriptionAr : template.descriptionEn;
						const category =
							t.templates.categories[
								template.category as keyof typeof t.templates.categories
							];
						return (
							<Link
								href="/projects"
								key={template.id}
								className="group bg-card overflow-hidden rounded-2xl border transition-colors hover:border-foreground/30"
							>
								<div
									className={`${ASPECT_CLASS[template.aspectRatio]} relative w-full overflow-hidden bg-gradient-to-br ${template.gradient}`}
								>
									<div className="absolute inset-0 flex items-center justify-center">
										<span className="bg-background/70 text-foreground rounded-md px-2 py-1 text-xs font-medium backdrop-blur">
											{template.aspectRatio}
										</span>
									</div>
									<div className="absolute bottom-3 end-3">
										<span className="bg-background/70 text-muted-foreground rounded-md px-2 py-1 text-xs backdrop-blur">
											{formatDuration(template.durationSeconds, locale)}
										</span>
									</div>
								</div>
								<div className="p-5">
									<div className="text-muted-foreground mb-1 text-xs font-medium uppercase tracking-wider">
										{category}
									</div>
									<h3 className="text-base font-semibold">{title}</h3>
									<p className="text-muted-foreground mt-1 line-clamp-2 text-sm">
										{description}
									</p>
									<div className="text-foreground mt-4 inline-flex items-center gap-1 text-sm font-medium opacity-80 transition-opacity group-hover:opacity-100">
										<span>{t.templates.cta}</span>
										<Arrow className="size-4" />
									</div>
								</div>
							</Link>
						);
					})}
				</div>
			</div>
		</section>
	);
}
