var user = require('./user.js');

function UserProvider() {

}
UserProvider.prototype.getUserByName = function (userName) {
    user.findOne({ name: userName }, function (error, user) {
        if (error) {
            throw error
        }
        else {
            return user;
        }

    })
};
UserProvider.prototype.getUserById = function (id) {
    user.findById(id, function (error, user) {
        if (error) {
            throw error
        }
        else {
            return user;
        }

    })
};
UserProvider.prototype.getUserByEmail = function (userEmail) {
    user.findOne({ email: userEmail }, function (error, user) {
        if (error) {
            throw error
        }
        else {
            return user;
        }

    })
};
UserProvider.prototype.changeName = function () {
    
 };
UserProvider.prototype.changePassword = function () { };
UserProvider.prototype.changeEmail = function () { };
UserProvider.prototype.getUsers = function () { };
UserProvider.prototype.removeUser = function () { };