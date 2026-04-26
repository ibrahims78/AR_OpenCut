import { Hero } from "@/components/landing/hero";
import { Features } from "@/components/landing/features";
import { Comparison } from "@/components/landing/comparison";
import { TemplatesShowcase } from "@/components/landing/templates-showcase";
import { Symbols } from "@/components/landing/symbols";
import { Testimonials } from "@/components/landing/testimonials";
import { Faq } from "@/components/landing/faq";
import { Pricing } from "@/components/landing/pricing";
import { CtaFinal } from "@/components/landing/cta-final";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { SoftwareJsonLd } from "@/components/json-ld";
import type { Metadata } from "next";
import { SITE_URL } from "@/site/brand";

export const metadata: Metadata = {
	alternates: {
		canonical: SITE_URL,
	},
};

export default async function Home() {
	return (
		<div>
			<SoftwareJsonLd />
			<Header />
			<Hero />
			<Features />
			<Comparison />
			<TemplatesShowcase />
			<Symbols />
			<Testimonials />
			<Pricing />
			<Faq />
			<CtaFinal />
			<Footer />
		</div>
	);
}
