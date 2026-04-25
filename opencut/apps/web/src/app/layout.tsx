import { ThemeProvider } from "next-themes";
import Script from "next/script";
import "./globals.css";
import { Toaster } from "../components/ui/sonner";
import { ChangelogNotification } from "@/changelog/components/changelog-notification";
import { TooltipProvider } from "../components/ui/tooltip";
import { baseMetaData } from "./metadata";
import { BotIdClient } from "botid/client";
import { webEnv } from "@/env/web";
import { Inter, Cairo } from "next/font/google";
import { cookies } from "next/headers";
import { LocaleProvider } from "@/i18n/provider";
import { LangBootstrap } from "@/i18n/lang-bootstrap";
import { DEFAULT_LOCALE, getDirection, isLocale } from "@/i18n/dictionary";

const siteFont = Inter({ subsets: ["latin"], variable: "--font-sans-latin" });
const arabicFont = Cairo({
        subsets: ["arabic", "latin"],
        variable: "--font-sans-arabic",
});

export const metadata = baseMetaData;

const protectedRoutes = [
        {
                path: "/none",
                method: "GET",
        },
];

export default async function RootLayout({
        children,
}: Readonly<{
        children: React.ReactNode;
}>) {
        const cookieStore = await cookies();
        const cookieLocale = cookieStore.get("oc_locale")?.value;
        const headerStore = await import("next/headers").then((m) => m.headers());
        const acceptLang = headerStore.get("accept-language") ?? "";
        const browserPrefersAr = acceptLang.toLowerCase().startsWith("ar");
        const initialLocale = isLocale(cookieLocale)
                ? cookieLocale
                : browserPrefersAr
                ? "ar"
                : DEFAULT_LOCALE;
        const initialDir = getDirection(initialLocale);

        return (
                <html
                        lang={initialLocale}
                        dir={initialDir}
                        suppressHydrationWarning
                        className={`${siteFont.variable} ${arabicFont.variable}`}
                >
                        <head>
                                <BotIdClient protect={protectedRoutes} />
                                {process.env.NODE_ENV === "development" && (
                                        <>
                                                <Script
                                                        src="//unpkg.com/react-scan/dist/auto.global.js"
                                                        crossOrigin="anonymous"
                                                        strategy="beforeInteractive"
                                                />
                                        </>
                                )}
                        </head>
                        <body className={`${siteFont.className} font-sans antialiased`}>
                                <LocaleProvider initialLocale={initialLocale}>
                                        <LangBootstrap />
                                        <ThemeProvider
                                                attribute="class"
                                                defaultTheme="system"
                                                disableTransitionOnChange={true}
                                        >
                                                <TooltipProvider>
                                                        <Toaster />
                                                        <Script
                                                                src="https://cdn.databuddy.cc/databuddy.js"
                                                                strategy="afterInteractive"
                                                                async
                                                                data-client-id="UP-Wcoy5arxFeK7oyjMMZ"
                                                                data-disabled={webEnv.NODE_ENV === "development"}
                                                                data-track-attributes={false}
                                                                data-track-errors={true}
                                                                data-track-outgoing-links={false}
                                                                data-track-web-vitals={false}
                                                                data-track-sessions={false}
                                                        />
                                                        {children}
                                                </TooltipProvider>
                                        </ThemeProvider>
                                </LocaleProvider>
                        </body>
                </html>
        );
}
