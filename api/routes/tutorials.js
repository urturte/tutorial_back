const express = require("express");
const router = express.Router();
const auth = require("../middlewares/auth");

const tutorialController = require("../controllers/tutorials");

router.get(
  "/getUserTutorials/:id",
  auth,
  tutorialController.GET_USER_TUTORIALS
);

router.get("/getTutorials", tutorialController.GET_TUTORIALS);

router.post("/createTutorial", auth, tutorialController.CREATE_TUTORIAL);

module.exports = router;
