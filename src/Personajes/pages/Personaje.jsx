import React from 'react'
import { usePersonaje } from '../hooks/usePersonaje'
import { useContext } from 'react'
import { CharacterContext } from '../../context/CharacterContext'

export const Personaje = () => {

  const {id} = useContext(CharacterContext)

const {personaje} = usePersonaje(id)


  return (
    <div className='container-cardPersonajePrincipal'>
    <div className="card card-personajePrincipal">
      <h1 className="card-title">{personaje.name}</h1>
    <img src={personaje.url} alt={personaje.name} />
    <div className="card-body">
        
        <p className="card-text"><b>Species:</b> {personaje.species}</p>
        <p className="card-text"><b>Status:</b> {personaje.status}</p>
        <p className="card-text"><b>Gender:</b> {personaje.gender}</p>
    </div>
    </div>
    </div>
  )
}

