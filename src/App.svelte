<script>
  import TextBox from './components/TextBox/TextBox.svelte'
  import SvgTree from "./components/SvgTree/Root.svelte";
  import Header from './components/Header/Header.svelte';
  import Preferences from './components/Preferences.svelte';
  import { errTextStore }  from './stores/data'
  import { enablePreferencesStore } from './stores'
</script>

<style>
  :global(body) {
    padding: 0;
  }
  main {
    font-family: sans-serif;
    text-align: center;
    height: 100%;
    display: grid;
    grid-template-rows: auto 1fr;
  }
  .box {
    text-align: left;
    max-width: 500px;
    margin: 0 auto;
  }
  .box span {
    font-size: 12px;
    position: absolute;
  }

  .content {
    display: grid;
    grid-template-columns: auto 1fr;
  }
</style>

<main>
  <Header />

  <div class="content" style="grid-template-columns: {$enablePreferencesStore ? 'auto' : ''} 1fr">
    {#if $enablePreferencesStore}
      <Preferences />
    {/if}
    <div class="syntax-parser">
      <h1>Syntax Tree</h1>

      <div class="box">
        <TextBox />
        <br />
        <span>{$errTextStore}</span>
      </div>

      <br />

      <SvgTree />
    </div>
  </div>
</main>