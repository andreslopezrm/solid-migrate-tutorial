import { Drawer } from "./Drawer";

interface Props {
	text: string;
}

export function MainTitle({ text }: Props) {
	return (
		<div class="flex">
			<Drawer />
			<h1 class="text-3xl md:text-4xl font-bold text-gray-900">{text}</h1>
		</div>
	);
}
