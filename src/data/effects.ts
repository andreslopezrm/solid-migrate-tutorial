export const effects = {
	solid: `
import { createSignal, createEffect } from "solid-js";

function Component() {
  const [count, setCount] = createSignal(0);

  createEffect(() => {
    console.log(\`Count is now \${count()}\`);
  });

  return <button onClick={() => setCount(count() + 1)}>Increment Count</button>;
}
    `,
	reactjs: `
import React, { useState, useEffect } from 'react';

const Component: React.FC = () => {
  const [count, setCount] = useState<number>(0);

  useEffect(() => {
    console.log(\`Count is now \${count}\`);
  }, [count]);

  return (
    <button onClick={() => setCount(count + 1)}>Increment Count</button>
  );
};
    `,
	angular: `
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-counter',
  template: \`<button (click)="incrementCount()">Increment Count</button>\`
})
export class CounterComponent implements OnInit {
  count: number = 0;

  ngOnInit(): void {
    this.logCount();
  }

  incrementCount(): void {
    this.count++;
    this.logCount();
  }

  logCount(): void {
    console.log(\`Count is now \${this.count}\`);
  }
}
    `,
	angular18: `
import { Component, signal, effect } from '@angular/core';

@Component({
  selector: 'app-counter',
  template: \`<button (click)="incrementCount()">Increment Count</button>
             <p>Current Count: {{ count() }}</p>\`
})
export class CounterComponent {
  count = signal(0);

  constructor() {
    effect(() => {
      console.log(\`Count is now \${this.count()}\`);
    });
  }

  incrementCount(): void {
    this.count(this.count() + 1);
  }
}
    `,
	vuejs: `
<template>
  <button @click="incrementCount">Increment Count</button>
  <p>Current Count: {{ count }}</p>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue';

const count = ref<number>(0);

watch(count, (newCount) => {
  console.log(\`Count is now \${newCount}\`);
});

function incrementCount() {
  count.value++;
}
</script>
    `,
	svelte4: `
<script lang="ts">
let count: number = 0;

$: console.log(\`Count is now \${count}\`);

function incrementCount() {
  count += 1;
}
</script>

<button on:click={incrementCount}>Increment Count</button>
<p>Current Count: {count}</p>
    `,
	svelte5: `
<script lang="ts">
let count = $state(0);

$effect(() => {
	console.log(\`Count is now \${count}\`);
});

function incrementCount() {
  count += 1;
}
</script>

<button on:click={incrementCount}>Increment Count</button>
<p>Current Count: {count}</p>
    `,
	litjs: `
import { LitElement, html, property } from 'lit';
import { customElement } from 'lit/decorators.js';

@customElement('counter-element')
export class CounterElement extends LitElement {
  @property({ type: Number })
  count: number = 0;

  updated(changedProperties: Map<string | number | symbol, unknown>) {
    if (changedProperties.has('count')) {
      console.log(\`Count is now \${this.count}\`);
    }
  }

  incrementCount() {
    this.count += 1;
  }

  render() {
    return html\`
      <button @click=\${this.incrementCount}>Increment Count</button>
      <p>Current Count: \${this.count}</p>
    \`;
  }
}
  `,
	qwikjs: `
import { component$, useSignal, useTask$ } from '@builder.io/qwik';

export const CounterComponent = component$(() => {
  const count = useSignal(0);

  useTask$(({ track }) => {
    track(() => count.value);
    console.log(\`Count is now \${count.value}\`);
  });

  return (
    <>
      <button
        onClick$={() => {
          count.value++;
        }}
      >
        Increment Count
      </button>
      <p>Current Count: {count.value}</p>
    </>
  );
});
  `,
};
