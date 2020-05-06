import { writable } from 'svelte/store';

export const treeStore = writable({});
export const errTextStore = writable('');

export const activeMenu = writable(null);

export const svgStore = writable(null);

export const enablePreferencesStore = writable(false);