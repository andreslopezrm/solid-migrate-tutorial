import { createSignal, Match, Switch } from "solid-js";
import { ButtonNav } from "~/components/ButtonNav";
import { Highlight } from "~/components/Highlight";
import { LibrarySelect } from "~/components/LibrarySelect";
import { MainTitle } from "~/components/MainTitle";
import { forIterate } from "~/data/for";
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

export default function ForItetator() {
	const [library, setLibrary] = createSignal(reactjs);
	return (
		<main>
			<div class="p-5 md:p-8">
				<MainTitle text="For" />
				<p class="mt-8 mb-5">
					In Solid.js, the For component is an efficient and reactive way to
					iterate over an array of data and render elements, similar to how it's
					done in libraries like React or Vue, but with a more optimized and
					reactive approach. For is part of Solid's API, and it facilitates
					efficient list rendering while maintaining Solid's reactive system.
				</p>
				<Highlight code={forIterate.solid} />
				<div class="mt-5 mb-5 flex justify-between items-center">
					<p>Select a library:</p>
					<LibrarySelect library={library} onSelect={setLibrary} />
				</div>
				<Switch>
					<Match when={library() === reactjs}>
						<Highlight code={forIterate.reactjs} />
					</Match>
					<Match when={library() === angular}>
						<Highlight code={forIterate.angular} />
					</Match>
					<Match when={library() === angular18}>
						<Highlight code={forIterate.angular18} />
					</Match>
					<Match when={library() === vuejs}>
						<Highlight code={forIterate.vuejs} />
					</Match>
					<Match when={library() === svelte4}>
						<Highlight code={forIterate.svelte4} />
					</Match>
					<Match when={library() === svelte5}>
						<Highlight code={forIterate.svelte5} />
					</Match>
					<Match when={library() === litjs}>
						<Highlight code={forIterate.litjs} />
					</Match>
					<Match when={library() === qwikjs}>
						<Highlight code={forIterate.qwikjs} />
					</Match>
				</Switch>
			</div>
			<ButtonNav href="/tutorial/control-fow/switch" text="Switch" />
		</main>
	);
}
