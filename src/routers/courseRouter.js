import routes from "../route";
import express from "express";
import * as controller from "../controllers";

const courseRouter = express.Router();

courseRouter.get("/", controller.courses);
courseRouter.get(routes.new, controller.newOne);
courseRouter.get(routes.mine, controller.mine);

export default courseRouter;
