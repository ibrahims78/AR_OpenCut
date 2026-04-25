/**
 * Ready-to-use content templates for the home / landing showcase.
 *
 * These describe the *kind* of project a creator can start from. The actual
 * timeline scaffolding for each template will be implemented in a later
 * iteration; for now they power the showcase grid and the eventual
 * "New project from template" picker.
 */

export type ContentTemplateCategory =
	| "youtube"
	| "reels"
	| "ads"
	| "religious"
	| "occasions"
	| "marketing";

export interface ContentTemplate {
	id: string;
	category: ContentTemplateCategory;
	titleEn: string;
	titleAr: string;
	descriptionEn: string;
	descriptionAr: string;
	aspectRatio: "16:9" | "9:16" | "1:1" | "4:5";
	durationSeconds: number;
	gradient: string;
}

export const CONTENT_TEMPLATES: readonly ContentTemplate[] = [
	{
		id: "yt-vlog",
		category: "youtube",
		titleEn: "Arabic vlog intro",
		titleAr: "افتتاحية فلوغ",
		descriptionEn: "Hook + intro animation tuned for Arabic creators.",
		descriptionAr: "هوك وافتتاحية متحرّكة مضبوطة لصانع المحتوى العربي.",
		aspectRatio: "16:9",
		durationSeconds: 12,
		gradient: "from-rose-500/20 via-orange-500/20 to-amber-500/20",
	},
	{
		id: "yt-tutorial",
		category: "youtube",
		titleEn: "Tutorial framework",
		titleAr: "هيكل شرح تعليمي",
		descriptionEn: "Steps, callouts, and end screen ready to fill in.",
		descriptionAr: "خطوات، تعليقات، وشاشة نهاية جاهزة للتعبئة.",
		aspectRatio: "16:9",
		durationSeconds: 480,
		gradient: "from-sky-500/20 via-blue-500/20 to-indigo-500/20",
	},
	{
		id: "reel-product",
		category: "reels",
		titleEn: "Product reveal reel",
		titleAr: "ريل كشف منتج",
		descriptionEn: "9:16 reveal with bold Arabic captions.",
		descriptionAr: "كشف عمودي ٩:١٦ بكابتشن عربي عريض.",
		aspectRatio: "9:16",
		durationSeconds: 15,
		gradient: "from-fuchsia-500/20 via-pink-500/20 to-rose-500/20",
	},
	{
		id: "reel-quote",
		category: "reels",
		titleEn: "Daily quote",
		titleAr: "اقتباس يومي",
		descriptionEn: "Typography-driven 9:16 quote video.",
		descriptionAr: "فيديو عمودي يعتمد على الطباعة العربية.",
		aspectRatio: "9:16",
		durationSeconds: 10,
		gradient: "from-emerald-500/20 via-teal-500/20 to-cyan-500/20",
	},
	{
		id: "ad-flash-sale",
		category: "ads",
		titleEn: "Flash sale ad",
		titleAr: "إعلان تخفيضات",
		descriptionEn: "Square ad with countdown overlay.",
		descriptionAr: "إعلان مربع مع طبقة عدّ تنازلي.",
		aspectRatio: "1:1",
		durationSeconds: 20,
		gradient: "from-amber-500/25 via-orange-500/25 to-red-500/25",
	},
	{
		id: "ad-product-card",
		category: "ads",
		titleEn: "Product card ad",
		titleAr: "إعلان بطاقة منتج",
		descriptionEn: "Clean 4:5 product card with Arabic price tag.",
		descriptionAr: "بطاقة منتج ٤:٥ نظيفة مع سعر بالعربية.",
		aspectRatio: "4:5",
		durationSeconds: 15,
		gradient: "from-violet-500/20 via-purple-500/20 to-fuchsia-500/20",
	},
	{
		id: "rel-quran-ayah",
		category: "religious",
		titleEn: "Quran ayah card",
		titleAr: "بطاقة آية قرآنية",
		descriptionEn: "Calm, slow-fade ayah display with Cairo font.",
		descriptionAr: "عرض هادئ لآية قرآنية بخط Cairo.",
		aspectRatio: "9:16",
		durationSeconds: 20,
		gradient: "from-emerald-600/20 via-green-500/20 to-lime-500/20",
	},
	{
		id: "rel-hadith",
		category: "religious",
		titleEn: "Hadith short",
		titleAr: "حديث قصير",
		descriptionEn: "Narration credit + on-screen text.",
		descriptionAr: "نسبة الحديث ونصّ يظهر على الشاشة.",
		aspectRatio: "9:16",
		durationSeconds: 25,
		gradient: "from-teal-600/20 via-emerald-500/20 to-green-500/20",
	},
	{
		id: "occ-ramadan",
		category: "occasions",
		titleEn: "Ramadan greeting",
		titleAr: "تهنئة رمضان",
		descriptionEn: "Crescent overlay + Cairo headline.",
		descriptionAr: "طبقة هلال مع عنوان بخط Cairo.",
		aspectRatio: "1:1",
		durationSeconds: 12,
		gradient: "from-yellow-500/20 via-amber-500/20 to-orange-500/20",
	},
	{
		id: "occ-eid",
		category: "occasions",
		titleEn: "Eid greeting",
		titleAr: "تهنئة عيد",
		descriptionEn: "Festive layered greeting card.",
		descriptionAr: "بطاقة تهنئة احتفالية متعدّدة الطبقات.",
		aspectRatio: "1:1",
		durationSeconds: 12,
		gradient: "from-pink-500/20 via-rose-500/20 to-red-500/20",
	},
	{
		id: "mkt-testimonial",
		category: "marketing",
		titleEn: "Customer testimonial",
		titleAr: "شهادة عميل",
		descriptionEn: "Quote + photo + brand strip.",
		descriptionAr: "اقتباس مع صورة وشريط هوية.",
		aspectRatio: "1:1",
		durationSeconds: 18,
		gradient: "from-indigo-500/20 via-blue-500/20 to-sky-500/20",
	},
	{
		id: "mkt-explainer",
		category: "marketing",
		titleEn: "Service explainer",
		titleAr: "شرح خدمة",
		descriptionEn: "60-second explainer with section markers.",
		descriptionAr: "شرح ٦٠ ثانية مع علامات أقسام.",
		aspectRatio: "16:9",
		durationSeconds: 60,
		gradient: "from-cyan-500/20 via-sky-500/20 to-blue-500/20",
	},
];
