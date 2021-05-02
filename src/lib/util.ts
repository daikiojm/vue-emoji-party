export const isString = (value: unknown): value is string => {
  return typeof value === 'string'
}

export const isBoolean = (value: unknown): value is boolean => {
  return typeof value === 'boolean'
}

export const isObject = (value: unknown) => {
  return typeof value === 'object'
}

export const isStringArray = (arr: unknown[]): arr is string[] => {
  return Array.isArray(arr) && arr.every((v) => typeof v === 'string')
}
