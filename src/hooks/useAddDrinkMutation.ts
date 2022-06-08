import { useMutation } from "react-query"
import { createDrink } from "../services/drinksService"

export const useAddDrinkMutation = () => {
  return useMutation(createDrink)
}