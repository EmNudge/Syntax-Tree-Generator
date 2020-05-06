<script>
  import {
    alignTextBottomStore,
    fontFamilyStore,
    fontSizeStore,
    textTrianglesStore,
    autoCloseBracketsStore
  } from "../stores/preferences";
</script>

<style>
  div.body {
    padding: 20px;
    background: #eee;
  }
  h3 {
    margin-top: 50px;
    text-align: left;
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
  
  <h3>Graph</h3>
  <label class="checkbox">
    <input type="checkbox" bind:checked={$alignTextBottomStore} />
    <span>Align Text To Bottom</span>
  </label>
  <br>
  <label class="checkbox">
    <input type="checkbox" bind:checked={$textTrianglesStore} />
    <span>Text Triangles</span>
  </label>

  <h3>Text Box</h3>
  <label class="checkbox">
    <input type="checkbox" bind:checked={$autoCloseBracketsStore} />
    <span>Auto-Close Brackets</span>
  </label>
</div>
