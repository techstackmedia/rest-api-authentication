const express = require("express");

const router = express.Router();
const controller = require("../controller/controller");

const {
  getUser,
  postUserRegistration,
  postUserLogin,
  saveAllPost,
  getUserByID,
  updateUserByID,
  deleteUserByID,
} = controller;

router.route("/register").post(postUserRegistration);
router.route("/login").post(postUserLogin);

router.route("/").get(getUser).post(saveAllPost);

router
  .route("/:id")
  .get(getUserByID)
  .put(updateUserByID)
  .delete(deleteUserByID);

module.exports = router;
