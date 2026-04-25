"use client";

import { Languages } from "lucide-react";
import { useLocale } from "@/i18n/provider";
import { LOCALES, type Locale } from "@/i18n/dictionary";
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import { Button } from "./ui/button";

export function LocaleSwitcher() {
	const { locale, setLocale, t } = useLocale();

	return (
		<DropdownMenu>
			<DropdownMenuTrigger asChild>
				<Button
					variant="ghost"
					size="sm"
					aria-label={t.locale.switcher}
					className="gap-1.5"
				>
					<Languages className="size-4" />
					<span className="hidden text-xs font-medium uppercase sm:inline">
						{locale}
					</span>
				</Button>
			</DropdownMenuTrigger>
			<DropdownMenuContent align="end" className="min-w-[10rem]">
				{LOCALES.map((option) => (
					<DropdownMenuItem
						key={option.code}
						onClick={() => setLocale(option.code as Locale)}
						className={
							option.code === locale
								? "bg-accent font-semibold"
								: undefined
						}
					>
						<span>{option.nativeLabel}</span>
					</DropdownMenuItem>
				))}
			</DropdownMenuContent>
		</DropdownMenu>
	);
}
