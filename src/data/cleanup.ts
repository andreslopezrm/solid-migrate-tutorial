export const cleanup = {
	solid: `
function Counter() {
  const [count, setCount] = createSignal(0);

  const timer = setInterval(() => setCount(count() + 1), 1000);
  onCleanup(() => clearInterval(timer));

  return <div>Count: {count()}</div>;
}
    `,
	reactjs: `
import { useState, useEffect } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCount((prevCount) => prevCount + 1);
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, []);

  return <div>Count: {count}</div>;
}
    `,
	angular: `
import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-counter',
  standalone: true,
  template: \`<div>Count: {{ count }}</div>\`,
})
export class CounterComponent implements OnInit, OnDestroy {
  count = 0;
  timer: ReturnType<typeof setInterval>;

  ngOnInit(): void {
    this.timer = setInterval(() => {
      this.count++;
    }, 1000);
  }

  ngOnDestroy(): void {
    clearInterval(this.timer);
  }
}
    `,
	angular18: `
import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-counter',
  standalone: true,
  template: \`<div>Count: {{ count() }}</div>\`,
})
export class CounterComponent implements OnInit, OnDestroy {
  count = signal(0);
  timer: ReturnType<typeof setInterval>;

  ngOnInit(): void {
    this.timer = setInterval(() => {
      this.count.update(value => value + 1);
    }, 1000);
  }

  ngOnDestroy(): void {
    clearInterval(this.timer);
  }
}
    `,
	vuejs: `
<template>
  <div>Count: {{ count }}</div>
</template>

<script lang="ts" setup>
import { ref, onBeforeUnmount } from 'vue';

const count = ref(0);

const timer = setInterval(() => {
  count.value++;
}, 1000);

onBeforeUnmount(() => {
  clearInterval(timer);
});
</script>
    `,
	svelte4: `
<script lang="ts">
  import { onDestroy } from 'svelte';

  let count = 0;

  const timer = setInterval(() => {
    count++;
  }, 1000);

  onDestroy(() => {
    clearInterval(timer);
  });
</script>

<div>Count: {count}</div>
    `,
	svelte5: `
<script lang="ts">
  import { onDestroy } from 'svelte';

  let count = $state(0);

  const timer = setInterval(() => {
    count++;
  }, 1000);

  onDestroy(() => {
    clearInterval(timer);
  });
</script>

<div>Count: {count}</div>
    `,
	litjs: `
import { LitElement, html } from 'lit';
import { customElement } from 'lit/decorators.js';

@customElement('counter-component')
class CounterComponent extends LitElement {
  count = 0;
  timer: ReturnType<typeof setInterval>;

  connectedCallback() {
    super.connectedCallback();
    this.timer = setInterval(() => {
      this.count++;
      this.requestUpdate();
    }, 1000);
  }

  disconnectedCallback() {
    clearInterval(this.timer);
    super.disconnectedCallback();
  }

  render() {
    return html\`<div>Count: \${this.count}</div>\`;
  }
}

  `,
	qwikjs: `
import { component$, useTask$ } from '@builder.io/qwik';

export const CounterComponent = component$(() => {
  let count = 0;

  useTask$(() => {
    const timer = setInterval(() => {
      count++;
    }, 1000);

    return () => clearInterval(timer);
  });

  return <div>Count: {count}</div>;
});
  `,
};
