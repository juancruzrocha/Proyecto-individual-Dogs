// guardamos en un array el resultado de la busqueda

function searchBarResult (terminoBusqueda, state) {
  return state.filter((dog) => dog.name === terminoBusqueda);
}

export default searchBarResult