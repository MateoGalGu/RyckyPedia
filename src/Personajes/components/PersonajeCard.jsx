import { useContext } from "react"
import { NavLink } from "react-router-dom"
import { CharacterContext } from "../../context/CharacterContext"


export const PersonajeCard = ({ id, url, name, species }) => {

  const {setId} = useContext(CharacterContext)

  const yesclick = () => {
    setId(id)
  }

  return (
    <div className="card card-personaje">
    <img src={url} alt={name} />
    <div className="card-body">
        <h5 className="card-title">{name}</h5>
        <p className="card-text"><b>Species:</b>{species}</p>
        <NavLink onClick={yesclick} to={`/personaje/${name}`} className="btn btn-primary">More</NavLink>

    </div>
    </div>
  )
}
