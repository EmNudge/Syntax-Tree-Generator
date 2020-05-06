
import { tick } from 'svelte';
import { textStore, svgStore } from '../../stores/data';
import { downloadPNG, downloadSVG } from '../../utils/download';
import { importProject, exportProject } from '../../utils/exportImport';
import { examples } from '../../utils/examples'

const examplesChildren = examples.map(({ name, text }) => ({ 
  name, 
  action() {
    textStore.set(text);
    tick().then(() => {
      svgStore.set(true);
      svgStore.update(svg => svg);
    });
  }
}));

const menu = [
  { name: 'File', children: [
    { name: 'Download As', children: [
      { name: 'SVG', action: () => downloadSVG($svgStore) },
      { name: 'PNG', action: () => downloadPNG($svgStore) },
    ]},
    { name: 'export', action: exportProject },
    { name: 'import', action: importProject },
  ]},
  { name: 'Graph', children: [
    { name: 'Preferences', action: () => $enablePreferencesStore = !$enablePreferencesStore  },
    { name: 'Examples', children: examplesChildren }
  ]}
];

export default menu;