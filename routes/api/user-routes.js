const router = require("express").Router();

const {
  getAllUsers,
  getUserById,
  createUser,
  updateUserById,
  deleteUserById,
} = require("../../controllers/user-control");
router
  .route("/")
  // get all users
  .get(getAllUsers)
  // create new user
  .post(createUser);

router
  .route("/:id")
  // get user by id
  .get(getUserById)
  // update user by id
  .put(updateUserById)
  // delete user by id
  .delete(deleteUserById);

// add friend to user's friend list

// delete friend from user's friend list

module.exports = router;
