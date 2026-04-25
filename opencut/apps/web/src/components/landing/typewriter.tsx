"use client";

import { useEffect, useState } from "react";

type TypewriterProps = {
	phrases: string[];
	typeSpeed?: number;
	deleteSpeed?: number;
	pauseMs?: number;
	className?: string;
};

export function Typewriter({
	phrases,
	typeSpeed = 90,
	deleteSpeed = 45,
	pauseMs = 1600,
	className,
}: TypewriterProps) {
	const [phraseIndex, setPhraseIndex] = useState(0);
	const [text, setText] = useState("");
	const [deleting, setDeleting] = useState(false);

	useEffect(() => {
		if (phrases.length === 0) return;
		const current = phrases[phraseIndex] ?? "";
		const segmenter =
			typeof Intl !== "undefined" && "Segmenter" in Intl
				? new Intl.Segmenter(undefined, { granularity: "grapheme" })
				: null;
		const graphemes = segmenter
			? Array.from(segmenter.segment(current), (s) => s.segment)
			: Array.from(current);

		if (!deleting && text === current) {
			const t = setTimeout(() => setDeleting(true), pauseMs);
			return () => clearTimeout(t);
		}
		if (deleting && text === "") {
			setDeleting(false);
			setPhraseIndex((i) => (i + 1) % phrases.length);
			return;
		}

		const t = setTimeout(
			() => {
				if (deleting) {
					const segs = segmenter
						? Array.from(segmenter.segment(text), (s) => s.segment)
						: Array.from(text);
					segs.pop();
					setText(segs.join(""));
				} else {
					setText(graphemes.slice(0, text.length + 1).join(""));
				}
			},
			deleting ? deleteSpeed : typeSpeed,
		);
		return () => clearTimeout(t);
	}, [text, deleting, phraseIndex, phrases, typeSpeed, deleteSpeed, pauseMs]);

	return (
		<span className={className} aria-live="polite">
			{text}
			<span
				className="ms-0.5 inline-block w-[2px] animate-pulse bg-current align-middle"
				style={{ height: "0.9em" }}
				aria-hidden="true"
			/>
		</span>
	);
}
