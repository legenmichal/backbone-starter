
var AppView = require('./src/views/app');
var UserModel = require('./src/models/user');

var user = new UserModel();

var appView = new AppView({model: user});
appView.render();