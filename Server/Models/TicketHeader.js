const Restful = require("node-restful");
const mongoose = Restful.mongoose;
const OptionsSchema = new mongoose.Schema(
  {
    UserId: { type: String, require: true },
    UserName: { type: String, require: true },
    Title: { type: String, require: true },
    Status: { type: Number, default: 1 },
    ResponseUserId: { type: String, require: true },
  },
  {
    timestamps: true,
  }
);

module.exports = Restful.model("TicketHeader", OptionsSchema);
