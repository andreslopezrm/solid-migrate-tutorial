import { Drawer } from "./Drawer";

interface Props {
	text: string;
}

export function MainTitle({ text }: Props) {
	return (
		<div class="flex">
			<Drawer />
			<div class="flex-1 flex justify-between items-center gap-2">
				<h1 class="text-3xl md:text-4xl font-bold text-gray-900">{text}</h1>
				<a
					href="https://github.com/andreslopezrm/solid-migrate-tutorial"
					target="_blank"
				>
					<img src="/images/github.png" width={38} />
				</a>
			</div>
		</div>
	);
}
