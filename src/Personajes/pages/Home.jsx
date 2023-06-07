import { ButtonNB } from "../components/ButtonNB"
import { PersonajeList } from "../components/PersonajeList"
import { useButtonBN } from "../hooks/useButtonBN"


export const Home = () => {

  const { page, onBack, onNext } = useButtonBN()

  return (
    <>
      
      <h1>All</h1>
      <hr />
      <ButtonNB onBack={onBack} onNext={onNext} />

      <PersonajeList species={""} page={page}  />
      <ButtonNB onBack={onBack} onNext={onNext} />
    </>
  )
}
