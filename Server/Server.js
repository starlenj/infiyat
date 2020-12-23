const bodyParser = require("body-parser");
const Express = require("express");
const app = Express();
const Mongoose = require("mongoose");
const cors = require("cors");

//SocketIo Route

const ProductController = require("./sockets/ProductController");

require("dotenv").config();

Mongoose.connect(process.env.MONGO_URI).then(() =>
  console.log("MONGODB CONNECTION")
);
app.use(bodyParser.urlencoded({ extended: true, limit: "900mb" }));
app.use(bodyParser.json({ limit: "900mb" }));

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
app.use("/Api/V1", require("./Route/Api/OrderHeader"));
app.use("/Api/V1", require("./Route/Api/OrderBody"));
app.use("/Api/V1", require("./Route/Api/TicketHeader"));
app.use("/Api/V1", require("./Route/Api/TicketBody"));
app.use("/Api/V1", require("./Route/Api/Upload"));
///SOCKET
const server = require("http").createServer(app);
const io = require("socket.io")(server, {
  cors: {
    origin: "http://localhost:3001",
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true
  }
});
io.on("connection", async (socket) => {
  console.log("User Connected");

  ///ProductRoute
  socket.emit("GetProductList", await ProductController.GetHomePageProduct());
});
server.listen(process.env.PORT, () => {
  console.log(`APP STARTED ${process.env.PORT}`);
});
