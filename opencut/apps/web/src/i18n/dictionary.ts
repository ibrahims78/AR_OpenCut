export type Locale = "en" | "ar";

export const LOCALES: { code: Locale; label: string; nativeLabel: string }[] = [
        { code: "en", label: "English", nativeLabel: "English" },
        { code: "ar", label: "Arabic", nativeLabel: "العربية" },
];

type DictionaryShape = {
        header: {
                roadmap: string;
                contributors: string;
                sponsors: string;
                blog: string;
                projects: string;
                openMenu: string;
                closeMenu: string;
        };
        hero: {
                title: string;
                titleAccent: string;
                subtitle: string;
                cta: string;
                secondaryCta: string;
                badge: string;
        };
        features: {
                eyebrow: string;
                title: string;
                subtitle: string;
                items: {
                        rtl: { title: string; description: string };
                        privacy: { title: string; description: string };
                        speed: { title: string; description: string };
                        templates: { title: string; description: string };
                        captions: { title: string; description: string };
                        openSource: { title: string; description: string };
                };
        };
        comparison: {
                eyebrow: string;
                title: string;
                subtitle: string;
                us: string;
                competitor: string;
                rows: {
                        price: string;
                        priceUs: string;
                        priceThem: string;
                        rtl: string;
                        rtlUs: string;
                        rtlThem: string;
                        privacy: string;
                        privacyUs: string;
                        privacyThem: string;
                        watermark: string;
                        watermarkUs: string;
                        watermarkThem: string;
                        offline: string;
                        offlineUs: string;
                        offlineThem: string;
                        selfHost: string;
                        selfHostUs: string;
                        selfHostThem: string;
                };
        };
        templates: {
                eyebrow: string;
                title: string;
                subtitle: string;
                cta: string;
                categories: {
                        youtube: string;
                        reels: string;
                        ads: string;
                        religious: string;
                        occasions: string;
                        marketing: string;
                };
        };
        testimonials: {
                eyebrow: string;
                title: string;
                subtitle: string;
        };
        faq: {
                eyebrow: string;
                title: string;
                subtitle: string;
                items: { q: string; a: string }[];
        };
        pricing: {
                eyebrow: string;
                title: string;
                subtitle: string;
                tiers: {
                        community: {
                                name: string;
                                price: string;
                                description: string;
                                features: string[];
                                cta: string;
                        };
                        selfhost: {
                                name: string;
                                price: string;
                                description: string;
                                features: string[];
                                cta: string;
                        };
                };
        };
        ctaFinal: {
                title: string;
                subtitle: string;
                cta: string;
                secondaryCta: string;
        };
        footer: {
                tagline: string;
                resources: string;
                company: string;
                roadmap: string;
                changelog: string;
                blog: string;
                privacy: string;
                terms: string;
                contributors: string;
                sponsors: string;
                brand: string;
                about: string;
                rights: string;
        };
        locale: {
                switcher: string;
                english: string;
                arabic: string;
        };
};

export const dictionaries: Record<Locale, DictionaryShape> = {
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
                        secondaryCta: "Browse templates",
                        badge: "Free • Open Source • Privacy-first",
                },
                features: {
                        eyebrow: "Why OpenCut",
                        title: "Everything you need to create",
                        subtitle:
                                "A modern editor built with Arabic creators in mind. Cut, caption, and ship videos that feel right.",
                        items: {
                                rtl: {
                                        title: "True Arabic & RTL",
                                        description:
                                                "First-class right-to-left layout, Cairo font, and templates designed for Arabic typography.",
                                },
                                privacy: {
                                        title: "Privacy by default",
                                        description:
                                                "All editing runs in your browser. Your media never leaves your device.",
                                },
                                speed: {
                                        title: "Fast WASM core",
                                        description:
                                                "Hardware-accelerated video pipeline powered by WebCodecs and WebAssembly.",
                                },
                                templates: {
                                        title: "Ready-made templates",
                                        description:
                                                "Reels, YouTube, ads, and event templates tuned for Arabic audiences.",
                                },
                                captions: {
                                        title: "Captions & subtitles",
                                        description:
                                                "Burn captions, build SRT/VTT, and style Arabic text with full diacritic support.",
                                },
                                openSource: {
                                        title: "Open source forever",
                                        description:
                                                "MIT licensed, community-driven, and self-hostable. Yours to fork and extend.",
                                },
                        },
                },
                comparison: {
                        eyebrow: "How we compare",
                        title: "Free, private, and Arabic-first",
                        subtitle:
                                "See how OpenCut Arabic compares to popular online video editors.",
                        us: "OpenCut Arabic",
                        competitor: "Typical SaaS editor",
                        rows: {
                                price: "Pricing",
                                priceUs: "Free, MIT license",
                                priceThem: "$15–$30 / month",
                                rtl: "Native Arabic & RTL",
                                rtlUs: "Built-in",
                                rtlThem: "Partial / add-on",
                                privacy: "Local-first editing",
                                privacyUs: "All in-browser",
                                privacyThem: "Cloud upload required",
                                watermark: "Watermarks",
                                watermarkUs: "None",
                                watermarkThem: "Free tier branded",
                                offline: "Works offline",
                                offlineUs: "Yes",
                                offlineThem: "No",
                                selfHost: "Self-hostable",
                                selfHostUs: "Yes",
                                selfHostThem: "No",
                        },
                },
                templates: {
                        eyebrow: "Templates",
                        title: "Start from a ready template",
                        subtitle:
                                "Curated templates for Arabic creators — from short-form to long-form, from religious content to product ads.",
                        cta: "Open template",
                        categories: {
                                youtube: "YouTube",
                                reels: "Reels & TikTok",
                                ads: "Product ads",
                                religious: "Religious",
                                occasions: "Occasions",
                                marketing: "Marketing",
                        },
                },
                testimonials: {
                        eyebrow: "Loved by creators",
                        title: "Built by the community, for the community",
                        subtitle:
                                "OpenCut is trusted by independent creators who value privacy and control. Quotes below are from contributors and early adopters.",
                },
                faq: {
                        eyebrow: "FAQ",
                        title: "Common questions",
                        subtitle:
                                "Everything you need to know before you start editing in OpenCut Arabic.",
                        items: [
                                {
                                        q: "Is OpenCut really free?",
                                        a: "Yes. OpenCut is open source under the MIT license. There is no paid tier, no watermark, and no upload limit.",
                                },
                                {
                                        q: "Where is my video stored?",
                                        a: "Your video is processed entirely in your browser using WebAssembly. Files never leave your device unless you choose to export.",
                                },
                                {
                                        q: "Does it support Arabic typography?",
                                        a: "Yes. The Cairo font is bundled, RTL is enabled by default, and text tools support diacritics (tashkeel) and full Unicode shaping.",
                                },
                                {
                                        q: "Can I use my own machine to host it?",
                                        a: "Absolutely. Clone the repository, run bun install, and deploy anywhere — Replit, Vercel, Cloudflare, or your own server.",
                                },
                                {
                                        q: "Are auto-captions in Arabic supported?",
                                        a: "Auto-caption generation requires connecting an external speech-to-text provider (e.g. Whisper). The editor supports importing and styling SRT/VTT files in Arabic today.",
                                },
                                {
                                        q: "Can I contribute templates or translations?",
                                        a: "Please do. Open a pull request on GitHub or join our community channels — Arabic templates and content are especially welcome.",
                                },
                        ],
                },
                pricing: {
                        eyebrow: "Pricing",
                        title: "Free, today and tomorrow",
                        subtitle: "OpenCut Arabic is and will remain free under the MIT license.",
                        tiers: {
                                community: {
                                        name: "Community",
                                        price: "Free",
                                        description: "For independent creators and learners.",
                                        features: [
                                                "Full editor — no watermark",
                                                "Arabic + English UI",
                                                "All templates",
                                                "Local-first, in-browser",
                                        ],
                                        cta: "Open the editor",
                                },
                                selfhost: {
                                        name: "Self-hosted",
                                        price: "Free",
                                        description: "Run it on your own infrastructure.",
                                        features: [
                                                "MIT license, no restrictions",
                                                "Deploy on Replit, Vercel, Cloudflare",
                                                "Custom branding allowed",
                                                "Community support",
                                        ],
                                        cta: "View on GitHub",
                                },
                        },
                },
                ctaFinal: {
                        title: "Start editing in Arabic today",
                        subtitle:
                                "No signup. No watermark. No upload. Open the editor and your project is ready.",
                        cta: "Open the editor",
                        secondaryCta: "Star on GitHub",
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
                        secondaryCta: "تصفّح القوالب",
                        badge: "مجاني • مفتوح المصدر • يحترم خصوصيتك",
                },
                features: {
                        eyebrow: "لماذا OpenCut",
                        title: "كل ما تحتاجه لتصميم فيديو احترافي",
                        subtitle:
                                "محرر حديث صُمّم مع وضع صانع المحتوى العربي في الاعتبار. اقطع، أضف ترجمات، وانشر فيديوهات تليق بجمهورك.",
                        items: {
                                rtl: {
                                        title: "دعم كامل للعربية وRTL",
                                        description:
                                                "اتجاه من اليمين لليسار جاهز افتراضياً، خط Cairo، وقوالب مصمّمة للطباعة العربية.",
                                },
                                privacy: {
                                        title: "خصوصية افتراضية",
                                        description:
                                                "كل عمليات التحرير تتم داخل متصفحك. ملفاتك لا تغادر جهازك أبداً.",
                                },
                                speed: {
                                        title: "نواة WASM سريعة",
                                        description:
                                                "خط معالجة فيديو معجّل بالعتاد عبر WebCodecs وWebAssembly.",
                                },
                                templates: {
                                        title: "قوالب جاهزة",
                                        description:
                                                "قوالب لـ Reels واليوتيوب والإعلانات والمناسبات مضبوطة للجمهور العربي.",
                                },
                                captions: {
                                        title: "الترجمات والكابتشن",
                                        description:
                                                "أضف الترجمات، صدّر SRT وVTT، ونسّق النصوص العربية بدعم كامل للتشكيل.",
                                },
                                openSource: {
                                        title: "مفتوح المصدر للأبد",
                                        description:
                                                "رخصة MIT، تطوير مجتمعي، ويمكن استضافته على خادمك. لك أن تطوّر وتعدّل بحرية.",
                                },
                        },
                },
                comparison: {
                        eyebrow: "مقارنة سريعة",
                        title: "مجاني، خاص، وعربي أولاً",
                        subtitle:
                                "شاهد كيف يقارن OpenCut العربي بمحررات الفيديو السحابية المعروفة.",
                        us: "OpenCut العربي",
                        competitor: "محرر سحابي تقليدي",
                        rows: {
                                price: "السعر",
                                priceUs: "مجاني، رخصة MIT",
                                priceThem: "15–30 دولار شهرياً",
                                rtl: "دعم العربية وRTL",
                                rtlUs: "أصلي ومدمج",
                                rtlThem: "جزئي أو إضافة",
                                privacy: "تحرير محلي",
                                privacyUs: "كله داخل المتصفح",
                                privacyThem: "يستلزم رفع ملفاتك للسحابة",
                                watermark: "علامات مائية",
                                watermarkUs: "لا توجد",
                                watermarkThem: "في الخطة المجانية",
                                offline: "العمل دون إنترنت",
                                offlineUs: "نعم",
                                offlineThem: "لا",
                                selfHost: "استضافة ذاتية",
                                selfHostUs: "نعم",
                                selfHostThem: "لا",
                        },
                },
                templates: {
                        eyebrow: "القوالب",
                        title: "ابدأ من قالب جاهز",
                        subtitle:
                                "مجموعة قوالب منتقاة لصنّاع المحتوى العرب — من الفيديوهات القصيرة إلى الطويلة، ومن المحتوى الديني إلى إعلانات المنتجات.",
                        cta: "فتح القالب",
                        categories: {
                                youtube: "يوتيوب",
                                reels: "ريلز وتيك توك",
                                ads: "إعلانات منتجات",
                                religious: "محتوى ديني",
                                occasions: "مناسبات",
                                marketing: "تسويق",
                        },
                },
                testimonials: {
                        eyebrow: "أحبّه المبدعون",
                        title: "صُنع بأيدي المجتمع، لأجل المجتمع",
                        subtitle:
                                "يثق صانعو المحتوى المستقلون في OpenCut لأنهم يقدّرون الخصوصية والتحكّم. الاقتباسات أدناه من مساهمين ومستخدمين أوائل.",
                },
                faq: {
                        eyebrow: "الأسئلة الشائعة",
                        title: "أسئلة قد تخطر ببالك",
                        subtitle: "كل ما تحتاج معرفته قبل أن تبدأ التحرير في OpenCut العربي.",
                        items: [
                                {
                                        q: "هل OpenCut مجاني فعلاً؟",
                                        a: "نعم. OpenCut مفتوح المصدر تحت رخصة MIT. لا توجد خطة مدفوعة، ولا علامة مائية، ولا حدّ أقصى للرفع.",
                                },
                                {
                                        q: "أين تُحفظ ملفات الفيديو الخاصة بي؟",
                                        a: "تتم معالجة الفيديو بالكامل داخل متصفحك عبر WebAssembly. الملفات لا تغادر جهازك إلا إذا اخترت تصدير الفيديو النهائي.",
                                },
                                {
                                        q: "هل يدعم الطباعة العربية بشكل صحيح؟",
                                        a: "نعم. خط Cairo مضمّن، اتجاه RTL مفعّل افتراضياً، وأدوات النصوص تدعم التشكيل وتشكيل الحروف العربية كاملاً.",
                                },
                                {
                                        q: "هل يمكنني استضافته على خادمي الخاص؟",
                                        a: "بالتأكيد. استنسخ المستودع، شغّل bun install، ثم انشره على Replit أو Vercel أو Cloudflare أو خادمك.",
                                },
                                {
                                        q: "هل توليد الترجمات التلقائية بالعربية مدعوم؟",
                                        a: "توليد الترجمات تلقائياً يتطلب ربط مزوّد خارجي للتعرف على الكلام (مثل Whisper). أما استيراد وتنسيق ملفات SRT وVTT بالعربية فمدعوم اليوم.",
                                },
                                {
                                        q: "هل يمكنني المساهمة بقوالب أو ترجمات؟",
                                        a: "نرحّب بذلك. افتح Pull Request على GitHub أو انضمّ إلى قنوات المجتمع — القوالب والمحتوى العربي مرحّب بها بشكل خاص.",
                                },
                        ],
                },
                pricing: {
                        eyebrow: "الأسعار",
                        title: "مجاني اليوم وغداً",
                        subtitle: "OpenCut العربي كان وسيظلّ مجانياً تحت رخصة MIT.",
                        tiers: {
                                community: {
                                        name: "المجتمع",
                                        price: "مجاني",
                                        description: "للمبدعين المستقلين والمتعلّمين.",
                                        features: [
                                                "المحرر كاملاً — بدون علامة مائية",
                                                "واجهة عربية وإنجليزية",
                                                "كل القوالب متاحة",
                                                "محلي بالكامل داخل المتصفح",
                                        ],
                                        cta: "افتح المحرر",
                                },
                                selfhost: {
                                        name: "استضافة ذاتية",
                                        price: "مجاني",
                                        description: "شغّله على بنيتك التحتية الخاصة.",
                                        features: [
                                                "رخصة MIT بدون قيود",
                                                "النشر على Replit أو Vercel أو Cloudflare",
                                                "تخصيص الهوية مسموح",
                                                "دعم مجتمعي",
                                        ],
                                        cta: "افتح على GitHub",
                                },
                        },
                },
                ctaFinal: {
                        title: "ابدأ التحرير بالعربية اليوم",
                        subtitle:
                                "بدون تسجيل، بدون علامة مائية، بدون رفع. افتح المحرر ومشروعك جاهز للحظتها.",
                        cta: "افتح المحرر",
                        secondaryCta: "ادعم المشروع على GitHub",
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
};

export type Dictionary = DictionaryShape;

export const DEFAULT_LOCALE: Locale = "en";

export function isLocale(value: string | undefined | null): value is Locale {
        return value === "en" || value === "ar";
}

export function getDirection(locale: Locale): "ltr" | "rtl" {
        return locale === "ar" ? "rtl" : "ltr";
}
