import { angleDeg } from "./util"

export interface GearDef {
  teeth: number;
  radius: number;
  annulus?: boolean;
  x: number;
  y: number;
  angleOffsetDeg?: number;
}


export function meshNextGear<G extends GearDef>(fixedGear: GearDef, nextGear: G): GearDef {
  const degBetweenGears = angleDeg(fixedGear.x, fixedGear.y, nextGear.x, nextGear.y) - (nextGear.annulus ? 180 : 0)
  const fixedDegPerTooth = 360 / fixedGear.teeth
  const nextDegPerTooth = 360 / nextGear.teeth

  const fixedPartialTooth = (
    (degBetweenGears - (fixedGear.angleOffsetDeg ?? 0)) % fixedDegPerTooth
  ) / fixedDegPerTooth
  const nextPartialTooth = (
    ((nextGear.annulus ? 0 : 180) + degBetweenGears - (nextGear.angleOffsetDeg ?? 0)) % nextDegPerTooth
  ) / nextDegPerTooth

  const offset = nextDegPerTooth * ((fixedPartialTooth + nextPartialTooth) % 1)
  return { ...nextGear, angleOffsetDeg: offset }
}

