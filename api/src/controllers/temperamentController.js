const axios = require("axios");

const { Temperament } = require("../db");

const getTemperaments = async () =>{
   
    try {
        let listTempers = await Temperament.findAll()
       
        if(listTempers.length) return listTempers
        
       listTempers = await uploadTemperaments(); // ejecutamos la funcion para cargar la BD y la guardamos en una variable para evaluarla si no tiene algun error
       if(typeof(verifyErrorTest)==='string') throw new Error(verifyErrorTest)


        var listedTempers = await Temperament.findAll()
        
        return listedTempers
        
    } catch (error) {
        return error.message
    }
}

const uploadTemperaments = async () => {

    try {
        const dogListFromApi = await axios.get("https://api.thedogapi.com/v1/breeds");
        if(typeof(dogListFromApi) === 'string') throw new Error(dogListFromApi)
    
        // dirtyTemperamentsList es un array de strings que tiene varios temperaments por cada string
        let dirtyTemperamentsList = await dogListFromApi.data.map((dog) => {
          return dog.temperament;
        });
    
        let splitedTemperaments = []; //['sttuborn', 'playful', 'playful']
    
        // separo los distintos temperamentos dentro de cada string y los guardo en splitedTemperaments 
        dirtyTemperamentsList.forEach((string) => {
          if (string === undefined) return;
          splitedTemperaments = [...splitedTemperaments, ...string.split(", ")];
        });
    
        // se usa el spread operator para convertir el Set en array
        let finalSeparatedTemperamentList = [...new Set(splitedTemperaments)];
    
        finalSeparatedTemperamentList.forEach(async(temp) => {
          await Temperament.create({ name: temp });
        });

        const temperamentListUploaded = await Temperament.findAll()
        return temperamentListUploaded;
        
    } catch (error) {
        return error.message
    }
}

module.exports = { getTemperaments }
