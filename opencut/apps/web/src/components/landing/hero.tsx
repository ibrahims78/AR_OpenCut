"use client";

import { Button } from "../ui/button";
import { ArrowRight, ArrowLeft } from "lucide-react";
import Image from "next/image";
import { Handlebars } from "./handlebars";
import Link from "next/link";
import { useLocale } from "@/i18n/provider";
import { Typewriter } from "./typewriter";

export function Hero() {
	const { t, locale } = useLocale();
	const Arrow = locale === "ar" ? ArrowLeft : ArrowRight;

	return (
		<div className="flex min-h-[calc(100svh-4.5rem)] flex-col items-center justify-between px-4 text-center">
			<Image
				className="absolute top-0 left-0 -z-50 size-full object-cover opacity-85 invert dark:invert-0"
				src="/landing-page-dark.png"
				height={1903.5}
				width={1269}
				alt="OpenCut video editor landing page background"
			/>
			<div className="mx-auto flex w-full max-w-3xl flex-1 flex-col justify-center">
				<div className="inline-block text-4xl font-bold tracking-tighter md:text-[4rem]">
					<h1>{t.hero.title}</h1>
					<Handlebars>{t.hero.titleAccent}</Handlebars>
				</div>

				<p className="text-muted-foreground mx-auto mt-10 max-w-xl text-base font-light tracking-wide sm:text-xl">
					{t.hero.subtitle}
				</p>

				<p className="text-muted-foreground/80 mx-auto mt-4 text-sm sm:text-base">
					<span>{t.hero.typewriterPrefix}</span>{" "}
					<Typewriter
						phrases={t.hero.typewriterPhrases}
						className="text-foreground font-semibold"
					/>
				</p>

				<div className="mt-8 flex justify-center gap-8">
					<Link href="/projects">
						<Button type="submit" size="lg" className="h-11 text-base">
							{t.hero.cta}
							<Arrow className="ml-0.5" />
						</Button>
					</Link>
				</div>
			</div>
		</div>
	);
}
