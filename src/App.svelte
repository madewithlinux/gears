<script lang="ts">
  import ConfigPanel from "./components/ConfigPanel.svelte";
  import Gears from "./Gears.svelte";
  import { getDefaultGearsContext, setGearsContext } from "./lib/gears_context";

  setGearsContext(getDefaultGearsContext());
</script>

<main>
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
  @media (max-width: 1000px) {
    :global(body) {
      padding: 0;
    }
    main {
      max-width: none;
      padding-left: 10px;
      padding-right: 10px;
      display: unset;
    }
  }
</style>
