<script lang="ts">
  import { getGearsContext } from "../lib/gears_context";
  import ConfigPresets from "./ConfigPresets.svelte";
  import InputNumber from "./InputNumber.svelte";

  const { speed, holeRadius, toothRadius, modulus, numPlanets, annulusTeeth, planetTeeth, sunTeeth } =
    getGearsContext();
</script>

<div class="config">
  <h1>config</h1>
  <div class="grid">
    <InputNumber id="speed" bind:value={$speed} />
    <InputNumber id="holeRadius" bind:value={$holeRadius} />
    <InputNumber id="toothRadius" bind:value={$toothRadius} />
    <InputNumber id="modulus" bind:value={$modulus} />
    <InputNumber id="numPlanets" bind:value={$numPlanets} integer />
    <InputNumber id="sunTeeth" bind:value={$sunTeeth} integer />
    <InputNumber id="planetTeeth" bind:value={$planetTeeth} integer />
    <InputNumber id="annulusTeeth" bind:value={$annulusTeeth} integer />
  </div>
  <ConfigPresets />
</div>

<style>
  .config {
    box-sizing: border-box;
    width: max-content;
    max-width: 100%;
    font-size: 1.2rem;
  }
  .grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 10px;
  }
</style>
