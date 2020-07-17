const router = require("express").Router();
const Client = require("../models/Client");

router.get("/", async (req, res) => {
	try {
		const clients = await Client.find();

		res.json(clients);
	} catch (err) {
		res.status(500).json({ msg: "Server Error" });
	}
});

router.get("/fname/:name", async (req, res) => {
	try {
		const clients = await Client.find({
			FirstName: req.params.name,
		});

		res.json(clients);
	} catch (err) {
		res.status(500).json({ msg: "Server Error" });
		console.log(req.query.params);
	}
});

router.get("/lname/:name", async (req, res) => {
	try {
		const clients = await Client.find({
			LastName: req.params.name,
		});

		res.json(clients);
	} catch (err) {
		res.status(500).json({ msg: "Server Error" });
		console.log(req.query.params);
	}
});

module.exports = router;
