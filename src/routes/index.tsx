import { Title } from "@solidjs/meta";
import { Drawer } from "~/components/Drawer";

export default function Home() {
  return (
    <main>
      <Title>Hello World</Title>
      <Drawer />
      <h1 class="text-3xl font-bold underline">
        Hello world!
      </h1>
    </main>
  );
}
