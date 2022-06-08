import { useParams } from "react-router-dom"

export const DrinkDetails = () => {
  const params = useParams()
  const drinkId = params.drinkId as string

  return (
    <main>
      <h1>Drink Details</h1>
    </main>
  )
}
