<script>
  import {
    alignTextBottomStore,
    fontFamilyStore,
    fontSizeStore
  } from "../stores/preferences";
</script>

<style>
  div.body {
    padding: 20px;
    background: #eee;
  }
</style>

<div class="body">
  <h2>Preferences</h2>
  <label>
    <input type="checkbox" bind:checked={$alignTextBottomStore} />
    Align Text To Bottom
  </label>
</div>
