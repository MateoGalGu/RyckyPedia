

import { usePersonajesList } from "../hooks/usePesonajesList";
import { PersonajeCard } from "./PersonajeCard";


export const PersonajeList = ({ species, page, setpage }) => {

  
 
  const { personajes } = usePersonajesList(species, page, setpage);
  

  


  return (
    <div className="row rows-cols-1 row-cols-md-3 g-3">
      {personajes.length !== 0 ?
        (
          personajes.map(personaje => (
            <PersonajeCard key={personaje.id} {...personaje} />
          ))
        ) : <div>Loading...</div>

      }
    </div>
  )
}
