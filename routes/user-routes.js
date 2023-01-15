const router = require("express").Router();
const userControl = require("../controllers/user-control");

// get all users
router.get("/", userControl.find);

// get user by id
router.get("/:id", userControl.findOne);

// create new user
router.post("/", userControl.create);

// update user by id
router.put("/update/:id", userControl.update);

// delete user by id
router.delete("/delete/:id", userControl.delete);

// add friend to user's friend list
router.post("/:userId/friends/:friendsId", userControl.addFriend);

// delete friend from user's friend list
router.delete("/:userId/friends/:friendId", userControl.deleteFriend);

module.exports = router;
