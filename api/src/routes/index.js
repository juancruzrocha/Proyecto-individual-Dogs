const { Router } = require("express");
const router = Router();

const updateDataBaseDogs = require('../Controllers/updateDataBaseDogs');
const updateDataBaseTemperaments = require('../Controllers/updateDataBaseTemperaments');
const getAllDogs = require("../Controllers/getAllDogs");
const getTemperaments = require("../Controllers/getTemperaments");
const postDog = require("../Controllers/postDog");

router.use("/updateDataBaseDogs", updateDataBaseDogs);
router.use("/updateDataBaseTemperaments", updateDataBaseTemperaments);

router.use("/dogs", getAllDogs);
router.use('/temperaments', getTemperaments);
router.use('/postDog', postDog);


module.exports = router;
