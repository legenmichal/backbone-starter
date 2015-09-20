var BackBone = require('backbone');

var UserModel = BackBone.Model.extend({
    defaults: {
        firstName:'Alice',
        lastName: 'Foo'
    }
})

module.exports = UserModel;