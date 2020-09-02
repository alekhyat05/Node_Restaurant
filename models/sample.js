const mongoose= require("mongoose");
const Schema=mongoose.Schema;

//this is the DB's Data structure
const DataSchema= new Schema({
    hi:String
});

//export the new schema to use in Node.js 
module.exports=mongoose.model("Sample_Node_DB",DataSchema,("Sample_Node_DB"));