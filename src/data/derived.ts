export const derived = {
	solid: `
import { createSignal } from "solid-js";

const Counter = () => {
  const [count, setCount] = createSignal(0);

  const doubleCount = () => count() * 2;

  return (
    <div>
      <div>Count: {count()}</div>
      <div>Double Count: {doubleCount()}</div>
      <button onClick={() => setCount(count() + 1)}>Increment</button>
    </div>
  );
};
    `,
	reactjs: `
import React, { useState } from 'react';

const Counter: React.FC = () => {
  const [count, setCount] = useState<number>(0);

  const doubleCount = count * 2;

  return (
    <div>
      <div>Count: {count}</div>
      <div>Double Count: {doubleCount}</div>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
};
    `,
	angular: `
import { Component } from '@angular/core';

@Component({
  selector: 'app-counter',
  template: \`
    <div>
      <div>Count: {{ count }}</div>
      <div>Double Count: {{ doubleCount() }}</div>
      <button (click)="increment()">Increment</button>
    </div>
  \`
})
export class CounterComponent {
  count: number = 0;

  doubleCount(): number {
    return this.count * 2;
  }

  increment(): void {
    this.count += 1;
  }
}
    `,
	angular18: `
import { Component, computed, signal } from '@angular/core';

@Component({
  selector: 'app-counter',
  template: \`
    <div>
      <div>Count: {{ count() }}</div>
      <div>Double Count: {{ doubleCount() }}</div>
      <button (click)="increment()">Increment</button>
    </div>
  \`
})
export class CounterComponent {
  count = signal(0);

  doubleCount = computed(() => this.count() * 2);

  increment() {
    this.count.set(this.count() + 1);
  }
}
    `,
	vuejs: `
<template>
  <div>
    <div>Count: {{ count }}</div>
    <div>Double Count: {{ doubleCount }}</div>
    <button @click="increment">Increment</button>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue';

const count = ref<number>(0);

const doubleCount = computed(() => count.value * 2);

function increment() {
  count.value += 1;
}
</script>
    `,
	svelte4: `
<script lang="ts">
  let count: number = 0;
  let doubleCount: number;

  $: doubleCount = count * 2;

  function increment() {
    count += 1;
  }
</script>

<div>
  <div>Count: {count}</div>
  <div>Double Count: {doubleCount}</div>
  <button on:click={increment}>Increment</button>
</div>
    `,
	svelte5: `
<script lang="ts">
  let count = $state(0);
  let doubleCount = $derived(count * 2);

  function increment() {
    count += 1;
  }
</script>

<div>
  <div>Count: {count}</div>
  <div>Double Count: {doubleCount}</div>
  <button on:click={increment}>Increment</button>
</div>
    `,
	litjs: `
import { LitElement, html, css } from 'lit';
import { customElement, property, state } from 'lit/decorators.js';

@customElement('counter-element')
class CounterElement extends LitElement {
  @state()
  private count: number = 0;

  private doubleCount(): number {
    return this.count * 2;
  }

  private increment() {
    this.count += 1;
  }

  protected render() {
    return html\`
      <div>
        <div>Count: \${this.count}</div>
        <div>Double Count: \${this.doubleCount()}</div>
        <button @click=\${this.increment}>Increment</button>
      </div>
    \`;
  }
}
  `,
	qwikjs: `
import { component$, useSignal, useComputed$ } from '@builder.io/qwik';

export const Counter = component$(() => {
  const count = useSignal(0);

  const doubleCount = useComputed$(() => count.value * 2);

  return (
    <div>
      <div>Count: {count.value}</div>
      <div>Double Count: {doubleCount.value}</div>
      <button onClick$={() => count.value++}>Increment</button>
    </div>
  );
});
  `,
};
