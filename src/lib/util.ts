
export function polarToCartesian(angleRadians: number, radius: number): [x: number, y: number] {
  const x = Math.cos(angleRadians) * radius;
  const y = Math.sin(angleRadians) * radius;
  return [x, y] as [number, number];
}
