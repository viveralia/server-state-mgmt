import { Route, Routes } from "react-router-dom"

import { DrinkDetails } from "../pages/DrinkDetails"
import { DrinksList } from "../pages/DrinksList"
import { EditDrink } from "../pages/EditDrink"
import { NewDrink } from "../pages/NewDrink"

export const DrinksRoutes = () => {
  return (
    <Routes>
      <Route index element={<DrinksList />} />
      <Route path="new" element={<NewDrink />} />
      <Route path=":drinkId">
        <Route index element={<DrinkDetails />} />
        <Route path="edit" element={<EditDrink />} />
      </Route>
    </Routes>
  )
}
