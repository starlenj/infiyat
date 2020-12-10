const Express = require("express");
const Model = require("../../Models/TicketHeader");
const Router = Express.Router();
const { HandleResponse } = require("../../Helper/HandleResponse");
Model.methods(["get", "post", "put", "delete"]);
Model.register(Router, "/TicketHeader");
Router.post("/SetTicketStatus", async (req, res) => {
  const { Status, id } = req.body;
  let UpdateData = await Model.findById(id);
  UpdateData.Status = Status;
  let ResultData = await UpdateData.save();
  HandleResponse(req, res, "Kayıt Güncellendi", ResultData);
});
module.exports = Router;
