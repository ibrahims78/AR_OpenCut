"use client";

import { createContext, useCallback, useContext, useEffect, useState } from "react";
import {
        DEFAULT_LOCALE,
        dictionaries,
        getDirection,
        isLocale,
        type Dictionary,
        type Locale,
} from "./dictionary";

const COOKIE_NAME = "oc_locale";
const COOKIE_MAX_AGE = 60 * 60 * 24 * 365; // 1 year

interface LocaleContextValue {
        locale: Locale;
        setLocale: (next: Locale) => void;
        t: Dictionary;
        dir: "ltr" | "rtl";
}

const LocaleContext = createContext<LocaleContextValue | null>(null);

function readCookieLocale(): Locale | null {
        if (typeof document === "undefined") return null;
        const match = document.cookie
                .split("; ")
                .find((row) => row.startsWith(`${COOKIE_NAME}=`));
        if (!match) return null;
        const value = match.split("=")[1];
        return isLocale(value) ? value : null;
}

function detectInitialLocale(): Locale {
        const fromCookie = readCookieLocale();
        if (fromCookie) return fromCookie;
        if (typeof navigator !== "undefined") {
                const lang = navigator.language?.toLowerCase() ?? "";
                if (lang.startsWith("ar")) return "ar";
        }
        return DEFAULT_LOCALE;
}

export function LocaleProvider({
        children,
        initialLocale,
}: {
        children: React.ReactNode;
        initialLocale?: Locale;
}) {
        const [locale, setLocaleState] = useState<Locale>(
                initialLocale ?? DEFAULT_LOCALE,
        );
        const [hydrated, setHydrated] = useState(false);

        useEffect(() => {
                if (!initialLocale) {
                        const detected = detectInitialLocale();
                        setLocaleState(detected);
                }
                setHydrated(true);
        }, [initialLocale]);

        useEffect(() => {
                if (!hydrated) return;
                const html = document.documentElement;
                html.setAttribute("lang", locale);
                html.setAttribute("dir", getDirection(locale));
                document.cookie = `${COOKIE_NAME}=${locale}; path=/; max-age=${COOKIE_MAX_AGE}; SameSite=Lax`;
        }, [locale, hydrated]);

        const setLocale = useCallback((next: Locale) => {
                setLocaleState(next);
        }, []);

        const value: LocaleContextValue = {
                locale,
                setLocale,
                t: dictionaries[locale],
                dir: getDirection(locale),
        };

        return (
                <LocaleContext.Provider value={value}>{children}</LocaleContext.Provider>
        );
}

export function useLocale(): LocaleContextValue {
        const ctx = useContext(LocaleContext);
        if (!ctx) {
                // Safe fallback for components rendered outside the provider (e.g. in tests).
                return {
                        locale: DEFAULT_LOCALE,
                        setLocale: () => {},
                        t: dictionaries[DEFAULT_LOCALE],
                        dir: getDirection(DEFAULT_LOCALE),
                };
        }
        return ctx;
}

export function useTranslation() {
        return useLocale().t;
}
