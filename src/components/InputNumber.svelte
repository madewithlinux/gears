<script lang="ts">
  import { lowerCase } from "lodash";
  export let id: string;
  export let label: string = lowerCase(id);
  export let placeholder: string | undefined = undefined;
  export let value: number;
  export let integer: boolean = false;

  const integerOnChange: svelte.JSX.FormEventHandler<HTMLInputElement> = (e) => {
    value = Math.round(e.currentTarget.valueAsNumber);
  };

  $: step = Math.pow(10, Math.floor(Math.log10(value)))
</script>

<label for={id}>{label}</label>
{#if integer}
  <input {id} type="number" {placeholder} {value} on:change|self={integerOnChange} {...$$restProps} />
{:else}
  <input {id} type="number" {placeholder} bind:value {step} {...$$restProps} />
{/if}

<style>
  label,
  input {
    font-size: 1.2rem;
  }

  label {
    justify-self: stretch;
    align-self: stretch;
  }

  input[type="number"] {
    justify-self: end;
    width: 80px;
    text-align: end;
  }
</style>
