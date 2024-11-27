const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const credentialSchema = new Schema(
  {
    email: {
      type: String,
      required: [true, "Please add an email"],
      unique: true,
    },
    password: {
      type: String,
      required: [true, "Please add a password"],
    },
  },
  { timestamps: true }
);

const Credential = mongoose.model("Credential", credentialSchema);

module.exports = User;
