import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import { useForm } from "../../Personajes/hooks/useForm";
import { usePersonajeSearch } from "../../Personajes/hooks/usePersonajeSearch";
import { CharacterContext } from "../../context/CharacterContext";

export const SearchComponent = () => {
  const { setSearchResults, setname } = useContext(CharacterContext);

  const { name, onInputChange, onResetForm } = useForm({ name: "" });

  const { getPersonajes } = usePersonajeSearch();

  const onSearch = async (event) => {
    event.preventDefault()
    setname(name)
    const personajes = await getPersonajes(name)
    console.log(personajes)
    setSearchResults(personajes);
    onResetForm()
  };



  return (
    <div className="navbar-collapse collapse w-100 order-3 dual-collapse2 d-flex d-flex justify-content-center">
      <form onSubmit={onSearch} className="d-flex justify-content-center" role="search">
        <NavLink className="nav-item" to="/search">
          <input
            className="form-control me-2"
            type="search"
            placeholder="Search"
            aria-label="Search"
            name="name"
            autoComplete="off"
            value={name}
            onChange={onInputChange}
          />
        </NavLink>
        <button className="btn btn-outline-success" type="submit">
          Search
        </button>
      </form>
    </div>
  );
};