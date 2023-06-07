import axios from "axios"
import { useEffect, useState } from "react"

export const usePersonajesList = (species, page, setpage) => {
  const [personajes, setPersonajes] = useState([])


  useEffect(() => {
    getPersonajes()
  }, [page])

  const getPersonajes = async () => {

    try {

      if (species !== "") {
        const url = `https://rickandmortyapi.com/api/character/?page=${page}&?species=${species}`;
        const { data } = await axios.get(url);
        const { results } = data;
        const personajesBySpecies = results.filter(personaje => personaje.species === species)
        const personajesArr = personajesBySpecies.map(img => ({
          id: img.id,
          name: img.name,
          status: img.status,
          species: img.species,
          gender: img.gender,
          url: img.image
        }));
        setPersonajes(personajesArr)
      } else {
        const url = `https://rickandmortyapi.com/api/character/?page=${page}`
        const { data } = await axios.get(url);
        const { results } = data;
        const personajesArr = results.map(img => ({
          id: img.id,
          name: img.name,
          status: img.status,
          species: img.species,
          gender: img.gender,
          url: img.image
        }));
        setPersonajes(personajesArr)
      }
    } catch (error) {
      console.log(error)
    }
  }

  return {
    personajes
  }
}



