import React, { useContext } from "react";
import { PersonajeCard } from "./PersonajeCard";
import { CharacterContext } from "../../context/CharacterContext";

export const PersonajeListSearch = () => {
  const { searchResults } = useContext(CharacterContext);

  return (
    <div className="row rows-cols-1 row-cols-md-3 g-3">
      {searchResults?.length !== 0 ? (
        searchResults?.map(personaje => (
          <PersonajeCard key={personaje.id} {...personaje} />
        ))
      ) : (
        <div>Loading...</div>
      )}
    </div>
  );
};
