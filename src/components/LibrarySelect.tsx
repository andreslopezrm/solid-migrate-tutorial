import { createSignal, For } from "solid-js";


export function LibrarySelect() {
	const [isOpen, setIsOpen] = createSignal(false);
	const [selected, setSelected] = createSignal("Select an option");

	const items = [
		{ label: "React", icon: <img src="/images/react.png" width={30} height={30} />},
		{ label: "Option 2", icon: null },
	];

	return (
		<div class="relative inline-block text-left">
			<div>
				<button
					type="button"
					onClick={() => setIsOpen(!isOpen())}
					class="inline-flex justify-between w-full rounded-md border border-gray-300 shadow-sm px-4 py-2  text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none"
				>
					<span>{selected()}</span>
				</button>
			</div>

			{isOpen() && (
				<div class="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 z-10">
					<div class="py-1" role="menu">
						<For each={items}>
							{(item) => (
								<button
									type="button"
									onClick={() => {
										setSelected(item.label);
										setIsOpen(false);
									}}
									class="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 flex items-center"
									role="menuitem"
								>
									{item.icon}
									<span class="ml-2">{item.label}</span>
								</button>
							)}
						</For>
					</div>
				</div>
			)}
		</div>
	);
}
