<script lang="ts">
  import ConfigPanel from "./components/ConfigPanel.svelte";
  import Gears from "./Gears.svelte";
  import { getDefaultGearsContext, setGearsContext } from "./lib/gears_context";

  setGearsContext(getDefaultGearsContext());
</script>

<main id="fooasdfasdf">
  <ConfigPanel />
  <Gears />
</main>

<style>
  main {
    padding: 2rem;
    margin: 0 auto;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }
</style>
