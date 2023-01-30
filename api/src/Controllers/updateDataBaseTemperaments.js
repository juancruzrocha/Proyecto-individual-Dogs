const { Router } = require("express");
const updateDataBaseTemperaments = Router();
const axios = require("axios");
const { Temperament } = require("../db");

updateDataBaseTemperaments.get("/", async (req, res) => {
  try {
    const APIresponse = await axios.get("https://api.thedogapi.com/v1/breeds");

    // mapedTemperaments es un array de strings que tiene varios temperaments por cada string
    let mapedTemperaments = APIresponse.data.map((dog) => {
      return dog.temperament;
    });

    let splitedTemperaments = [];

    // separo los distintos temperamentos dentro de cada string y los guardo en splitedTemperaments 
    mapedTemperaments.forEach((string) => {
      if (string === undefined) return;
      splitedTemperaments = [...splitedTemperaments, ...string.split(", ")];
    });

    // se usa el spread operator para convertir el Set en array
    let response = [...new Set(splitedTemperaments)];

    response.forEach((temp) => {
      Temperament.create({ name: temp });
    });

    res.status(200).send("Temperament DataBase updated succesfully...");
  } catch (error) {
    res.status(400).send(error.message);
  }
});

module.exports = updateDataBaseTemperaments;
