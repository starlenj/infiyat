const bodyParser = require("body-parser");
const Express = require("express");
const app = Express();
const Mongoose = require("mongoose");
const cors = require("cors");

//SocketIo Route

const ProductController = require("./sockets/ProductController");
const ReserveController = require("./sockets/ReserveController");

require("dotenv").config();
app.use('/ProductImages', Express.static('Upload/Product'))
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
  console.log("User Connected", socket.id);

  ///ProductRoute
  socket.on("ProductListCategory1", () => "TEST")
  socket.on("GetProductListCategory1", async (CategoryId) => {
    let response = await ProductController.GetProductWithCategory(CategoryId);
    socket.emit("ProductListCategory1", response);
  }
  );

  socket.on("ProductListCategory2", () => "TEST")
  socket.on("GetProductListCategory2", async (CategoryId) => {
    let response = await ProductController.GetProductWithCategory(CategoryId);
    socket.emit("ProductListCategory2", response);
  }
  );

  socket.on("ProductListCategory3", () => "TEST")
  socket.on("GetProductListCategory3", async (CategoryId) => {
    let response = await ProductController.GetProductWithCategory(CategoryId);
    socket.emit("ProductListCategory3", response);
  }
  );
  socket.on("ReserveList", () => "Reserver List");
  socket.on("GetReserveList", async (ProductId) => {
    let response = await ReserveController.GetReserveProduct(ProductId)
    socket.emit("ReserveList", response);
  })
});
server.listen(process.env.PORT, () => {
  console.log(`APP STARTED ${process.env.PORT}`);
});
