import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom"

import { DrinksRoutes } from "./routes/DrinksRoutes"

export const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Navigate to="/drinks" />} />
        <Route path="/drinks/*" element={<DrinksRoutes />} />
      </Routes>
    </BrowserRouter>
  )
}
