export const isString = (value: any): value is string => {
  return typeof value === 'string'
}

export const isBoolean = (value: any): value is boolean => {
  return typeof value === 'boolean'
}

export const isObject = (value: any): value is object => {
  return typeof value === 'object'
}

export const isStringArray = (arr: any[]): arr is string[] => {
  return Array.isArray(arr) && arr.every((v) => typeof v === 'string')
}
