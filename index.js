var kickstart = require('./kickstart');
var starter = new kickstart();
var crypter = require('./app/utils/crypting');
starter.startServer();
starter.startDatabase();