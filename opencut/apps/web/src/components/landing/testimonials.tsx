"use client";

import { useLocale } from "@/i18n/provider";
import { Quote } from "lucide-react";

interface Testimonial {
	quoteEn: string;
	quoteAr: string;
	authorEn: string;
	authorAr: string;
	roleEn: string;
	roleAr: string;
}

const TESTIMONIALS: readonly Testimonial[] = [
	{
		quoteEn:
			"Finally an editor where Arabic text doesn't break. Cairo, RTL, and tashkeel just work.",
		quoteAr:
			"أخيراً محرر فيديو لا تنكسر فيه النصوص العربية. خط Cairo واتجاه RTL والتشكيل يعمل ببساطة.",
		authorEn: "Sara H.",
		authorAr: "سارة هـ.",
		roleEn: "YouTube creator",
		roleAr: "صانعة محتوى يوتيوب",
	},
	{
		quoteEn:
			"In-browser, no upload, MIT licensed — I host the whole thing on my own server. Perfect for our team.",
		quoteAr:
			"داخل المتصفح، بدون رفع، رخصة MIT — أستضيفه كاملاً على خادمي. مثالي لفريقنا.",
		authorEn: "Khalid A.",
		authorAr: "خالد أ.",
		roleEn: "Open-source contributor",
		roleAr: "مساهم مفتوح المصدر",
	},
	{
		quoteEn:
			"The Arabic templates saved me hours every week. Reels for our Ramadan campaign were ready in minutes.",
		quoteAr:
			"وفّرت قوالب العربية ساعات أسبوعياً. ريلز حملة رمضان كانت جاهزة في دقائق.",
		authorEn: "Maya N.",
		authorAr: "ميا ن.",
		roleEn: "Marketing lead",
		roleAr: "مسؤولة تسويق",
	},
];

export function Testimonials() {
	const { t, locale } = useLocale();

	return (
		<section className="border-t bg-background px-4 py-20 md:py-28">
			<div className="mx-auto max-w-5xl">
				<div className="mx-auto max-w-2xl text-center">
					<p className="text-muted-foreground text-sm font-medium uppercase tracking-wider">
						{t.testimonials.eyebrow}
					</p>
					<h2 className="mt-3 text-3xl font-bold tracking-tight md:text-4xl">
						{t.testimonials.title}
					</h2>
					<p className="text-muted-foreground mt-4 text-base md:text-lg">
						{t.testimonials.subtitle}
					</p>
				</div>

				<div className="mt-12 grid gap-6 md:grid-cols-3">
					{TESTIMONIALS.map((item) => {
						const quote = locale === "ar" ? item.quoteAr : item.quoteEn;
						const author = locale === "ar" ? item.authorAr : item.authorEn;
						const role = locale === "ar" ? item.roleAr : item.roleEn;
						return (
							<div
								key={item.authorEn}
								className="bg-card rounded-2xl border p-6"
							>
								<Quote className="text-muted-foreground/60 size-6" />
								<p className="text-foreground mt-4 text-sm leading-relaxed">
									{quote}
								</p>
								<div className="mt-6">
									<div className="text-foreground text-sm font-semibold">
										{author}
									</div>
									<div className="text-muted-foreground text-xs">{role}</div>
								</div>
							</div>
						);
					})}
				</div>
			</div>
		</section>
	);
}
