import { createSignal, Match, Switch } from "solid-js";
import { Highlight } from "~/components/Highlight";
import { LibrarySelect } from "~/components/LibrarySelect";
import { MainTitle } from "~/components/MainTitle";
import { resource } from "~/data/resource";
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

export default function Resource() {
	const [library, setLibrary] = createSignal(reactjs);
	return (
		<main class="pb-16">
			<div class="p-5 md:p-8 mb-16">
				<MainTitle text="Resource" />
				<p class="mt-8 mb-5">
					In SolidJS, <strong>createResource</strong> is a reactive primitive
					designed for handling asynchronous data or side effects that need to
					be fetched or computed outside of the usual reactivity flow, such as
					loading data from an API, performing calculations, or working with
					external systems.
				</p>
				<Highlight code={resource.solid} />
				<div class="mt-5 mb-5 flex justify-between items-center">
					<p>Select a library:</p>
					<LibrarySelect library={library} onSelect={setLibrary} />
				</div>
				<Switch>
					<Match when={library() === reactjs}>
						<Highlight code={resource.reactjs} />
					</Match>
					<Match when={library() === angular}>
						<Highlight code={resource.angular} />
					</Match>
					<Match when={library() === angular18}>
						<Highlight code={resource.angular18} />
					</Match>
					<Match when={library() === vuejs}>
						<Highlight code={resource.vuejs} />
					</Match>
					<Match when={library() === svelte4}>
						<Highlight code={resource.svelte4} />
					</Match>
					<Match when={library() === svelte5}>
						<Highlight code={resource.svelte5} />
					</Match>
					<Match when={library() === litjs}>
						<Highlight code={resource.litjs} />
					</Match>
					<Match when={library() === qwikjs}>
						<Highlight code={resource.qwikjs} />
					</Match>
				</Switch>
			</div>
		</main>
	);
}
