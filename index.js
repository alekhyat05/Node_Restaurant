const mongoose = require("mongoose");
const express = require("express");
const app = express();
const Sample_Node_DB = require("./models/sample");
const Menu = require("./models/Menu");
const cors = require("cors");
const Bill = require("./models/Bill");
app.use(cors());

const dbRoute =
  //"mongodb://localhost:27017/?readPreference=primary&appname=MongoDB%20Compass%20Community&ssl=false/ResturantDB";
    "mongodb://localhost:27017/RestaurantDB";
mongoose.connect(dbRoute, { useNewUrlParser: true });
let db = mongoose.connection;
db.once("open", () => {
  console.log("connected to DB");
});
db.on("error", console.error.bind(console, "MongoDB connection error:"));

app.get("/", (req, res) => {
  res.send("Alek");
});

app.get("/mycourses/api/:total/:date", (req, res) => {
  res.send(req.params.total);
  //res.send([1,2,3]);
});

app.get("/sample", (req, res) => {
  Sample_Node_DB.find(
    { $or: [{ hi: "hello" }, { enter: "the dragon" }] },
    (err, data) => {
      if (err) {
        return res.json({ success: false, error: err });
      } else {
        res.send(data);
      }
    }
  );
});

app.get("/getMenuInfo/:mealType", (req, res) => {
  Menu.find({ MealType: req.params.mealType }, (err, data) => {
    if (err) {
      return res.json({ success: false, error: err });
    } else {
      res.send(data);
    }
  });
});

app.post("/saveBill/:currentTableBill", (req, res) => {
  let requestVar = req.params.currentTableBill;
  let jsonVar = JSON.parse(requestVar);

  console.log("requestVar", requestVar);
  console.log("jsonVar", jsonVar.number);
  const bill = new Bill({
    number: jsonVar.number,
    totalCost: jsonVar.totalCost,
    orderItems: jsonVar.orderItems
  });
  bill.save((err) => {
    if (err) return res.json({ success: false, error: err });
    return res.json({ success: true, msg: "data saved" });
  });
});

const port = process.env.port || 5000;
app.listen(port, () => console.log("ketitu dhan iruken"));
