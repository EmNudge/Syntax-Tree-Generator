import { writable } from 'svelte/store';

export const alignTextBottomStore = writable(false);
export const fontFamilyStore = writable('sans-serif');
export const fontSizeStore = writable(16);
export const textTrianglesStore = writable(false);

// text box preferences
export const autoCloseBracketsStore = writable(true);