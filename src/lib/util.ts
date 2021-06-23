
export function polarToCartesian(angleRadians: number, radius: number): [x: number, y: number] {
  const x = Math.cos(angleRadians) * radius;
  const y = Math.sin(angleRadians) * radius;
  return [x, y] as [number, number];
}

export function angleRadians(x1: number, y1: number, x2: number, y2: number): number {
  var angle = Math.atan2(y2 - y1, x2 - x1);
  return angle > 0 ? angle : 2 * Math.PI + angle;
}

export function angleDeg(x1: number, y1: number, x2: number, y2: number): number {
  return angleRadians(x1, y1, x2, y2) * 180 / Math.PI
}
