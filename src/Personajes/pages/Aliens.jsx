import { ButtonNB } from "../components/ButtonNB";
import { PersonajeList } from "../components/PersonajeList"
import { useButtonBN } from "../hooks/useButtonBN";


export const Aliens = () => {

  const { page, onBack, onNext } = useButtonBN(1);

  return (
   <>
    <h1>Aliens</h1>
    <hr />
    <ButtonNB onBack={onBack} onNext={onNext} />

    <PersonajeList species={'Alien'} page={page} />
    <ButtonNB onBack={onBack} onNext={onNext} />
   </>
  )
}

