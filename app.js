var express = require('express');
var app = express();

var port = process.env.PORT ? process.env.PORT : 3000;

// app.get('/api/hello', function (req, res) {
// 	models.User.findAll().then(function (users) {
// 		res.json(users);
// 	})
// });

app.get('/', function (req, res) {
	res.json('Hi Amy');
});
// app.use(express.static("__build__"));

// models.sequelize.sync().then(function () {
	app.listen(port, function () {
	  console.log('Example app listening on port ' + port + '!');
	});
// });

// module.exports = app;