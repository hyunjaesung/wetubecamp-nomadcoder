import routes from "../route";
import express from "express";
import * as controller from "../controllers";

const globalRouter = express.Router();

globalRouter.get(routes.home, controller.home);
globalRouter.get(routes.join, controller.join);
globalRouter.get(routes.login, controller.login);
globalRouter.get(routes.confirmAccount, controller.confirmAccount);

export default globalRouter;