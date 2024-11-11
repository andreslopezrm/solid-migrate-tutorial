import { Title } from "@solidjs/meta";
import { ButtonNav } from "~/components/ButtonNav";
import { MainTitle } from "~/components/MainTitle";

export default function Home() {
	return (
		<main>
			<Title>Solid Migration</Title>

			<div class="p-5 md:p-8">
				<MainTitle text="Migration" />

				<p class="mt-6 mb-5">
					In the world of front-end development, choosing JavaScript libraries
					or frameworks is essential for the successful development of fast,
					efficient, and maintainable applications. With the rise of{" "}
					<strong>SolidJS</strong>, many developers have begun to discover a
					different, more performant approach to building reactive user
					interfaces.
				</p>
				<p class="mb-5">
					SolidJS offers impressive granular reactivity and remarkable
					performance due to its smart compiler, making it an attractive option
					for those looking for a lightweight yet powerful alternative.
				</p>
				<p class="mb-5">
					This tutorial aims to guide you through the process of migrating your
					existing application to SolidJS from other popular libraries such as
					React, Vue, Svelte, Angular, Lit, and Qwik. We will explore the
					advantages of <strong>SolidJS</strong>, including its efficient
					reactivity system and how its Virtual DOM-less approach provides a
					significant performance boost over other frameworks. You will learn
					not only how to port your existing logic and components, but also how
					to adapt your development patterns to take full advantage of the
					capabilities that SolidJS offers.
				</p>
				<p class="mb-5">The following topics are addressed:</p>
				<ul class="mb-5 list-disc pl-4">
					<li class="mb-2">
						<strong>Props</strong>
					</li>
					<li class="mb-2">
						<strong>Signals</strong>
					</li>
					<li class="mb-2">
						<strong>Effects</strong>
					</li>
					<li class="mb-2">
						<strong>Control Flow</strong>
					</li>
					<li class="mb-2">
						<strong>Life Cycle</strong>
					</li>
					<li class="mb-2">
						<strong>Async</strong>
					</li>
				</ul>

				<p class="mb-5">
					This tutorial is not intended to be a step-by-step guide to learning{" "}
					<strong>Solid JS</strong>, it is a guide to facilitate migration from
					other libraries by showing the key features.
				</p>

				<p class="mb-5">
					Let's begin the adventure towards a more agile and modern development
					experience with <strong>SolidJS!</strong>
				</p>
			</div>

			<ButtonNav href="/props" text="Props" />
		</main>
	);
}
