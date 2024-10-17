import mongoose from "mongoose";

const schema = new mongoose.Schema(
  {
    title: {
      type: String,
      require: true,
    },
    pin: {
      type: String,
      require: true,
    },
    owner: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      require: true,
    },
    image: {
      id: String,
      url: String,
    },
    Comment: [
      {
        user: {
          type: String,
          require: true,
        },
        name: {
          type: String,
          require: true,
        },
        comment: {
          type: String,
          require: true,
        },
      },
    ],
  },
  {
    timestamps: true,
  }
);

export const Pin= mongoose.model("Pin", schema) 
