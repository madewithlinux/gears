<svelte:options namespace="http://www.w3.org/2000/svg" />

<script lang="ts">
  import { gearPath } from "./lib/epicyclic_gearing";

  export let fill: string;
  export let teeth: number;
  export let radius: number;
  export let x: number;
  export let y: number;
  export let annulus: boolean = false;
  export let toothRadius: number;
  export let holeRadius: number;
  export let angle: number = 0;
  export let reverse: boolean = false;
  export let angleOffsetDeg: number | undefined = undefined;
  export let markers: boolean = true;

  export let xAxisColor: string = "#da4343";
  export let yAxisColor: string = "#4fb54f";

  $: angleSign = reverse ? -1 : 1;
  $: transform = `
    translate(${x},${y})
    rotate(${((angleSign * angle) / radius + (angleOffsetDeg ?? 0)) % 360})
  `;
  $: d = gearPath({ teeth, radius, annulus: annulus ?? false, toothRadius, holeRadius });
</script>

<g {transform}>
  <!-- 
    transform by -90 degrees because gearPath() starts drawing teeth at -PI/2, but we want to think about it like
    it starts on the positive X axis (at 0)
   -->
  <path {fill} {d} transform="rotate(90)" />

  {#if markers}
    <g stroke="black" stroke-width={toothRadius / 2}>
      {#if !annulus}
        <line y1={0} y2={0} x1={holeRadius + toothRadius} x2={radius - 2 * toothRadius} stroke={xAxisColor} />
        <line x1={0} x2={0} y1={holeRadius + toothRadius} y2={radius - 2 * toothRadius} stroke={yAxisColor} />
        <!-- <circle cx={radius} cy={0} r={toothRadius / 3} transform="rotate({0.75 * (360 / teeth)})" stroke="blue" /> -->
      {:else}
        <line y1={0} y2={0} x1={radius + toothRadius} x2={radius + 3 * toothRadius} stroke={xAxisColor} />
        <line x1={0} x2={0} y1={radius + toothRadius} y2={radius + 3 * toothRadius} stroke={yAxisColor} />
        <!-- <circle cx={radius} cy={0} r={toothRadius / 3} transform="rotate({0.25 * (360 / teeth)})" stroke="blue" /> -->
      {/if}
    </g>
  {/if}
</g>
