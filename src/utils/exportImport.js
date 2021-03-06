import { get } from 'svelte/store'
import { textStore } from '../stores/data'
import { alignTextBottomStore } from '../stores/preferences'
import { downloadItem } from './download';

export function exportProject() {
  const text = get(textStore);
  const alignTextBottom = get(alignTextBottomStore);
  const preferences = { alignTextBottom }
  const obj = { text, preferences }

  const link = `data:text/plain;charset=utf-8,${encodeURIComponent(JSON.stringify(obj))}`
  downloadItem(link, 'syntax-tree.json');
}

function setData(e) {
  const file = e.target.files[0];
  file.text().then(text => {
    try {
      const json = JSON.parse(text);
      textStore.set(json.text);
      alignTextBottomStore.set(json.preferences.alignTextBottom);
    } catch (e) {
      console.log(e)
    }
  });
}

export function importProject() {
  const fileInput = document.createElement('input');
  fileInput.setAttribute('type', 'file');

  document.body.appendChild(fileInput);
  fileInput.addEventListener('change', setData);
  fileInput.click();
  
  document.body.removeChild(fileInput);
}