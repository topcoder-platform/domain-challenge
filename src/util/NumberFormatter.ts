/**
 * Number formatter
 */

export const roundToPrecision = (value: number, precision: number) => {
  const factor = Math.pow(10, precision);
  return Math.round(value * factor) / factor;
}

export default {
  roundToPrecision
}
