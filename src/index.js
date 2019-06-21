//const express = require("express");

import express from "express";
import routes from "./route";
import globalRouter from "./routers/globalRouter";
import courseRouter from "./routers/courseRouter";
import apiRouter from "./routers/apiRouter";

const app = express();

app.listen(4000, () => {
  console.log("Listenning!");
});

app.use("/", globalRouter);
app.use(routes.course, courseRouter);
app.use(routes.api, apiRouter);
