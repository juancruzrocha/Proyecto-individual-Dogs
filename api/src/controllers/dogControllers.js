const axios = require("axios");
const { Dog, Temperament } = require("../db");

const getCompleteListDogs = async () => {
  try {
    const allDogsFromDb = await getDogsDb();
    

    const allDirtyDogsFromApi = await axios.get(
      "https://api.thedogapi.com/v1/breeds"
    );
    if(!allDirtyDogsFromApi) throw new Error('Request to the API has failed')
  
    const allDogsListFromApi = allDirtyDogsFromApi.data.map((dog) => {
      return {
        name: dog.name,
        height: dog.height.metric,
        weight: dog.weight.metric,
        lifeSpan: dog.life_span,
        image: dog.image.url,
        temperament: dog.temperament,
        id: dog.id,
      };
    });
  
    const finalList = [...allDogsFromDb, ...allDogsListFromApi];
  
    return finalList;  
  } catch (error) {
  return error.message
  }
  
};

const getDogsDb = async () => {
  
  const dirtyDogsDb = await Dog.findAll({
    include: { model: Temperament },
  });

  const dogsDb = dirtyDogsDb.map((dirtyDog) => {
    return dirtyDog.dataValues;
  });

  return dogsDb;
};

const searchDogByName = async (name) => {
  try {
    const matchedDogs = await findDogsByName(name)
    if(typeof(matchedDogs) === 'string') throw new Error(matchedDogs)
  
   
    return matchedDogs
    
  } catch (error) {
    return  error.message    
  }

};


const findDogsByName = async (name) => {
  try {
    const completeListOfDogs = await getCompleteListDogs();
    if(typeof(completeListOfDogs) === 'string') throw new Error(completeListOfDogs)

    let matchedDogs = [];// [{American Bully English}, {American Bully English}]
    
    completeListOfDogs.forEach((dogCurrent) => {
      const formatedDogNameInToArray = dogCurrent.name
        .toLowerCase()
        .split(",")
        .join("")
        .split(" "); //[american , hound, english]

      const formatedDogNameForSearchInToArray = name
        .toLowerCase()
        .split(",")
        .join("")     //                     *
        .split(" "); // [american, bully, english]

      for (const word in formatedDogNameForSearchInToArray) {

        if (formatedDogNameInToArray.includes(formatedDogNameForSearchInToArray[word])) {
          matchedDogs.push(dogCurrent);
        }
      }
    });

    return matchedDogs;

  } catch (error) {
    return error.message;
  }
};

const searchDogById = async (id) =>{

  try {
    const allDogs = await getCompleteListDogs()
    if(typeof(allDogs)==='string') throw new Error(allDogs)
    
    const matchedDog = allDogs.find(dog => String(dog.id) == String(id))
    return matchedDog;

  } catch (error) {
    return error.message
  }
   

}

const createDog = async (body) => {
  try {
    const { name, height, weight, lifeSpan, temperament } = body;
  
      const newDog = await Dog.create({
        name,
        height,
        weight,
        lifeSpan,
      });
  
      temperament.forEach(async (temp) => {
        const tempDb = await Temperament.findAll({
          where: { name: temp },
        });
        newDog.addTemperament(tempDb);
      });
  
      return newDog
    
  } catch (error) {
    return error.message
  }
}



module.exports = { getCompleteListDogs, getDogsDb, searchDogByName, searchDogById, createDog };
