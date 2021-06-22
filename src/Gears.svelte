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
    toothOffset?: number;
  }
</script>

<script lang="ts">
  import { onMount } from "svelte";
  import { scaleLinear } from "d3-scale";
  import { range } from "lodash";
  import { polarToCartesian } from "./lib/util";
  import Gear from "./Gear.svelte";
  import { getGearsContext } from "./lib/gears_context";

  const { speed, holeRadius, toothRadius, modulus, numPlanets, annulusTeeth, planetTeeth, sunTeeth } =
    getGearsContext();

  $: annulusRadius = ($modulus * $annulusTeeth) / 2;
  $: planetRadius = ($modulus * $planetTeeth) / 2;
  $: sunRadius = ($modulus * $sunTeeth) / 2;
  $: planetCenterR = sunRadius + planetRadius;
  $: frameWidth = (annulusRadius + 3 * $toothRadius) * 2 * 1.02;
  // TODO: put this back into some kind of context object
  $: console.log({frameWidth})
  
  $: angleScale = scaleLinear([0, $numPlanets], [0, 2 * Math.PI]);
  $: gears = [
    ...range($numPlanets).map((i) => {
      const angleRadians = angleScale(i);
      const [x, y] = polarToCartesian(angleRadians, planetCenterR);

      const oddFlip = [$sunTeeth, $planetTeeth, $annulusTeeth]
        .map((v) => (v % 4 == 0 ? 0 : 180))
        .reduce((a, b) => a + b, 0);
      const angleOffsetDeg =
        (((($sunTeeth + $planetTeeth) / $planetTeeth) * i) / $numPlanets) * 360 + oddFlip;

      return { fill: "#9ecae1", teeth: $planetTeeth, radius: planetRadius, x, y, angleOffsetDeg };
    }),
    {
      fill: "#c6dbef",
      teeth: $annulusTeeth,
      radius: annulusRadius,
      x: 0,
      y: 0,
      annulus: true,
      angleOffsetDeg: $sunTeeth % 2 == 0 ? 0 : 180,
    },
    { fill: "#6baed6", teeth: $sunTeeth, radius: sunRadius, x: 0, y: 0, reverse: true },
  ] as GearDef[];

  let frameAngle = 0;
  let angle = 0;
  let frameRadius: number = Infinity;
  let prevTimestamp: number | undefined = undefined;
  let animationFrame: number | undefined = undefined;

  function step(timestamp: DOMHighResTimeStamp) {
    // correction factor for relative to 60hz
    const frameFactor = prevTimestamp === undefined ? 1 : (timestamp - prevTimestamp) / ((1 / 60) * 1000);
    const sizeFactor = frameWidth;
    const adjustedSpeed = $speed * frameFactor * sizeFactor / 16;
    angle = angle + adjustedSpeed;
    frameAngle = frameAngle + adjustedSpeed / frameRadius;
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
  viewBox="{-frameWidth / 2},{-frameWidth / 2},{frameWidth},{frameWidth}"
  stroke="black"
  stroke-width={frameWidth / 640}
>
  <g transform={`rotate(${frameAngle % 360})`}>
    {#each gears as d (d)}
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
