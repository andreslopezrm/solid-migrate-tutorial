import { Accessor, createSignal, For } from "solid-js";
import { libraries } from "~/interfaces/libraries";

interface Props {
	library: Accessor<string>;
	onSelect: (library: string) => void;
}
export function LibrarySelect({ library, onSelect }: Props) {
	const [isOpen, setIsOpen] = createSignal(false);

	return (
		<div class="relative inline-block text-left w-[150px]">
			<div>
				<button
					type="button"
					onClick={() => setIsOpen(!isOpen())}
					class="inline-flex justify-between w-full rounded-sm border border-gray-300 shadow-sm px-4 py-2  text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none"
				>
					<span>{library()}</span>
				</button>
			</div>

			{isOpen() && (
				<div class="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 z-10">
					<div class="py-1" role="menu">
						<For each={libraries}>
							{(item) => (
								<button
									type="button"
									onClick={() => {
										onSelect(item.label);
										setIsOpen(false);
									}}
									class="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 flex items-center"
									role="menuitem"
								>
									<img
										src={item.image}
										width={30}
										height={30}
										alt={item.label}
									/>
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
