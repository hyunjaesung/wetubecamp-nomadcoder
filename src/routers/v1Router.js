import routes from "../route";
import express from "express";
import * as controller from "../controllers";

const v1Router = express.Router();

v1Router.get(routes.buy, controller.buy);
v1Router.get(routes.refund, controller.refund);

export default v1Router;
