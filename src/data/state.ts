export const state = {
	solid: `
import { Component } from "solid-js";
import { createSignal } from "solid-js";

const Counter: Component = () => {
  const [count, setCount] = createSignal<number>(0);

  return (
    <button onClick={() => setCount(count() + 1)}>
      Clicks: {count()}
    </button>
  );
};

    `,
	reactjs: `
import React, { useState } from 'react';

const Counter: React.FC = () => {
  const [count, setCount] = useState<number>(0);

  return (
    <button onClick={() => setCount(count + 1)}>
      Clicks: {count}
    </button>
  );
};
    `,
	angular: `
import { Component } from '@angular/core';

@Component({
  selector: 'app-counter',
  template: \`
    <button (click)="increment()">
      Clicks: {{ count }}
    </button>
  \`
})
export class CounterComponent {
  count: number = 0;

  increment() {
    this.count += 1;
  }
}
    `,
	angular18: `
import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-counter',
  template: \`
    <button (click)="increment()">
      Clicks: {{ count() }}
    </button>
  \`
})
export class CounterComponent {
  count = signal(0);

  increment() {
    this.count.set(this.count() + 1);
  }
}
    `,
	vuejs: `
<template>
  <button @click="increment">
    Clicks: {{ count }}
  </button>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const count = ref(0);

function increment() {
  count.value++;
}
</script>
    `,
	svelte4: `
<script>
  let count = 0;

  function increment() {
    count += 1;
  }
</script>

<button on:click={increment}>
  Clicks: {count}
</button>
    `,
	svelte5: `
<script>
  let count = $state(0);

  function increment() {
    count += 1;
  }
</script>

<button on:click={increment}>
  Clicks: {count}
</button>
    `,
	litjs: `
import { LitElement, html } from 'lit';
import { customElement, property } from 'lit/decorators.js';

@customElement('counter-element')
class CounterElement extends LitElement {
  @property({ type: Number })
  count = 0;

  increment() {
    this.count += 1;
  }

  render() {
    return html\`
      <button @click="\${this.increment}">
        Clicks: \${this.count}
      </button>
    \`;
  }
}
  `,
	qwikjs: `
import { component$, useStore } from '@builder.io/qwik';

export const Counter = component$(() => {
  const state = useStore({ count: 0 });

  const increment = () => {
    state.count++;
  };

  return (
    <button onClick$={increment}>
      Clicks: {state.count}
    </button>
  );
});
  `,
};
