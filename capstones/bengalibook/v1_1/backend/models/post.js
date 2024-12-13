const mongoose = require("mongoose");
const Joi = require("joi");

const userSchema = new mongoose.Schema({
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
});

const postSchema = new mongoose.Schema(
  {
    user: {
      type: userSchema,
      required: true,
    },
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
      minlength: 5,
      maxlength: 255,
    },
    video: {
      type: String,
      minlength: 5,
      maxlength: 255,
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

const Post = mongoose.model("Post", postSchema);

const validatePostCreateSchema = (body) => {
  const schema = Joi.object({
    user: Joi.object({
      fullName: Joi.string().min(2).max(255).required(),
      profileImage: Joi.string().min(2).max(255),
    }),
    title: Joi.string().min(1).max(50).required(),
    description: Joi.string().min(1).max(255).required(),
    image: Joi.string().min(7).max(100),
    video: Joi.string().min(6).max(100),
  });

  return schema.validate(body);
};

const validatePostUpdateSchema = (body) => {
  const schema = Joi.object({
    userId: Joi.string()
      .required()
      .regex(/^[0-9a-fA-F]{24}$/, "objectId"),
    title: Joi.string().min(1).max(50),
    description: Joi.string().min(1),
    image: Joi.string().min(7).max(100),
    video: Joi.string().min(6).max(100),
  });

  return schema.validate(body);
};

module.exports = { Post, validatePostCreateSchema, validatePostUpdateSchema };
