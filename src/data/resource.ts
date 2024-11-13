export const resource = {
	solid: `
import { createResource, Show, For } from 'solid-js';

const fetchUsers = async () => {
  const response = await fetch('https://jsonplaceholder.typicode.com/users');
  return response.json();
};

function UserList() {
  const [users] = createResource(fetchUsers);

  return (
    <div>
      <h1>Users</h1>
      <Show when={users()} fallback={<p>Loading...</p>}>
        <ul>
          <For each={users()} fallback={<li>No users found</li>}>
            {(user) => (
              <li>
                {user.name} - {user.email}
              </li>
            )}
          </For>
        </ul>
      </Show>
    </div>
  );
}
    `,
	reactjs: `
import React, { useState, useEffect } from 'react';

interface User {
  id: number;
  name: string;
  email: string;
}

const fetchUsers = async (): Promise<User[]> => {
  const response = await fetch('https://jsonplaceholder.typicode.com/users');
  return response.json();
};

const UserList: React.FC = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const loadUsers = async () => {
      const userData = await fetchUsers();
      setUsers(userData);
      setLoading(false);
    };

    loadUsers();
  }, []);

  return (
    <div>
      <h1>Users</h1>
      {loading ? (
        <p>Loading...</p>
      ) : users.length === 0 ? (
        <p>No users found</p>
      ) : (
        <ul>
          {users.map((user) => (
            <li key={user.id}>
              {user.name} - {user.email}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};
    `,
	angular: `
import { Component, NgIf } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';

interface User {
  id: number;
  name: string;
  email: string;
}

@Component({
  selector: 'app-user-list',
  standalone: true,
  imports: [NgIf, HttpClientModule],
  template: \`
    <h1>Users</h1>
    <div *ngIf="loading; else userList">
      <p>Loading...</p>
    </div>

    <ng-template #userList>
      <ul *ngIf="users.length > 0; else noUsers">
        <li *ngFor="let user of users">
          {{ user.name }} - {{ user.email }}
        </li>
      </ul>
      <ng-template #noUsers>
        <p>No users found</p>
      </ng-template>
    </ng-template>
  \`,
  styleUrls: []
})

export class UserListComponent {
  users: User[] = [];
  loading: boolean = true;

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.http.get<User[]>('https://jsonplaceholder.typicode.com/users').subscribe(
      (data) => {
        this.users = data;
        this.loading = false;
      },
      (error) => {
        console.error('Error fetching users:', error);
        this.loading = false;
      }
    );
  }
}
    `,
	angular18: `
import { Component, signal, effect } from '@angular/core';
import { HttpClient } from '@angular/common/http';

interface User {
  id: number;
  name: string;
  email: string;
}

@Component({
  selector: 'app-user-list',
  standalone: true,
  imports: [HttpClient],
  template: \`
    <h1>Users</h1>
    @if(loading()) {
      <p>Loading...</p>
    } else {
      <ul>
        @for(user of users()) {
          <li>
            {{ user.name }} - {{ user.email }}
          </li>
        } @empty {
          <li>No users found</li>
        }
      </ul>
    }
  \`,
})
export class UserListComponent {
  users = signal<User[]>([]);
  loading = signal<boolean>(true);

  constructor(private http: HttpClient) {
    effect(() => {
      if (!this.loading()) {
        console.log('Finished loading users!');
      }
    });
  }

  ngOnInit() {
    this.http.get<User[]>('https://jsonplaceholder.typicode.com/users').subscribe(
      (data) => {
        this.users.set(data);
        this.loading.set(false);
      },
      (error) => {
        console.error('Error fetching users:', error);
        this.loading.set(false);
      }
    );
  }
}
    `,
	vuejs: `
<template>
  <div>
    <h1>Users</h1>
    <div v-if="loading">Loading...</div>
    <div v-else-if="users.length === 0">No users found</div>
    <ul v-else>
      <li v-for="user in users" :key="user.id">
        {{ user.name }} - {{ user.email }}
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';

interface User {
  id: number;
  name: string;
  email: string;
}

const users = ref<User[]>([]);
const loading = ref<boolean>(true);

const fetchUsers = async () => {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await response.json();
    users.value = data;
  } catch (error) {
    console.error('Error fetching users:', error);
  } finally {
    loading.value = false;
  }
};

onMounted(fetchUsers);
</script>
    `,
	svelte4: `
<script lang="ts">
  import { onMount } from 'svelte';

  interface User {
    id: number;
    name: string;
    email: string;
  }

  let users: User[] = [];
  let loading: boolean = true;

  const fetchUsers = async () => {
    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/users');
      users = await response.json();
    } catch (error) {
      console.error('Error fetching users:', error);
    } finally {
      loading = false;
    }
  };

  onMount(fetchUsers);
</script>

<main>
  <h1>Users</h1>

  {#if loading}
    <p>Loading...</p>
  {:else if users.length === 0}
    <p>No users found</p>
  {:else}
    <ul>
      {#each users as user (user.id)}
        <li>{user.name} - {user.email}</li>
      {/each}
    </ul>
  {/if}
</main>
    `,
	svelte5: `
<script lang="ts">
  import { onMount } from 'svelte';

  interface User {
    id: number;
    name: string;
    email: string;
  }

  let users = $state([]);
  let loading = $state(true);

  const fetchUsers = async () => {
    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/users');
      users = await response.json();
    } catch (error) {
      console.error('Error fetching users:', error);
    } finally {
      loading = false;
    }
  };

  onMount(fetchUsers);
</script>

<main>
  <h1>Users</h1>

  {#if loading}
    <p>Loading...</p>
  {:else if users.length === 0}
    <p>No users found</p>
  {:else}
    <ul>
      {#each users as user (user.id)}
        <li>{user.name} - {user.email}</li>
      {/each}
    </ul>
  {/if}
</main>
    `,
	litjs: `
import { LitElement, html, property } from 'lit';
import { customElement, state } from 'lit/decorators.js';

interface User {
  id: number;
  name: string;
  email: string;
}

@customElement('user-list')
export class UserList extends LitElement {
  @state({ type: Array }) users: User[] = [];
  @state({ type: Boolean }) loading: boolean = true;

  async fetchUsers() {
    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/users');
      this.users = await response.json();
    } catch (error) {
      console.error('Error fetching users:', error);
    } finally {
      this.loading = false;
    }
  }

  connectedCallback() {
    super.connectedCallback();
    this.fetchUsers();
  }

  render() {
    return html\`
      <h1>Users</h1>
      \${this.loading
        ? html\`<p>Loading...</p>\`
        : html\`
            \${this.users.length === 0
              ? html\`<p>No users found</p>\`
              : html\`
                  <ul>
                    \${this.users.map(
                      (user) =>
                        html\`<li>\${user.name} - \${user.email}</li>\`
                    )}
                  </ul>
                \`}
          \`}
    \`;
  }
}
  `,
	qwikjs: `
import { component$, Resource } from '@builder.io/qwik';

interface User {
  id: number;
  name: string;
  email: string;
}

const fetchUsers = async () => {
  const response = await fetch('https://jsonplaceholder.typicode.com/users');
  return await response.json();
};

export default component$(() => {
  return (
    <div>
      <h1>Users</h1>
      <Resource
        value={fetchUsers()}
        onPending={() => <p>Loading...</p>}
        onRejected={(error) => <p>Error: {error.message}</p>}
        onResolved={(users: User[]) => (
          <>
            {users.length === 0 ? (
              <p>No users found</p>
            ) : (
              <ul>
                {users.map((user) => (
                  <li key={user.id}>
                    {user.name} - {user.email}
                  </li>
                ))}
              </ul>
            )}
          </>
        )}
      />
    </div>
  );
});
  `,
};
