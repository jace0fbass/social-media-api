const { Thought, User } = require("../models");

module.exports = {
  find: async function (req, res) {
    try {
      const result = await Thought.find();
      res.json(result);
    } catch (err) {
      res.status(500).json(err);
    }
  },

  findOne: async function (req, res) {
    try {
      const result = await Thought.findById({ _id: req.params.id });
      res.json(result);
      res.status(500).json(err);
    } catch (err) {
      res.status(500).json(err);
    }
  },

  create: async function (req, res) {
    try {
      const result = await Thought.create(req.body);
      await User.findOneAndUpdate(
        {
          username: req.body.username,
        },
        {
          $push: { thoughts: result.id },
        }
      );
      res.json(result);
    } catch (err) {
      res.status(500).json(err);
    }
  },

  update: async function (req, res) {
    try {
      const result = await Thought.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
      });
      res.json(result);
    } catch (err) {
      res.status(500).json(err);
    }
  },

  delete: async function (req, res) {
    try {
      const result = await Thought.findByIdAndDelete(req.params.id);
      res.json(result);
    } catch (err) {
      res.status(500).json(err);
    }
  },

  createReaction: async function (req, res) {
    try {
      const result = await Thought.findByIdAndUpdate(
        { _id: req.params.thoughtId },
        {
          $push: { reactions: req.body },
        },
        { new: true }
      );
      res.json(result);
    } catch (err) {
      res.status(500).json(err);
    }
  },

  deleteReaction: async function (req, res) {
    try {
      const result = await Thought.findByIdAndUpdate(
        {
          _id: req.params.thoughtId,
        },
        {
          $pull: {
            reactions: {
              reactionId: req.params.reactionId,
            },
          },
        },
        { new: true }
      );
      res.json(result);
    } catch (err) {
      res.status(500).json(err);
    }
  },
};
