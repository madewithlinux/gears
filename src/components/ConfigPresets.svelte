<script lang="ts">
  import { getGearsContext } from "../lib/gears_context";

  const { planetTeeth, sunTeeth, annulusTeeth, numPlanets } = getGearsContext();

  const presets = [
    { sun: 16, planet: 32, annulus: 80, n: 3 },
    { sun: 43, planet: 19, annulus: 81, n: 4 },
    { sun: 46, planet: 19, annulus: 84, n: 5 },
    { sun: 44, planet: 19, annulus: 82, n: 6 },
    { sun: 45, planet: 18, annulus: 81, n: 7 },
    { sun: 50, planet: 18, annulus: 86, n: 8 },
  ];
</script>

<div>
  <h1>presets</h1>
  <div class="config">
    {#each presets as { planet, sun, annulus, n }}
      <button
        on:click|self={() => {
          $planetTeeth = planet;
          $sunTeeth = sun;
          $annulusTeeth = annulus;
          $numPlanets = n;
        }}
      >
        planet: {planet}, sun: {sun}, annulus: {annulus}, n: {n}
      </button>
    {/each}
  </div>
</div>

<style>
  .config {
    width: max-content;
    max-width: 100%;
    display: grid;
    grid-template-columns: 1fr;
    gap: 10px;
    font-size: 1.2rem;
  }

  button {
    font-size: 1.2rem;
    margin: 5px;
    padding: 10px;
  }
</style>
