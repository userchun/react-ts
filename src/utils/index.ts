export function setItem(key: string, value: string): void {
  localStorage.setItem(key, value)
}
export function getItem(key: string): string | void {
  const value = localStorage.getItem(key)
  if (value) return value
}

export function setItemObj(key: string, value: string): void {
  localStorage.setItem(key, JSON.stringify(value))
}

export function getItemObj(key: string): string | void {
  const value = localStorage.getItem(key)
  if (value) return JSON.parse(value)
}
