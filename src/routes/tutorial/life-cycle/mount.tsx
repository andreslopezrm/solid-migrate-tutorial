import { createSignal, Match, Switch } from "solid-js";
import { ButtonNav } from "~/components/ButtonNav";
import { Highlight } from "~/components/Highlight";
import { LibrarySelect } from "~/components/LibrarySelect";
import { MainTitle } from "~/components/MainTitle";
import { mount } from "~/data/mount";
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

export default function Mount() {
	const [library, setLibrary] = createSignal(reactjs);
	return (
		<main>
			<div class="p-5 md:p-8">
				<MainTitle text="Mount" />
				<p class="mt-8 mb-5">
					In Solid.js, the For component is an efficient and reactive way to
					iterate over an array of data and render elements, similar to how it's
					done in libraries like React or Vue, but with a more optimized and
					reactive approach. For is part of Solid's API, and it facilitates
					efficient list rendering while maintaining Solid's reactive system.
				</p>
				<Highlight code={mount.solid} />
				<div class="mt-5 mb-5 flex justify-between items-center">
					<p>Select a library:</p>
					<LibrarySelect library={library} onSelect={setLibrary} />
				</div>
				<Switch>
					<Match when={library() === reactjs}>
						<Highlight code={mount.reactjs} />
					</Match>
					<Match when={library() === angular}>
						<Highlight code={mount.angular} />
					</Match>
					<Match when={library() === angular18}>
						<Highlight code={mount.angular18} />
					</Match>
					<Match when={library() === vuejs}>
						<Highlight code={mount.vuejs} />
					</Match>
					<Match when={library() === svelte4}>
						<Highlight code={mount.svelte4} />
					</Match>
					<Match when={library() === svelte5}>
						<Highlight code={mount.svelte5} />
					</Match>
					<Match when={library() === litjs}>
						<Highlight code={mount.litjs} />
					</Match>
					<Match when={library() === qwikjs}>
						<Highlight code={mount.qwikjs} />
					</Match>
				</Switch>
			</div>
			<ButtonNav href="/tutorial/life-cycle/cleanup" text="Cleanup" />
		</main>
	);
}
