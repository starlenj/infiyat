const Restful = require("node-restful");
const mongoose = Restful.mongoose;
const UserSchema = new mongoose.Schema({
  name: { type: String, require: true },
  email: { type: String, require: true },
  password: { type: String, require: true },
  status: { type: Boolean, default: false },
  emailSubmitDate: { type: String },
  phone: { type: String, require: true },
  phoneSubmit: { type: String },
  tc: { type: String },
  gender: { type: String },
});

module.exports = Restful.model("Users", UserSchema);
