//const express = require("express");

import express from 'express';
import routes from './route';
import router from './router';
import { localsMiddleware } from './localsMiddleware';

const app = express();

app.listen(4001, () => {
	console.log('Listenning!');
});

app.use(localsMiddleware);

app.set('view engine', 'pug');

app.use('/', router);
