import { writable } from 'svelte/store';

export const treeStore = writable({});

export const errTextStore = writable('');

export const svgStore = writable(null);

export const textStore = writable('[S [NP This][VP [V creates][NP nice syntax trees]]]');

export const treeDepthStore = writable(0);
treeDepthStore.subscribe(console.log)