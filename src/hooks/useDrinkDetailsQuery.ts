import { useQuery } from "react-query"

import { Drink } from "../models/Drink"
import { getDrinkDetails } from "../services/drinksService"

export const useDrinkDetailsQuery = (drinkId: Drink["id"]) => {
  return useQuery(["drink", drinkId], () => getDrinkDetails(drinkId))
}
