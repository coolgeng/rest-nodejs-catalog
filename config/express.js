var express = require('express');
var path = require('path');
// var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var passport = require('passport');
var methodOverride = require('method-override');

// var libs = process.cwd() + '/libs';
// require(libs + 'auth/auth');

var config = require(process.cwd() + '/config/config');
var log = require(process.cwd() + '/config/log');
// var oauth2 = require('./auth/oauth2');

// add object for new model
// var api = require('./routes/api');
var status = require(process.cwd() + '/app/routes/status');
// var products = require(process.cwd() + '/app/model/products');
// var categories = require('./model/categories');
// var filterGroups = require('./model/filterGroups');

var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
// app.use(cookieParser());
app.use(methodOverride());
app.use(passport.initialize());

// add method definition here 
// app.use('/',status);
// app.use('/status',status);
// app.use('/products', products);
// app.use('/api/categories', products);
// app.use('/api/filterGroups', filterGroups);

// handle 404 error
app.use(function(err, req, res, next){
	res.status(404);
	log.error('%s %d %s', req.method, res.statusCode, err.message);
	res.json({
		error: 'Not found this method'
	});
	return;
});

// handle 500 error and etc
app.use(function(err, req, res, next){
	res.status(err.status || 500);
	log.error('%s %d %s', req.method, res.statusCode, err.message);
	res.json({
		error: err.message
	});
	return;
});

module.exports = app;

