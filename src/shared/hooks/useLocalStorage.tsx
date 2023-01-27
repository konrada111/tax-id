import { useEffect, useState } from "react"

export function useLocalStorage<T>(storageKey: string, defaultValue: T) {
  const [value, setValue] = useState<T>(defaultValue)

  useEffect(() => {
    const data = localStorage.getItem(storageKey)

    if (data) setValue(JSON.parse(data))
  }, [])

  return value
}
