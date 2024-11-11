export const libraries = [
	"React",
	"Angular",
	"Angular +18",
	"Vue",
	"Svelte 4",
	"Svelte 5",
	"Lit",
	"Qwik",
] as const;

export type Library = (typeof libraries)[number];
