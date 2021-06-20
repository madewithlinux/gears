<svelte:options namespace="http://www.w3.org/2000/svg" />

<script context="module" lang="ts">
  export interface GearDef {
    fill: string;
    teeth: number;
    radius: number;
    x: number;
    y: number;
    annulus?: boolean;
    reverse?: boolean;
  }
</script>

<script lang="ts">
  import { onMount } from "svelte";
  import { scaleLinear } from "d3-scale";
  import { range } from "lodash";
  import { polarToCartesian } from "./lib/util";
  import Gear from "./Gear.svelte";
import { getGearsContext } from "./lib/gears_context";

  let { speed, holeRadius, toothRadius, modulus, numPlanets, annulusTeeth, planetTeeth, sunTeeth } =
    getGearsContext();

  $: annulusRadius = ($modulus * $annulusTeeth) / 2;
  $: planetRadius = ($modulus * $planetTeeth) / 2;
  $: sunRadius = ($modulus * $sunTeeth) / 2;
  $: angleScale = scaleLinear([0, $numPlanets], [0, 2 * Math.PI]);
  $: planetCenterR = sunRadius + planetRadius;

  $: gears = [
    ...range($numPlanets).map((i) => {
      const [x, y] = polarToCartesian(angleScale(i), planetCenterR);
      return { fill: "#9ecae1", teeth: $planetTeeth, radius: planetRadius, x, y };
    }),
    { fill: "#c6dbef", teeth: $annulusTeeth, radius: annulusRadius, x: 0, y: 0, annulus: true },
    { fill: "#6baed6", teeth: $sunTeeth, radius: sunRadius, x: 0, y: 0, reverse: true },
  ] as GearDef[];

  let frameAngle = 0;
  let angle = 0;
  let frameRadius: number = Infinity;
  let prevTimestamp: number | undefined = undefined;
  let animationFrame: number | undefined = undefined;

  function step(timestamp: DOMHighResTimeStamp) {
    // correction factor for relative to 60hz
    const factor = prevTimestamp === undefined ? 1 : (timestamp - prevTimestamp) / ((1 / 60) * 1000);
    angle = angle + $speed * factor;
    frameAngle = frameAngle + ($speed * factor) / frameRadius;
    prevTimestamp = timestamp;
    animationFrame = requestAnimationFrame(step);
  }

  onMount(() => {
    animationFrame = requestAnimationFrame(step);
    return () => clearInterval(animationFrame);
  });
</script>

<svg
  class="gears"
  xmlns="http://www.w3.org/2000/svg"
  viewBox="-0.53,-0.53,1.06,1.06"
  stroke="black"
  stroke-width={1 / 640}
>
  <g transform={`rotate(${frameAngle % 360})`}>
    {#each gears as d, i (i)}
      <Gear {...d} toothRadius={$toothRadius} holeRadius={$holeRadius} {angle} />
    {/each}
  </g>
</svg>

<style>
  .gears {
    max-width: 640px;
    display: block;
  }
</style>
