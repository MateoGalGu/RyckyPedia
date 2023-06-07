import { useContext } from "react"
import { Navigate } from "react-router-dom"
import { AuthContex } from "../auth/context/AuthContext"


export const PublicRoute = ({ children }) => {

    const { logged } = useContext(AuthContex)

  return (!logged)
  ? children
  : <Navigate to="/home" />
}
