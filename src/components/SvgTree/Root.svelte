<script>
  import Node from "./Node.svelte";
  import { onMount } from "svelte";
  import { treeStore, svgStore, treeDepthStore } from "../../stores/data";

  $: treeLength = $treeDepthStore;
  $: console.log($treeStore)

  $: x = ($treeStore.size * 1.5 - $treeStore.size) / 2;
  const y = 15;
</script>

<svg
  bind:this={$svgStore}
  height={(treeLength + 1) * 80}
  width={$treeStore.size * 1.5 || 300}>
  <style>
    .hovered line, .hovered polygon {
      stroke: red;
    }
    .hovered text {
      fill: red;
    }
  </style>

  <Node node={$treeStore} {x} {y} />
</svg>
