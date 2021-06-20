<script lang="ts">
  import { getGearsContext } from "../lib/gears_context";
  import InputNumber from "./InputNumber.svelte";
  
  let { speed, holeRadius, toothRadius, modulus, numPlanets, annulusTeeth, planetTeeth, sunTeeth } =
    getGearsContext();
</script>

<div>
  <h1>config</h1>
  <div class="config">
    <InputNumber id="speed" bind:value={$speed} />
    <InputNumber id="holeRadius" bind:value={$holeRadius} />
    <InputNumber id="toothRadius" bind:value={$toothRadius} />
    <InputNumber id="modulus" bind:value={$modulus} />
    <InputNumber id="numPlanets" bind:value={$numPlanets} integer />
    <InputNumber id="annulusTeeth" bind:value={$annulusTeeth} integer />
    <InputNumber id="planetTeeth" bind:value={$planetTeeth} integer />
    <InputNumber id="sunTeeth" bind:value={$sunTeeth} integer />
  </div>
</div>

<style>
  .config {
    width: max-content;
    max-width: 100%;
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 10px;
    font-size: 1.2rem;
  }
</style>
