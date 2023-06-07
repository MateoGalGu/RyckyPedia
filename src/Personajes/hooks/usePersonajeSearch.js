import axios from "axios"

export const usePersonajeSearch = () => {


  const getPersonajes = async (name) => {
    try {

      if (name !== "") {
        const url = `https://rickandmortyapi.com/api/character/?name=${name}`;
        const { data } = await axios.get(url);
        const { results } = data;
        const personajesArr = results.map(img => ({
          id: img.id,
          name: img.name,
          status: img.status,
          species: img.species,
          gender: img.gender,
          url: img.image
        })) 
        return personajesArr
      }
    } catch (error) {
      console.log(error)
    }
  }

  return {
    getPersonajes,
  }
}




