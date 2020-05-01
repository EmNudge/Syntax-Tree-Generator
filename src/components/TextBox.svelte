<script>
  import { treeStore, errTextStore, textStore } from '../stores';
  import parser from "../utils/syntaxParser";
  import addNodeSize from "../utils/addNodeSize";
  import SvgTree from "./SvgTree/Root.svelte";

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