import { Currency } from "../constants/currencies"

interface Options {
  locale?: "es-MX"
  currency?: Currency
}

export const currencyFormatter = ({ locale = "es-MX", currency = "MXN" }: Options) => {
  return new Intl.NumberFormat(locale, { 
    currency: currency,
    style: "currency"
  })
}