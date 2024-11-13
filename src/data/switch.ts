export const switchConditional = {
	solid: `
import { Switch, Match } from 'solid-js';

interface Props {
  role: 'admin' | 'reviewer' | 'editor';
}

function UserRoleComponent({ role }: Props) {
  return (
    <div>
      <h2>User Role: {role}</h2>

      <Switch>
        <Match when={role === 'admin'}>
          <p>Welcome, Admin! You have full access to the system.</p>
        </Match>
        <Match when={role === 'reviewer'}>
          <p>Welcome, Reviewer! You can review the content.</p>
        </Match>
        <Match when={role === 'editor'}>
          <p>Welcome, Editor! You can edit the content.</p>
        </Match>
      </Switch>
    </div>
  );
};
    `,
	reactjs: `
import React from 'react';

interface UserRoleProps {
  role: 'admin' | 'reviewer' | 'editor';
}

const UserRoleComponent: React.FC<UserRoleProps> = ({ role }) => {
  return (
    <div>
      <h2>User Role: {role}</h2>

      {/* Conditional Rendering Based on the Role */}
      {role === 'admin' && <p>Welcome, Admin! You have full access to the system.</p>}
      {role === 'reviewer' && <p>Welcome, Reviewer! You can review the content.</p>}
      {role === 'editor' && <p>Welcome, Editor! You can edit the content.</p>}
    </div>
  );
};
    `,
	angular: `
import { Component, Input } from '@angular/core';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-user-role',
  standalone: true,
  imports: [NgIf],
  template: \`
    <div>
      <h2>User Role: {{ role }}</h2>

      <ng-container *ngIf="role === 'admin'">
        <p>Welcome, Admin! You have full access to the system.</p>
      </ng-container>

      <ng-container *ngIf="role === 'reviewer'">
        <p>Welcome, Reviewer! You can review the content.</p>
      </ng-container>

      <ng-container *ngIf="role === 'editor'">
        <p>Welcome, Editor! You can edit the content.</p>
      </ng-container>

    </div>
  \`
})
export class UserRoleComponent {
  @Input() role!: 'admin' | 'reviewer' | 'editor';
}
    `,
	angular18: `
import { Component, input } from '@angular/core';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-user-role',
  standalone: true,
  imports: [NgIf],
  template: \`
    <div>
      <h2>User Role: {{ role() }}</h2>

      @switch (userPermissions) {
        @case ('admin') {
          <p>Welcome, Admin! You have full access to the system.</p>
        }
        @case ('reviewer') {
         <p>Welcome, Reviewer! You can review the content.</p>
        }
        @case ('editor') {
         <p>Welcome, Editor! You can edit the content.</p>
        }
     }
    </div>
  \`
})
export class UserRoleComponent {
  role = input<'admin' | 'reviewer' | 'editor'>();
}
    `,
	vuejs: `
<template>
  <div>
    <h2>User Role: {{ role }}</h2>

    <div v-if="role === 'admin'">
      <p>Welcome, Admin! You have full access to the system.</p>
    </div>

    <div v-if="role === 'reviewer'">
      <p>Welcome, Reviewer! You can review the content.</p>
    </div>

    <div v-if="role === 'editor'">
      <p>Welcome, Editor! You can edit the content.</p>
    </div>

    <div v-if="role !== 'admin' && role !== 'reviewer' && role !== 'editor'">
      <p>Unknown role. Please select a valid role.</p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { defineProps } from 'vue';

type Role = 'admin' | 'reviewer' | 'editor';

const props = defineProps<{
  role: Role;
}>();
</script>
    `,
	svelte4: `
<script lang="ts">
  export let role: 'admin' | 'reviewer' | 'editor';
</script>

<div>
  <h2>User Role: {role}</h2>

  {#if role === 'admin'}
    <p>Welcome, Admin! You have full access to the system.</p>
  {/if}

  {#if role === 'reviewer'}
    <p>Welcome, Reviewer! You can review the content.</p>
  {/if}

  {#if role === 'editor'}
    <p>Welcome, Editor! You can edit the content.</p>
  {/if}

  {#if role !== 'admin' && role !== 'reviewer' && role !== 'editor'}
    <p>Unknown role. Please select a valid role.</p>
  {/if}
</div>
    `,
	svelte5: `
<script lang="ts">
let { role } = $props();
</script>

<div>
  <h2>User Role: {role}</h2>

  {#if role === 'admin'}
    <p>Welcome, Admin! You have full access to the system.</p>
  {/if}

  {#if role === 'reviewer'}
    <p>Welcome, Reviewer! You can review the content.</p>
  {/if}

  {#if role === 'editor'}
    <p>Welcome, Editor! You can edit the content.</p>
  {/if}

  {#if role !== 'admin' && role !== 'reviewer' && role !== 'editor'}
    <p>Unknown role. Please select a valid role.</p>
  {/if}
</div>
    `,
	litjs: `
import { LitElement, html, css, property } from 'lit';
import { customElement } from 'lit/decorators.js';

@customElement('user-role-component')
class UserRoleComponent extends LitElement {
  @property({ type: String }) role!: 'admin' | 'reviewer' | 'editor';

  render() {
    return html\`
      <div>
        <h2>User Role: \${this.role}</h2>
        \${this.role === 'admin' ? html\`<p>Welcome, Admin! You have full access to the system.</p>\` : ''}
        \${this.role === 'reviewer' ? html\`<p>Welcome, Reviewer! You can review the content.</p>\` : ''}
        \${this.role === 'editor' ? html\`<p>Welcome, Editor! You can edit the content.</p>\` : ''}
      </div>
    \`;
  }
}
  `,
	qwikjs: `
import { component$ } from '@builder.io/qwik';

type Role = 'admin' | 'reviewer' | 'editor';

interface UserRoleProps {
  role: Role;
}

export const UserRoleComponent = component$((props: UserRoleProps) => {
  return (
    <div>
      <h2>User Role: {props.role}</h2>

      {props.role === 'admin' && (
        <p>Welcome, Admin! You have full access to the system.</p>
      )}

      {props.role === 'reviewer' && (
        <p>Welcome, Reviewer! You can review the content.</p>
      )}

      {props.role === 'editor' && (
        <p>Welcome, Editor! You can edit the content.</p>
      )}
    </div>
  );
});
  `,
};
