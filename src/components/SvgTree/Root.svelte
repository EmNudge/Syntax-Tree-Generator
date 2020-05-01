<script>
  import Node from "./Node.svelte";
  import { onMount } from "svelte";
  import { treeStore, svgStore } from "../../stores";

  export let treeLength = 6;

  let x = 0;
  let y = 0;

  let showNode = false;

  onMount(() => {
    const { width } = $svgStore.getBoundingClientRect();
    x = (width - $treeStore.size) / 2;
    y = 40;
    showNode = true;
  });
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
