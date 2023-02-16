const { Router } = require("express");
const temperamentsRouter = Router();
const { Temperament } = require('../db')
const { getTemperaments } = require('../controllers/temperamentController')


temperamentsRouter.get("/", async (req, res) => {

    try {
        const listedTemperaments = await getTemperaments()
       
        if(typeof(listedTemperaments) === 'string') throw new Error(listedTemperaments)

        res.status(200).send(listedTemperaments)
    } catch (error) {
       res.status(400).send(error.message)        
    }

 });


module.exports = temperamentsRouter;
