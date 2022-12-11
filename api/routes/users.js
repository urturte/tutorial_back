const express = require("express");
const router = express.Router();
const auth = require("../middlewares/auth");
const userController = require("../controllers/users");

router.post("/createUser", userController.CREATE_USER);

router.post("/login", userController.LOGIN);

router.get("/getAllUsers", auth, userController.GET_ALL_USERS);

module.exports = router;
