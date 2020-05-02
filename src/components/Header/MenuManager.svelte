<script>
  import MenuItem from './MenuItem.svelte';
  import { enablePreferencesStore, activeMenu } from '../../stores';
  import { svgStore } from '../../stores/data';
  import { downloadPNG, downloadSVG } from '../../utils/download';
  import { importProject, exportProject } from '../../utils/exportImport';

  export let menu = [
    { name: 'File', children: [
      { name: 'Download As', children: [
        { name: 'SVG', action: () => downloadSVG($svgStore) },
        { name: 'PNG', action: () => downloadPNG($svgStore) },
      ]},
      { name: 'export', action: exportProject },
      { name: 'import', action: importProject },
    ]},
    { name: 'Graph', children: [
      { name: 'Preferences', action: () => $enablePreferencesStore = !$enablePreferencesStore  }
    ]}
  ];

  let headerFocused = false;
  let headerEl;
  function possiblyCloseMenu(e) {
    if (e.target == headerEl || headerEl.contains(e.target)) return;
    headerFocused = false;
  }
</script>

<style>
  header {
    user-select: none;
    display: grid;
    color: white;
  }
  header :global(div > span) { 
    background: #222;
  }
  span {
    background: #333;
  }
</style>

<svelte:window on:click={possiblyCloseMenu} />

<header style="grid-template-columns: {'auto '.repeat(menu.length)}1fr;" bind:this={headerEl} on:click={() => headerFocused = true}>
  {#each menu as menuItem, i}
    <MenuItem 
      root={true} 
      menu={menuItem} 
      expanded={i === $activeMenu && headerFocused} 
      on:mouseover={() => $activeMenu = i} />
  {/each}
  <span />
</header>