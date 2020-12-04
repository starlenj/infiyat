const Restful = require("node-restful");
const mongoose = Restful.mongoose;
const ReserveSchema = new mongoose.Schema(
  {
    ProductId: { type: String, require: true },
    UserId: { type: String, require: true },
    ReserveTime: { type: Number, require: true },
    Status: { type: Number, default: 0 },
  },
  { timestamps: true }
);

module.exports = Restful.model("Reserve", ReserveSchema);
