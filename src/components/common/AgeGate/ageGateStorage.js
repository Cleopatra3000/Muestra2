const STORAGE_KEY = 'webcleo-age-gate'

export const getStoredAgeGateStatus = () => {
  if (typeof window === 'undefined') return null

  const value = window.localStorage.getItem(STORAGE_KEY)
  return value === 'accepted' || value === 'denied' ? value : null
}

export const setStoredAgeGateStatus = (value) => {
  if (typeof window === 'undefined') return

  window.localStorage.setItem(STORAGE_KEY, value)
}
