const { Router } = require("express");
const updateDataBase = Router();
const axios = require("axios");
const { Dog } = require("../db");

updateDataBase.get("/", async (req, res) => {
  const response = await axios.get("https://api.thedogapi.com/v1/breeds");

  const dogs = response.data.map((dog) => {
    return {
      name: dog.name,
      height: dog.height.metric,
      weight: dog.weight.metric,
      lifeSpan: dog.life_span,
      image: dog.image.url
    };
  });

  await Dog.bulkCreate(dogs);

  res.status(200).send("Dogs DataBase updated succesfully...");
});

module.exports = updateDataBase;
