export const mount = {
	solid: `
import { onMount } from 'solid-js';

function HelloWorldComponent() {
  onMount(() => {
    console.log('Hello, World');
  });

  return <div>Hello, Component!</div>;
}
    `,
	reactjs: `
import React, { useEffect } from 'react';

const HelloWorldComponent: React.FC = () => {
  useEffect(() => {
    console.log('Hello, World');
  }, []);

  return <div>Hello, Component!</div>;
}
    `,
	angular: `
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hello-world',
  standalone: true,
  template: \`<div>Hello, Component!</div>\`
})
export class HelloWorldComponent implements OnInit {
  ngOnInit(): void {
    console.log('Hello, World');
  }
}
    `,
	angular18: `
import { Component, effect } from '@angular/core';

@Component({
  selector: 'app-hello-world',
  standalone: true,
  template: \`<div>Hello, Component!</div>\`
})
export class HelloWorldComponent {
  constructor() {
    effect(() => {
      console.log('Hello, World');
    });
  }
}
    `,
	vuejs: `
<template>
  <div>Hello, Component!</div>
</template>

<script lang="ts" setup>
import { onMounted } from 'vue';

onMounted(() => {
  console.log('Hello, World');
});
</script>
    `,
	svelte4: `
<script lang="ts">
  import { onMount } from 'svelte';

  onMount(() => {
    console.log('Hello, World');
  });
</script>

<div>Hello, Component!</div>

    `,
	svelte5: `
<script lang="ts">
  import { onMount } from 'svelte';

  onMount(() => {
    console.log('Hello, World');
  });
</script>

<div>Hello, Component!</div>
    `,
	litjs: `
import { LitElement, html, customElement } from 'lit';
import { customElement } from 'lit/decorators.js';

@customElement('hello-world-component')
class HelloWorldComponent extends LitElement {
  connectedCallback() {
    super.connectedCallback();
    console.log('Hello, World');
  }

  render() {
    return html\`<div>Hello, Component!</div>\`;
  }
}
  `,
	qwikjs: `
import { component$, useTask } from '@builder.io/qwik';

export const HelloWorldComponent = component$(() => {
  useTask$(() => {
    console.log('Hello, World');
  });

  return <div>Hello, Component!</div>;
});

  `,
};
