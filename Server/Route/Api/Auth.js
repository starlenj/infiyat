const Express = require("express");
const Router = Express.Router();
const UserModel = require("../../Models/User");
const { HandleError, HandleResponse } = require("../../Helper/HandleResponse");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

Router.post("/Register", async (req, res) => {
  try {
    const { Phone, Email, Password, Name } = req.body;
    const CheckUser = await UserModel.find({ Email });
    console.log(CheckUser);
    if (CheckUser.length > 0) {
      HandleError(req, res, "Kullanıcı Kaydı Mevcuttur");
    }
    bcrypt.hash(Password, 10, (er, hash) => {
      const NewUser = new UserModel({
        Email,
        Password: hash,
        Name,
        Phone,
      }).save();
      const token = jwt.sign({ data: NewUser }, process.env.SECRET, {
        expiresIn: Math.floor(Date.now() / 1000) + 60 * 60,
      });
      HandleResponse(req, res, "Kullanıcı Kaydı Oluşturuldu", token);
    });
  } catch (e) {
    HandleError(req, res, e);
  }
});
Router.post("/Login", async (req, res) => {
  console.log(req.body.password);
  try {
    var Email = req.body.email;
    var Password = req.body.password;
    let CheckUser = await UserModel.find({ Email });
    if (CheckUser.length === 0) {
      HandleError(req, res, "Kullanıcı Kaydı Bulunmadı");
    }
    let IsValid = bcrypt.compareSync(Password, CheckUser[0].Password);
    if (!IsValid) {
      HandleError(req, res, "Şifre Hatalı");
    }
    const token = jwt.sign({ data: CheckUser }, process.env.SECRET, {
      expiresIn: Math.floor(Date.now() / 1000 + 60 * 60),
    });
    HandleResponse(req, res, "Kullanıcı Girişi Başarılı", token);
  } catch (e) {
    console.log(e);
  }
});
Router.post("/ValidToken", (req, res) => {
  try {
    const { token } = req.body;
    let Valid = jwt.verify(token, process.env.SECRET);
    if (!Valid) {
      HandleError(req, res, "Token Geçersiz");
    }
    HandleResponse(req, res, "Token Geçerli", Valid);
  } catch (e) {
    HandleError(req, res, "Token Geçersiz");
  }
});
module.exports = Router;
