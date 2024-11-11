import { Highlight } from "~/components/Highlight";
import { LibrarySelect } from "~/components/LibrarySelect";
import { MainTitle } from "~/components/MainTitle";
import { props } from "~/components/props";

export default function Props() {
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

				<LibrarySelect />
				<Highlight code={props.main} />
			</div>
		</main>
	);
}
