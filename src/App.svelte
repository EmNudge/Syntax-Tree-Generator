<script>
  import TextBox from './components/TextBox.svelte'
  import SvgTree from "./components/SvgTree/Root.svelte";
  import { errTextStore }  from './stores'
  import Header from './components/Header/MenuManager.svelte';
</script>

<style>
  :global(body) {
    padding: 0;
  }
  main {
    font-family: sans-serif;
    text-align: center;
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
</style>

<main>
  <Header />
	<h1>Syntax Tree</h1>

  <div class="box">
    <TextBox />
    <br />
    <span>{$errTextStore}</span>
  </div>

  <br />

  <SvgTree />
</main>