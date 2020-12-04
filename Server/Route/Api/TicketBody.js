const Express = require("express");
const Model = require("../../Models/TicketBody");
const Router = Express.Router();

Model.methods(["get", "post", "put", "delete"]);
Model.register(Router, "/TicketBody");

module.exports = Router;
