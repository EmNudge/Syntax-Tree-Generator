import { writable } from 'svelte/store';
import { ignoreFirst } from './utils';

export const treeStore = writable({});

export const errTextStore = writable('');

export const svgStore = writable(null);

export const textStore = writable('[S [NP This][VP [V creates][NP nice syntax trees]]]');
textStore.subscribe(ignoreFirst(text => {
  localStorage.setItem('text', JSON.stringify(text))
}));

export const treeDepthStore = writable(0);