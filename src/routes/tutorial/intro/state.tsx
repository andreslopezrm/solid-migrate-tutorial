import { createSignal, Match, Switch } from "solid-js";
import { ButtonNav } from "~/components/ButtonNav";
import { Highlight } from "~/components/Highlight";
import { LibrarySelect } from "~/components/LibrarySelect";
import { MainTitle } from "~/components/MainTitle";
import { state } from "~/data/state";
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

export default function Signals() {
	const [library, setLibrary] = createSignal(reactjs);
	return (
		<main>
			<div class="p-5 md:p-8">
				<MainTitle text="State" />
				<p class="mt-8 mb-5">
					Signals in SolidJS are created using the <strong>createSignal</strong>{" "}
					function, which returns a getter and a setter. The getter is used to
					access the current value of the signal, and the setter is used to
					update the value. When a signal's value changes, any computations or
					components that depend on it are automatically re-executed or
					re-rendered. This is part of SolidJS's reactivity model, which ensures
					updates are isolated and efficient.
				</p>
				<Highlight code={state.solid} />
				<div class="mt-5 mb-5 flex justify-between items-center">
					<p>Select a library:</p>
					<LibrarySelect library={library} onSelect={setLibrary} />
				</div>
				<Switch>
					<Match when={library() === reactjs}>
						<Highlight code={state.reactjs} />
					</Match>
					<Match when={library() === angular}>
						<Highlight code={state.angular} />
					</Match>
					<Match when={library() === angular18}>
						<Highlight code={state.angular18} />
					</Match>
					<Match when={library() === vuejs}>
						<Highlight code={state.vuejs} />
					</Match>
					<Match when={library() === svelte4}>
						<Highlight code={state.svelte4} />
					</Match>
					<Match when={library() === svelte5}>
						<Highlight code={state.svelte5} />
					</Match>
					<Match when={library() === litjs}>
						<Highlight code={state.litjs} />
					</Match>
					<Match when={library() === qwikjs}>
						<Highlight code={state.qwikjs} />
					</Match>
				</Switch>
			</div>
			<ButtonNav href="/tutorial/intro/effects" text="Effects" />
		</main>
	);
}
