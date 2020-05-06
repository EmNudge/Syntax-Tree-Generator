import { tick } from 'svelte';
import { get } from 'svelte/store';
import { textStore } from '../../stores/data';

export function replaceSelection(textBox, textToAdd) {
  const startIndex = textBox.selectionStart;

  const text = get(textStore);
  const start = text.slice(0, textBox.selectionStart);
  const end = text.slice(textBox.selectionEnd);
  textStore.set(`${start}${textToAdd}${end}`);

  const newIndex = startIndex + textToAdd.length;
  tick().then(() => textBox.setSelectionRange(newIndex, newIndex));
}

export function getSelection(textBox, distance) {
  if (!distance) {
    return textBox.value.slice(
      textBox.selectionStart, 
      textBox.selectionEnd
    );
  }
  if (distance < 0) {
    return textBox.value.slice(
      textBox.selectionStart + distance,
      textBox.selectionStart
    );
  }
  return textBox.value.slice(
    textBox.selectionEnd,
    textBox.selectionEnd + distance
  );
}

export function deleteLast(textBox, dist) {
  textBox.setSelectionRange(textBox.selectionStart - Math.abs(dist), textBox.selectionStart);
  tick().then(() => replaceSelection(textBox, ''));
}

export function moveSelection(textBox, dist) {
  textBox.setSelectionRange(
    textBox.selectionStart + dist, 
    textBox.selectionEnd + dist,
  ); 
}