export async function copyContent(text: string) {
	try {
		await navigator.clipboard.writeText(text);
	} catch (err) {
		console.error("Failed to copy: ", err);
	}
}
