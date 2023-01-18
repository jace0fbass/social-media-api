const router = require("express").Router();
const userControl = require("../controllers/user-control");

router.get("/", userControl.find);

router.get("/:id", userControl.findOne);

router.post("/", userControl.create);

router.put("/update/:id", userControl.update);

router.delete("/delete/:id", userControl.delete);

router.post("/:userId/friends/:friendId", userControl.addFriend);

router.delete("/:userId/friends/:friendId", userControl.deleteFriend);

module.exports = router;
