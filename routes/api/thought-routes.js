const router = require("express").Router();

const {
  getAllThoughts,
  getThoughtById,
  createThought,
  updateThoughtById,
  deleteThoughtById,
  createReaction,
  deleteReactionById,
} = require("../../controllers/thought-control");

router
  .route("/")
  // get all thoughts
  .get(getAllThoughts)
  // create thought
  .post(createThought);

router
  .route("/:id")
  // get thought by id
  .get(getThoughtById)
  // update thought by id
  .put(updateThoughtById)
  // delete thought by id
  .delete(deleteThoughtById);

router
  .route("/:thoughtId/reactions")
  // create reaction to thought that is stored in id field
  .post(createReaction);

router
  .route("/:thoughtId/reactions/:reactionId")
  // delete reaction by reactionId
  .delete(deleteReactionById);
