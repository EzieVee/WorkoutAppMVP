const express = require("express");
const router = express.Router();
const upload = require("../middleware/multer");
const workoutsController = require("../controllers/workouts");
const { ensureAuth, ensureGuest } = require("../middleware/auth");


// router.post("/createWorkout/:id", workoutsController.createWorkout);

router.post("/createWorkout/:id", upload.single("file"), workoutsController.createWorkout);




module.exports = router;
