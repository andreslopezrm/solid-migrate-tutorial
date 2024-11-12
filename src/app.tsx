import { MetaProvider, Title } from "@solidjs/meta";
import { Router } from "@solidjs/router";
import { FileRoutes } from "@solidjs/start/router";
import { Suspense } from "solid-js";
import "./app.css";
import { Menu } from "./components/Menu";

export default function App() {
	return (
		<Router
			root={(props) => (
				<MetaProvider>
					<Title>Solid Migration</Title>

					<div class="flex min-h-screen">
						<aside class="hidden md:block w-[250px]">
							<Menu />
						</aside>
						<Suspense>
							<main class="flex-1">{props.children}</main>
						</Suspense>
					</div>
				</MetaProvider>
			)}
		>
			<FileRoutes />
		</Router>
	);
}
