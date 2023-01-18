const { User } = require("../models");

module.exports = {
  find: async function (req, res) {
    try {
      const result = await User.find();
      res.json(result);
    } catch (err) {
      res.status(500).json(err);
    }
  },

  findOne: async function (req, res) {
    try {
      const result = await User.findById({ _id: req.params.id });
      res.json(result);
    } catch (err) {
      res.status(500).json(err);
    }
  },

  create: async function (req, res) {
    try {
      const result = await User.create(req.body);
      res.json(result);
    } catch (err) {
      res.status(500).json(err);
    }
  },

  update: async function (req, res) {
    try {
      const result = await User.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
      });
      res.json(result);
    } catch (err) {
      res.status(500).json(err);
    }
  },

  delete: async function (req, res) {
    try {
      const result = await User.findByIdAndDelete(req.params.id);
      res.json(result);
    } catch (err) {
      res.status(500).json(err);
    }
  },

  addFriend: async function (req, res) {
    try {
      const result = await User.findByIdAndUpdate(
        { _id: req.params.userId },
        {
          $push: { friends: req.params.friendId },
        },
        {
          new: true,
        }
      );
      res.json(result);
    } catch (err) {
      res.status(500).json(err);
    }
  },

  deleteFriend: async function (req, res) {
    try {
      const result = await User.findByIdAndUpdate(
        {
          _id: req.params.userId,
        },
        {
          $pull: { friends: req.params.friendId },
        },
        { new: true }
      );
      res.json(result);
    } catch (err) {
      res.status(500).json(err);
    }
  },
};
