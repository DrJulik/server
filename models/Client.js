const mongoose = require("mongoose");

const clientSchema = new mongoose.Schema({
	FirstName: {
		type: String,
	},
	LastName: {
		type: String,
	},
});

module.exports = Client = mongoose.model("Client", clientSchema);
