import { For } from "solid-js";
import { menus } from "~/data/menu";
import { MenuItem } from "./MenuItem";

export function Menu() {
	return (
		<ul class="bg-white h-full border-r border-r-1 border-r-solid border-gray-300">
			<For each={menus}>{(menu) => <MenuItem menu={menu} />}</For>
		</ul>
	);
}
