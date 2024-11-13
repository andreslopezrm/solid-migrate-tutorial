import { createSignal, Match, Switch } from "solid-js";
import { ButtonNav } from "~/components/ButtonNav";
import { Highlight } from "~/components/Highlight";
import { LibrarySelect } from "~/components/LibrarySelect";
import { MainTitle } from "~/components/MainTitle";
import { derived } from "~/data/derived";
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

export default function Derived() {
	const [library, setLibrary] = createSignal(reactjs);
	return (
		<main>
			<div class="p-5 md:p-8">
				<MainTitle text="Derived" />
				<p class="mt-8 mb-5">
					In Solid, a <strong>derived</strong> signal is a special kind of
					signal that automatically derives its value from other signals. Unlike
					normal signals where values are manually set, derived signals
					reactively track dependencies and recompute their values whenever
					their dependencies change. This allows you to create dynamic, reactive
					computations that keep track of the signals they depend on and
					automatically update when those signals change.
				</p>
				<Highlight code={derived.solid} />
				<div class="mt-5 mb-5 flex justify-between items-center">
					<p>Select a library:</p>
					<LibrarySelect library={library} onSelect={setLibrary} />
				</div>
				<Switch>
					<Match when={library() === reactjs}>
						<Highlight code={derived.reactjs} />
					</Match>
					<Match when={library() === angular}>
						<Highlight code={derived.angular} />
					</Match>
					<Match when={library() === angular18}>
						<Highlight code={derived.angular18} />
					</Match>
					<Match when={library() === vuejs}>
						<Highlight code={derived.vuejs} />
					</Match>
					<Match when={library() === svelte4}>
						<Highlight code={derived.svelte4} />
					</Match>
					<Match when={library() === svelte5}>
						<Highlight code={derived.svelte5} />
					</Match>
					<Match when={library() === litjs}>
						<Highlight code={derived.litjs} />
					</Match>
					<Match when={library() === qwikjs}>
						<Highlight code={derived.qwikjs} />
					</Match>
				</Switch>
			</div>
			<ButtonNav href="/tutorial/control-fow/show" text="Show" />
		</main>
	);
}
