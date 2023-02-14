const { Router } = require("express");
const postDog = Router();
const { Dog, Temperament } = require("../db");

postDog.post("/", async (req, res) => {
  try {
    const { name, height, weight, lifeSpan, temperaments } = req.body;
   

    const dog = await Dog.create({
      name,
      height,
      weight,
      lifeSpan,
      });

      // temperaments = [ sttuborn , happy, sad ]
    //console.log('estoy adentro del /POST y soy temperaments', temperaments)
    
    temperaments.forEach( async temp => {
      const tempDb = await Temperament.findAll({
        where: { name: temp }
      })
      dog.addTemperaments(tempDb)
    });

    // const temperament = await Temperament.findAll({
    //   where: { id: temperament_id },
    // });

    // const mergedResponse = await dog.addTemperaments(temperament);

    res.status(200).send('Dog created succesfully');

  } catch (error) {
    res.status(400).send(error.message);
  }
});

module.exports = postDog;
