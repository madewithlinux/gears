<svelte:options namespace="http://www.w3.org/2000/svg" />

<script lang="ts">
  import { gearPath } from "./epicyclic_gearing";

  export let fill: string;
  export let teeth: number;
  export let radius: number;
  export let origin: [number, number];
  export let annulus: boolean = false;
  export let toothRadius: number;
  export let holeRadius: number;
  export let angle: number = 0;

  $: transform = `translate(${origin}) rotate(${(angle / radius) % 360})`;
  $: d = gearPath({ teeth, radius, annulus, toothRadius, holeRadius });
</script>

<path {fill} {transform} {d} />
