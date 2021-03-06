var express = require("express");

var router = express.Router();

// import model burger.js to use its database functions
var burger = require("../models/burger.js");

// routes
router.get("/", function(req, res) {
	res.redirect("/burgers");
})

router.get("/burgers", function(req, res) {
	burger.all(function(data) {
		var hbsObject = {
			burgers: data
		};
		console.log("hbsObject");
		console.log(hbsObject);
		res.render("index", hbsObject);
	});
});

router.post("/api/burgers", function(req, res) {
	burger.create([
		"burger_name", "devoured"
		], [
		req.body.name, false
		], function(result) {
			res.json({ id: result.insertId});
		});
});

router.put("/burgers/:id", function(req, res) {
	var condition = "id = " + req.params.id;

	console.log("condition", condition);

	burger.update({
		devoured: true
	}, condition, function(result) {
		if(result.changedRows === 0) {
			return res.status(404).end();
		} else {
			res.status(200).end();
		}
	});
});

module.exports = router;