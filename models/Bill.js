const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//this is the DB's Data structure
const DataSchema = new Schema({
  number: String,
  totalCost: String,
  orderItems: [{ name: String, price: String, count: String }]
});

//export the new schema to use in Node.js
module.exports = mongoose.model("Bill", DataSchema, "Bill");
