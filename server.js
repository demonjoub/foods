var express = require('./config/app');
var mongoose = require('./config/mongoose');

var db = mongoose();
var app = express();
var listener = app.listen(3000, function() {
    console.log("Server running at http://localhost:" + listener.address().port);
});
module.exports = app;
