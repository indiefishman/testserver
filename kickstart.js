var config = require('config');
var express = require('express');
var mongoose = require('mongoose');

var port = config.get('app.port');
var database = config.get('app.database');
var app = express();


function KickStarter() {

}
KickStarter.prototype.startServer = function () {
    app.listen(port, function () {
        console.log('Example app listening on port ' + port + '!');
    });
};
KickStarter.prototype.startDatabase = function () {
    mongoose.connect(database);
    mongoose.connection.on('connected', function (e) {
        console.log('VI');
    })

};

module.exports = KickStarter;
