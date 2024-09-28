export function isObject(arg: unknown): arg is Record<string, any> {
  return typeof arg === 'object' && arg !== null;
}

export function isString(value: unknown): value is string {
  return typeof value === 'string';
}
