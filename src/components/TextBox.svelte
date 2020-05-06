<script>
  import { treeStore, treeDepthStore, errTextStore, textStore } from '../stores/data';
  import addNodeSize from "../parser/addNodeSize";
  import parser from '../parser';
  import SvgTree from "./SvgTree/Root.svelte";
  import { tick } from 'svelte';
  import { replaceSelection, getSelection, deleteLast } from '../utils/selection';

  textStore.subscribe(text => {
    const parserResult = parser.run($textStore);
    errTextStore.set(parserResult.error || "");
    const result = parserResult.result || {};
    
    if (!result.name) return;
    
    treeDepthStore.set(0);
    console.log('set to 0')
    addNodeSize(result);
    treeStore.set(result);
  });

  async function handleMouseDown(e) {
    if (e.key !== 'Tab') return
    e.preventDefault();

    if (e.shiftKey) {
      if (getSelection(e.target).length) return;
      if (getSelection(e.target, -2) !== '  ') return;
      deleteLast(e.target, 2);
      return;
    }

    replaceSelection(e.target, '  ');
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