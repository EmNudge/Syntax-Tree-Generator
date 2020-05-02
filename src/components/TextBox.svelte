<script>
  import { treeStore, errTextStore, textStore } from '../stores/data';
  import addNodeSize from "../parser/addNodeSize";
  import parser from '../parser';
  import SvgTree from "./SvgTree/Root.svelte";
  import { tick } from 'svelte';

  $: {
    $errTextStore = parser.run($textStore).error || "";
    const result = parser.run($textStore).result || {};
    if (result.name) {
      addNodeSize(result);
      $treeStore = result;
    }
  }

  async function handleMouseDown(e) {
    if (e.key !== 'Tab') return

    e.preventDefault();
    const startIndex = e.target.selectionStart;

    const start = $textStore.slice(0, e.target.selectionStart);
    const end = $textStore.slice(e.target.selectionEnd);
    $textStore = `${start}  ${end}`;

    await tick();
    e.target.setSelectionRange(startIndex+2,startIndex+2);
  }
</script>

<style>
  textarea {
    min-height: 100px;
    min-width: 500px;
    font-family: monospace;
    font-size: 1.2em;
  }
  @media screen and (max-width: 600px) {
    textarea {
      min-width: 0;
      width: 100%;
    }
  }
</style>

<textarea type="text" bind:value={$textStore} on:keydown={handleMouseDown} />