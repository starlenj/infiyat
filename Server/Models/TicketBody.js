const Restful = require("node-restful");
const mongoose = Restful.mongoose;
const OptionsSchema = new mongoose.Schema(
  {
    Status: { type: Boolean, default: true },
    Message: { type: String, default: 0 },
  },
  {
    timestamps: true,
  }
);

module.exports = Restful.model("TicketBody", OptionsSchema);
