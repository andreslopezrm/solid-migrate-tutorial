import { createSignal } from "solid-js";
import { Menu } from "./Menu";

export function Drawer() {
	const [isOpen, setIsOpen] = createSignal(false);

	return (
		<div>
			<button
				type="button"
				class="md:hidden mr-4 w-10 h-10 flex items-center justify-center bg-gray-200 hover:bg-gray-300 rounded-md cursor-pointer"
				onClick={() => setIsOpen(!isOpen())}
			>
				<svg
					class="w-6 h-6"
					fill="none"
					stroke="currentColor"
					viewBox="0 0 24 24"
					xmlns="http://www.w3.org/2000/svg"
				>
					<path
						stroke-linecap="round"
						stroke-linejoin="round"
						stroke-width="2"
						d="M4 6h16M4 12h16M4 18h16"
					></path>
				</svg>
			</button>

			<div
				class="md:hidden z-10 fixed inset-y-0 left-0 w-64 bg-white shadow-xl transform transition-transform duration-300"
				classList={{
					"translate-x-0": isOpen(),
					"-translate-x-full": !isOpen(),
				}}
			>
				<button
					class="text-white font-bold py-2 px-4 rounded mt-2"
					onClick={() => setIsOpen(false)}
				>
					<img src="/images/close.png" width={30} height={30} alt="close" />
				</button>
				<Menu />
			</div>
		</div>
	);
}
