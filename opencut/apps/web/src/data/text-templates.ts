/**
 * Arabic text templates for the editor.
 *
 * Used by Phase 4.1 (Arabic text editor enhancements). Categories:
 *   - islamic   : Quran ayat, hadith, duas (with full diacritics / tashkeel)
 *   - marketing : ad copy, calls to action
 *   - generic   : titles, captions, transitions for general content
 *
 * Each template stores plain Arabic with diacritics so it can be inserted
 * directly into the text-overlay tool without further processing.
 */

export type TextTemplateCategory =
	| "islamic"
	| "marketing"
	| "generic"
	| "occasions";

export interface TextTemplate {
	id: string;
	category: TextTemplateCategory;
	label: string;
	body: string;
	source?: string;
}

export const ARABIC_TEXT_TEMPLATES: readonly TextTemplate[] = [
	// --- Islamic: Quran ayat with full tashkeel ---
	{
		id: "ayah-fatiha-1",
		category: "islamic",
		label: "البسملة",
		body: "بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ",
		source: "القرآن الكريم",
	},
	{
		id: "ayah-baqarah-152",
		category: "islamic",
		label: "آية: فاذكروني أذكركم",
		body: "فَاذْكُرُونِي أَذْكُرْكُمْ وَاشْكُرُوا لِي وَلَا تَكْفُرُونِ",
		source: "سورة البقرة - 152",
	},
	{
		id: "ayah-talaq-3",
		category: "islamic",
		label: "آية: ومن يتوكل على الله",
		body: "وَمَن يَتَوَكَّلْ عَلَى اللَّهِ فَهُوَ حَسْبُهُ",
		source: "سورة الطلاق - 3",
	},
	// --- Islamic: hadith ---
	{
		id: "hadith-niyya",
		category: "islamic",
		label: "حديث: إنما الأعمال بالنيات",
		body: "إِنَّمَا الأَعْمَالُ بِالنِّيَّاتِ، وَإِنَّمَا لِكُلِّ امْرِئٍ مَا نَوَى",
		source: "متفق عليه",
	},
	{
		id: "hadith-deen-naseeha",
		category: "islamic",
		label: "حديث: الدين النصيحة",
		body: "الدِّينُ النَّصِيحَةُ",
		source: "رواه مسلم",
	},
	// --- Islamic: duas ---
	{
		id: "dua-rabbana",
		category: "islamic",
		label: "دعاء: ربنا آتنا في الدنيا حسنة",
		body: "رَبَّنَا آتِنَا فِي الدُّنْيَا حَسَنَةً وَفِي الْآخِرَةِ حَسَنَةً وَقِنَا عَذَابَ النَّارِ",
	},
	{
		id: "dua-istighfar",
		category: "islamic",
		label: "دعاء: أستغفر الله",
		body: "أَسْتَغْفِرُ اللَّهَ الْعَظِيمَ الَّذِي لَا إِلَٰهَ إِلَّا هُوَ الْحَيَّ الْقَيُّومَ وَأَتُوبُ إِلَيْهِ",
	},
	// --- Marketing: CTAs and ad copy ---
	{
		id: "cta-buy-now",
		category: "marketing",
		label: "زر شراء فوري",
		body: "اطلب الآن — العرض ينتهي قريباً",
	},
	{
		id: "cta-discount",
		category: "marketing",
		label: "إعلان تخفيض",
		body: "خصم حتى ٥٠٪ على جميع المنتجات",
	},
	{
		id: "cta-subscribe",
		category: "marketing",
		label: "دعوة للاشتراك",
		body: "اشترك في القناة وفعّل جرس الإشعارات لتصلك كل جديد",
	},
	{
		id: "cta-follow",
		category: "marketing",
		label: "دعوة للمتابعة",
		body: "تابعنا لمزيد من المحتوى المفيد",
	},
	{
		id: "cta-link-in-bio",
		category: "marketing",
		label: "الرابط في البايو",
		body: "الرابط الكامل في البايو 👆",
	},
	// --- Generic: titles and transitions ---
	{
		id: "title-intro",
		category: "generic",
		label: "افتتاحية",
		body: "أهلاً بك في الفيديو الجديد",
	},
	{
		id: "title-question",
		category: "generic",
		label: "سؤال للمشاهد",
		body: "ما رأيك؟ شاركنا في التعليقات",
	},
	{
		id: "title-step",
		category: "generic",
		label: "عنوان خطوة",
		body: "الخطوة الأولى",
	},
	{
		id: "title-conclusion",
		category: "generic",
		label: "خاتمة",
		body: "شكراً لمشاهدتك حتى النهاية",
	},
	// --- Occasions ---
	{
		id: "occ-ramadan-mubarak",
		category: "occasions",
		label: "رمضان مبارك",
		body: "رَمَضَانُ مُبَارَكٌ — كُلُّ عَامٍ وَأَنْتُمْ بِخَيْرٍ",
	},
	{
		id: "occ-eid-mubarak",
		category: "occasions",
		label: "عيد مبارك",
		body: "عِيدُكُمْ مُبَارَكٌ — تَقَبَّلَ اللَّهُ مِنَّا وَمِنْكُمْ",
	},
	{
		id: "occ-wedding",
		category: "occasions",
		label: "تهنئة بالزفاف",
		body: "بَارَكَ اللَّهُ لَكُمَا وَبَارَكَ عَلَيْكُمَا وَجَمَعَ بَيْنَكُمَا فِي خَيْرٍ",
	},
	{
		id: "occ-graduation",
		category: "occasions",
		label: "تخرج",
		body: "ألف مبروك التخرّج — بداية النجاح",
	},
];

export function listTemplatesByCategory(
	category: TextTemplateCategory,
): readonly TextTemplate[] {
	return ARABIC_TEXT_TEMPLATES.filter((t) => t.category === category);
}
