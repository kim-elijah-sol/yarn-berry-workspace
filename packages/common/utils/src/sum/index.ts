export function sum(a: number, ...rest: number[]): number
export function sum(a: number, ...rest: number[]): number {
  return rest.reduce((acc, val) => acc + val, a)
}
