export type IslamicSymbol = {
	id: string;
	glyph: string;
	nameAr: string;
	nameEn: string;
	category: "religious" | "ornament" | "celestial" | "verse-marker";
};

export const islamicSymbols: IslamicSymbol[] = [
	{ id: "allah", glyph: "ﷲ", nameAr: "لفظ الجلالة", nameEn: "Allah", category: "religious" },
	{ id: "muhammad", glyph: "ﷴ", nameAr: "محمد", nameEn: "Muhammad", category: "religious" },
	{ id: "salla", glyph: "ﷺ", nameAr: "صلى الله عليه وسلم", nameEn: "Sallallahu alayhi wa sallam", category: "religious" },
	{ id: "jalla", glyph: "ﷻ", nameAr: "جل جلاله", nameEn: "Jalla Jalaluhu", category: "religious" },
	{ id: "alayhi", glyph: "ؑ", nameAr: "عليه السلام", nameEn: "Alayhi as-salam", category: "religious" },
	{ id: "radi", glyph: "ؓ", nameAr: "رضي الله عنه", nameEn: "Radiyallahu anhu", category: "religious" },
	{ id: "rahmatullah", glyph: "ؒ", nameAr: "رحمه الله", nameEn: "Rahimahullah", category: "religious" },
	{ id: "ayah-end", glyph: "۝", nameAr: "نهاية آية", nameEn: "End of ayah", category: "verse-marker" },
	{ id: "ayah-start", glyph: "۞", nameAr: "بداية حزب", nameEn: "Start of hizb", category: "verse-marker" },
	{ id: "rub-el-hizb", glyph: "۞", nameAr: "ربع الحزب", nameEn: "Rub el Hizb", category: "verse-marker" },
	{ id: "sajdah", glyph: "۩", nameAr: "علامة سجدة", nameEn: "Place of sajdah", category: "verse-marker" },
	{ id: "crescent", glyph: "☪", nameAr: "هلال ونجمة", nameEn: "Star and crescent", category: "celestial" },
	{ id: "star8", glyph: "✸", nameAr: "نجمة ثمانية", nameEn: "Eight-pointed star", category: "celestial" },
	{ id: "star16", glyph: "✺", nameAr: "نجمة ست عشرية", nameEn: "Sixteen-pointed star", category: "celestial" },
	{ id: "ornament-1", glyph: "❀", nameAr: "زخرفة وردة", nameEn: "Floral ornament", category: "ornament" },
	{ id: "ornament-2", glyph: "✿", nameAr: "زهرة كاملة", nameEn: "Bloom", category: "ornament" },
	{ id: "ornament-3", glyph: "❋", nameAr: "زهرة سداسية", nameEn: "Six-petal flower", category: "ornament" },
	{ id: "ornament-4", glyph: "✦", nameAr: "نجمة رباعية", nameEn: "Four-pointed star", category: "ornament" },
	{ id: "ornament-5", glyph: "❄", nameAr: "ندفة ثلج", nameEn: "Snowflake", category: "ornament" },
	{ id: "ornament-6", glyph: "✧", nameAr: "بريق", nameEn: "Sparkle", category: "ornament" },
	{ id: "ornament-7", glyph: "◈", nameAr: "ماسة", nameEn: "Diamond", category: "ornament" },
	{ id: "ornament-8", glyph: "❖", nameAr: "زهرة ماسية", nameEn: "Diamond flower", category: "ornament" },
	{ id: "ornament-9", glyph: "✶", nameAr: "نجمة ست رؤوس", nameEn: "Six-pointed star", category: "ornament" },
	{ id: "ornament-10", glyph: "❂", nameAr: "شمس", nameEn: "Sun", category: "ornament" },
];

export function symbolsByCategory(category: IslamicSymbol["category"]): IslamicSymbol[] {
	return islamicSymbols.filter((s) => s.category === category);
}
