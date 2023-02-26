export const validateSearchResult=function(action,state){
    console.log( 'dogs length',state.dogs.length,'-----------------', 'action.payloads=>', action.payload)
    if(state.dogs.length == action.payload.length) return false
    if(action.payload.length == 0) return false
    else return true
}

//esta funcion nos sirve para evitar que cuanto hago una busqueda vacia desde la barra de busqueda se muestren todos los perros
//esto tiene que ser de esta manera porque ese compontente usa la action GET_DOGS que por definicion devuelve el resultado de la busqueda
// o todos los perros
//y No queremos mostrar todos los perros en el componente de busqueda
//por eso si tiene la misma longitud que el estado dogs devolvemos false