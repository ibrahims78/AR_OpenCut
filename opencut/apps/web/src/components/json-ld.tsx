export function SoftwareJsonLd() {
	const data = {
		"@context": "https://schema.org",
		"@type": "SoftwareApplication",
		name: "OpenCut Arabic",
		alternateName: "أوبن كت العربي",
		description:
			"Free, open-source, browser-based video editor with first-class Arabic and RTL support.",
		applicationCategory: "MultimediaApplication",
		operatingSystem: "Web",
		offers: {
			"@type": "Offer",
			price: "0",
			priceCurrency: "USD",
		},
		license: "https://opensource.org/licenses/MIT",
		inLanguage: ["en", "ar"],
		featureList: [
			"Right-to-left layout",
			"Cairo font support",
			"Browser-only editing (no upload required)",
			"SRT/VTT subtitle export",
			"Templates for YouTube, Reels, ads, and Islamic content",
			"MIT licensed and self-hostable",
		],
	};

	return (
		<script
			type="application/ld+json"
			// biome-ignore lint/security/noDangerouslySetInnerHtml: structured data
			dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
		/>
	);
}
