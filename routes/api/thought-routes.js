const router = require("express").Router();
const thoughtControl = require("../../controllers/thought-control");

// get all thoughts
router.get("/", thoughtControl.find);

// get thought by id
router.get("/:id", thoughtControl.findOne);

// create thought
router.post("/", thoughtControl.create);

// update thought by id
router.put("/update/:id", thoughtControl.update);

// delete thought by id
router.delete("/delete/:id", thoughtControl.delete);

// create reaction to thought that is stored in id field
router.post("/:thoughtId/reactions", thoughtControl.createReaction);

// delete reaction by reactionId
router.delete(
  "/:thoughtId/reactions/:reactionsId",
  thoughtControl.deleteReaction
);

module.exports = router;
