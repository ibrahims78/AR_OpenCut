"use client";

import { useEffect } from "react";
import { useLocale } from "./provider";
import { isLocale } from "./dictionary";

/**
 * Reads the `?lang=` URL query parameter and applies it to the locale.
 * Mounted once near the root so all pages support `?lang=ar` deep-links.
 */
export function LangBootstrap() {
	const { setLocale } = useLocale();

	useEffect(() => {
		if (typeof window === "undefined") return;
		const params = new URLSearchParams(window.location.search);
		const lang = params.get("lang");
		if (isLocale(lang)) {
			setLocale(lang);
		}
	}, [setLocale]);

	return null;
}
