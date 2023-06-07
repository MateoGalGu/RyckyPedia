import { AppRouter } from "./Router/AppRouter"
import { AuthProvider } from "./auth/context/AuthProvider"
import { CharacterProvider } from "./context/CharacterContext"
import { Navbar } from "./ui/components/Navbar"


export const PersonajesApp = () => {
  return (
    <AuthProvider>
      <CharacterProvider>
        <AppRouter />
      </CharacterProvider>
    </AuthProvider>
  )
}
