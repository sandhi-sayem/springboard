const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const credentialSchema = new Schema(
  {
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: [true, "Please Add a Password"],
    },
  },
  { timestamps: true }
);

const Credential = mongoose.model("Credential", credentialSchema);

module.exports = User;
