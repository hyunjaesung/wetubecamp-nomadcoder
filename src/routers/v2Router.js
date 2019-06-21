import routes from "../route";
import express from "express";
import * as controller from "../controllers";

const v2Router = express.Router();

v2Router.get(routes.remove, controller.remove);
v2Router.get(routes.edit, controller.edit);

export default v2Router;
