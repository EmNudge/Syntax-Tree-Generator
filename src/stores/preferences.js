import { writable } from 'svelte/store';
import { subSetToStorage } from './utils';

// graph display preferences
export const alignTextBottomStore = writable(false);
export const fontFamilyStore = writable('sans-serif');
export const fontSizeStore = writable(16);
export const textTrianglesStore = writable(false);

// text box preferences
export const autoCloseBracketsStore = writable(true);


const stores = [
  ['align-text-bottom', alignTextBottomStore],
  ['font-family', fontFamilyStore],
  ['font-size', fontSizeStore],
  ['text-triangles', textTrianglesStore],
  ['auto-close-brackets', autoCloseBracketsStore],
];

for (const [name, store] of stores) {
  subSetToStorage(name, store);
}