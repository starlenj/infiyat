const Express = require("express");
const Model = require("../../Models/TicketHeader");
const Router = Express.Router();

Model.methods(["get", "post", "put", "delete"]);
Model.register(Router, "/TicketHeader");

module.exports = Router;
