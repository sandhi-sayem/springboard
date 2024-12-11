const mongoose = require("mongoose");
const Joi = require("joi");

const userSchema = new mongoose.Schema({
  user: {
    type: new mongoose.Schema({
      fullName: {
        type: String,
        required: true,
        minlength: 2,
        maxlength: 255,
      },
      profileImage: {
        type: String,
        required: true,
        minlength: 2,
        maxlength: 255,
      },
    }),
  },
});

const postSchema = new mongoose.Schema(
  {
    user: userSchema,
    // user1: {
    //   type: mongoose.Schema.Types.ObjectId,
    //   ref: "User",
    //   required: true,
    // },
    title: {
      type: String,
      required: true,
      minlength: 1,
      maxlength: 50,
    },
    description: {
      type: String,
      required: true,
      minlength: 1,
      maxlength: 255,
    },
    image: {
      type: String,
    },
    video: {
      type: String,
    },
    like: {
      type: [userSchema],
    },
    dislike: {
      type: [userSchema],
    },
    comments: [
      {
        //   user: {
        //     type: mongoose.Schema.Types.ObjectId,
        //     ref: "User",
        //     required: true,
        //   },
        user: [userSchema],
        comment: {
          type: String,
          required: true,
          minlength: 1,
          maxlength: 255,
        },
        like: [userSchema],
        dislike: [userSchema],
      },
    ],
  },
  { timestamps: true }
);

const User = mongoose.model("User", postSchema);

const validateUserSchema = (body) => {
  const schema = Joi.object({
    user: Joi.object({
      fullName: Joi.string(),
      profileImage: Joi.string(),
    }),
    title: Joi.string().min(2).max(100).required(),
    description: Joi.date().required(),
    image: Joi.string().min(7).max(100).required(),
    video: Joi.string().min(6).max(100).required(),
  });

  return schema.validate(body);
};

module.exports = { User, validateUserSchema };
