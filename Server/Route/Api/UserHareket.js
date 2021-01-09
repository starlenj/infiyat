const Express = require("express");
const Model = require("../../Models/UserHareket");
const Router = Express.Router();

Model.methods(["get", "post", "put", "delete"]);
Model.register(Router, "/UserHareket");

module.exports = Router;
