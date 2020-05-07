import { writable } from 'svelte/store';

export const activeMenu = writable(null);

export const enablePreferencesStore = writable(false);