import { createEffect, createSignal, onMount, Show } from "solid-js";
import hljs from "highlight.js";
import "highlight.js/styles/default.css";
import { copyContent } from "~/helpers/copy";

interface Props {
	code: string;
}

export function Highlight({ code }: Props) {
	let codeRef: HTMLPreElement | undefined;
	const [copied, setCopied] = createSignal(false);

	const copyCode = async () => {
		await copyContent(code);
		setCopied(true);
	};

	onMount(() => {
		if (codeRef) {
			hljs.highlightElement(codeRef);
		}
	});

	createEffect(() => {
		if (copied()) {
			setTimeout(() => setCopied(false), 3000);
		}
	});

	return (
		<div class="relative">
			<pre class="p-4" ref={codeRef}>
				<code class="language-ts">{code}</code>
			</pre>
			<button class="absolute top-4 right-4" onclick={copyCode}>
				<Show
					when={copied()}
					fallback={<img src="/images/copy.png" width={20} height={20} />}
				>
					<img src="/images/success.png" width={20} height={20} />
				</Show>
			</button>
		</div>
	);
}
