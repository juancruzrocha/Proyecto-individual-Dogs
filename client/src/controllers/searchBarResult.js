// guardamos en un array el resultado de la busqueda

export default function (terminoBusqueda, state) {
  return state.filter((dog) => dog.name === terminoBusqueda);
}
