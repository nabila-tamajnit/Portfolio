// 1 → "01", 12 → "12": two-digit numbers used for projects and steps.
export const formatNumber = (value) => String(value).padStart(2, "0")
