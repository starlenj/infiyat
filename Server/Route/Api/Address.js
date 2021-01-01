const Express = require("express");
const Model = require("../../Models/Address");
const Router = Express.Router();

Model.methods(["get", "post", "put", "delete"]);
Model.register(Router, "/Address");

module.exports = Router;
