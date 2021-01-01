const Express = require("express");
const Model = require("../../Models/OrderHeader");
const Router = Express.Router();

Model.methods(["get", "post", "put", "delete"]);
Model.register(Router, "/OrderHeader");

module.exports = Router;
