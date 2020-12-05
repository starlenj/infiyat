const bodyParser = require("body-parser");
const Express = require("express");
const app = Express();
const Mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

Mongoose.connect(process.env.MONGO_URI).then(() =>
  console.log("MONGODB CONNECTION")
);
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//API MIDDLEWARE

app.use((req, res, next) => {
  next();
});
app.use(cors());
//Routers
app.use("/Api/V1", require("./Route/Api/User"));
app.use("/Api/V1", require("./Route/Api/Address"));
app.use("/Api/V1", require("./Route/Api/Category"));
app.use("/Api/V1", require("./Route/Api/Images"));
app.use("/Api/V1", require("./Route/Api/Options"));
app.use("/Api/V1", require("./Route/Api/Pages"));
app.use("/Api/V1", require("./Route/Api/Product"));
app.use("/Api/V1", require("./Route/Api/Reserve"));
app.use("/Api/V1", require("./Route/Api/UserHareket"));
app.use("/Api/V1", require("./Route/Api/UserInvite"));
app.use("/Api/V1", require("./Route/Api/Auth"));

app.listen(process.env.PORT, () => {
  console.log(`APP STARTED ${process.env.PORT}`);
});
