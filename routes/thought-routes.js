const router = require("express").Router();
const thoughtControl = require("../controllers/thought-control");

router.get("/", thoughtControl.find);

router.get("/:id", thoughtControl.findOne);

router.post("/", thoughtControl.create);

router.put("/update/:id", thoughtControl.update);

router.delete("/delete/:id", thoughtControl.delete);

router.post("/:thoughtId/reactions", thoughtControl.createReaction);

router.delete(
  "/:thoughtId/reactions/:reactionId",
  thoughtControl.deleteReaction
);

module.exports = router;
