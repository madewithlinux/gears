<svelte:options namespace="http://www.w3.org/2000/svg" />

<script lang="typescript">
  import { gearPath } from "./lib/epicyclic_gearing";
  import { cssVariables } from "./lib/util";

  export let fill: string;
  export let teeth: number;
  export let radius: number;
  export let x: number;
  export let y: number;
  export let annulus: boolean = false;
  export let toothRadius: number;
  export let holeRadius: number;
  export let speedFactor: number = 1;
  export let reverse: boolean = false;
  export let angleOffsetDeg: number | undefined = undefined;
  export let markers: boolean = true;
  export let frameWidth: number;

  export let xAxisColor: string = "#da4343";
  export let yAxisColor: string = "#4fb54f";

  $: transform = `translate(${x},${y})`;
  $: d = gearPath({ teeth, radius, annulus: annulus ?? false, toothRadius, holeRadius });
  $: cssVarStyles = cssVariables({
    angleOffsetDeg: angleOffsetDeg ?? 0,
    duration: 60 / (frameWidth / radius),
  });

  let animation: Animation | undefined;
  $: animation?.updatePlaybackRate(speedFactor);
</script>

<g {transform} style={cssVarStyles}>
  <g
    class="spin {reverse ? 'reverse' : ''}"
    on:animationstart={(e) => ([animation] = e.currentTarget.getAnimations())}
  >
    <!-- 
    transform by -90 degrees because gearPath() starts drawing teeth at -PI/2, but we want to think about it like
    it starts on the positive X axis (at 0)
  -->
    <path {fill} {d} transform="rotate(90)" />

    {#if markers}
      <g stroke="black" stroke-width={toothRadius / 2}>
        {#if !annulus}
          <line
            y1={0}
            y2={0}
            x1={holeRadius + toothRadius}
            x2={radius - 2 * toothRadius}
            stroke={xAxisColor}
          />
          <line
            x1={0}
            x2={0}
            y1={holeRadius + toothRadius}
            y2={radius - 2 * toothRadius}
            stroke={yAxisColor}
          />
          <!-- <circle cx={radius} cy={0} r={toothRadius / 3} transform="rotate({0.75 * (360 / teeth)})" stroke="blue" /> -->
        {:else}
          <line y1={0} y2={0} x1={radius + toothRadius} x2={radius + 3 * toothRadius} stroke={xAxisColor} />
          <line x1={0} x2={0} y1={radius + toothRadius} y2={radius + 3 * toothRadius} stroke={yAxisColor} />
          <!-- <circle cx={radius} cy={0} r={toothRadius / 3} transform="rotate({0.25 * (360 / teeth)})" stroke="blue" /> -->
        {/if}
      </g>
    {/if}
  </g>
</g>

<style>
  .reverse {
    animation-direction: reverse;
  }

  .spin {
    animation-duration: calc(var(--duration) * 1s);
    animation-name: rotation;
    animation-iteration-count: infinite;
    animation-timing-function: linear;
  }

  @keyframes rotation {
    from {
      transform: rotate(calc(var(--angleOffsetDeg) * 1deg));
    }
    to {
      transform: rotate(calc(var(--angleOffsetDeg) * 1deg + 1turn));
    }
  }
</style>
