export type Locale = "en" | "ar";

export const LOCALES: { code: Locale; label: string; nativeLabel: string }[] = [
	{ code: "en", label: "English", nativeLabel: "English" },
	{ code: "ar", label: "Arabic", nativeLabel: "العربية" },
];

export const dictionaries = {
	en: {
		header: {
			roadmap: "Roadmap",
			contributors: "Contributors",
			sponsors: "Sponsors",
			blog: "Blog",
			projects: "Projects",
			openMenu: "Open menu",
			closeMenu: "Close menu",
		},
		hero: {
			title: "The open source",
			titleAccent: "Video editor",
			subtitle:
				"A simple but powerful video editor that gets the job done. Works on any platform.",
			cta: "Try early beta",
		},
		footer: {
			tagline: "The privacy-first video editor that feels simple to use.",
			resources: "Resources",
			company: "Company",
			roadmap: "Roadmap",
			changelog: "Changelog",
			blog: "Blog",
			privacy: "Privacy",
			terms: "Terms of use",
			contributors: "Contributors",
			sponsors: "Sponsors",
			brand: "Brand",
			about: "About",
			rights: "All Rights Reserved",
		},
		locale: {
			switcher: "Language",
			english: "English",
			arabic: "العربية",
		},
	},
	ar: {
		header: {
			roadmap: "خارطة الطريق",
			contributors: "المساهمون",
			sponsors: "الرعاة",
			blog: "المدونة",
			projects: "المشاريع",
			openMenu: "فتح القائمة",
			closeMenu: "إغلاق القائمة",
		},
		hero: {
			title: "محرر الفيديو",
			titleAccent: "مفتوح المصدر",
			subtitle:
				"محرر فيديو بسيط وقوي ينجز المهمة. يعمل على أي منصة وفي أي متصفح.",
			cta: "جرّب النسخة التجريبية",
		},
		footer: {
			tagline: "محرر فيديو يحترم خصوصيتك ويتميّز ببساطة الاستخدام.",
			resources: "الموارد",
			company: "الشركة",
			roadmap: "خارطة الطريق",
			changelog: "سجل التغييرات",
			blog: "المدونة",
			privacy: "الخصوصية",
			terms: "شروط الاستخدام",
			contributors: "المساهمون",
			sponsors: "الرعاة",
			brand: "الهوية",
			about: "عن المشروع",
			rights: "جميع الحقوق محفوظة",
		},
		locale: {
			switcher: "اللغة",
			english: "English",
			arabic: "العربية",
		},
	},
} as const;

export type Dictionary = (typeof dictionaries)["en"];

export const DEFAULT_LOCALE: Locale = "en";

export function isLocale(value: string | undefined | null): value is Locale {
	return value === "en" || value === "ar";
}

export function getDirection(locale: Locale): "ltr" | "rtl" {
	return locale === "ar" ? "rtl" : "ltr";
}
