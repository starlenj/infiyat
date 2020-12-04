const Restful = require("node-restful");
const mongoose = Restful.mongoose;
const UserAddressSchema = new mongoose.Schema(
  {
    Name: { type: String, require: true },
    UserId: { type: String, require: true },
    Adress: { type: String, require: true },
  },
  { timestamps: true }
);

module.exports = Restful.model("UserAddress", UserAddressSchema);
