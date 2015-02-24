"use strict";

function validate (req, res) {
	// body...
	return;
}

function respond (req, res, next) {
	// body...
	return res.json({"status":"ok"});
}

module.exports = {
	path: "/status",
	method: "GET",

	validate: validate,
	respond: respond
}