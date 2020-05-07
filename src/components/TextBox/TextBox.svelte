<script>
  import { treeStore, treeDepthStore, errTextStore, textStore } from '../../stores/data';
  import parser from '../../parser';
  import addNodeSize from "../../parser/node-sizer/addNodeSize";
  import SvgTree from "../SvgTree/Root.svelte";
  import handleKeyDown from './handleKeyDown'

  textStore.subscribe(text => {
    const parserResult = parser.run($textStore);
    errTextStore.set(parserResult.error || "");
    const result = parserResult.result;
    if (!result) return;
    
    treeDepthStore.set(0);
    addNodeSize(result);
    treeStore.set(result);
  });
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

<textarea type="text" bind:value={$textStore} on:keydown={handleKeyDown} />