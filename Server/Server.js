const bodyParser = require("body-parser");
const Express = require("express");
const app = Express();
const Mongoose = require("mongoose");
require("dotenv").config();

Mongoose.connect(process.env.MONGO_URI).then(() =>
  console.log("MONGODB CONNECTION")
);
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//Routers
app.use("/Api/V1", require("./Route/Api/User"));
app.listen(process.env.PORT, () => {
  console.log(`APP STARTED ${process.env.PORT}`);
});
