const Express = require("express");
const Model = require("../../Models/TicketResponse");
const Router = Express.Router();

Model.methods(["get", "post", "put", "delete"]);
Model.register(Router, "/TicketResponse");

module.exports = Router;
