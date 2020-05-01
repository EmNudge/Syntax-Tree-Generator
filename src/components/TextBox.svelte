<script>
  import { treeStore, errTextStore, textStore } from '../stores';
  import addNodeSize from "../parser/addNodeSize";
  import SvgTree from "./SvgTree/Root.svelte";
  import parser from '../parser';

  $: {
    $errTextStore = parser.run($textStore).error || "";
    const result = parser.run($textStore).result || {};
    if (result.name) {
      addNodeSize(result);
      $treeStore = result;
    }
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

<textarea type="text" bind:value={$textStore} />