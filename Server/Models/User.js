const Restful = require("node-restful");
const mongoose = Restful.mongoose;
const UserSchema = new mongoose.Schema({
  Name: { type: String, require: true },
  Email: { type: String, require: true, unique: true },
  Password: { type: String, require: true },
  Status: { type: Boolean, default: false },
  EmailSubmitDate: { type: String },
  Phone: { type: String, require: true },
  PhoneSubmit: { type: String },
  Tc: { type: String },
  Gender: { type: String },
});

module.exports = Restful.model("Users", UserSchema);
