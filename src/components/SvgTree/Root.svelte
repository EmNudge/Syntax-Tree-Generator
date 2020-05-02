<script>
  import Node from "./Node.svelte";
  import { onMount } from "svelte";
  import { treeStore, svgStore } from "../../stores/data";

  export let treeLength = 6;

  $: x = getXPos($svgStore, $treeStore);
  let y = 40;

  let showNode = false;

  onMount(() => {
    y = 40;
    showNode = true;
  });

  function getXPos(svg, tree) {
    if (!svg) return 0;
    const { width } = svg.getBoundingClientRect();
    return (width - tree.size) / 2;
  }
</script>

<svg
  bind:this={$svgStore}
  height={treeLength * 50}
  width={$treeStore.size * 1.5 || 300}>
  <style>
    .hovered line {
      stroke: red;
    }
    .hovered text {
      fill: red;
    }
  </style>
  {#if showNode}
    <Node node={$treeStore} {x} {y} />
  {/if}
</svg>
