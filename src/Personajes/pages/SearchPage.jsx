
import { useContext } from "react";
import { PersonajeListSearch } from "../components/PersonajeListSearch"
import { CharacterContext } from "../../context/CharacterContext";


export const SearchPage = () => {
  const { name, searchResults } = useContext(CharacterContext);

  return (
    <>
      <div>
        {
          (searchResults !== undefined) && <h1>Results</h1>
        }
        
        <hr />

        {
          (name === '') && <div className="alert alert-primary">
            <p>Searh a Character</p>
          </div>
        }

        {
          (searchResults === undefined && name !== '' ) && <div className="alert alert-danger">
            <p>There is not results</p>
          </div>
        }


      </div>

      {
        (searchResults === undefined || name === '') && <hr />
      }


      <PersonajeListSearch />
    </>
  )
}
