import { createSignal, Match, Switch } from "solid-js";
import { ButtonNav } from "~/components/ButtonNav";
import { Highlight } from "~/components/Highlight";
import { LibrarySelect } from "~/components/LibrarySelect";
import { MainTitle } from "~/components/MainTitle";
import { switchConditional } from "~/data/switch";
import {
	angular,
	angular18,
	litjs,
	qwikjs,
	reactjs,
	svelte4,
	svelte5,
	vuejs,
} from "~/interfaces/libraries";

export default function SwitchConditional() {
	const [library, setLibrary] = createSignal(reactjs);
	return (
		<main>
			<div class="p-5 md:p-8">
				<MainTitle text="Show" />
				<p class="mt-8 mb-5">
					The Show component in SolidJS is used to conditionally render content
					in the user interface. It allows you to display child nodes based on a
					boolean condition. When the condition is true, it shows the defined
					content; otherwise, it can display alternate content or nothing at
					all. It's particularly useful for managing the reactive rendering of
					components or elements based on dynamic states. <strong>Show</strong>{" "}
					is more readable and maintainable compared to more complex ternary or
					logical expressions within JSX.
				</p>
				<Highlight code={switchConditional.solid} />
				<div class="mt-5 mb-5 flex justify-between items-center">
					<p>Select a library:</p>
					<LibrarySelect library={library} onSelect={setLibrary} />
				</div>
				<Switch>
					<Match when={library() === reactjs}>
						<Highlight code={switchConditional.reactjs} />
					</Match>
					<Match when={library() === angular}>
						<Highlight code={switchConditional.angular} />
					</Match>
					<Match when={library() === angular18}>
						<Highlight code={switchConditional.angular18} />
					</Match>
					<Match when={library() === vuejs}>
						<Highlight code={switchConditional.vuejs} />
					</Match>
					<Match when={library() === svelte4}>
						<Highlight code={switchConditional.svelte4} />
					</Match>
					<Match when={library() === svelte5}>
						<Highlight code={switchConditional.svelte5} />
					</Match>
					<Match when={library() === litjs}>
						<Highlight code={switchConditional.litjs} />
					</Match>
					<Match when={library() === qwikjs}>
						<Highlight code={switchConditional.qwikjs} />
					</Match>
				</Switch>
			</div>
			<ButtonNav href="/tutorial/life-cycle/mount" text="Mount" />
		</main>
	);
}
