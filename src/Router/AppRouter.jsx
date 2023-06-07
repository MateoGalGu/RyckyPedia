import { Route, RouterProvider, Routes } from "react-router-dom"
import { LoginPage } from "../auth/pages/LoginPage"
import { PersonajesRoutes } from "../Personajes"
import { PriverRoute } from "./PriverRoute"
import { PublicRoute } from "./PublicRoute"


export const AppRouter = () => {
  return (
    <Routes>

      <Route path="/login" element={<PublicRoute>
        <LoginPage />
      </PublicRoute>} />
      {/* <Route path="/login" element={<LoginPage />} /> */}

      <Route path="/*" element={<PriverRoute>
        <PersonajesRoutes />
      </PriverRoute>} />
      {/* <Route path="/*" element={<PersonajesRoutes />} /> */}

    </Routes>
  )
}
