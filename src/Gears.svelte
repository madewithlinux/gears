<svelte:options namespace="http://www.w3.org/2000/svg" />

<script context="module" lang="ts">
  export interface GearDef {
    fill: string;
    teeth: number;
    radius: number;
    origin: [number, number];
    annulus?: boolean;
  }
</script>

<script lang="ts">
  import { onMount } from "svelte";
  import Gear from "./Gear.svelte";

  let speed = 0.08;
  let holeRadius = 0.02;
  let toothRadius = 0.008;
  let y = Math.cos((2 * Math.PI) / 3);
  let x = Math.sin((2 * Math.PI) / 3);
  let gears: GearDef[] = [
    { fill: "#c6dbef", teeth: 80, radius: -0.5, origin: [0, 0], annulus: true },
    { fill: "#6baed6", teeth: 16, radius: +0.1, origin: [0, 0] },
    { fill: "#9ecae1", teeth: 32, radius: -0.2, origin: [0, -0.3] },
    { fill: "#9ecae1", teeth: 32, radius: -0.2, origin: [-0.3 * x, -0.3 * y] },
    { fill: "#9ecae1", teeth: 32, radius: -0.2, origin: [0.3 * x, -0.3 * y] },
  ];

  let frameAngle = 0;
  let angle = 0;
  let frameRadius: number = Infinity;
  let prevTimestamp: number | undefined = undefined;
  let animationFrame: number | undefined = undefined;

  function step(timestamp: DOMHighResTimeStamp) {
    // correction factor for relative to 60hz
    const factor = prevTimestamp === undefined ? 1 : (timestamp - prevTimestamp) / ((1 / 60) * 1000);
    angle = angle + speed * factor;
    frameAngle = frameAngle + (speed * factor) / frameRadius;
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
      <g><Gear {...d} {toothRadius} {holeRadius} {angle} /></g>
    {/each}
  </g>
</svg>

<style>
  .gears {
    max-width: 640px;
    display: block;
    margin: auto;
  }
</style>
