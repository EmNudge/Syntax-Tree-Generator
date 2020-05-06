<script>
  import {
    alignTextBottomStore,
    fontFamilyStore,
    fontSizeStore,
    textTrianglesStore
  } from "../stores/preferences";
</script>

<style>
  div.body {
    padding: 20px;
    background: #eee;
  }
  label.checkbox {
    text-align: left;
    user-select: none;

    display: grid;
    grid-template-columns: auto 1fr;
    align-items: center;
    grid-gap: 10px;
  }
  label.checkbox input {
    margin: 0;
  }
</style>

<div class="body">
  <h2>Preferences</h2>
  
  <div>
    <label class="checkbox">
      <input type="checkbox" bind:checked={$alignTextBottomStore} />
      <span>Align Text To Bottom</span>
    </label>
    <br>
    <label class="checkbox">
      <input id="text-triangles" type="checkbox" bind:checked={$textTrianglesStore} />
      <span for="text-triangles">Text Triangles</span>
    </label>
  </div>
</div>
