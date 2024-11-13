export const show = {
	solid: `
import { createSignal, Show } from "solid-js";

function HideShow() {
    const [show, setShow] = createSignal<boolean>(true);

    const toggleShow = () => setShow(!show());

    return (
        <div>
            <button onClick={toggleShow}>
                Hide/Show
            </button>
            <Show when={show()} fallback={<div>The message is hidden</div>}>
                <div>Hello World</div>
            </Show>
        </div>
    );
};
    `,
	reactjs: `
import React, { useState } from 'react';

function HideShow() {
    const [show, setShow] = useState<boolean>(true);

    const toggleShow = () => setShow(prevShow => !prevShow);

    return (
        <div>
            <button onClick={toggleShow}>
                Hide/Show
            </button>
            {show ? <div>Hello World</div> : <div>The message is hidden</div>}
        </div>
    );
};
    `,
	angular: `
import { Component } from '@angular/core';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-hide-show',
  standalone: true,
  imports: [NgIf],
  template: \`
    <div>
      <button (click)="toggleShow()">
        Hide/Show
      </button>
      <div *ngIf="show; else hiddenMessage">
        Hello World
      </div>
      <ng-template #hiddenMessage>
        <div>The message is hidden</div>
      </ng-template>
    </div>
  \`
})
export class HideShowComponent {
  show: boolean = true;

  toggleShow() {
    this.show = !this.show;
  }
}
    `,
	angular18: `
import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-hide-show',
  standalone: true,
  template: \`
    <div>
      <button (click)="toggleShow()">
        Hide/Show
      </button>
      @if (show()) {
        <div>
          Hello World
        </div>
      } @else {
        <div>The message is hidden</div>
      }
    </div>
  \`
})
export class HideShowComponent {
  show = signal(true);

  toggleShow() {
    this.show.update(showValue => !showValue);
  }
}
    `,
	vuejs: `
<template>
  <div>
    <button @click="toggleShow">
      Hide/Show
    </button>
    <div v-if="show">
      Hello World
    </div>
    <div v-else>
      The message is hidden
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const show = ref(true);

function toggleShow() {
  show.value = !show.value;
}
</script>
    `,
	svelte4: `
<script lang="ts">
  let show: boolean = true;

  function toggleShow() {
    show = !show;
  }
</script>

<div>
  <button on:click={toggleShow}>
    Hide/Show
  </button>
  {#if show}
    <div>Hello World</div>
  {:else}
    <div>The message is hidden</div>
  {/if}
</div>
    `,
	svelte5: `
<script lang="ts">
  let show = $state(true);

  function toggleShow() {
    show = !show;
  }
</script>

<div>
  <button on:click={toggleShow}>
    Hide/Show
  </button>
  {#if show}
    <div>Hello World</div>
  {:else}
    <div>The message is hidden</div>
  {/if}
</div>
    `,
	litjs: `
import { LitElement, html } from 'lit';
import { customElement, state } from 'lit/decorators.js';

@customElement('hide-show-element')
export class HideShowElement extends LitElement {
  @state()
  private show: boolean = true;

  private toggleShow() {
    this.show = !this.show;
  }

  render() {
    return html\`
      <div>
        <button @click=\${this.toggleShow}>
          Hide/Show
        </button>
        \${this.show ? html\`<div>Hello World</div>\` : html\`<div>The message is hidden</div>\`}
      </div>
    \`;
  }
}
  `,
	qwikjs: `
import { component$, useStore } from '@builder.io/qwik';

export const HideShowComponent = component$(() => {
  const store = useStore({ show: true });

  const toggleShow = () => {
    store.show = !store.show;
  };

  return (
    <div>
      <button onClick$={toggleShow}>
        Hide/Show
      </button>
      {store.show ? (
        <div>Hello World</div>
      ) : (
        <div>The message is hidden</div>
      )}
    </div>
  );
});
  `,
};
