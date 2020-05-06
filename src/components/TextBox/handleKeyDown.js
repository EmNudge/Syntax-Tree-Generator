import { tick } from 'svelte';
import { replaceSelection, getSelection, deleteLast, moveSelection } from './utils';
import { get } from 'svelte/store'
import { autoCloseBracketsStore } from '../../stores/preferences';

async function handleKeyDown(e) {
  if (e.key !== 'Tab' && e.key !== '[') return;
  
  if (e.key === '[') {
    if (!get(autoCloseBracketsStore)) return;
    e.preventDefault();
    replaceSelection(e.target, '[]');
    tick().then(() => moveSelection(e.target, -1));
    return;
  }

  e.preventDefault();
  if (e.shiftKey) {
    if (getSelection(e.target).length) return;
    if (getSelection(e.target, -2) !== '  ') return;
    deleteLast(e.target, 2);
    return;
  }

  replaceSelection(e.target, '  ');
}

export default handleKeyDown;