export const forIterate = {
	solid: `
import { Component, For } from 'solid-js';

function NumberList() {
  const numbers = ['one', 'two', 'three', 'four'];

  return (
    <ul>
      <For each={numbers}>{(number) => <li>{number}</li>}</For>
    </ul>
  );
};
    `,
	reactjs: `
import React from 'react';

const NumberList: React.FC = () => {
  const numbers = ['one', 'two', 'three', 'four'];

  return (
    <ul>
      {numbers.map((number, index) => (
        <li key={index}>{number}</li>
      ))}
    </ul>
  );
};
    `,
	angular: `
import { Component } from '@angular/core';
import { NgForOf } from '@angular/common';

@Component({
  selector: 'app-number-list',
  standalone: true,
  imports: [NgForOf],
  template: \`
    <ul>
      <li *ngFor="let number of numbers; let i = index" [attr.key]="i">
        {{ number }}
      </li>
    </ul>
  \`
})
export class NumberListComponent {
  numbers: string[] = ['one', 'two', 'three', 'four'];
}
    `,
	angular18: `
import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-number-list',
  standalone: true,
  template: \`
    <ul>
      @for (number of numbers(); track $index) {
        <li>
         {{ number }}
       </li>
      }
    </ul>
  \`
})
export class NumberListComponent {
  numbers = signal(['one', 'two', 'three', 'four']);
}
    `,
	vuejs: `
<template>
  <ul>
    <li v-for="(number, index) in numbers" :key="index">{{ number }}</li>
  </ul>
</template>

<script lang="ts" setup>
const numbers = [1, 2, 3, 4];
</script>
    `,
	svelte4: `
<script lang="ts">
  let numbers: number[] = [1, 2, 3, 4];
</script>

<ul>
  {#each numbers as number, index (index)}
    <li>{number}</li>
  {/each}
</ul>
    `,
	svelte5: `
<script lang="ts">
  let numbers = $state([1, 2, 3, 4]);
</script>

<ul>
  {#each numbers as number, index (index)}
    <li>{number}</li>
  {/each}
</ul>
    `,
	litjs: `
import { LitElement, html, customElement } from 'lit';

@customElement('number-list')
export class NumberList extends LitElement {
  numbers: number[] = [1, 2, 3, 4];

  render() {
    return html\`
      <ul>
        \${this.numbers.map((number) => html\`<li>\${number}</li>\`)}
      </ul>
    \`;
  }
}
  `,
	qwikjs: `
import { component$ } from '@builder.io/qwik';

export default component$(() => {
  const numbers = [1, 2, 3, 4];

  return (
    <ul>
      {numbers.map((number) => (
        <li key={number}>{number}</li>
      ))}
    </ul>
  );
});
  `,
};
