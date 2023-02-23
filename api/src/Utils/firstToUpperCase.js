
//le pone la primera letra en mayuscula y el resto en minuscula
 function firstToUpperCase(name){

    return name[0].toUpperCase() + name.slice(1).toLowerCase();

};

module.exports = { firstToUpperCase }