<script>
  import MenuItem from './MenuItem.svelte';
  import { activeMenu } from '../../stores';
  import { svgStore } from '../../stores/data';
  import menu from './menu';

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