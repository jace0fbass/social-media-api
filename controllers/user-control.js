const { User } = require("../models");

module.exports = {
  // get all users
  find: async function (req, res) {
    try {
      const result = await User.find();
      res.json(result);
    } catch (err) {
      res.status(500).json(err);
    }
  },
  // get one user
  findOne: async function (req, res) {
    try {
      const result = await User.findById({ _id: req.params.id });
      res.json(result);
    } catch (err) {
      res.status(500).json(err);
    }
  },
  // create user
  create: async function (req, res) {
    try {
      const result = await User.create(req.body);
      res.json(result);
    } catch (err) {
      res.status(500).json(err);
    }
  },
  // update user
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
  // delete user ///////
  delete: async function (req, res) {
    try {
      const result = await User.findByIdAndDelete(req.params.id);
      res.json(result)
    } catch (err) {
      res.status(500).json(err);
    }
  },
  // add friend
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
  // delete friend
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
