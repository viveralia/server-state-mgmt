import { useParams } from "react-router-dom"

import { useDrinkDetailsQuery } from "../hooks/useDrinkDetailsQuery"
import { currencyFormatter } from "../utils/currencyFormatter"

export const DrinkDetails = () => {
  const params = useParams()

  const { data: drink, isLoading, isError } = useDrinkDetailsQuery(params.drinkId as string)

  if (isError) return <p>Something happened with the request</p>

  if (isLoading) return <p>Loading drink details...</p>

  return (
    <main>
      <h1>{drink!.name}</h1>
      <p>
        {currencyFormatter({
          currency: drink!.price.currency
        }).format(drink!.price.amount)}
      </p>
    </main>
  )
}
