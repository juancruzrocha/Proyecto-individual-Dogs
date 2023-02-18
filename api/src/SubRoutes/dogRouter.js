const { Router } = require("express");
const dogRouter = Router();

const {
  getDogsDb,
  getCompleteListDogs,
  searchDogByName,
  searchDogById,
  createDog,
} = require("../controllers/dogControllers");

dogRouter.get("/dogsDb", async (req, res) => {
  const dogListDb = await getDogsDb();
  res.status(200).send(dogListDb);
});

dogRouter.get("/", async (req, res) => {
  try {
    const { name } = req.query;

    if (!name) {
      const completeDogList = await getCompleteListDogs();
      if (typeof completeDogList === "string") throw new Error(completeDogList); //Si es un string es porque trae el error desde la funcion del controller

      return res.status(200).send(completeDogList);
    }

    const matchedDogsByName = await searchDogByName(name);
    if (typeof matchedDogsByName === "string")
      throw new Error(matchedDogsByName);

    return res.status(200).send(matchedDogsByName);
  } catch (error) {
    res.status(404).send(error.message);
  }
});

dogRouter.get("/:id", async (req, res) => {
  try {
    const { id } = req.params;

    const matchedDog = await searchDogById(id);

    if (typeof matchedDog === "string") throw new Error(matchedDog);

    return res.status(200).send(matchedDog);
  } catch (error) {
    res.status(404).send(error);
  }
});

dogRouter.post("/", async (req, res) => {
  try {
    const newDogCreated = await createDog(req.body);
    if (typeof newDogCreated === "string") throw new Error(newDogCreated);

    return res.status(200).send(newDogCreated);
  } catch (error) {
    return res.status(400).send(error.message);
  }
});

dogRouter.delete("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    
    await Dog.destroy({ where: { id } });

    res.status(200).send("Dog deleted succesfully");
  } catch (error) {
    res.status(400).send(error);
  }
});

module.exports = dogRouter;
