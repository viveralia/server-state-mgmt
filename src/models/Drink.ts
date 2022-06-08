import { Currency } from "../constants/currencies"

export interface Drink {
  id: string
  name: string
  price: {
    currency: Currency
    amount: number
  }
}