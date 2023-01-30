const { Router } = require("express");
const getAllDogs = Router();
const { Dog , Temperament } = require("../db");
const { firstToUpperCase } = require('../Utils/firstToUpperCase')

getAllDogs.get("/", async (req, res) => {

   const { name } = req.query;

   if(!name) {
       const allDogs = await Dog.findAll();
       return res.status(200).send(allDogs);
   }

   

   const responseFromDataBase = await Dog.findAll({
    where: { name : firstToUpperCase(name) }
   })

   if(responseFromDataBase.length) return res.status(200).send(responseFromDataBase);
   return res.status(404).send('Dog search fail')

});

getAllDogs.get("/:id", async (req, res) => {

     const { id } = req.params;

     const responseFromDataBase = await Dog.findAll({
        where: { id : id }
       })
     res.status(200).send(responseFromDataBase)
    
 
 });
 



module.exports = getAllDogs;
