// context_stores.ts

import { getContext, setContext } from "svelte";
import { writable, Writable } from "svelte/store";

export interface GearsContext {
  speed: Writable<number>
  holeRadius: Writable<number>;
  toothRadius: Writable<number>;
  modulus: Writable<number>;
  numPlanets: Writable<number>;
  annulusTeeth: Writable<number>;
  planetTeeth: Writable<number>;
  sunTeeth: Writable<number>;
}

export const getDefaultGearsContext = () => ({
  speed: writable(1),
  holeRadius: writable(2),
  toothRadius: writable(1),
  modulus: writable(1.5),
  numPlanets: writable(3),
  annulusTeeth: writable(80),
  planetTeeth: writable(32),
  sunTeeth: writable(16),
})


export const key = {}

export function getGearsContext(): GearsContext {
  return getContext(key)
}

export function setGearsContext(context: GearsContext) {
  setContext(key, context)
}


