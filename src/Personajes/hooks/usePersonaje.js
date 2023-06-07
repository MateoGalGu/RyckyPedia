import axios from "axios"
import { useEffect } from "react"
import { useState } from "react"

export const usePersonaje = (id)  => {
  const [personaje, setPersonaje] = useState({})


  useEffect(() => {
    getPersonajes()
  }, [id])

  const getPersonajes = async () => {

    try {
        const url = `https://rickandmortyapi.com/api/character/${id}`;
        const { data } = await axios.get(url);
        const personajesArr = {
          id: data.id,
          name: data.name,
          status: data.status,
          species: data.species,
          gender: data.gender,
          url: data.image
        };
        setPersonaje(personajesArr)
      } catch (error) {
      console.log(error)
    }
  }

  return {
    personaje
  }
}




