const Restful = require("node-restful");
const mongoose = Restful.mongoose;
const OptionsSchema = new mongoose.Schema(
  {
    UserId: { type: String, require: true },
    Status: { type: Boolean, default: true },
    ResponseUserId: { type: String, require: true },
  },
  {
    timestamps: true,
  }
);

module.exports = Restful.model("TicketHeader", OptionsSchema);
