const express = require('express');
const morgan = require('morgan');
const app = express();
const port = 4000;

app.use(morgan('dev'));
app.get('/', (req, res) => {
	res.send("hello world");
})

app.listen(4000, () => {
	console.log("Server started at port", port);
});