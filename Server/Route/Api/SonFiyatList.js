const Express = require("express");
const { HandleResponse } = require("../../Helper/HandleResponse");
const Model = require("../../Models/SonFiyat");
const Router = Express.Router();

Model.methods(["get", "post", "put", "delete"]);
Model.register(Router, "/SonFiyat");

Router.post("/GetProductFiyatList", async (req, res) => {
    const { ProductId } = req.body;
    let ResponseData = await Model.find({ ProductId }).sort({ Order: "desc" }).limit(5);
    HandleResponse(req, res, null, ResponseData);
})
module.exports = Router;
