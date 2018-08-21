const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//Definig the model
const userSchema = new Schema({
  email: {
    type: String,
    unique: true,
    lowercase: true
  },
  password: String
});

//Creating the model class
const ModelClass = mongoose.model("user", userSchema);
//Exporting model
module.exports = ModelClass;
