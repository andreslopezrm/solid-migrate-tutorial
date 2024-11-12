import { createSignal, Match, Switch } from "solid-js";
import { ButtonNav } from "~/components/ButtonNav";
import { Highlight } from "~/components/Highlight";
import { LibrarySelect } from "~/components/LibrarySelect";
import { MainTitle } from "~/components/MainTitle";
import { props } from "~/data/props";
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

export default function Props() {
	const [library, setLibrary] = createSignal(reactjs);

	return (
		<main>
			<div class="p-5 md:p-8">
				<MainTitle text="Props" />
				<p class="mt-8 mb-5">
					In SolidJS, a JavaScript framework for building reactive user
					interfaces, properties (props) are a key concept for passing data from
					a parent component to a child component.
				</p>
				<p class="mb-5">
					Properties in SolidJS are immutable from the perspective of the child
					component. This means that once the parent provides a property value
					to a child, the child should not modify that value directly.
				</p>
				<p class="mb-5">
					Properties in <strong>SolidJS</strong>
				</p>
				<p class="mb-5">
					It's important to note that props are read-only. You can't modify them
					directly in the component; instead, you'll manage any changes via
					reactive primitives like signals or stores. This immutability ensures
					unidirectional data flow, which is a core concept of SolidJS's
					reactivity model.
				</p>
				<Highlight code={props.solid} />
				<div class="mt-5 mb-5 flex justify-between items-center">
					<p>Select a library:</p>
					<LibrarySelect library={library} onSelect={setLibrary} />
				</div>
				<Switch>
					<Match when={library() === reactjs}>
						<Highlight code={props.reactjs} />
					</Match>
					<Match when={library() === angular}>
						<Highlight code={props.angular} />
					</Match>
					<Match when={library() === angular18}>
						<Highlight code={props.angular18} />
					</Match>
					<Match when={library() === vuejs}>
						<Highlight code={props.vuejs} />
					</Match>
					<Match when={library() === svelte4}>
						<Highlight code={props.svelte4} />
					</Match>
					<Match when={library() === svelte5}>
						<Highlight code={props.svelte5} />
					</Match>
					<Match when={library() === litjs}>
						<Highlight code={props.litjs} />
					</Match>
					<Match when={library() === qwikjs}>
						<Highlight code={props.qwikjs} />
					</Match>
				</Switch>
			</div>
			<ButtonNav href="/tutorial/intro/state" text="State" />
		</main>
	);
}
