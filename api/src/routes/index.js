const { Router } = require("express");
const router = Router();


const dogRouter = require("../SubRoutes/dogRouter");
const temperamentsRouter = require("../SubRoutes/temperamentsRouter");


router.use("/dogs", dogRouter);
router.use('/temperaments', temperamentsRouter);

module.exports = router;
