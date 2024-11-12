import { useLocation } from "@solidjs/router";
import { createEffect, createSignal, For, onMount } from "solid-js";
import { NavMenu } from "~/interfaces/menu";

interface Props {
	menu: NavMenu;
}

export function MenuItem({ menu }: Props) {
	const location = useLocation();
	const [show, setShow] = createSignal(true);
	const [, , section, tutorial] = location.pathname.split("/");
	const [lesson, setLesson] = createSignal(section);
	const [path, setPath] = createSignal(tutorial);

	createEffect(() => {
		const [, , section, tutorial] = location.pathname.split("/");
		setLesson(section);
		setPath(tutorial);
	});
	onMount(() => {
		if (menu.path === section) {
			setShow(true);
		}
	});

	return (
		<li>
			<button
				type="button"
				class="p-4 flex w-full justify-between border-b border-b-1 border-b-solid border-gray-300"
				onClick={() => setShow(!show())}
			>
				<span
					class="text-lg"
					classList={{ "font-semibold": menu.path === lesson() }}
				>
					{menu.title}
				</span>
				<img src="/images/down.png" width={10} height={10} alt="" />
			</button>
			<div
				class="transition-all p-4 duration-500 ease-in-out transform overflow-hidden border-b border-b-1 border-b-solid border-gray-300"
				classList={{
					"opacity-100 max-h-xl": show(),
					"opacity-0 h-0": !show(),
				}}
			>
				<For each={menu.items}>
					{(item) => (
						<div class="mb-2">
							<span class="inline-flex justify-center items-center w-6 h-6 border border-1 border-solid border-gray-300 rounded-full">
								{item.key}
							</span>
							<a
								href={`/tutorial/${menu.path}/${item.path}`}
								class="ml-2"
								classList={{ "font-semibold": item.path === path() }}
							>
								{item.title}
							</a>
						</div>
					)}
				</For>
			</div>
		</li>
	);
}
