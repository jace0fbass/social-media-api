const { Schema, model, Types } = require("mongoose");
const dateFormat = require("../utils/dateFormat");

// thought
const ThoughtSchema = new Schema(
  {
    // thoughtText
    thoughtText: {
      type: String,
      required: true,
      minLength: 1,
      maxLength: 280,
    },
    // createdAt
    createdAt: {
      type: Date,
      default: Date.now,
      get: (createdAtVal) => dateFormat(createdAtVal),
    },
    // username
    username: {
      type: String,
      required: true,
    },
    // reactions
    reactions: [ReactionSchema],
  },
  {
    toJSON: {
      virtuals: true,
      getters: true,
    },
    id: false,
  }
);

// add virtual  called reactionCount that retrieves total amount of thought reactions
ThoughtSchema.virtual("reactionCount").get(function () {
  return this.reactions.length;
});

// reaction
const ReactionSchema = new Schema(
  {
    // reactionId
    reactionId: {
      type: Schema.Types.ObjectId,
      default: () => new Types.ObjectId(),
    },
    // reactionBody
    reactionBody: {
      type: String,
      required: true,
      minLength: 1,
      maxLength: 280,
    },
    // username
    username: {
      type: String,
      required: True,
    },
    // createdAt
    createdAt: {
      type: Date,
      default: Date.now,
      get: (createdAtVal) => dateFormat(createdAtVal),
    },
  },
  {
    toJSON: {
      virtuals: true,
      getters: true,
    },
  }
);

const Thought = model("Thought", ThoughtSchema);

module.exports = Thought;
