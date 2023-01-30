const { Router } = require("express");
const getTemperaments = Router();
const { Temperament } = require('../db')

getTemperaments.get("/", async (req, res) => {
try {
    const DBresponse = await Temperament.findAll()

    res.status(200).send(DBresponse)
    
} catch (error) {
    res.status(400).send(error.message)
}
    

 });
 



module.exports = getTemperaments;
