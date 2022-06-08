import { Link } from "react-router-dom"

import { Drink } from "../models/Drink"
import { currencyFormatter } from "../utils/currencyFormatter"

interface Props {
  drink: Drink
}

const DrinkCard = ({ drink }: Props) => {
  return (
    <article>
      <h2>
        <Link to={drink.id}>{drink.name}</Link>
      </h2>
      <p>
        {currencyFormatter({
          currency: drink.price.currency
        }).format(drink.price.amount)}
      </p>
    </article>
  )
}

export default DrinkCard
