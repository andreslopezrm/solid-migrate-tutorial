import { createSignal } from "solid-js";

export function Muestra() {
	const [isVisible, setIsVisible] = createSignal(false);

	return (
		<div class="p-4">
			<button
				class="mb-4 px-4 py-2 bg-blue-500 text-white rounded"
				onClick={() => setIsVisible(!isVisible())}
			>
				Toggle Content
			</button>

			<div
				class={`transition-opacity duration-500 ${isVisible() ? "opacity-100 max-h-40" : "opacity-0 max-h-0 overflow-hidden"}`}
			>
				<div class="bg-gray-100 p-4 rounded">
					This is the content to show or hide.
				</div>
			</div>
		</div>
	);
}
