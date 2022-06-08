import { ChangeEventHandler, FormEventHandler, useState } from "react"

import { currencies } from "../constants/currencies"
import { Drink } from "../models/Drink"

interface Values {
  name: Drink["name"]
  price: Drink["price"]["amount"] | string
  currency: Drink["price"]["currency"]
}

interface Props {
  title?: string
  initialValues: Values
  onSubmit: (values: Values) => void
  buttonLabel: string
  isLoading: boolean
}

export const DrinkForm = ({ title, initialValues, buttonLabel, onSubmit, isLoading }: Props) => {
  const [values, setValues] = useState(initialValues)

  const handleChange: ChangeEventHandler<HTMLInputElement | HTMLSelectElement> = (e) => {
    setValues(values => ({ ...values, [e.target.name]: e.target.value }))
  }

  const handleSubmit: FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault()
    onSubmit(values)
    setValues(initialValues)
  }

  return (
    <form onSubmit={handleSubmit}>
      {title && <h1>{title}</h1>}
      <input required type="text" name="name" placeholder="Name" value={values.name} onChange={handleChange} />
      <select required name="currency" placeholder="Currency" value={values.currency} onChange={handleChange}>
        {currencies.map(currency => (
          <option value={currency}>{currency}</option>
        ))}
      </select>
      <input required type="number" name="price" placeholder="Price" value={values.price} onChange={handleChange} />
      <button type="submit" disabled={isLoading}>{!isLoading ? buttonLabel : "Cargando"}</button>
    </form>
  )
}