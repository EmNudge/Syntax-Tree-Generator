import {
	alignTextBottomStore,
	fontFamilyStore,
	fontSizeStore,
	textTrianglesStore,
	autoCloseBracketsStore
} from '../stores/preferences';
import { textStore } from '../stores/data';

const stores = new Map([
  ['align-text-bottom', alignTextBottomStore],
  ['font-family', fontFamilyStore],
  ['font-size', fontSizeStore],
  ['text-triangles', textTrianglesStore],
  ['auto-close-brackets', autoCloseBracketsStore],
  ['text', textStore],
]);

export function setFromStorage() {
  for (const [name, store] of stores) {
    const item = localStorage.getItem(name);
    if (item == null) continue;

    const val = JSON.parse(item);
    store.set(val);
  }
}