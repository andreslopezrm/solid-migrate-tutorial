export const props = {
	solid: `
interface Props {
    name: string;
    age: number;
}
export default function Greeting({ name, age }: Props) {
 return <h3>Hii {name} with age {age}</h3>
}
    `,
	reactjs: `
interface Props {
    name: string;
    age: number;
}
export default function Greeting({ name, age }: Props) {
 return <h3>Hii {name} with age {age}</h3>
}
    `,
	angular: `
import { Component, Input } from '@angular/core';
@Component({
  selector: 'app-greeting',
  template: \`<h3>Hii {name} with age {age}</h3>\`,
})
export class GreetingComponent {
  @Input() name!: string;
  @Input() age!: number;
}
    `,
	angular18: `
import { Component, input } from '@angular/core';
@Component({
  selector: 'app-greeting',
  template: \`<h3>Hii {name} with age {age}</h3>\`,
})
export class GreetingComponent {
  name = input<string>();
  age = input<number>();
}
    `,
	vuejs: `
<template>
  <h3>Hii {{ name }} with age {{ age }}</h3>
</template>

<script setup lang="ts">
defineProps<{
  name: string;
  age: number;
}>();
</script>
    `,
	svelte4: `
<script>
  export let name: string;
  export let age: number;
</script>

<h3>Hii {name} with age {age}</h3>
    `,
	svelte5: `
<script>
  let { name, name } = $props();
</script>

<h3>Hii {name} with age {name}</h3>
    `,
	litjs: `
import { LitElement, html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';

@customElement('greeting-element')
class GreetingElement extends LitElement {
  @property({ type: String }) name: string = '';
  @property({ type: Number }) age: number = 0;

  render() {
    return html\`<h3>Hii \${this.name} with age \${this.age}</h3>\`;
  }
}
  `,
	qwikjs: `
import { component$ } from '@builder.io/qwik';

interface Props {
  name: string;
  age: number;
}

export const Greeting = component$((props: Props) => {
  return (
    <h3>Hii {props.name} with age {props.age}</h3>
  );
})
  `,
};
