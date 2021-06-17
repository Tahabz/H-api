const mongoose = require("mongoose");

require('dotenv').config();

const connect = () => mongoose
	.connect(process.env.DB_CONNECTION, {
		useNewUrlParser: true,
		useUnifiedTopology: true,
		useCreateIndex: true,
		useFindAndModify: false,
})
.then(() => console.log("Mongo successfully connected"))
.catch((err) => console.error(err));

module.exports = connect;
