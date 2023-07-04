const { Schema } = require("mongoose");

const PostSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    content: {
      type: String,
      required: true,
    },
    author: {
      type: String,
      default: "작성자",
    },
  },
  {
    timestamps: true,
  }
);

module.exports = PostSchema;
