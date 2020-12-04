const Express = require("express");
const Model = require("../../Models/Product");
const Router = Express.Router();

Model.methods(["get", "post", "put", "delete"]);
Model.register(Router, "/Product");

module.exports = Router;
