import React, { createContext, useState } from 'react';

// Creamos el contexto
export const CharacterContext = createContext();

// Creamos el proveedor del contexto
export const CharacterProvider = ({ children }) => {
  const [searchResults, setSearchResults] = useState([]);
  const [name, setname] = useState('');
  const [id, setId] = useState(1)

  return (
    <CharacterContext.Provider value={{ searchResults, setSearchResults, name, setname, id, setId }}>
      {children}
    </CharacterContext.Provider>
  );
};