const Express = require("express");
const Model = require("../../Models/Product");
const Router = Express.Router();
const { HandleResponse } = require("../../Helper/HandleResponse");
Model.methods(["get", "post", "put", "delete"]);
Model.register(Router, "/Product");
Router.post("/ProductImageUpload", async (req, res) => {
    const { id, ProfilePicture } = req.body;
    const UpdateData = await Model.findById(id);
    UpdateData.ProfilePicture = ProfilePicture;
    let ResponseData = await UpdateData.save();
    HandleResponse(req, res, "Resim Güncelleme Başarılı", ResponseData);
});
module.exports = Router;
