// store stuff
import { enablePreferencesStore } from '../../stores';
import { textStore, svgStore } from '../../stores/data';
import { get } from 'svelte/store';

// utils
import { downloadPNG, downloadSVG } from '../../utils/download';
import { importProject, exportProject } from '../../utils/exportImport';
import { examples } from '../../utils/examples'

const examplesChildren = examples.map(({ name, text }) => ({ 
  name, 
  action: () => textStore.set(text),
}));

const menu = [
  { name: 'File', children: [
    { name: 'Download As', children: [
      { name: 'SVG', action: () => downloadSVG(get(svgStore)) },
      { name: 'PNG', action: () => downloadPNG(get(svgStore)) },
    ]},
    { name: 'export', action: exportProject },
    { name: 'import', action: importProject },
  ]},
  { name: 'Graph', children: [
    { name: 'Preferences', action: () => enablePreferencesStore.update(bool => !bool) },
    { name: 'Examples', children: examplesChildren }
  ]}
];

export default menu;