const mongoose = require("mongoose");
const Joi = require("joi");
const jwt = require("jsonwebtoken");
require("dotenv").config();

const userSchema = new mongoose.Schema(
  {
    firstName: {
      type: String,
      required: [true, "Please enter a valid first name"],
      minlength: 2,
      maxlength: 100,
    },
    lastName: {
      type: String,
      required: [true, "Please enter a valid last name"],
      minlength: 2,
      maxlength: 100,
    },
    dob: {
      type: Date,
      required: [true, "Please enter a valid date of birth"],
    },
    email: {
      type: String,
      required: [true, "Please add an email"],
      unique: true,
      minlength: 7,
      maxlength: 100,
    },
    password: {
      type: String,
      required: [true, "Please add a password"],
      minlength: 4,
      maxlength: 25,
    },
    isAdmin: Boolean,
  },
  { timestamps: true }
);

const User = mongoose.model("User", userSchema);

const validateUserRegisterSchema = (body) => {
  const schema = Joi.object({
    firstName: Joi.string().min(2).max(100).required(),
    lastName: Joi.string().min(2).max(100).required(),
    dob: Joi.date().required(),
    email: Joi.string().min(7).max(100).required().email(),
    password: Joi.string().min(6).max(100).required(),
  });

  return schema.validate(body);
};

const validateUserUpdateSchema = (body) => {
  const schema = Joi.object({
    firstName: Joi.string().min(2).max(100),
    lastName: Joi.string().min(2).max(100),
    password: Joi.string().min(6).max(100),
  });

  return schema.validate(body);
};

module.exports = { User, validateUserRegisterSchema, validateUserUpdateSchema };
