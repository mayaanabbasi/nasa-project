const express = require("express");
const { htpGetAllPlanets } = require("./planets.controller");

const planetsRouter = express.Router();

planetsRouter.get("/", htpGetAllPlanets);

module.exports = planetsRouter;
