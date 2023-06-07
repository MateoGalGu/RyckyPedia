import { Navigate, Route, Routes } from "react-router-dom"
import { Navbar } from "../../ui/components/Navbar"
import { Aliens, Home, Humanoids, Humans, Personaje, SearchPage } from "../pages"


export const PersonajesRoutes = () => {
  return (
    <>
        <Navbar />

        <div className="container container-personajes">
            <Routes>
                <Route path="/home" element={<Home/>} />
                <Route path="/aliens" element={<Aliens/>} />
                <Route path="/humanoids" element={<Humanoids/>} />
                <Route path="/humans" element={<Humans/>} />

                <Route path="/search" element={<SearchPage/>} />
                <Route path="/personaje/:name" element={<Personaje/>} />

                <Route path="/" element={<Navigate to="/home" />} />
            </Routes>
        </div>

    </>
  )
}
