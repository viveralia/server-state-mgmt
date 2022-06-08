export const currencies = ["MXN", "COP"] as const

export type Currency = typeof currencies[number]