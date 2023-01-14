const { Schema, model } = require("mongoose");

// user
const UserSchema = new Schema(
  {
    // username
    username: {
      type: String,
      unique: true,
      required: true,
      trim: true,
    },
    // email
    email: {
      type: String,
      unique: true,
      required: true,
      trim: true,
    },
    // thoughts
    thoughts: [
      {
        type: Schema.Types.ObjectId,
        ref: "Thought",
      },
    ],
    // friends
    friends: [
      {
        type: Schema.Types.ObjectId,
        ref: "User",
      },
    ],
  },
  {
    toJSON: {
      virtuals: true,
    },
    id: false,
  }
);

// add virtual called friendCount that retrieves how many friends a user has
UserSchema.virtual("friendCount").get(function () {
  return this.friends.length;
});

const User = model("User", UserSchema);

module.exports = User;
