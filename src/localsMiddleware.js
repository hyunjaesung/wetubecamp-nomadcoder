import routes from "./route";

export const localsMiddleware = (req, res, next) => {
  res.locals.siteName = "SteveMovie";
  res.locals.routes = routes;
  next();
};
