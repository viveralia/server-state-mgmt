import { Link } from "react-router-dom"

import DrinkCard from "../components/DrinkCard"
import { useDrinksQuery } from "../hooks/useDrinksQuery"

export const DrinksList = () => {
  const { data: drinks, isLoading, error } = useDrinksQuery()

  if (!!error) return <p>Oops, something happened</p>

  if (isLoading) return <p>Loading...</p>

  return (
    <main>
      <h1>Drinks</h1>
      <Link to="new">Add drink</Link>
      {drinks && drinks.map(drink => (
        <DrinkCard key={drink.id} drink={drink} />
      ))}
    </main>
  )
}
