import { createSignal, Match, Switch } from "solid-js";
import { ButtonNav } from "~/components/ButtonNav";
import { Highlight } from "~/components/Highlight";
import { LibrarySelect } from "~/components/LibrarySelect";
import { MainTitle } from "~/components/MainTitle";
import { effects } from "~/data/effects";
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

export default function Effects() {
	const [library, setLibrary] = createSignal(reactjs);
	return (
		<main>
			<div class="p-5 md:p-8">
				<MainTitle text="Effects" />
				<p class="mt-8 mb-5">
					In SolidJS, effects are used to run side effects in response to
					reactive state changes. SolidJS is a reactive UI library that
					emphasizes fine-grained reactivity, updating the DOM with minimal
					overhead.
				</p>
				<p class="mb-5">
					The core concept behind effects in SolidJS is that they are
					automatically activated when any piece of state they depend on
					changes. This means that effects track dependencies implicitly, and
					when those dependencies update, the effect function re-runs to reflect
					new state.
				</p>
				<p class="mb-5">
					By using effects, you can run logic that synchronizes with your
					application's state tree seamlessly, providing a powerful mechanism to
					react to state changes without manually specifying dependencies. This
					makes SolidJS highly efficient, as it only updates the parts of the UI
					that are needed, avoiding unnecessary calculations and re-renders.
				</p>
				<Highlight code={effects.solid} />
				<div class="mt-5 mb-5 flex justify-between items-center">
					<p>Select a library:</p>
					<LibrarySelect library={library} onSelect={setLibrary} />
				</div>
				<Switch>
					<Match when={library() === reactjs}>
						<Highlight code={effects.reactjs} />
					</Match>
					<Match when={library() === angular}>
						<Highlight code={effects.angular} />
					</Match>
					<Match when={library() === angular18}>
						<Highlight code={effects.angular18} />
					</Match>
					<Match when={library() === vuejs}>
						<Highlight code={effects.vuejs} />
					</Match>
					<Match when={library() === svelte4}>
						<Highlight code={effects.svelte4} />
					</Match>
					<Match when={library() === svelte5}>
						<Highlight code={effects.svelte5} />
					</Match>
					<Match when={library() === litjs}>
						<Highlight code={effects.litjs} />
					</Match>
					<Match when={library() === qwikjs}>
						<Highlight code={effects.qwikjs} />
					</Match>
				</Switch>
			</div>
			<ButtonNav href="/tutorial/intro/derived" text="Derived" />
		</main>
	);
}
