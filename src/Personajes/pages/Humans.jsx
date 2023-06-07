import { ButtonNB } from "../components/ButtonNB"
import { PersonajeList } from "../components/PersonajeList"
import { useButtonBN } from "../hooks/useButtonBN";


export const Humans = () => {

  const { page, onBack, onNext } = useButtonBN(1);

  return (
    <>
      <h1>Humans</h1>
      <hr />
      <ButtonNB onBack={onBack} onNext={onNext} />

      <PersonajeList species='Human' page={page} />
      <ButtonNB onBack={onBack} onNext={onNext} />
    </>
  )
}
