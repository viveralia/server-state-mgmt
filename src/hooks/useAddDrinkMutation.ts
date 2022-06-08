import { useMutation } from "react-query"

import { createDrink } from "../services/drinksService"

export const useAddDrinkMutation = () => {
  return useMutation(createDrink, {
    onSuccess: (newDrink) => {
      console.log('Sending precision event for tracking to freshpaint', newDrink)
    },
    onError: (error) => {
      console.error('Sending error to sentry...', error)
    }
  })
}
