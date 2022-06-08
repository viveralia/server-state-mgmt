import { useNavigate } from "react-router-dom"
import { DrinkForm } from "../components/DrinkForm"
import { useAddDrinkMutation } from "../hooks/useAddDrinkMutation"

export const NewDrink = () => {
  const navigate = useNavigate()
  const { isLoading, mutate: addDrink } = useAddDrinkMutation()

  return (
    <main>
      <DrinkForm
        buttonLabel="Add"
        initialValues={{
          currency: "MXN",
          name: "",
          price: ""
        }}
        isLoading={isLoading}
        onSubmit={({ currency, name, price }) => {
          addDrink({ 
            name, 
            price: {
              amount: price as number,
              currency
            }
          }, {
            onSuccess: (newDrink) => {
              navigate("/drinks")
            }
          })
        }}
        title="New Drink"
      />
    </main>
  )
}
