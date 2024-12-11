const mongoose = require("mongoose");
const Joi = require("joi");
const jwt = require("jsonwebtoken");
require("dotenv").config();

const profileSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      required: [true, "Please provide a valid user"],
      ref: "User",
    },
    phonenumber: {
      type: Number,
      required: [true, "Please enter a valid phone number"],
      minlength: 10,
      maxlength: 10,
    },
    address: {
      street: {
        type: String,
      },
      city: {
        type: String,
      },
      state: {
        type: String,
      },
      zip: {
        type: Number,
      },
    },
    profileImage: {
      type: String,
      minlength: 4,
      maxlength: 25,
    },
  },
  { timestamps: true }
);

const Profile = mongoose.model("Profile", profileSchema);

const validateProfileSchema = (body) => {
  const schema = Joi.object({
    firstName: Joi.string().min(2).max(100).required(),
    lastName: Joi.string().min(2).max(100).required(),
    dob: Joi.date().required(),
    email: Joi.string().min(7).max(100).required().email(),
    password: Joi.string().min(6).max(100).required(),
  });

  return schema.validate(body);
};

module.exports = { Profile, validateProfileSchema };
