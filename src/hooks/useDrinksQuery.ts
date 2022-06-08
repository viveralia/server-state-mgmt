import { useQuery } from "react-query"

import { getDrinks } from "../services/drinksService"

export const useDrinksQuery = () => {
  return useQuery("drinks", getDrinks)
}
