import routes from './route';

export const localsMiddleware = (req, res, next) => {
	res.locals.siteName = 'HandsomeSteve';
	res.locals.routes = routes;
	next();
};
