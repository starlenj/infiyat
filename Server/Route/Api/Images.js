const Express = require("express");
const Model = require("../../Models/Images");
const Router = Express.Router();

Model.methods(["get", "post", "put", "delete"]);
Model.register(Router, "/Images");

module.exports = Router;
