const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const DataSchema = new Schema({
  MealType: String,
  Menu: [
    {
      name: String,
      price: String
    }
  ]
});
module.exports = mongoose.model("MenuList", DataSchema, "MenuList");
