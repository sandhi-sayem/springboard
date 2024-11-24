const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema(
  {
    firstname: {
      type: String,
      required: [true, "Please enter a valid first name"],
    },
    lastname: {
      type: String,
      required: [true, "Please enter a valid last name"],
    },
    dob: {
      type: Date,
      required: [true, "Please enter a valid date of birth"],
    },
    credentials: {
      type: mongoose.Schema.ObjectId,
      ref: "Credential",
      required: [true, "Please provide credential for the user"],
    },
    // email: {
    //   type: String,
    //   required: true,
    //   unique: true,
    // },
    // username: {
    //   type: String,
    //   required: true,
    // },
    // password: {
    //   type: String,
    //   required: true,
    // },
  },
  { timestamps: true }
);

const User = mongoose.model("User", userSchema);

module.exports = User;
