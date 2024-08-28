/**
 * is the element in the const array
 * @param values
 * @param val
 */
export function isInConstArray<T>(values: readonly T[], val: any): val is T {
  return values.includes(val);
}
