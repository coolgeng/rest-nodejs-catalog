"use strict";

var Products = require("../models/products");

function validate(req, res){
	req.assert("id").notEmpty().isInt();
}

function respond (req, res, next) {
	// body...
	var id = req.param("id");

	Products.findById(id, function(error, instance){
		if (error) {
			return req.json(500, {error, instance});			
		}
		else {
			res.json({
				status: "OK",
				data: instance,
				stocks: req.preloadedData.stocks
			});
		}
	});
}

module.exports = {
	path: "/status/:id",
	methid: "GET",

	validate: validate,
	respond: respond,
	conditions: ['loginRequired'],
	preload: ['stocks']
};