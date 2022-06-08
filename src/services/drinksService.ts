import axios from "redaxios"

import { Drink } from "../models/Drink"

const client = axios.create({ baseURL: import.meta.env.VITE_API_URL })

export const getDrinks = async () => {
  const { data } =  await client.get<Drink[]>('/drinks')
  return data
}

export const getDrinkDetails = async (drinkId: Drink["id"]) => {
  const { data } = await client.get<Drink>(`/drinks/${drinkId}`)
  return data
}

export const createDrink = async (drink: Omit<Drink, "id">) => {
  const { data } = await client.post<Drink>('/drinks', drink)
  return data
}

export const updateDrink = async ({ id, ...drink }: Partial<Drink> & Pick<Drink, "id">) => {
  const { data } = await client.put<Drink>(`/drinks/${id}`, drink)
  return data
}

export const deleteDrink = async (drinkId: Drink["id"]) => {
  const { data } = await client.delete<Drink>(`/drinks/${drinkId}`)
  return data
}
