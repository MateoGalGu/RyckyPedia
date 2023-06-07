import { ButtonNB } from "../components/ButtonNB"
import { PersonajeList } from "../components/PersonajeList"
import { useButtonBN } from "../hooks/useButtonBN"


export const Humanoids = () => {

  const { setpage, page, onBack, onNext } = useButtonBN(1);

  return (
    <>
      <h1>Humanoid</h1>
      <hr />
      <ButtonNB onBack={onBack} onNext={onNext} />

      <PersonajeList species={'Humanoid'} page={page}  setpage={setpage} />
      <ButtonNB onBack={onBack} onNext={onNext} />
   </>
  )
}
