const { Router } = require("express");
const postDog = Router();
const { Dog, Temperament } = require("../db");

postDog.post("/", async (req, res) => {
  try {
    const { name, temperament_id, height, weight, lifeSpan } = req.body;
    let id = 300;
    const dog = await Dog.create({
      name,
      height,
      weight,
      lifeSpan,
      id: id++,
    });

    const temperament = await Temperament.findAll({
      where: { id: temperament_id },
    });

    const mergedResponse = await dog.addTemperaments(temperament);

    res.status(200).send(mergedResponse);
  } catch (error) {
    res.status(400).send(error.message);
  }
});

module.exports = postDog;